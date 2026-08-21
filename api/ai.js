// Vercel 无服务器函数：AI 代理
// 把 DEEPSEEK_API_KEY 配到 Vercel 项目环境变量里，前端永远看不到 key
module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'POST only' });

  const key = process.env.DEEPSEEK_API_KEY;
  if (!key) return res.status(500).json({ error: '未配置 DEEPSEEK_API_KEY' });

  try {
    const upstream = await fetch('https://api.deepseek.com/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + key },
      body: JSON.stringify(req.body || {})
    });
    const data = await upstream.json();
    res.status(upstream.status).json(data);
  } catch (e) {
    res.status(502).json({ error: String((e && e.message) || e) });
  }
};
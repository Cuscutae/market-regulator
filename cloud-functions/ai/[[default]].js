import express from "express";
const app = express();
app.use(express.json({ limit: "1mb" }));

// 任意路径、任意请求都走这里，做 deepseek 代理
app.use(async (req, res) => {
  if (req.method !== "POST") return res.status(405).json({ error: "POST only" });
  const key = process.env.DEEPSEEK_API_KEY;
  if (!key) return res.status(500).json({ error: "未配置 DEEPSEEK_API_KEY" });
  try {
    const upstream = await fetch("https://api.deepseek.com/chat/completions", {
      method: "POST",
      headers: { "Content-Type": "application/json", "Authorization": "Bearer " + key },
      body: JSON.stringify(req.body || {})
    });
    const data = await upstream.json();
    res.status(upstream.status).json(data);
  } catch (e) {
    res.status(502).json({ error: String((e && e.message) || e) });
  }
});

export default app;
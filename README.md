# 市场监管模拟器

浏览器单机决策游戏：扮演市场监管基层干部，在 24 个周期内处理食品安全、特种设备、执法、知识产权、平台经济等事件，在经费与精力之间做取舍。

## 目录结构

- `index.html` —— 游戏本体（单文件，浏览器直接打开即可玩）
- `cloud-functions/ai/` —— EdgeOne Pages 云函数，AI 随机事件代理
- `.env.example` —— 环境变量示例

## 本地运行

直接用浏览器打开 `index.html`。AI 随机事件依赖后端，本地未配置时会自动回退到离线事件。

## 部署（腾讯云 EdgeOne Pages）

导入本仓库到 EdgeOne Pages，零配置：`index.html` 作为静态站点，`cloud-functions/` 作为云函数。默认域名免备案，国内直连。

## 环境变量

| 变量 | 说明 |
| --- | --- |
| `DEEPSEEK_API_KEY` | DeepSeek API 密钥，用于生成 AI 随机事件（可选） |
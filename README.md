# 市场监管模拟器

一个面向大众的"年轻公务员监管岗"决策游戏。
单文件游戏（index.html）+ 一个 AI 代理（api/ai.js）。零后端依赖，无需备案。

## 立刻部署到 Vercel（免费）
1. 把本目录推到 GitHub（私有仓库也行）。
2. 打开 vercel.com -> 用 GitHub 登录 -> Add New Project -> 选这个仓库。
3. 一路默认 -> Deploy。得到免费地址 https://你的项目名.vercel.app

Vercel 会自动识别：根目录 index.html 当静态站，api/ 目录当无服务器函数。

## 想要 xxx.site 这种自定义域名（可选，约 ¥10-30/年）
1. 在 Cloudflare / Porkbun / Namecheap 买一个 .site 域名。
2. Vercel 项目 -> Settings -> Domains -> Add，输入你的域名。
3. 按提示在域名商加一条 CNAME 指向 cname.vercel-dns.com。
4. 等几分钟生效。海外托管，无需 ICP 备案。

## AI key（AI 随机事件上线后再配）
1. Vercel 项目 -> Settings -> Environment Variables，加 DEEPSEEK_API_KEY。
2. 重新部署生效。key 只存在 Vercel 服务端，前端代码里永远没有。

## 本地运行
直接用浏览器打开 index.html 即可（此时 AI 事件走离线兜底，因为 /api/ai 需要 Vercel 环境）。

## 运维 / 更新
代码推 GitHub 后，Vercel 自动重新部署；改完 push 一下就是新版本。
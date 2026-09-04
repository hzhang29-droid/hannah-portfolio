# Hannah Zhang · Personal Archive

入口为 index.html。Hero / Intro / About / Research / Photography / Résumé / Notes 七个区块，末尾保留 Contact。导航支持中英文切换，并在本机保存语言偏好。

标题使用 Didot / Bodoni 72，阅读文字使用 Baskerville，界面使用 Avenir Next；中文使用宋体与苹方组合。均为系统字体，其他设备将使用后备字体，不联网加载。

首页保留可跟随鼠标、支持键盘和按钮展开的隐藏世界原型；其余章节回归个人档案。隐藏世界文案与素材可后续继续调整。

## 运行

```sh
python3 -m http.server 5186 --bind 127.0.0.1
```

打开 http://127.0.0.1:5186/ 。也可直接打开 index.html。

## 编辑

archive.js：七章节内容与语言切换。
site.js：首页拼贴与揭开交互、早期概念。
style.css：排版、桌面与手机布局。
ASSETS.md：全部 20 张原始素材盘点。

内容参考原项目 index.html 和 Figma/portfolio/src/app/App.tsx，以及已发布站点入口。未虚构笔记文章；待写条目保持为文字。MnemoLab 标为持续探索。简历与论文链接均使用用户已有文件。

已检查 JavaScript 语法、页面脚本、素材链接和本地 HTTP 响应；未进行浏览器视觉自动测试。

## 最新调整

Résumé 移到 Intro 之后；栏目及科研标题改为直接名称，减少重复说明。恢复 About 与 Research 揭层，摄影支持跟随鼠标揭层与按钮操作。fonts/MyfontL-Regular.ttf 来自用户 MnemoLab 项目，用于 hz 标记与照片标签。

## 留言与背景交互
Intro 与 About 合并；Research 展示项目方法与论文，Résumé 保留时间与职位。全屏背景内层保持前景照片可见，支持鼠标、按钮固定和 Escape 关闭。

留言通过 FormSubmit POST 到 18210625837@163.com，抄送 zzh18210625837@outlook.com。首次提交后需在主邮箱确认激活；本次未发送测试留言，邮件到达尚未验证。用户需在服务新页面完成验证码。草稿仅点击保存时存储在本机。学校联系邮箱保持 hzhang29@smith.edu。

## Inner-world 边界

只在 4 个带 ✦ 的 portal 区域触发：Hero 拼贴、两张 Research 主图、Photography 第一张图。圆形窗口直径 76px；普通文字、空白、Résumé、表单和其他照片均不触发。外层图片保持可见。

留言当前通过 FormSubmit 发到 163 邮箱并抄送 Outlook。保留 FormSubmit 默认验证/反机器人流程，并增加 `_honey` 隐藏字段；公开表单仍不能保证完全没有陌生或不合适的留言。

## 完整 Inner World

仅保留 Hero 拼贴为入口：鼠标显示 76px 圆形预览；点击 Enter inner world 后从最后的指针位置扩展为全屏；Return to surface 或 Escape 收回。内层暂用独立抽象色纸构图，不使用个人照片。ImageGen 曾尝试生成正式背景，但因网络错误失败；当前画面用于确定交互，后续可替换为一张生成图或用户设计图。

## Resume 与摄影结构

页面统一使用英文 Resume 拼写；时间线职位名称恢复为正式 Didot / 宋体。Research 增加 Alzheimer’s Hackathon 项目占位，明确标注待补充，未虚构内容。Photography 分为 Astronomy、Film & Places、Lab & Life 三条可横向滚动的分类轨道；桌面有左右按钮，触屏可滑动。

## Contact 与《小岩》

Tally 留言从独立 Notes 栏目移动到 Contact；导航不再重复 Leave a Note。Research 的占位项目替换为《小岩》：面向阿尔茨海默症患者与家属的双人严肃游戏，任务包括认人、做饭、辨认声音与修复照片，家属采用分级提示。描述基于用户此前的项目讨论。

## 两种鼠标语言

Hero 拼贴使用软边、轻微滞后的彩色画面 reveal，并保留点击进入完整 Inner World。About 后新增独立留白文字 portal：黑色星点底层与文字只在鼠标附近显示；触屏点击可切换。普通页面区域不触发。

## 当前简化的鼠标交互

删除独立 Move slowly 区块、全屏 Inner World 与 Enter inner world。Hero 右侧拼贴仅在鼠标软边圆窗内由黑白恢复彩色；Hero 左侧仅在标题、正文、链接之外的实际留白处揭开黑色文字底层。

## Hero 全幅黑色内层

黑色星点文字层现覆盖整个 Hero。桌面端在 Hero 左侧留白处显示局部软边窗口；点击 Enter inner world 后遮罩扩展到完整 Hero；Return to surface 或 Escape 返回。照片的局部彩色揭示继续独立工作。

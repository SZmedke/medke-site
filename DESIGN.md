# Medke® — sensorsandcable.com 重建 设计合约 (DESIGN.md)

> 来源：canvas-designer 子代理合约（2026-08-07）+ 主代理补充
> 项目：B2B 医疗器械配件制造商官网重建 | 目标模板：react-vite-base (React 18 + Vite 5 + Tailwind 3.4)

## Design Direction

**"Clinical Catalog" — 精密仪器目录，而非营销模板。** 让医院采购工程师像查零件目录一样：扫描零件号 → 确认兼容 → 3 分钟内发起询价。

- 视觉：白 + 医疗蓝（#005EB8），发丝线边框数据网格，大量留白，真实产品/工厂摄影优先
- 签名元素：**兼容性数据块（data-block）**——深色面板 + 等宽字体规格行，出现在分类页、品牌页、产品详情页，作为信任锚点
- 首屏（home hero）：左侧顶部对齐文案（eyebrow chip + H1 48px + lead + 双 CTA + 数据条），右侧真实产品图卡 + 兼容品牌 chip 堆叠
- 无渐变、无紫色、无 emoji 图标；每屏可见强调色 ≤2 处（eyebrow/chip + 主 CTA）
- 层级策略：产品事实优先于形容词；类型承担层级（Inter，每屏 ≤3 字重、首屏 ≤3 字号）；发丝线分隔区块；阴影仅用于浮动控件

## Reference Sources

- `vendor/open-design/adapter/STATIC_POLICY.md` — 静态使用边界（tokens.css 为 token 来源、components.html 为 fixture，不整文件复制）
- `vendor/open-design/adapter/RESOURCE_INDEX.md` — 选择启发式：default 基线 + 营销 craft 集
- `vendor/open-design/upstream/design-systems/default/DESIGN.md` + `tokens.css` + `components.manifest.json` — **基线系统**（顶部偏置 hero、12 列网格、留白分隔、每屏一强调色）
- `vendor/open-design/upstream/design-systems/Hardware-Clinical-Precision/DESIGN.md` + `tokens.css` + `components.html` — **临床数据块模式**（深色面板、mono 标签、发丝线）→ 兼容矩阵签名块。有意偏差：保留 default 的无衬线展示 + 医疗蓝强调色，mono 仅用于元数据/规格值
- `vendor/open-design/upstream/craft/anti-ai-slop.md` — 无默认靛蓝强调、无信任渐变、无 emoji 图标、无圆角卡+左边线强调、无虚构指标、无 lorem ipsum；强调色 ≤2/屏；真实图片
- `vendor/open-design/upstream/craft/typography.md` / `color.md` / `form-validation.md` / `accessibility-baseline.md` — 字阶、对比度门（正文 4.5:1）、表单状态机（pristine/dirty/invalid/submitting/server-error）、WCAG 2.2 AA、:focus-visible、24px 触控目标（主 CTA 44px）

## Design Tokens

### Color（落地为 CSS 变量，映射到 tailwind.config theme.extend）

| Token | 值 | 用途 |
|---|---|---|
| `--bg` | `#F5F8FB` | 页面背景（蓝调临床白，非纯白） |
| `--surface` | `#FFFFFF` | 卡片/面板/表单 |
| `--surface-warm` | `#EEF3F8` | hover 井、次级填充、引用背景 |
| `--fg` | `#0F2438` | 主文字（深蓝墨） |
| `--fg-2` | `#1E3A5F` | 次级标题 |
| `--muted` | `#5A7184` | 次级文字/说明 |
| `--meta` | `#8496A7` | 规格标签（白底上） |
| `--border` | `#D5DFE8` | 卡片边/表格线/分隔线 |
| `--border-strong` | `#B6C6D6` | 数据块发丝线、选中分隔 |
| `--accent` | `#005EB8` | 医疗蓝：主 CTA/链接/激活态 |
| `--accent-on` | `#FFFFFF` | accent 上的文字（对比≈5.9:1） |
| `--accent-hover` / `--accent-active` | `#004F9E` / `#004285` | CTA hover/按下 |
| `--accent-soft` | `#E3F0FA` | chip 背景、选中筛选、矩阵兼容格 |
| `--success` | `#0E8345` | 现货/生产中徽章 |
| `--warn` | `#B7791F` | 交期提示 |
| `--danger` | `#C22E2E` | 仅表单错误 |
| `--data-block-bg` | `#0F2438` | 兼容矩阵深色面板 |
| `--data-block-fg` | `#EAF2FA` | 深色面板文字 |

### Typography

- `--font-display/body`: `"Inter", -apple-system, system-ui, sans-serif`（正文 16px/1.5，max 65ch）
- `--font-mono`: `ui-monospace, "JetBrains Mono", Menlo, Consolas, monospace`（仅零件号/规格值/统计数字/矩阵值）
- 字阶：12/14（caption、按钮 0.02em）/ 16 / 20 / 24 / 32（H2，1.2，−0.01em）/ 48（H1 hero，1.1，−0.02em）
- 全大写标签（eyebrow、section overline、统计标签）tracking ≥0.06em

### Spacing / Radius / Elevation / Motion

- 4px 网格；区块节奏 80px（桌面）/48（平板）/32（手机）；容器 1200px；边距 24/16/12
- radius: sm 8（按钮/输入/chip）、md 12（卡片）、lg 16（hero 图卡）、pill 9999（徽章）；数据块/规格行无圆角
- elevation: flat 无 / raised `0 2px 8px rgba(15,36,56,0.10)`（sticky 头、浮动 WhatsApp）/ ring `0 0 0 1px var(--border-strong)`（筛选/选中）
- focus ring: `0 0 0 3px rgba(0,94,184,0.35)` 全部 `:focus-visible`
- motion: 150/200ms，ease `cubic-bezier(0.2,0,0,1)`；仅 hover 位移、手风琴、表单提交 spinner；无滚动触发动画

## Page Structure

**全局 chrome**：sticky SiteHeader（logo + 导航 Products/Applications/OEM/Resources/FAQ/About/Contact + CTA "Get a quote"，<1024px 汉堡抽屉、焦点陷阱、ESC 关闭、CTA 恒显——修复现站移动端 CTA 隐藏缺陷）；SiteFooter（4 列 + 免责声明 "Compatible replacement parts, not OEM parts"）

1. **Home `/`** — Hero（claim+数据条+双CTA+产品图+兼容chip）→ TrustBar（TUV/CE/FDA/ISO+14年+100国）→ CategoryGrid（5 类真实图+数量）→ BrandStrip（文字 chip → /brands）→ ApplicationGrid（4 场景）→ OemTeaser → CertWall → CtaBand → Footer
2. **Products `/products`** — 面包屑 → 5 大分类卡（含子分类列表+数量）→ 数据条 "472 products · 27 subcategories · 6+ brands"
3. **Category `/product-category/:slug`** — 面包屑 → 分类头（名称/数量/一句描述）→ CatalogToolbar（搜索/排序/品牌筛选 pill/子分类）→ ProductGrid → 分页 → CtaBand
4. **Product detail `/product/:slug`** — 面包屑 → ProductHeader（标题/零件号 mono/分类/认证 chip）→ Gallery（2-4 真实图）→ 规格摘要 chip → **CompatibilityMatrix（签名暗色块）** → SpecSheet（发丝线表）→ **InquiryForm（产品名自动填入）+ WhatsApp 快捷** → RelatedProducts → CtaBand
5. **Brand archive `/brands` + `/brands/:slug`** — 品牌卡网格（名称/产品数/TOP 分类）→ 复用 CatalogToolbar 预筛选 → 免责声明条
6. **Applications `/applications` + `/applications/:slug`** — 4 场景卡 → 详情页（场景图/推荐分类产品链/使用说明/CTA）
7. **About `/about`** — Story（2008/深圳宝安/14+年/349+/100+国）→ Timeline（仅可验证事实）→ FactoryShow（2-3 图）→ CertWall → CtaBand
8. **OEM `/oem-solution`** — 能力列表 → 6 步流程（Requirements→Sample→Contract→Production→QC→Shipping）→ 定制选项 → CTA
9. **Resources `/resources`** — 指南卡（to-be-authored，绝不 lorem ipsum）
10. **FAQ `/faq`** — FaqAccordion（兼容vs原装/MOQ/交期/质保/认证/样品/物流）→ CtaBand
11. **Contact `/contact`** — 联系块（地址/邮箱/电话/WhatsApp/响应承诺）→ InquiryForm（完整字段）→ InquirySuccess 状态
12. **Inquiry success `/inquiry/success`** — 感谢面板 + 3 步说明 + WhatsApp 续接

## Component Plan（data-component 命名）

site-header / site-footer / hero / trust-bar / category-grid / brand-strip / application-grid / oem-teaser / oem-process / cert-wall / cta-band / category-index / catalog-toolbar（URL query 驱动 `?brand=&sub=`，可深链）/ product-card / product-grid / product-gallery / spec-sheet / compatibility-matrix（暗色块，mono 列头，✓/– 格，移动端 min-width 640 内滚+粘性首列，≤3 系列折叠为 chip 列表）/ inquiry-form / inquiry-success / related-products / brand-archive / timeline / factory-show / resource-index / faq-accordion / contact-block / floating-whatsapp（固定右下 44px+，全部断点可见，打印隐藏）

## Copy Tone

- 口吻：冷静、事实先行的采购目录语言。每个数字可溯源（2008、14+年、349+项目、472 产品、27 子分类、5 分类、100+ 国、TUV/CE/FDA/ISO）
- 兼容表述恒为 "Compatible replacement for Philips/GE/Mindray…"，页脚免责声明；绝不 "genuine/original part"
- H1: "Replacement parts for patient monitors and ventilators — built for OEM-grade reliability."
- lead: "14+ years manufacturing ECG cables, SpO2 sensors, temperature probes and ventilator consumables. 472 products, 100+ countries, TUV/CE/FDA/ISO certified."
- 产品卡 meta: `PN-ECG-3PH-MINDRAY · 3-lead ECG trunk cable · Philips/Mindray compatible`
- CTA: 主 "Get a quote" / 次 "Check compatibility" / OEM "Start your OEM project" / 成功态 "Request received — we reply within 1 business day."
- WhatsApp 预填: "Hello Medke, I'd like a quote for {product name} (Qty: {quantity})."
- 禁止：lorem ipsum、state-of-the-art/cutting-edge、虚构指标、假客户评价（无真实来源则不展示评价）、"Contact us today!" 空洞填充

## Responsive Rules

- 断点：<640 手机 / 640-1023 平板 / ≥1024 桌面
- Hero：桌面 2 列 7/5；平板媒体下移、数据条 2×2；手机 1 列、H1 32px、CTA 全宽堆叠 ≥44px、兼容 chip 横向滚动行
- CategoryGrid：5 → 2+3（平板）→ 1（手机）；图片 aspect-ratio 4:3 防拉伸
- CatalogToolbar：桌面侧栏 280px sticky；平板/手机横向滚动 chip 轨 + 排序下拉；sticky 不与浮动 WhatsApp 重叠（底部安全区 88px）
- ProductGrid：4 → 3 → 2（≥480px）→ 1；零件号 chip `overflow-wrap:anywhere`；body `overflow-x:hidden`
- SpecSheet：≥640 发丝线表；<640 堆叠 label/value 行（label 全大写 12px）——转化主页面避免横向滚动
- CompatibilityMatrix：内滚 min-width 640 + 粘性首列 + "Scroll →" 提示
- InquiryForm：桌面 2 列字段对；手机单列、输入 ≥44px、inputmode 提示
- 图片：除 hero 外全部 lazy + 显式宽高防 CLS

## Implementation Notes

- index.css 写 :root 变量；tailwind.config theme.extend 映射 var()；不整抄 tokens.css
- CSS 架构：tokens → 工具类（.btn-primary/.field/.card/.eyebrow/.spec-table/.data-block/.chip）→ 区块样式；Tailwind 仅布局工具
- 数据模型 `src/data/catalog.js`：categories[5]（slug/name/子分类+数量）、brands[]、products[]（id/partNumber/name/categorySlug/images/compat[{brand,series[]}]/specs[{label,value}]/moq/badges）。种子数据镜像现站分类数量（ECG 90/SpO2 90/Temp 48/IBP 23/NIBP hoses 21/SpO2 adapter 33/NIBP cuff 5/NIBP connector 1/EKG 29+6+11/fetal 34/ETCO2 8/O2 17/Flow 4/呼吸回路 3/ESU 8+6+2+10）；数量不硬编码，从数组渲染。472 全量 CSV 后续替换种子
- 路由：React Router：/ /products /product-category/:slug /product/:slug /brands /brands/:brandSlug /applications /applications/:slug /about /oem-solution /resources /faq /contact /inquiry/success
- 询盘流（UI/state）：表单状态机 per form-validation craft；提交 → Supabase insert `inquiries`（name/company/country/email/phone/product_name/quantity/message/status='new'/created_at）；submitting（禁用+live region）/ server-error（保留输入+聚焦摘要）/ success（跳 /inquiry/success）
- WhatsApp/email：`https://wa.me/<number>?text=<encoded>`；mailto 带主题；号码常量单一配置 `{WHATSAPP_NUMBER}`
- SEO：每页 title/meta description/canonical；hero eager + 显式尺寸，其余 lazy；无外部字体 CDN（Inter 经 fontsource 或系统回退链）
- 商标安全：品牌 strip/矩阵仅文字排版，无 logo 图片下载
- 每个 imageGenerate 条目需用户批准（见 Image Manifest 备注）

## Image Manifest

本地路径均位于 `<project>/public/assets/images/`。已下载 17 张真实资产（live-site harvest，usage local）：

| 本地路径 | 来源 | 用途 |
|---|---|---|
| logo/medke-logo.png | 现站 logo（152×50-site-logo.png） | Header logo |
| hero/hero-product.jpg | 现站 550×550-4.jpg（已核可达） | Hero 右列产品视觉 |
| hero/hero-product-2.jpg | 现站 550×550-2.jpg | Hero 备选/产品详情 |
| categories/patient-monitoring.jpg | 现站 SpO2-sensor.jpg | CategoryGrid — Patient Monitoring |
| categories/ekg.jpg | 现站 EKG-cable.jpg | CategoryGrid — EKG |
| categories/fetal.jpg | 现站 Fetal-probe.jpg | CategoryGrid — Fetal |
| categories/ventilator.jpg | 现站 Oxygen-sensor.jpg | CategoryGrid — Ventilator |
| categories/esu.jpg | 现站 Electrocoagulation-cable.jpg | CategoryGrid — ESU |
| products/ecg-cable/ecg-cable-01..02.jpg | 现站 G3149P/S.jpg | 产品详情 gallery — ECG cable 样例 |
| products/spo2-sensor/spo2-sensor-01..03.jpg | 现站 P9305/P9305D/P9322B | 产品详情 gallery — SpO2 样例 |
| about/factory-01.jpg | 现站 2023/06/1.jpg | About story / OEM teaser |
| about/factory-02..03.jpg | 现站 elementor back_01/02 thumbs | FactoryShow |
| about/about-team.jpg | 现站 450×600-1.jpg | About / Contact 侧图 |

已生成（用户 2026-08-07 批准 AI 生成，8 张已落地本地）：

| 本地路径 | 生成内容 | 状态 |
|---|---|---|
| applications/icu.png | ICU 病房监护实景（无正脸） | ✅ 已生成 |
| applications/or.png | 手术室监护设备车 | ✅ 已生成 |
| applications/emergency.png | 急诊转运监护 | ✅ 已生成 |
| applications/ward.png | 病房遥测监护 | ✅ 已生成 |
| about/factory-line.png | 医疗线束组装产线（ESD 工服，背身） | ✅ 已生成 |
| about/quality-lab.png | 质检台（示波器/连接器测试治具） | ✅ 已生成 |
| oem/workshop.png | OEM 定制车间（端接治具/线盘） | ✅ 已生成 |
| resources/guide-cover.png | ECG 线缆连接器示意图（医疗蓝线稿，无文字） | ✅ 已生成 |

规则：无品牌 logo 图片（文字 chip 代替）；无 CSS 占位矩形；每图唯一用途。

## Risks / Open Questions

1. ~~WhatsApp 业务号码~~ ✅ 用户确认：使用现站号码 **+86 13421836403**（wa.me/8613421836403），全站配置常量 WHATSAPP_NUMBER
2. 时间线：用户将稍后提供 2008 后里程碑 → 当前仅展示已确认事实（2008 建厂、14+ 年、349+ 项目、认证、100+ 国），组件预留可扩展数据
3. 资源指南内容未提供 → 4 个标题为建议，发布前需用户确认文案
4. 客户评价 ✅ 用户确认：校对现站 4 条真实评价后展示（Alexander/Cyprus、Chris、Boris、VanLoon），注明国家
5. 472 全量产品数据需 CSV 导出/后台访问 → 种子数据先行，全量后续替换

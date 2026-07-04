---
name: my-ui-skill
description: 周祖豪的个人 UI 设计 Skill — 融合 Taste-Skill、Impeccable、UI-UX-Pro-Max、Anthropic frontend-design 四大体系的精华，加上个人审美偏好。适用于 React + Tailwind + Vite 技术栈。
---

# My UI Skill — 个人设计体系

> 来源于四大开源 Skill 的融合，经个人项目实战（personal-website）验证。
> 每个规则都有出处标注：[T]=Taste-Skill [I]=Impeccable [U]=UI-UX-Pro-Max [A]=Anthropic

---

## 0. 设计哲学（个人偏好优先）

### 0.1 设计价值观
1. **真诚** — 设计为内容服务，不为炫技 [A]
2. **克制** — 一个页面只需要一个记忆点，其他保持安静 [T][A]
3. **呼吸** — 留白不是浪费，是给内容以尊严 [T]
4. **一致性** — 一个项目一个调色板、一套字体、一种圆角系统 [I]

### 0.2 Design Read（每次编码前声明）

"Reading this as: <页面类型> for <目标用户>，with a <风格> language，leaning toward Tailwind + <字体> + <动效级别>."

DiAL 预设（三旋钮 [T]）：
- Portfolio → 6 / 5 / 4（克制、微动效、通透）
- Blog → 6 / 4 / 3（安静、少动效、宽松）
- Landing → 7 / 6 / 4（有个性、有动效、适中）

---

## 1. 技术栈规范 [T]

| 层 | 必选 | 禁用 |
|---|------|------|
| 框架 | React / Next.js | — |
| 样式 | Tailwind v4 | CSS-in-JS（性能差） |
| 字体 | Geist、Satoshi、Cabinet Grotesk | Inter（AI 默认套路） |
| 图标 | Phosphor / HugeIcons / Radix | Lucide（除非项目已有） |
| 动效 | Motion (framer-motion) | CSS animation on layout props [I] |

---

## 2. 色彩系统 [I][T][U]

### 2.1 策略
- **Restrained**（默认）：中性灰 + 一个强调色 ≤10% [I]
- 强调色可选：Emerald、Electric Blue、Deep Rose、Burnt Orange
- **永久禁止**：AI 紫蓝渐变、#000 纯黑、#fff 纯白、beige+brass+oxblood 暖棕组合 [T]

### 2.2 实现
```css
/* 永远给中性色加一点色调 [I] */
--neutral-50: oklch(0.98 0.002 160);   /* 带极微绿的灰白 */
--neutral-900: oklch(0.15 0.002 160);  /* 带极微绿的深灰 */
```

---

## 3. 字体系统 [T][U]

### 3.1 选择优先级
1. Geist + Geist Mono（现代 SaaS/Portfolio）
2. Satoshi + JetBrains Mono（创意项目）
3. Cabinet Grotesk + Inter Tight（品牌感强）

### 3.2 规则
- Display 字号：`text-4xl md:text-6xl tracking-tighter leading-none`
- Body：`text-base text-gray-600 leading-relaxed max-w-[65ch]` [I]
- 层级比 ≥1.25 [I]
- 不用衬线体作为默认 [T]
- 混合字族是业余做法 [T]
- Italic 降部字母（y g j p q）需 `leading-[1.1]` + `pb-1` [T]

---

## 4. 布局系统 [I][T]

### 4.1 核心规则
- `min-h-[100dvh]` 永远不用 `h-screen` [T]
- Grid over flex-math [T]
- `max-w-[1400px] mx-auto` 页面容器
- Breakpoints: sm 640 / md 768 / lg 1024 / xl 1280 / 2xl 1536 [T]
- 间距要有节奏变化，不要处处相同 padding [I]

### 4.2 布局多样性
- 连续 3 个以上同样布局的 section = 失败 [T]
- 8 个 section 至少用 4 种不同布局 [T]

---

## 5. 反套路清单 [T][I]

以下出现任一即视为设计失败：

- [ ] Inter 作为默认字体
- [ ] AI 紫蓝渐变
- [ ] 三等分同等大小卡片
- [ ] 居中 dark mesh 背景 Hero
- [ ] em dash（—）
- [ ] 渐变文字（background-clip: text）
- [ ] 侧边条边框（border-left > 1px 作装饰）
- [ ] Glassmorphism 作为默认
- [ ] 嵌套卡片
- [ ] Hero 内的 big-number + small-label 模板
- [ ] 版本号/V0.6/BETA 在 Hero
- [ ] 分段编号 eyebrow（00 / INDEX）
- [ ] Scroll 提示（↓ scroll）
- [ ] 装饰性圆点
- [ ] 照片来源标注作装饰
- [ ] 重复 CTA 意图（"Get in touch" + "Let's talk"）
- [ ] Logo wall 用纯文字而非 SVG

---

## 6. 动效规范 [T][I][U]

### 6.1 规则
- 不用 CSS layout 属性做动画 [I]
- Ease-out + 指数曲线，不要 bounce/elastic [I]
- MOTION_INTENSITY > 3 必须 wrap reduced-motion [T]
- 不用 useState 追踪连续输入（用 useMotionValue）[T]

### 6.2 级别对应
| MOTION | 效果 |
|--------|------|
| 1-3 | 仅有 hover transition |
| 4-7 | + 滚动触发 reveal |
| 8-10 | + scroll-linked parallax、sticky stack |

---

## 7. 组件规范 [U][I]

### 7.1 卡片
- 卡片是最后选择，不是默认 [I]
- 用间距和分隔线代替卡片 [I]
- 必须用卡片时：`rounded-xl border border-zinc-200/80 bg-white p-6`

### 7.2 按钮
- 一个页面最多 2 种按钮样式（filled + outline）
- CTA 文字不可换行（桌面端）
- hover 过渡 150-300ms [U]

### 7.3 长列表（> 5 项）
- 不用默认 `<ul>` + `divide-y`
- 用 grid、瀑布流、或交替布局 [T]

---

## 8. 工作流 [I]

### 8.1 设计阶段
1. **Design Read** → 确定页面类型、用户、风格、Dial 值
2. **Shape** → 规划 UX/UI，画出 ASCII wireframe
3. **Craft** → 编码实现
4. **Critique** → 自我审查：层级清晰？情感共鸣？
5. **Polish** → 对齐设计系统、清理冗余
6. **Audit** → a11y、性能、响应式检查

### 8.2 交付检查
- [ ] 移动端可读（375px）
- [ ] 焦点状态可见
- [ ] reduced-motion 尊重
- [ ] 颜色对比度 ≥4.5:1
- [ ] 无控制台错误
- [ ] LCP < 2.5s

---

## 9. 我的偏好（覆盖以上所有）

- **配色**：Zinc 灰 + Emerald 绿（来源：人生操作系统"成长"主题）
- **字体**：Geist（干净现代，符合"第一性原理"审美）
- **氛围**：安静而有力，不喧哗但让人记住
- **内容哲学**：每个字都要有理由存在，无废话 [A]
- **一句话总结**：设计让人专注内容，而不是注意设计本身

---

## 附录 A：来源仓库

| Skill | 仓库 | Stars | License |
|-------|------|-------|---------|
| Taste-Skill | Leonxlnx/taste-skill | — | MIT |
| Impeccable | pbakaus/impeccable | — | Apache 2.0 |
| UI-UX-Pro-Max | nextlevelbuilder/ui-ux-pro-max-skill | 100K | MIT |
| frontend-design | anthropics/skills | 277K+ | Anthropic |

## 附录 B：快速命令

```bash
# 部署网站
npx wrangler pages deploy dist --project-name=personal-website

# 本地开发
npm run dev

# 安装新 Skill
npx impeccable install
npm install -g ui-ux-pro-max-cli && uipro init --ai claude
```

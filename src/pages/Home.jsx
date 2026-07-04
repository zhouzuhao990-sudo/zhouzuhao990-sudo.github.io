import { Link } from 'react-router-dom'
import { GithubLogo, EnvelopeSimple, ArrowRight, BookOpen, Brain, Heart } from '@phosphor-icons/react'

const values = [
  { icon: Brain, label: '创造价值', desc: '持续输出对他人有用的作品' },
  { icon: Heart, label: '真诚向上', desc: '身处深渊，也要心向光明' },
  { icon: BookOpen, label: '终身成长', desc: '阅读、思考、实践，永不停歇' },
]

const projects = [
  {
    title: '网络科学论文生成器',
    desc: '使用 python-docx 自动生成中文网络科学课程论文，涵盖朋友悖论、SIR 模型、度同配性与疫情预警。',
    tags: ['Python', 'Network Science', 'SIR 模型'],
    span: 'col-span-2 row-span-2',
  },
  {
    title: 'AI 自学体系',
    desc: '从 Transformer 到 Scaling Laws 到 RAG，系统化的 AI/ML 学习笔记与实操代码。',
    tags: ['PyTorch', 'Transformer', 'Deep Learning'],
    span: 'col-span-1',
  },
  {
    title: 'Mini Transformer',
    desc: '从零手写 GPT 风格 Transformer，多头发注意力 + 位置编码 + 自回归生成。',
    tags: ['Attention', 'GPT', 'NLP'],
    span: 'col-span-1',
  },
  {
    title: 'RAG 检索增强生成',
    desc: '结合网页抓取、嵌入向量和向量搜索，构建检索增强生成管线。',
    tags: ['RAG', 'Embeddings', 'IR'],
    span: 'col-span-1',
  },
  {
    title: 'QLoRA 微调实战',
    desc: '4-bit 量化 + LoRA 低秩适配，在消费级 GPU 上高效微调大语言模型。',
    tags: ['QLoRA', 'Fine-tuning', 'LLMs'],
    span: 'col-span-1',
  },
]

const capabilities = [
  { area: '元认知', desc: '能客观观察自己的思想，调整思维路径' },
  { area: '第一性原理', desc: '拆解问题到最基本元素，重新构建理解' },
  { area: '系统思维', desc: '将孤立问题放入整体框架中审视' },
]

const habits = [
  { label: '坚持', items: ['阅读', '锻炼'] },
  { label: '放弃', items: ['拖延', '等待完美时机'] },
]

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="mx-auto flex min-h-[80dvh] max-w-[1400px] flex-col justify-center px-6 pt-8 pb-16 md:pt-0">
        <div className="grid gap-12 md:grid-cols-[1fr_auto] md:items-end">
          <div className="max-w-[65ch] space-y-6">
            <p className="text-sm font-medium tracking-wide text-emerald-600 uppercase">
              持续创造价值的人
            </p>
            <h1 className="text-4xl font-bold tracking-tighter text-zinc-900 md:text-6xl leading-none">
              探索如何让人建立<br />
              <span className="text-emerald-600">健康而有意义</span>的人生
            </h1>
            <p className="text-base text-zinc-500 leading-relaxed max-w-[52ch]">
              复杂问题最终回归于人。AI、哲学、教育、商业
              都是理解人与改善人的工具。财富是行动能力的放大器，
              而非人生的目的。
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
              >
                阅读文章
                <ArrowRight weight="bold" className="h-4 w-4" />
              </Link>
              <a
                href="https://github.com"
                className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 bg-white px-5 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:border-zinc-400 hover:text-zinc-900"
              >
                <GithubLogo weight="bold" className="h-4 w-4" />
                GitHub
              </a>
            </div>
          </div>

          {/* Motto */}
          <div className="flex flex-col gap-4 rounded-xl border border-zinc-200 bg-white p-6 md:w-56">
            <p className="text-xs font-medium tracking-wide text-zinc-400 uppercase">
              人生关键词
            </p>
            <p className="text-3xl font-bold tracking-tight text-emerald-600">
              精彩
            </p>
            <p className="text-sm text-zinc-500 leading-relaxed">
              在有限生命中持续成长、创造价值、帮助他人、留下作品。
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="border-t border-zinc-200/80 bg-white">
        <div className="mx-auto max-w-[1400px] px-6 py-24">
          <p className="text-sm font-medium tracking-wide text-emerald-600 uppercase">
            核心价值观
          </p>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {values.map(({ icon: Icon, label, desc }) => (
              <div
                key={label}
                className="rounded-xl border border-zinc-200/80 bg-zinc-50 p-6 transition-colors hover:border-emerald-200"
              >
                <Icon weight="bold" className="h-8 w-8 text-emerald-600" />
                <h3 className="mt-4 text-lg font-semibold text-zinc-900">{label}</h3>
                <p className="mt-1 text-sm text-zinc-500">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="mx-auto max-w-[1400px] px-6 pb-24">
        <div className="mb-10 space-y-2">
          <p className="text-sm font-medium tracking-wide text-emerald-600 uppercase">
            作品
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
            功成不必在我，功成必定有我
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {projects.map((p) => (
            <div
              key={p.title}
              className={`group rounded-xl border border-zinc-200/80 bg-white p-6 transition-all hover:border-zinc-300 hover:shadow-sm ${p.span}`}
            >
              <h3 className="text-lg font-semibold tracking-tight text-zinc-900">
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-zinc-500 leading-relaxed max-w-[55ch]">
                {p.desc}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-500"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Capabilities + Habits */}
      <section className="border-t border-zinc-200/80 bg-white">
        <div className="mx-auto max-w-[1400px] px-6 py-24">
          <div className="grid gap-16 md:grid-cols-2">
            {/* Capabilities */}
            <div>
              <p className="text-sm font-medium tracking-wide text-emerald-600 uppercase">
                能力画像
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900">
                优势与挑战
              </h2>
              <div className="mt-8 space-y-4">
                {capabilities.map((c) => (
                  <div
                    key={c.area}
                    className="rounded-lg border border-zinc-200 bg-zinc-50 p-4"
                  >
                    <span className="text-sm font-semibold text-zinc-800">{c.area}</span>
                    <p className="mt-1 text-sm text-zinc-500">{c.desc}</p>
                  </div>
                ))}
                <div className="rounded-lg border border-amber-200 bg-amber-50 p-4">
                  <span className="text-sm font-semibold text-amber-700">成长点</span>
                  <p className="mt-1 text-sm text-amber-600">
                    行动力容易犹豫，完美主义。对策：先完成，再完善。
                  </p>
                </div>
              </div>
            </div>

            {/* Habits + Environment */}
            <div className="space-y-10">
              <div>
                <p className="text-sm font-medium tracking-wide text-emerald-600 uppercase">
                  长期习惯
                </p>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  {habits.map((h) => (
                    <div key={h.label} className="rounded-lg border border-zinc-200 p-4">
                      <span className="text-xs font-medium tracking-wide text-zinc-400 uppercase">
                        {h.label}
                      </span>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {h.items.map((item) => (
                          <span
                            key={item}
                            className="rounded-md bg-zinc-100 px-2.5 py-1 text-sm font-medium text-zinc-600"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm font-medium tracking-wide text-emerald-600 uppercase">
                  最佳环境
                </p>
                <p className="mt-3 text-sm text-zinc-500 leading-relaxed">
                  适合战略、研究、产品设计、辅助领导型角色；适合与表达力强、
                  执行力强的人合作，也愿意带动内向者成长。
                </p>
              </div>

              <div>
                <p className="text-sm font-medium tracking-wide text-emerald-600 uppercase">
                  成功定义
                </p>
                <p className="mt-3 text-sm text-zinc-500 leading-relaxed">
                  健康、持续成长、关系稳定、创造价值、内心平静。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="border-t border-zinc-200/80">
        <div className="mx-auto max-w-[1400px] px-6 py-24 text-center">
          <p className="text-sm font-medium tracking-wide text-emerald-600 uppercase">
            联系
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900">
            希望我的作品能帮助到你
          </h2>
          <p className="mx-auto mt-4 max-w-[52ch] text-sm text-zinc-500 leading-relaxed">
            如果你对网络科学、AI/ML 或人生操作系统感兴趣，欢迎通过邮件或 GitHub 与我交流。
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <a
              href="https://github.com"
              className="inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
            >
              <GithubLogo weight="bold" className="h-4 w-4" />
              GitHub
            </a>
            <a
              href="mailto:contact@example.com"
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 bg-white px-5 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:border-zinc-400 hover:text-zinc-900"
            >
              <EnvelopeSimple weight="bold" className="h-4 w-4" />
              邮件联系
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

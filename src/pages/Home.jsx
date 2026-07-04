import { Link } from 'react-router-dom'
import { GithubLogo, EnvelopeSimple, ArrowRight, Brain, Heart, BookOpen, Target, ArrowUpRight } from '@phosphor-icons/react'
import { motion } from 'motion/react'

const values = [
  { icon: Brain, label: '创造价值', desc: '持续输出对他人有用的作品', color: 'from-emerald-500 to-teal-400' },
  { icon: Heart, label: '真诚向上', desc: '身处深渊，也要心向光明', color: 'from-rose-500 to-pink-400' },
  { icon: BookOpen, label: '终身成长', desc: '阅读、思考、实践，永不停歇', color: 'from-amber-500 to-yellow-400' },
]

const projects = [
  {
    title: '网络科学论文生成器',
    desc: 'python-docx 自动生成中文网络科学课程论文，涵盖朋友悖论、SIR 模型、度同配性与疫情预警。',
    tags: ['Python', 'Network Science', 'SIR 模型'],
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    title: 'AI 自学体系',
    desc: '从 Transformer 到 Scaling Laws 到 RAG，系统化的 AI/ML 学习笔记与实操代码。',
    tags: ['PyTorch', 'Transformer', 'Deep Learning'],
    span: '',
  },
  {
    title: 'Mini Transformer',
    desc: '从零手写 GPT 风格 Transformer。',
    tags: ['Attention', 'GPT', 'NLP'],
    span: '',
  },
  {
    title: 'RAG 检索增强',
    desc: '网页抓取 + 嵌入向量 + 向量搜索，构建 RAG 管线。',
    tags: ['RAG', 'Embeddings', 'IR'],
    span: '',
  },
  {
    title: 'QLoRA 微调',
    desc: '4-bit 量化 + LoRA 低秩适配，消费级 GPU 微调 LLM。',
    tags: ['QLoRA', 'Fine-tuning'],
    span: '',
  },
]

const strengths = ['元认知', '第一性原理', '系统思维']
const habits = { keep: ['阅读', '锻炼'], drop: ['拖延', '等待完美时机'] }

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }),
}

export default function Home() {
  return (
    <div className="aurora-bg">
      {/* Hero */}
      <section className="relative mx-auto flex min-h-[85dvh] max-w-[1400px] flex-col justify-center px-6 pt-8 pb-24 md:pt-0">
        {/* Ambient blob */}
        <div className="pointer-events-none absolute top-20 right-0 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-10 left-0 h-72 w-72 rounded-full bg-teal-500/8 blur-3xl" />

        <div className="relative grid gap-12 md:grid-cols-[1fr_auto] md:items-end">
          <motion.div
            className="max-w-[65ch] space-y-6"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="text-xs font-medium text-emerald-400">持续创造价值的人</span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-4xl font-bold tracking-tighter text-white md:text-7xl leading-[1.05]">
              探索如何让人建立<br />
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-300 bg-clip-text text-transparent">
                健康而有意义
              </span>
              的人生
            </motion.h1>

            <motion.p variants={fadeUp} className="text-base text-zinc-400 leading-relaxed max-w-[48ch]">
              复杂问题最终回归于人。AI、哲学、教育、商业都是理解人与改善人的工具。
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 pt-2">
              <Link
                to="/blog"
                className="group inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/25 transition-all hover:bg-emerald-400 hover:shadow-emerald-500/40"
              >
                阅读文章
                <ArrowRight weight="bold" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a
                href="https://github.com/zhouzuhao990-sudo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-6 py-3 text-sm font-medium text-zinc-300 backdrop-blur-sm transition-all hover:border-white/[0.15] hover:bg-white/[0.06] hover:text-white"
              >
                <GithubLogo weight="bold" className="h-4 w-4" />
                GitHub
              </a>
            </motion.div>
          </motion.div>

          {/* Keyword card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="glass-card p-6 md:w-56"
          >
            <p className="text-xs font-medium tracking-wide text-zinc-500 uppercase">人生关键词</p>
            <p className="mt-2 text-4xl font-bold tracking-tight text-emerald-400">精彩</p>
            <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
              在有限生命中持续成长、创造价值、帮助他人、留下作品。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-white/[0.06]">
        <div className="mx-auto max-w-[1400px] px-6 py-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="space-y-10"
          >
            <motion.div variants={fadeUp} className="space-y-3">
              <p className="text-sm font-medium tracking-wide text-emerald-400 uppercase">核心价值观</p>
              <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                功成不必在我，功成必定有我
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {values.map(({ icon: Icon, label, desc, color }, i) => (
                <motion.div
                  key={label}
                  variants={fadeUp}
                  custom={i}
                  whileHover={{ y: -2 }}
                  className="glass-card glass-card-hover p-6"
                >
                  <div className={`inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${color} bg-opacity-10`}>
                    <Icon weight="bold" className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-white">{label}</h3>
                  <p className="mt-1 text-sm text-zinc-400">{desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects — Bento + glass */}
      <section className="mx-auto max-w-[1400px] px-6 pb-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="space-y-10"
        >
          <motion.div variants={fadeUp} className="flex items-end justify-between">
            <div className="space-y-3">
              <p className="text-sm font-medium tracking-wide text-emerald-400 uppercase">作品</p>
              <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">精选项目</h2>
            </div>
            <a
              href="https://github.com/zhouzuhao990-sudo"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-1.5 text-sm text-zinc-500 transition-colors hover:text-zinc-300 md:inline-flex"
            >
              查看全部
              <ArrowUpRight weight="bold" className="h-4 w-4" />
            </a>
          </motion.div>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-4 md:grid-rows-2">
            {projects.map((p, i) => (
              <motion.div
                key={p.title}
                variants={fadeUp}
                custom={i}
                whileHover={{ y: -3 }}
                className={`glass-card glass-card-hover p-6 ${p.span}`}
              >
                <h3 className={`font-semibold tracking-tight text-white ${p.span.includes('col-span-2') ? 'text-2xl' : 'text-lg'}`}>
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-white/[0.04] border border-white/[0.06] px-2.5 py-0.5 text-xs font-medium text-zinc-500"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* About — merged section */}
      <section className="border-t border-white/[0.06]">
        <div className="mx-auto max-w-[1400px] px-6 py-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.div variants={fadeUp} className="grid gap-12 md:grid-cols-2">

              {/* Left: Strengths + Growth */}
              <div className="space-y-6">
                <motion.h3 variants={fadeUp} className="text-lg font-semibold text-white">优势与成长</motion.h3>
                <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
                  {strengths.map((s) => (
                    <span key={s} className="rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 text-sm font-medium text-emerald-400">
                      {s}
                    </span>
                  ))}
                </motion.div>
                <motion.p variants={fadeUp} className="text-sm text-zinc-400 leading-relaxed">
                  适合战略、研究、产品设计型角色。善于与执行力强的人合作，也愿意带动内向者成长。
                </motion.p>
                <motion.div variants={fadeUp} className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-4">
                  <span className="text-sm font-semibold text-amber-400">成长中</span>
                  <p className="mt-1 text-sm text-amber-500/80">行动力容易犹豫，完美主义。对策：先完成，再完善。</p>
                </motion.div>
              </div>

              {/* Right: Habits + Success */}
              <div className="space-y-6">
                <motion.h3 variants={fadeUp} className="text-lg font-semibold text-white">习惯与信条</motion.h3>

                <motion.div variants={fadeUp} className="grid grid-cols-2 gap-3">
                  <div className="glass-card p-4">
                    <span className="text-xs font-medium tracking-wide text-zinc-500 uppercase">坚持</span>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {habits.keep.map((h) => (
                        <span key={h} className="rounded-md bg-emerald-500/10 px-2.5 py-1 text-sm font-medium text-emerald-400">{h}</span>
                      ))}
                    </div>
                  </div>
                  <div className="glass-card p-4">
                    <span className="text-xs font-medium tracking-wide text-zinc-500 uppercase">放弃</span>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {habits.drop.map((h) => (
                        <span key={h} className="rounded-md bg-white/[0.03] px-2.5 py-1 text-sm font-medium text-zinc-600 line-through">{h}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={fadeUp} className="glass-card p-5">
                  <span className="text-sm font-semibold text-white">成功定义</span>
                  <p className="mt-2 text-sm text-zinc-400 leading-relaxed">健康、持续成长、关系稳定、创造价值、内心平静。</p>
                </motion.div>

                <motion.div variants={fadeUp} className="flex items-center gap-2 text-sm text-zinc-600">
                  <Target weight="bold" className="h-4 w-4 text-emerald-500/50" />
                  <span>财富是行动能力的放大器，而非人生目的</span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section className="border-t border-white/[0.06]">
        <div className="mx-auto max-w-[1400px] px-6 py-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
            className="text-center space-y-6"
          >
            <motion.h2 variants={fadeUp} className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              希望我的作品能帮助到你
            </motion.h2>
            <motion.p variants={fadeUp} className="mx-auto max-w-[48ch] text-sm text-zinc-400 leading-relaxed">
              如果你对网络科学、AI/ML 或人生操作系统感兴趣，欢迎交流。
            </motion.p>
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-4 pt-2">
              <a
                href="https://github.com/zhouzuhao990-sudo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-zinc-900 shadow-lg shadow-white/10 transition-all hover:bg-zinc-100"
              >
                <GithubLogo weight="bold" className="h-4 w-4" />
                GitHub
              </a>
              <a
                href="mailto:zhouzuhao990@gmail.com"
                className="inline-flex items-center gap-2 rounded-xl border border-white/[0.1] bg-white/[0.03] px-6 py-3 text-sm font-medium text-zinc-300 transition-all hover:border-white/[0.2] hover:bg-white/[0.06] hover:text-white"
              >
                <EnvelopeSimple weight="bold" className="h-4 w-4" />
                邮件联系
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

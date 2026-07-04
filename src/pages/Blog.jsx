import { Link } from 'react-router-dom'
import { ArrowRight, Notebook } from '@phosphor-icons/react'

const posts = [
  {
    slug: 'friend-paradox',
    title: '朋友悖论与传染病预警：从网络科学视角看早期监测',
    date: '2025-06-15',
    excerpt: '朋友悖论指出，平均而言你的朋友比你拥有更多的朋友。这一反直觉的网络特性对传染病早期预警有着深远的影响。',
    tags: ['网络科学', 'SIR 模型', '流行病学'],
  },
  {
    slug: 'transformer-from-scratch',
    title: '从零构建 GPT 风格 Transformer',
    date: '2025-05-20',
    excerpt: '在 PyTorch 中从零实现多头注意力、位置嵌入和自回归生成，理解每个组件背后的设计意图。',
    tags: ['Transformer', 'PyTorch', '深度学习'],
  },
  {
    slug: 'scaling-laws',
    title: '理解神经网络的 Scaling Laws',
    date: '2025-04-10',
    excerpt: '探索计算量、数据量和模型规模之间的幂律关系，理解现代大语言模型的性能边界。',
    tags: ['Scaling Laws', 'LLMs', '研究'],
  },
  {
    slug: 'rag-in-practice',
    title: 'RAG 实战：构建检索增强问答系统',
    date: '2025-03-05',
    excerpt: '结合网页抓取、嵌入向量和向量搜索，从零搭建 RAG 管线，让 LLM 的回答有据可依。',
    tags: ['RAG', '嵌入向量', '信息检索'],
  },
]

export default function Blog() {
  return (
    <div className="mx-auto max-w-[1400px] px-6 py-16 md:py-24">
      <div className="mb-12 space-y-3">
        <p className="text-sm font-medium tracking-wide text-emerald-600 uppercase">
          文章
        </p>
        <h1 className="text-4xl font-bold tracking-tighter text-zinc-900 md:text-5xl">
          随笔与笔记
        </h1>
        <p className="text-base text-zinc-500 leading-relaxed max-w-[52ch]">
          关于网络科学、机器学习，以及从第一性原理构建 AI 系统的思考与实践记录。
        </p>
      </div>

      <div className="divide-y divide-zinc-200/80">
        {posts.map((post) => (
          <article key={post.slug} className="group py-8 first:pt-0 last:pb-0">
            <Link
              to={`/blog/${post.slug}`}
              className="grid gap-4 md:grid-cols-[1fr_auto] md:items-start"
            >
              <div className="space-y-2">
                <h2 className="text-xl font-semibold tracking-tight text-zinc-900 transition-colors group-hover:text-emerald-600">
                  {post.title}
                </h2>
                <p className="text-sm text-zinc-500 leading-relaxed max-w-[60ch]">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <time className="text-xs text-zinc-400">{post.date}</time>
                  <span className="text-zinc-300">&middot;</span>
                  {post.tags.map((t) => (
                    <span key={t} className="text-xs font-medium text-zinc-400">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <ArrowRight
                weight="bold"
                className="hidden h-5 w-5 text-zinc-300 transition-colors group-hover:text-emerald-500 md:block"
              />
            </Link>
          </article>
        ))}

        {posts.length === 0 && (
          <div className="flex flex-col items-center gap-4 py-24 text-center">
            <Notebook className="h-12 w-12 text-zinc-300" />
            <p className="text-zinc-400">还没有文章，稍后再来看看。</p>
          </div>
        )}
      </div>
    </div>
  )
}

import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, CalendarBlank, Tag } from '@phosphor-icons/react'
import { useEffect, useState } from 'react'
import { motion } from 'motion/react'

const postContent = {
  'friend-paradox': {
    title: '朋友悖论与传染病预警：从网络科学视角看早期监测',
    date: '2025-06-15',
    tags: ['网络科学', 'SIR 模型', '流行病学'],
    body: `## 什么是朋友悖论

朋友悖论（Friendship Paradox）由社会学家 Scott Feld 在 1991 年提出，其核心表述简洁而震撼：平均而言，你的朋友比你拥有更多的朋友。

在数学上，随机选取一个邻居的平均度 d_neighbor = E[d²] / E[d]，由 Jensen 不等式，只要度分布存在方差，邻居平均度就大于节点平均度。

## 为什么这对传染病防控很重要

传统监测采用随机抽样。如果改成"随机选一个人，再监测 TA 的朋友"：

- 这些"朋友"节点更中心、更连通
- 更早接触病原体，传播路径上处于更上游
- 可将疫情发现时间提前数天甚至数周

## 度同配性的调节作用

网络的度同配性决定朋友悖论的效果强度：同配网络减弱、异配网络增强。大多数现实社会网络呈现中度同配，朋友抽样策略普遍有效。

## 实践意义

已被应用于流感早期预警、社交媒体舆情追踪、疫苗接种优先群体筛选。朋友悖论不是数学游戏，是可以切实指导公共健康实践的网络科学工具。`,
  },
  'transformer-from-scratch': {
    title: '从零构建 GPT 风格 Transformer',
    date: '2025-05-20',
    tags: ['Transformer', 'PyTorch', '深度学习'],
    body: `## 为什么从零开始

Transformer 架构是每个现代大语言模型的基础。在 PyTorch 中亲手实现一遍，那些隐藏在复杂度之下的优雅设计才会真正浮现。

## 架构总览

GPT 风格 Transformer 由词元嵌入、位置编码、多头因果自注意力、前馈网络和层归一化堆叠而成。每一层保维设计是残差连接能堆叠数十层的关键。

## 因果注意力的实现要点

因果注意力确保每个词元只能关注自己和之前的词元。上三角 -inf mask + 1/sqrt(d_k) 缩放，防止点积膨胀和梯度消失。

## 训练效果

6 层、6 头、384 维嵌入的 Transformer，单张消费级 GPU 训练几小时即可实现连贯的下一词元预测。核心机制与 GPT-4 完全相同。`,
  },
  'scaling-laws': {
    title: '理解神经网络的 Scaling Laws',
    date: '2025-04-10',
    tags: ['Scaling Laws', 'LLMs', '研究'],
    body: `## 智能的幂律

神经网络的 Scaling Laws 描述了模型性能如何随计算量、数据量和参数量变化，在多个数量级上遵循可预测的幂律模式。

## 三个轴

模型规模、数据规模、计算量（FLOPs）。Kaplan 2020 年发现最优模型规模 N ∝ C^0.73，数据量 D ∝ C^0.27。Hoffmann 2022 年 Chinchilla 证明之前的模型普遍训练不足，更接近等比例增长。

## 工程意义

理解 Scaling Laws 可以回答：增大模型能提升多少性能？应该收集更多数据还是增加模型参数？在给定预算下最优的资源配置是什么？如果你只有有限的 GPU 小时，Scaling Laws 告诉你该如何花。`,
  },
  'rag-in-practice': {
    title: 'RAG 实战：构建检索增强问答系统',
    date: '2025-03-05',
    tags: ['RAG', '嵌入向量', '信息检索'],
    body: `## 什么是 RAG

检索增强生成将大语言模型的流畅性（如何说）与信息检索的准确性和时效性（说什么）结合起来。

## 完整管线

采集 → 分块 → 嵌入 → 索引 → 检索 → 生成。使用 Sentence Transformers 做嵌入，FAISS 做向量搜索，不到 200 行 Python 即可搭建最小可用 RAG 系统。

## 关键洞察

检索质量决定回答质量。混合检索（BM25 稀疏 + 向量密集）在实践中效果最好，是 RAG 系统工程中最值得投入的优化方向。`,
  },
}

export default function Post() {
  const { slug } = useParams()
  const post = postContent[slug]
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (post) setLoading(false)
  }, [post])

  if (loading || !post) {
    return (
      <div className="aurora-bg min-h-[80dvh]">
        <div className="mx-auto flex max-w-[65ch] items-center justify-center px-6 py-48">
          {loading ? (
            <div className="h-5 w-5 animate-spin rounded-full border-2 border-emerald-500 border-t-transparent" />
          ) : (
            <div className="text-center space-y-4">
              <h1 className="text-2xl font-bold text-white">文章未找到</h1>
              <Link to="/blog" className="inline-block text-emerald-400 hover:underline">返回文章列表</Link>
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="aurora-bg min-h-[80dvh]">
      <article className="mx-auto max-w-[65ch] px-6 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/blog" className="inline-flex items-center gap-1.5 text-sm text-zinc-500 transition-colors hover:text-zinc-300 mb-8">
            <ArrowLeft weight="bold" className="h-4 w-4" />
            所有文章
          </Link>

          <header className="mb-10 space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter text-white leading-tight md:text-4xl">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-500">
              <span className="inline-flex items-center gap-1.5">
                <CalendarBlank weight="bold" className="h-4 w-4" />
                {post.date}
              </span>
              {post.tags.map((t) => (
                <span key={t} className="inline-flex items-center gap-1">
                  <Tag weight="bold" className="h-3.5 w-3.5" />
                  {t}
                </span>
              ))}
            </div>
          </header>

          <div className="prose prose-invert prose-zinc max-w-none
            prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-white
            prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
            prose-p:text-zinc-400 prose-p:leading-relaxed
            prose-code:text-sm prose-code:bg-white/[0.06] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
            prose-pre:bg-white/[0.04] prose-pre:border prose-pre:border-white/[0.06]
            prose-blockquote:border-l-emerald-500 prose-blockquote:bg-white/[0.02] prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:rounded-r-lg prose-blockquote:text-zinc-300
            prose-li:text-zinc-400 prose-strong:text-zinc-200">
            {post.body.split('\n').map((line, i) => {
              if (line.startsWith('## ')) return <h2 key={i}>{line.slice(3)}</h2>
              if (line.startsWith('### ')) return <h3 key={i}>{line.slice(4)}</h3>
              if (line.startsWith('> ')) return <blockquote key={i}><p>{line.slice(2)}</p></blockquote>
              if (line.startsWith('```')) return null
              if (line.startsWith('1. ') || line.startsWith('- ')) return <li key={i}>{line.replace(/^[\d]+\.\s|-\s/, '')}</li>
              if (line.trim() === '') return <br key={i} />
              return <p key={i}>{line}</p>
            })}
          </div>
        </motion.div>
      </article>
    </div>
  )
}

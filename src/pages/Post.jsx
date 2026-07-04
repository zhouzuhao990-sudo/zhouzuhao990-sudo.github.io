import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, CalendarBlank, Tag } from '@phosphor-icons/react'
import { useEffect, useState } from 'react'

const postContent = {
  'friend-paradox': {
    title: '朋友悖论与传染病预警：从网络科学视角看早期监测',
    date: '2025-06-15',
    tags: ['网络科学', 'SIR 模型', '流行病学'],
    body: `## 什么是朋友悖论

朋友悖论（Friendship Paradox）由社会学家 Scott Feld 在 1991 年提出，其核心表述简洁而震撼：**平均而言，你的朋友比你拥有更多的朋友**。

这一结论在数学上并不复杂。考虑一个无向图 G = (V, E)，随机选取一个节点的平均度为：

> d_avg = 2|E| / |V|

而随机选取一个邻居（即先随机选一条边，再选边的另一端节点）的平均度为：

> d_neighbor = E[d²] / E[d]

由 Jensen 不等式，只要度分布存在任何方差，就有 d_neighbor > d_avg。

## 为什么这对传染病防控很重要

传统的传染病监测通常采用随机抽样。但如果改成"随机选一个人，再监测 TA 的朋友"，会出现什么情况？

这些"朋友"节点平均而言更中心、更连通，意味着：
- **更早接触病原体**：度数高的节点在传播路径上处于更上游
- **更广的覆盖范围**：一个高度数节点的感染可影响更多人

研究表明，使用朋友抽样代替随机抽样可以将疫情发现时间提前数天甚至数周。

## 度同配性的调节作用

朋友悖论的效果强度取决于网络的**度同配性**（Degree Assortativity），即节点倾向于与相似度数的节点连接的程度：

- **同配网络**（assortative）：高度数节点连接高度数节点，朋友悖论减弱
- **异配网络**（disassortative）：高度数节点连接低度数节点，朋友悖论增强

在现实社会网络中，大多数网络呈现中度同配，意味着朋友抽样策略普遍有效。

## 实践意义

这一理论已被应用于：
1. 流感早期预警系统的采样策略优化
2. 社交媒体上的舆情传播追踪
3. 疫苗接种的优先目标群体筛选

朋友悖论不是数学游戏，而是可以切实指导公共健康实践的网络科学工具。`,
  },
  'transformer-from-scratch': {
    title: '从零构建 GPT 风格 Transformer',
    date: '2025-05-20',
    tags: ['Transformer', 'PyTorch', '深度学习'],
    body: `## 为什么从零开始

Transformer 架构是现代每个大语言模型的基础。在 PyTorch 中亲手实现一遍，那些隐藏在复杂度之下的优雅设计才会真正浮现。

## 架构总览

GPT 风格的 Transformer 由以下组件堆叠而成：
- 词元嵌入和位置编码
- 多头因果自注意力
- 带残差连接的前馈网络
- 层归一化

每一层都不改变张量的维度，输入和输出的 shape 保持一致。这种"保维设计"是残差连接能够堆叠数十层的关键。

## 因果注意力的实现要点

因果注意力确保每个词元只能关注它自己和之前的词元，不能"偷看"后面的内容。实现方式是构造一个上三角为 -inf 的 mask 矩阵。

缩放因子 1/sqrt(d_k) 防止点积随维度增长而膨胀，避免 softmax 进入梯度消失区。这个设计在 Attention Is All You Need 论文的第 3.2.1 节有详细讨论。

## 训练效果

一个 6 层、6 头、384 维嵌入的 Transformer，在单张消费级 GPU 上训练几小时后，就能在小语料上实现连贯的下一词元预测。虽然远不能和 GPT-4 相比，但核心机制完全相同。

## 关键收获

手写 Transformer 最大的收获不是代码本身，而是对"注意力"作为信息路由机制的直觉理解：每个位置都在问"我应该关注哪些位置"，而多头的设计让模型可以同时从多个角度回答这个问题。`,
  },
  'scaling-laws': {
    title: '理解神经网络的 Scaling Laws',
    date: '2025-04-10',
    tags: ['Scaling Laws', 'LLMs', '研究'],
    body: `## 智能的幂律

神经网络的 Scaling Laws 描述了模型性能如何随着计算量、数据量和参数量变化。这些关系在多个数量级上遵循可预测的幂律模式。

## 三个轴

1. **模型规模**：更多参数通常意味着更好的性能
2. **数据规模**：更多训练词元减少过拟合
3. **计算量**：模型规模和数据量的乘积，以 FLOPs 衡量

## Kaplan 的发现

Kaplan 等人 2020 年的研究发现，对于固定计算预算，模型规模和数据规模应按比例增长。最优模型规模 N_opt ∝ C^0.73，最优数据量 D_opt ∝ C^0.27。

这意味着在计算预算增加时，模型规模的增长应该快于数据量。

## Chinchilla 的修正

Hoffmann 等人 2022 年的 Chinchilla 论文证明，之前的模型普遍"训练不足"。最优分配更接近**参数和词元等比例增长**。这一发现重塑了 DeepMind 以及整个行业的训练策略。

## 工程意义

理解 Scaling Laws 可以回答：
- 增大模型能提升多少性能？
- 应该收集更多数据还是增加模型参数？
- 在给定预算下最优的资源配置是什么？

这些答案直接指导 AI 研究和工程的资源分配。如果你只有有限的 GPU 小时，Scaling Laws 告诉你该如何花。`,
  },
  'rag-in-practice': {
    title: 'RAG 实战：构建检索增强问答系统',
    date: '2025-03-05',
    tags: ['RAG', '嵌入向量', '信息检索'],
    body: `## 什么是 RAG

检索增强生成（Retrieval-Augmented Generation）将大语言模型的流畅性（如何说）与信息检索的准确性和时效性（说什么）结合起来。RAG 不是让 LLM 仅依赖训练时记住的参数化知识，而是先检索相关文档，再基于文档生成回答。

## 完整管线

1. **采集**：从网页或文档库抓取并清洗文本
2. **分块**：将长文档切分为适合检索的小段
3. **嵌入**：用嵌入模型将文本块转换为向量
4. **索引**：构建高效的向量搜索索引
5. **检索**：对用户查询找到最相关的文本块
6. **生成**：将检索结果作为上下文，让 LLM 生成有根有据的回答

## 实现细节

使用 Sentence Transformers 做嵌入，FAISS 做向量搜索，不到 200 行 Python 就可以搭建一个最小可用的 RAG 系统。

关键洞察：**检索质量决定回答质量**。更好的嵌入模型和分块策略直接提升结果。实践中常见的问题包括：
- 分块太大则特定信息被稀释
- 分块太小则上下文断裂
- 嵌入模型的选择对领域特定问题影响巨大

## 混合检索

纯密集检索（向量相似度）擅长语义匹配，但会漏掉精确关键词匹配。混合方案（BM25 稀疏检索 + 向量密集检索）在实践中通常效果最好。这是 RAG 系统工程中最值得投入的优化方向之一。`,
  },
}

export default function Post() {
  const { slug } = useParams()
  const post = postContent[slug]
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (post) setLoading(false)
  }, [post])

  if (loading) {
    return (
      <div className="mx-auto flex max-w-[65ch] items-center justify-center px-6 py-48">
        <div className="h-5 w-5 animate-spin rounded-full border-2 border-emerald-600 border-t-transparent" />
      </div>
    )
  }

  if (!post) {
    return (
      <div className="mx-auto max-w-[65ch] px-6 py-48 text-center">
        <h1 className="text-2xl font-bold text-zinc-900">文章未找到</h1>
        <Link to="/blog" className="mt-4 inline-block text-emerald-600 hover:underline">
          返回文章列表
        </Link>
      </div>
    )
  }

  return (
    <article className="mx-auto max-w-[65ch] px-6 py-16 md:py-24">
      <Link
        to="/blog"
        className="inline-flex items-center gap-1.5 text-sm text-zinc-400 transition-colors hover:text-zinc-600 mb-8"
      >
        <ArrowLeft weight="bold" className="h-4 w-4" />
        所有文章
      </Link>

      <header className="mb-10 space-y-4">
        <h1 className="text-3xl font-bold tracking-tighter text-zinc-900 leading-tight md:text-4xl">
          {post.title}
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-400">
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

      <div className="prose prose-zinc max-w-none
        prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-zinc-900
        prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
        prose-p:text-zinc-600 prose-p:leading-relaxed
        prose-code:text-sm prose-code:bg-zinc-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
        prose-pre:bg-zinc-900 prose-pre:text-zinc-100
        prose-blockquote:border-l-emerald-500 prose-blockquote:bg-zinc-50 prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:rounded-r-lg
        prose-li:text-zinc-600
      ">
        {post.body.split('\n').map((line, i) => {
          if (line.startsWith('## ')) {
            return <h2 key={i}>{line.slice(3)}</h2>
          }
          if (line.startsWith('### ')) {
            return <h3 key={i}>{line.slice(4)}</h3>
          }
          if (line.startsWith('> ')) {
            return <blockquote key={i}><p>{line.slice(2)}</p></blockquote>
          }
          if (line.startsWith('```')) {
            return null
          }
          if (line.startsWith('1. ') || line.startsWith('- ')) {
            return <li key={i}>{line.replace(/^[\d]+\.\s|-\s/, '')}</li>
          }
          if (line.trim() === '') {
            return <br key={i} />
          }
          return <p key={i}>{line}</p>
        })}
      </div>
    </article>
  )
}

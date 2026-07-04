export default function Footer() {
  return (
    <footer className="border-t border-zinc-200/80 bg-zinc-50">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-8 text-sm text-zinc-400">
        <p>Built with care. No AI slop.</p>
        <p>&copy; {new Date().getFullYear()} 周祖豪</p>
      </div>
    </footer>
  )
}

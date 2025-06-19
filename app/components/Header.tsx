export default function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center">
          {/* 実際のロゴを使用 */}
          <img 
            src="/logo.svg"
            alt="Superb Bespoke"
            className="h-16 mb-3"
          />
          <h1 className="text-xl font-light tracking-widest">SUPERB BESPOKE</h1>
        </div>
      </div>
    </header>
  )
}
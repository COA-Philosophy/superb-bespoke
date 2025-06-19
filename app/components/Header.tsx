export default function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center">
          {/* 六角形ロゴ */}
          <svg 
            width="60" 
            height="60" 
            viewBox="0 0 60 60" 
            className="mb-3"
          >
            <path
              d="M30 5 L50 17.5 L50 42.5 L30 55 L10 42.5 L10 17.5 Z"
              fill="none"
              stroke="black"
              strokeWidth="2"
            />
            <text
              x="30"
              y="35"
              textAnchor="middle"
              className="text-sm font-light"
              fill="black"
            >
              SB
            </text>
          </svg>
          <h1 className="text-xl font-light tracking-widest">SUPERB BESPOKE</h1>
        </div>
      </div>
    </header>
  )
}
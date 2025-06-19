import Header from './components/Header'
import CustomerCard from './components/CustomerCard'

export default function Home() {
  // モックデータ
  const customerData = {
    name: '村上裕也',
    rank: 'GOLD' as const
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <CustomerCard name={customerData.name} rank={customerData.rank} />
        
        {/* QRコードエリア（Phase 3で実装） */}
        <div className="w-full max-w-sm mx-auto mt-6 bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <div className="text-center">
            <div className="w-48 h-48 bg-gray-100 rounded-lg mx-auto flex items-center justify-center">
              <span className="text-gray-400">QRコード（次フェーズ）</span>
            </div>
          </div>
        </div>

        {/* シェアボタンエリア（Phase 4で実装） */}
        <div className="w-full max-w-sm mx-auto mt-6 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="grid grid-cols-2 gap-3">
            <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg text-sm">
              LINE
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg text-sm">
              メール
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg text-sm">
              リンクコピー
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg text-sm">
              共有
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
'use client'

import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import Header from './components/Header'
import CustomerCard from './components/CustomerCard'
import QRCodeDisplay from './components/QRCodeDisplay'

// 顧客データ（実際はデータベースから取得）
const customerDatabase: Record<string, { name: string; rank: 'BRONZE' | 'SILVER' | 'GOLD' | 'PLATINUM' }> = {
  'murakami-001': { name: '村上裕也', rank: 'GOLD' },
  'tanaka-002': { name: '田中太郎', rank: 'SILVER' },
  'suzuki-003': { name: '鈴木花子', rank: 'PLATINUM' },
}

function InvitePageContent() {
  const searchParams = useSearchParams()
  const customerId = searchParams.get('id') || 'murakami-001' // デフォルトID
  
  // 顧客データを取得（実際はAPIから取得）
  const customerData = customerDatabase[customerId] || {
    name: 'ゲスト',
    rank: 'BRONZE' as const
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <CustomerCard name={customerData.name} rank={customerData.rank} />
        
        {/* QRコード表示 */}
        <div className="mt-6">
          <QRCodeDisplay customerId={customerId} />
        </div>

        {/* シェアボタンエリア（Phase 4で実装） */}
        <div className="w-full max-w-sm mx-auto mt-6 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="grid grid-cols-2 gap-3">
            <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg text-sm hover:bg-gray-200 transition-colors">
              LINE
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg text-sm hover:bg-gray-200 transition-colors">
              メール
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg text-sm hover:bg-gray-200 transition-colors">
              リンクコピー
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg text-sm hover:bg-gray-200 transition-colors">
              共有
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default function Home() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50 flex items-center justify-center">読み込み中...</div>}>
      <InvitePageContent />
    </Suspense>
  )
}
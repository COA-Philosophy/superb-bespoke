'use client'

import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import Header from './components/Header'
import CustomerCard from './components/CustomerCard'
import QRCodeDisplay from './components/QRCodeDisplay'
import ShareButtons from './components/ShareButtons'

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

        {/* シェアボタン */}
        <div className="mt-6">
          <ShareButtons customerId={customerId} customerName={customerData.name} />
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
'use client'

import { QRCodeSVG } from 'qrcode.react'

interface QRCodeDisplayProps {
  customerId: string
}

export default function QRCodeDisplay({ customerId }: QRCodeDisplayProps) {
  // 紹介用URLを生成
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://superb-bespoke.vercel.app'
  const referralUrl = `${baseUrl}/invite?id=${customerId}`

  return (
    <div className="w-full max-w-sm mx-auto bg-white rounded-lg shadow-sm border border-gray-200 p-8">
      <div className="text-center">
        <div className="bg-white p-4 rounded-lg inline-block">
          <QRCodeSVG 
            value={referralUrl}
            size={200}
            level="M"
            includeMargin={true}
          />
        </div>
        <p className="text-sm text-gray-500 mt-4">
          このQRコードを共有して紹介特典を獲得
        </p>
      </div>
    </div>
  )
}
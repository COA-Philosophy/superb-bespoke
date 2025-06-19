'use client'

import { useState } from 'react'
import { MessageCircle, Mail, Copy, Share2 } from 'lucide-react'

interface ShareButtonsProps {
  customerId: string
  customerName: string
}

export default function ShareButtons({ customerId, customerName }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false)
  
  // 紹介用URLを生成
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://superb-bespoke.vercel.app'
  const referralUrl = `${baseUrl}/invite?id=${customerId}`
  
  // 共有メッセージテンプレート
  const shareMessage = `【Superb Bespoke】\n${customerName}様からの特別なご紹介です。\n初回オーダー時に特別割引をご利用いただけます。\n\n${referralUrl}`

  // LINE共有
  const shareToLine = () => {
    const lineUrl = `https://line.me/R/msg/text/?${encodeURIComponent(shareMessage)}`
    window.open(lineUrl, '_blank')
  }

  // メール共有
  const shareToEmail = () => {
    const subject = encodeURIComponent('Superb Bespokeのご紹介')
    const body = encodeURIComponent(shareMessage)
    window.location.href = `mailto:?subject=${subject}&body=${body}`
  }

  // URLコピー
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(referralUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // フォールバック
      const textArea = document.createElement('textarea')
      textArea.value = referralUrl
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  // Web Share API
  const shareNative = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Superb Bespokeのご紹介',
          text: `${customerName}様からの特別なご紹介です。`,
          url: referralUrl
        })
      } catch {
        // ユーザーがキャンセルした場合は何もしない
      }
    } else {
      // Web Share APIが使えない場合はコピー
      copyToClipboard()
    }
  }

  return (
    <div className="w-full max-w-sm mx-auto bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h3 className="text-center text-sm text-gray-600 mb-4">紹介リンクを共有</h3>
      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={shareToLine}
          className="flex items-center justify-center gap-2 px-4 py-3 bg-[#00B900] text-white rounded-lg text-sm font-medium hover:bg-[#00A000] transition-colors"
        >
          <MessageCircle size={18} />
          LINE
        </button>
        
        <button
          onClick={shareToEmail}
          className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-700 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
        >
          <Mail size={18} />
          メール
        </button>
        
        <button
          onClick={copyToClipboard}
          className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors relative"
        >
          <Copy size={18} />
          {copied ? 'コピー済み！' : 'リンクコピー'}
        </button>
        
        <button
          onClick={shareNative}
          className="flex items-center justify-center gap-2 px-4 py-3 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors"
        >
          <Share2 size={18} />
          共有
        </button>
      </div>
    </div>
  )
}
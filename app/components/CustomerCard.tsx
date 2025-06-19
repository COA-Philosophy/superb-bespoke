interface CustomerCardProps {
  name: string
  rank: 'BRONZE' | 'SILVER' | 'GOLD' | 'PLATINUM'
}

export default function CustomerCard({ name, rank }: CustomerCardProps) {
  // ランクに応じた色を決定（GOLDとPLATINUMのみカラー）
  const rankColors = {
    BRONZE: 'bg-gray-200 text-gray-700',
    SILVER: 'bg-gray-300 text-gray-800',
    GOLD: 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-white',
    PLATINUM: 'bg-gradient-to-r from-gray-300 to-gray-400 text-gray-900'
  }

  return (
    <div className="w-full max-w-sm mx-auto bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="text-center">
        <h2 className="text-2xl font-light mb-2">{name}様</h2>
        <div className="inline-flex items-center">
          <span className={`px-4 py-1 rounded-full text-sm font-medium ${rankColors[rank]}`}>
            {rank}
          </span>
        </div>
      </div>
    </div>
  )
}
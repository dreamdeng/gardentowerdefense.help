'use client'

import { useState } from 'react'

export default function CodesClient({ allCodes }) {
  const [copiedCode, setCopiedCode] = useState(null)
  const [filter, setFilter] = useState('all')

  const activeCodes = allCodes.filter(code => code.active)
  const expiredCodes = allCodes.filter(code => !code.active)

  const filteredCodes = filter === 'active' ? activeCodes : 
                       filter === 'expired' ? expiredCodes : allCodes

  const copyToClipboard = async (code) => {
    try {
      await navigator.clipboard.writeText(code)
      setCopiedCode(code)
      setTimeout(() => setCopiedCode(null), 2000)
    } catch (err) {
      console.error('Failed to copy code:', err)
    }
  }

  return (
    <div className="space-y-8">
      {/* Filter buttons */}
      <div className="flex justify-center gap-4">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            filter === 'all' 
              ? 'bg-green-600 text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          All Codes ({allCodes.length})
        </button>
        <button
          onClick={() => setFilter('active')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            filter === 'active' 
              ? 'bg-green-600 text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          ✅ Active ({activeCodes.length})
        </button>
        <button
          onClick={() => setFilter('expired')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            filter === 'expired' 
              ? 'bg-red-600 text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          ❌ Expired ({expiredCodes.length})
        </button>
      </div>

      {/* Codes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCodes.map(code => (
          <div 
            key={code.id} 
            className={`border rounded-lg p-6 transition-all duration-300 ${
              code.active 
                ? 'bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 hover:shadow-lg' 
                : 'bg-gray-50 border-gray-200 opacity-75'
            }`}
          >
            <div className="space-y-4">
              {/* Status and Category */}
              <div className="flex justify-between items-start">
                <span className={`text-xs px-2 py-1 rounded-full font-bold ${
                  code.status === '✨ NEW' ? 'bg-purple-100 text-purple-800' :
                  code.status === '🔥 HOT' ? 'bg-red-100 text-red-800' :
                  code.status === '⚡ LIMITED' ? 'bg-yellow-100 text-yellow-800' :
                  code.status === '✅ VERIFIED' ? 'bg-green-100 text-green-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {code.status}
                </span>
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                  {code.category}
                </span>
              </div>

              {/* Code */}
              <div className="text-center">
                <code className={`text-xl font-bold px-3 py-2 rounded border text-center block ${
                  code.active 
                    ? 'bg-white text-green-700 border-green-200' 
                    : 'bg-gray-100 text-gray-500 border-gray-300'
                }`}>
                  {code.code}
                </code>
              </div>

              {/* Reward */}
              <div className="text-center">
                <p className="text-lg font-semibold text-gray-800">{code.reward}</p>
                <p className="text-sm text-gray-600">{code.description}</p>
              </div>

              {/* Expiry info */}
              {code.expiry && (
                <div className="text-center">
                  <p className="text-xs text-red-600 font-medium">
                    ⏰ Expires: {new Date(code.expiry).toLocaleDateString()}
                  </p>
                </div>
              )}

              {/* Copy button */}
              <button
                onClick={() => copyToClipboard(code.code)}
                disabled={!code.active}
                className={`w-full py-2 rounded-lg font-medium transition-all ${
                  code.active
                    ? copiedCode === code.code
                      ? 'bg-emerald-600 text-white'
                      : 'bg-green-600 hover:bg-green-700 text-white'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {copiedCode === code.code ? '✅ Copied!' : code.active ? '📋 Copy Code' : '❌ Expired'}
              </button>

              {/* Date added */}
              <div className="text-center">
                <p className="text-xs text-gray-500">
                  Added: {new Date(code.dateAdded).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No codes message */}
      {filteredCodes.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No codes found for the selected filter.</p>
        </div>
      )}
    </div>
  )
}
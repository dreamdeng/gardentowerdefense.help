'use client'

import { useState } from 'react'

export function CodeCard({ code }) {
  const [copiedCode, setCopiedCode] = useState(null)

  const copyToClipboard = async (codeText) => {
    try {
      await navigator.clipboard.writeText(codeText)
      setCopiedCode(codeText)
      setTimeout(() => setCopiedCode(null), 2000)
    } catch (err) {
      console.error('Failed to copy code:', err)
    }
  }

  return (
    <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="space-y-3">
        <div className="flex justify-between items-start">
          <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">
            {code.status}
          </span>
        </div>
        <div>
          <code className="text-lg font-bold text-green-700 bg-white px-2 py-1 rounded border">
            {code.code}
          </code>
        </div>
        <p className="text-sm font-medium text-gray-700">{code.reward}</p>
        <p className="text-xs text-gray-500">{code.description}</p>
        <button 
          onClick={() => copyToClipboard(code.code)}
          className={`w-full py-2 rounded font-medium transition-colors ${
            copiedCode === code.code
              ? 'bg-emerald-600 text-white'
              : 'bg-green-600 hover:bg-green-700 text-white'
          }`}
        >
          {copiedCode === code.code ? '✅ Copied!' : '📋 Copy Code'}
        </button>
      </div>
    </div>
  )
}
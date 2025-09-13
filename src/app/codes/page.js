import { getCodes } from '@/lib/data'
import CodesClient from '@/components/CodesClient'

export default function CodesPage() {
  const allCodes = getCodes()

  return (
    <div className="container mx-auto py-12 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
          🎁 Garden Tower Defense Codes
        </h1>
        <p className="text-xl text-gray-600">
          Fresh codes updated daily - Claim your free seeds and boost your arsenal!
        </p>
        <div className="max-w-2xl mx-auto bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="font-semibold text-blue-900 mb-2">How to Redeem Codes:</h3>
          <p className="text-blue-800">
            Launch Garden Tower Defense → Press <kbd className="bg-blue-100 px-2 py-1 rounded text-sm font-mono">F</kbd> or click Shop → 
            Select 'Codes' tab → Paste your code → Click 'Redeem'!
          </p>
        </div>
      </div>

      <CodesClient allCodes={allCodes} />

      {/* Bottom CTA */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-4">Don't Miss Fresh Codes!</h2>
        <p className="mb-6">
          New codes drop regularly during updates and events. Bookmark this page and check back daily 
          for the latest rewards!
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a 
            href="https://www.roblox.com/games/13253735473/Garden-Tower-Defense"
            target="_blank"
            className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            🎮 Play GTD Now
          </a>
          <a 
            href="/guides"
            className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
          >
            📚 Strategy Guides
          </a>
        </div>
      </div>
    </div>
  )
}


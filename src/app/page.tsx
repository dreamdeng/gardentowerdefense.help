import { getCodes, getUnits } from '@/lib/data'
import { CodeCard } from '@/components/HomeClient'

export default function Home() {
  const codes = getCodes().filter((code: any) => code.active).slice(0, 4)
  const metaUnits = getUnits().filter((unit: any) => unit.tier === 'META' || unit.tier === 'S').slice(0, 3)

  return (
    <div className="container mx-auto py-8 space-y-16">
      {/* Hero Section - Left-Right Layout like source website */}
      <section className="py-16 rounded-2xl relative overflow-hidden">
        <div className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-gray-900">
                  Garden Tower Defense Roblox
                </h1>
                <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-700 font-semibold leading-relaxed">
                  Codes, Wiki, All Units, Tier List & Complete Strategy Guide
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Master the ultimate plant-based tower defense! Summon powerful garden units, strategically place towers,
                  defend against waves of bugs and enemies.
                </p>
              </div>

              <div className="flex gap-2 flex-wrap">
                <a
                  href="https://www.roblox.com/games/13253735473/Garden-Tower-Defense"
                  target="_blank"
                  className="bg-green-600 text-white hover:bg-green-700 px-4 py-2 rounded font-medium text-sm transition-colors shadow-lg hover:shadow-xl inline-flex items-center gap-1"
                >
                  Play Game →
                </a>
                <a
                  href="#codes"
                  className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded font-medium text-sm transition-colors shadow-lg hover:shadow-xl"
                >
                  Get Free Codes
                </a>
              </div>
            </div>

            {/* Right Side - YouTube Video */}
            <div>
              {/* YouTube Video Embed */}
              <div className="relative rounded-lg overflow-hidden shadow-2xl" style={{paddingBottom: '56.25%', height: 0}}>
                <iframe
                  src="https://www.youtube.com/embed/I-sH53vXP2A?autoplay=0&mute=0&controls=1&rel=0"
                  title="Garden Tower Defense - Complete Strategy Guide"
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-yellow-300 rounded-full animate-pulse delay-100"></div>
          <div className="absolute bottom-20 left-32 w-12 h-12 bg-green-300 rounded-full animate-pulse delay-200"></div>
          <div className="absolute bottom-32 right-10 w-24 h-24 bg-pink-300 rounded-full animate-pulse delay-300"></div>
        </div>
      </section>

      {/* Fresh Codes Section */}
      <section id="codes" className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold">🎁 Fresh Garden Tower Defense Codes</h2>
          <p className="text-gray-600">Updated Daily - Claim Your Free Seeds & Boost Your Arsenal</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {codes.map((code: any) => (
            <CodeCard key={code.id} code={code} />
          ))}
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-4">
            <strong>How to Redeem:</strong> Launch GTD → Click Shop (F key) → Select 'Codes' → Paste & Redeem!
          </p>
          <a href="/codes" className="text-green-600 hover:text-green-700 font-medium">
            View All Active Codes →
          </a>
        </div>
      </section>

      {/* META Units Section */}
      <section id="units" className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold">🌟 META Units & Tier List</h2>
          <p className="text-gray-600">From Starter Plants to Game-Breaking Powerhouses</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {metaUnits.map((unit: any) => (
            <div key={unit.id} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold text-gray-800">{unit.name}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full font-bold ${
                    unit.tier === 'META' ? 'bg-purple-100 text-purple-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {unit.tier}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>💰 Cost: {unit.cost}</div>
                  <div>⚔️ Damage: {unit.damage}</div>
                  <div>🎯 Range: {unit.range}</div>
                  <div>⏱️ Cooldown: {unit.cooldown}s</div>
                </div>
                <p className="text-sm text-gray-600">{unit.description}</p>
                <div className="space-y-2">
                  <div>
                    <span className="text-xs font-medium text-green-600">Strengths:</span>
                    <p className="text-xs text-gray-500">{unit.strengths.join(', ')}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <a href="/units" className="text-green-600 hover:text-green-700 font-medium">
            View Complete Unit Database →
          </a>
        </div>
      </section>

      {/* Strategy Preview */}
      <section className="bg-gray-50 rounded-lg p-8 space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold">🎯 Master-Level Strategy Guides</h2>
          <p className="text-gray-600">From Rookie Defender to Plant Warfare Expert</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg p-4 space-y-2">
            <h3 className="font-bold text-green-700">🌱 Beginner's Bootcamp</h3>
            <p className="text-sm text-gray-600">New to GTD? Start here for essential basics and first-game success.</p>
          </div>
          <div className="bg-white rounded-lg p-4 space-y-2">
            <h3 className="font-bold text-green-700">💰 Economy Mastery</h3>
            <p className="text-sm text-gray-600">Maximize seed income and resource management for sustained growth.</p>
          </div>
          <div className="bg-white rounded-lg p-4 space-y-2">
            <h3 className="font-bold text-green-700">⚡ META Breakdown</h3>
            <p className="text-sm text-gray-600">Current top-tier strategies from pro players and competitive analysis.</p>
          </div>
          <div className="bg-white rounded-lg p-4 space-y-2">
            <h3 className="font-bold text-green-700">👑 Boss Battle Tactics</h3>
            <p className="text-sm text-gray-600">Specialized strategies for tough encounters and late-game survival.</p>
          </div>
        </div>
        <div className="text-center">
          <a href="/guides" className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
            Explore All Guides
          </a>
        </div>
      </section>

      {/* Remove ResourceList and ArticleList components since we're disabling community features */}
    </div>
  )
}
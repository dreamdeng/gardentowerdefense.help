import { getUnits } from '@/lib/data'

export default function UnitsPage() {
  const allUnits = getUnits()
  
  const tiers = ['META', 'S', 'A', 'B', 'C']

  const getTierColor = (tier) => {
    switch(tier) {
      case 'META': return 'bg-purple-100 text-purple-800 border-purple-200'
      case 'S': return 'bg-yellow-100 text-yellow-800 border-yellow-200'  
      case 'A': return 'bg-green-100 text-green-800 border-green-200'
      case 'B': return 'bg-blue-100 text-blue-800 border-blue-200'
      case 'C': return 'bg-gray-100 text-gray-800 border-gray-200'
      default: return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  const getTierDescription = (tier) => {
    switch(tier) {
      case 'META': return 'Game-breaking units that dominate every game mode'
      case 'S': return 'Exceptionally powerful units for competitive play'
      case 'A': return 'Solid performers with great versatility'
      case 'B': return 'Reliable units for specific strategies'
      case 'C': return 'Situational picks with niche uses'
      default: return ''
    }
  }

  return (
    <div className="container mx-auto py-12 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
          🌟 Complete Unit Tier List & Database
        </h1>
        <p className="text-xl text-gray-600">
          From Starter Plants to META Powerhouses - Master Every Unit
        </p>
      </div>

      {/* Tier Explanations */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4 text-center">Understanding the Tier System</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {tiers.map(tier => (
            <div key={tier} className={`p-4 rounded-lg border-2 ${getTierColor(tier)}`}>
              <div className="text-center">
                <h3 className="font-bold text-lg">{tier}-Tier</h3>
                <p className="text-xs mt-2">{getTierDescription(tier)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Units Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allUnits.map(unit => (
          <div key={unit.id} className="border rounded-lg p-6 hover:shadow-lg transition-shadow bg-white">
            <div className="space-y-4">
              {/* Header */}
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{unit.name}</h3>
                  <span className="text-sm text-gray-600">{unit.type}</span>
                </div>
                <span className={`text-xs px-3 py-1 rounded-full font-bold border-2 ${getTierColor(unit.tier)}`}>
                  {unit.tier}
                </span>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3 text-sm bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between">
                  <span className="text-gray-600">💰 Cost:</span>
                  <span className="font-semibold">{unit.cost.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">⚔️ Damage:</span>
                  <span className="font-semibold">{unit.damage}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">🎯 Range:</span>
                  <span className="font-semibold">{unit.range}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">⏱️ Cooldown:</span>
                  <span className="font-semibold">{unit.cooldown}s</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-700 leading-relaxed">{unit.description}</p>

              {/* Abilities */}
              <div>
                <h4 className="font-semibold text-sm text-gray-800 mb-2">🔸 Abilities:</h4>
                <div className="flex flex-wrap gap-1">
                  {unit.abilities.map((ability, index) => (
                    <span key={index} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                      {ability}
                    </span>
                  ))}
                </div>
              </div>

              {/* Strengths & Weaknesses */}
              <div className="space-y-2">
                <div>
                  <span className="text-xs font-medium text-green-600">✅ Strengths:</span>
                  <p className="text-xs text-gray-600">{unit.strengths.join(', ')}</p>
                </div>
                <div>
                  <span className="text-xs font-medium text-red-600">❌ Weaknesses:</span>
                  <p className="text-xs text-gray-600">{unit.weaknesses.join(', ')}</p>
                </div>
              </div>

              {/* Usage Tips */}
              <div className="bg-green-50 p-3 rounded border-l-4 border-green-400">
                <h4 className="font-semibold text-sm text-green-800 mb-1">💡 Usage Tips:</h4>
                <p className="text-xs text-green-700">{unit.usage}</p>
              </div>
            </div>
          </div>
        ))}
      </div>


      {/* META Strategy Section */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-4">🏆 Current META Strategy</h2>
        <p className="mb-6 text-purple-100">
          The most effective lineup combines Golem's devastating area damage with Venus Flytrap's versatile DPS. 
          Support with Money Tree for economy and Ghost Pepper for armor-piercing capabilities.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white bg-opacity-20 rounded-lg p-4">
            <h3 className="font-bold">🌿 Early Game</h3>
            <p className="text-sm">Money Tree → Potato → Strawberry</p>
          </div>
          <div className="bg-white bg-opacity-20 rounded-lg p-4">
            <h3 className="font-bold">⚔️ Mid Game</h3>
            <p className="text-sm">Venus Flytrap → Ghost Pepper</p>
          </div>
          <div className="bg-white bg-opacity-20 rounded-lg p-4">
            <h3 className="font-bold">👑 Late Game</h3>
            <p className="text-sm">Golem → MAX Upgrades</p>
          </div>
          <div className="bg-white bg-opacity-20 rounded-lg p-4">
            <h3 className="font-bold">🛡️ Support</h3>
            <p className="text-sm">Strategic Cactus placement</p>
          </div>
        </div>
        <div className="flex gap-4 justify-center flex-wrap">
          <a 
            href="/guides"
            className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            📚 Detailed Strategies
          </a>
          <a 
            href="/codes"
            className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
          >
            🎁 Get Free Seeds
          </a>
        </div>
      </div>
    </div>
  )
}


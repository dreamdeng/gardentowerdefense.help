
export default function GuidesPage() {

  const guides = {
    beginner: {
      title: "🌱 Beginner's Bootcamp",
      subtitle: "New to GTD? Start here for essential basics",
      content: [
        {
          title: "Getting Started - Your First Game",
          items: [
            "Start with Sunflower for basic income (only if desperate for early economy)",
            "Quickly transition to Money Tree - it's your economic backbone",
            "Place 2-3 Money Trees in safe corners before focusing on combat units",
            "Use Potato as your first reliable combat unit - cheap and effective",
            "Always protect your economy units with combat units in front"
          ]
        },
        {
          title: "Essential Early Game Strategy",
          items: [
            "Economy First: Money Trees generate passive income for stronger units later",
            "Placement Matters: Put ranged units behind tanks for protection",
            "Upgrade Wisely: Focus upgrades on your main DPS units first",
            "Save Seeds: Don't spend everything immediately - save for META units",
            "Learn the Waves: Each wave has different enemy types and weaknesses"
          ]
        },
        {
          title: "Common Beginner Mistakes",
          items: [
            "Don't neglect economy - you need constant seed income",
            "Don't place all units in one spot - spread for better coverage",
            "Don't upgrade everything - focus on your strongest units",
            "Don't ignore unit types - some are better against specific enemies",
            "Don't forget to use codes - free seeds make a huge difference!"
          ]
        }
      ]
    },
    economy: {
      title: "💰 Economy Mastery",
      subtitle: "Maximize your seed income and resource management",
      content: [
        {
          title: "Building Your Economic Foundation",
          items: [
            "Place 3-4 Money Trees in the first 5 waves for optimal income",
            "Position economy units in corners where they're protected",
            "Upgrade Money Trees to level 3-4 for significant income boost",
            "Balance economy vs combat - don't go overboard on either",
            "Use VIP benefits for passive income multipliers if available"
          ]
        },
        {
          title: "Income Optimization Strategies",
          items: [
            "Early Game: 60% economy, 40% combat units",
            "Mid Game: 30% economy, 70% combat units", 
            "Late Game: 10% economy, 90% combat units",
            "Always maintain at least 2 economy units throughout the game",
            "Reinvest income immediately - sitting on seeds wastes potential"
          ]
        },
        {
          title: "Advanced Economic Tactics",
          items: [
            "Calculate your income per wave to plan unit purchases",
            "Use temporary weak units to survive while saving for expensive META units",
            "Sell weak units mid-game to afford stronger replacements",
            "Time your upgrades with wave completion bonuses",
            "Coordinate with team members in multiplayer for shared economy benefits"
          ]
        }
      ]
    },
    meta: {
      title: "⚡ META Breakdown",
      subtitle: "Current top-tier strategies from pro players",
      content: [
        {
          title: "Current META Units (January 2025)",
          items: [
            "Golem: Undisputed king with massive AoE damage - essential for late game",
            "Venus Flytrap: Best all-around unit with poison DoT and balanced stats",
            "Ghost Pepper: Armor-piercing specialist for heavily armored enemies",
            "Money Tree: Economic backbone - not flashy but absolutely necessary",
            "Strawberry: Support unit that amplifies your main DPS significantly"
          ]
        },
        {
          title: "Optimal META Formation",
          items: [
            "Central Golem placement for maximum area coverage",
            "Venus Flytraps in secondary positions for consistent DPS",
            "Ghost Peppers behind tanks for protection and armor piercing",
            "Strawberries near your strongest units for damage amplification",
            "Money Trees in protected corners for sustained economy"
          ]
        },
        {
          title: "Pro Player Strategies",
          items: [
            "Rush to Golem: Save aggressively for the META unit that wins games",
            "Support Network: Use Strawberry to boost Golem's already massive damage",
            "Adaptive Placement: Adjust formation based on enemy wave compositions",
            "Upgrade Priority: Golem first, then Venus Flytrap, then supports",
            "Late Game Focus: Maximize upgrades on fewer units rather than many weak ones"
          ]
        }
      ]
    },
    advanced: {
      title: "🎯 Advanced Formations",
      subtitle: "Optimal unit placement and synergy combos",
      content: [
        {
          title: "Formation Fundamentals",
          items: [
            "Central Powerhouse: Place your strongest unit (Golem) in the center",
            "Layered Defense: Tanks in front, DPS behind, support in back",
            "Range Optimization: Overlap unit ranges for maximum coverage",
            "Chokepoint Control: Use terrain and unit placement to funnel enemies",
            "Adaptive Positioning: Adjust formation based on enemy types and paths"
          ]
        },
        {
          title: "Synergy Combinations",
          items: [
            "Golem + Strawberry: Amplified area damage devastates grouped enemies",
            "Venus Flytrap + Ghost Pepper: Balanced damage with armor penetration",
            "Cactus + Tank Units: Reflect damage while absorbing enemy attacks",
            "Money Tree + Protection: Economic units surrounded by defensive positions",
            "Multi-tier Support: Layer different unit types for comprehensive coverage"
          ]
        },
        {
          title: "Expert Placement Techniques",
          items: [
            "Corner Economy: Protect money-makers in map corners",
            "Cross-fire Positioning: Multiple units targeting the same enemy paths",
            "Upgrade Clustering: Group upgraded units for maximum efficiency",
            "Emergency Repositioning: Know when to sell and relocate units",
            "Map-specific Strategies: Adapt formation to different map layouts"
          ]
        }
      ]
    },
    bosses: {
      title: "👑 Boss Battle Tactics",
      subtitle: "Specialized strategies for tough encounters",
      content: [
        {
          title: "Boss Preparation",
          items: [
            "Save upgrades for boss waves - they make the biggest difference",
            "Focus on high single-target damage units like Ghost Pepper",
            "Ensure you have armor-piercing capabilities for heavily armored bosses",
            "Position units to handle both the boss and accompanying minions",
            "Have backup economy to replace units if boss destroys them"
          ]
        },
        {
          title: "Common Boss Types & Counters",
          items: [
            "Armored Bosses: Use Ghost Pepper and upgraded damage dealers",
            "Fast Bosses: High DPS units with good range like Venus Flytrap",
            "Group Bosses: Golem's area damage excels against multiple targets", 
            "Regenerating Bosses: Sustained DPS and damage over time effects",
            "Magic-Resistant Bosses: Physical damage units and debuff strategies"
          ]
        },
        {
          title: "Emergency Boss Tactics",
          items: [
            "Panic Upgrades: Spend all seeds on immediate unit upgrades if boss is breaking through",
            "Strategic Selling: Sell weak units to afford last-minute strong ones",
            "Formation Shift: Quickly relocate units to focus fire on boss",
            "Ability Timing: Save special abilities for critical boss moments",
            "Team Coordination: In multiplayer, coordinate focus fire and support"
          ]
        }
      ]
    }
  }

  return (
    <div className="container mx-auto py-12 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
          🎯 Master-Level Strategy Guides
        </h1>
        <p className="text-xl text-gray-600">
          From Rookie Defender to Plant Warfare Expert - Complete GTD Mastery
        </p>
      </div>

      {/* All Guide Content */}
      {Object.entries(guides).map(([key, guide]) => (
        <div key={key} className="bg-white rounded-lg border-2 border-green-200 overflow-hidden">
          <div className="bg-green-600 text-white p-6">
            <h2 className="text-2xl font-bold">{guide.title}</h2>
            <p className="text-green-100 mt-2">{guide.subtitle}</p>
          </div>
          
          <div className="p-6 space-y-8">
            {guide.content.map((section, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-xl font-bold text-gray-800 border-b border-gray-200 pb-2">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <span className="text-green-600 font-bold text-lg">•</span>
                      <span className="text-gray-700 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Quick Tips Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="font-bold text-blue-900 mb-3">💡 Pro Tip</h3>
          <p className="text-blue-800 text-sm">
            Always prioritize economy in early waves. A strong economic foundation 
            allows you to afford META units when they matter most.
          </p>
        </div>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h3 className="font-bold text-yellow-900 mb-3">⚠️ Common Mistake</h3>
          <p className="text-yellow-800 text-sm">
            Don't spread upgrades across all units. Focus on maximizing your 
            strongest units rather than having many weak ones.
          </p>
        </div>
        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <h3 className="font-bold text-green-900 mb-3">🎯 Advanced Strategy</h3>
          <p className="text-green-800 text-sm">
            Learn enemy wave patterns to predict when you need specific unit types. 
            Preparation beats reaction every time.
          </p>
        </div>
      </div>

      {/* FAQ Preview */}
      <div className="bg-gray-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6">❓ Quick Strategy Q&A</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-800">When should I buy my first Golem?</h4>
              <p className="text-sm text-gray-600">
                Save for Golem around wave 15-20 when you have strong economy. 
                It's expensive but game-changing for late game survival.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">How many Money Trees do I need?</h4>
              <p className="text-sm text-gray-600">
                3-4 Money Trees provide excellent income without sacrificing too much combat power. 
                Upgrade them to level 3-4 for maximum efficiency.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-800">What's the best unit combination?</h4>
              <p className="text-sm text-gray-600">
                Golem + Venus Flytrap + Strawberry creates a devastating core. 
                Add Ghost Pepper for armor penetration and Money Trees for economy.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Should I sell weak units?</h4>
              <p className="text-sm text-gray-600">
                Yes! Mid-game, sell early units like Sunflower and Potato to afford 
                stronger META units. Don't get attached to weak units.
              </p>
            </div>
          </div>
        </div>
        <div className="text-center mt-6">
          <a 
            href="/faq" 
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            View Complete FAQ
          </a>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-4">🚀 Ready to Dominate?</h2>
        <p className="mb-6">
          Apply these strategies in-game and watch your win rate soar! 
          Don't forget to grab fresh codes for the seeds you'll need.
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
            href="/codes"
            className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
          >
            🎁 Get Free Seeds
          </a>
          <a 
            href="/units"
            className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
          >
            📊 Unit Tier List
          </a>
        </div>
      </div>
    </div>
  )
}


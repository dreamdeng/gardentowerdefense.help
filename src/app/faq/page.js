import { getFAQ } from '@/lib/data'

export default function FAQPage() {
  const allFAQs = getFAQ()
  const categories = [...new Set(allFAQs.map(faq => faq.category))]

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'Codes': return '🎁'
      case 'Strategy': return '🎯'
      case 'Units': return '🌟'
      case 'Economy': return '💰'
      case 'VIP': return '👑'
      default: return '❓'
    }
  }

  return (
    <div className="container mx-auto py-12 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
          💡 Frequently Asked Questions
        </h1>
        <p className="text-xl text-gray-600">
          Everything you need to know about Garden Tower Defense
        </p>
      </div>

      {/* FAQ List */}
      <div className="max-w-4xl mx-auto space-y-4">
        {allFAQs.map(faq => (
          <div 
            key={faq.id} 
            className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="px-6 py-4 bg-white">
              <div className="flex items-start gap-3 mb-4">
                <span className="text-lg">{getCategoryIcon(faq.category)}</span>
                <div>
                  <h3 className="font-semibold text-gray-800 text-lg">{faq.question}</h3>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full mt-2 inline-block">
                    {faq.category}
                  </span>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-green-500">
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Help Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">🚀 Still Need Help?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl mb-3">📚</div>
            <h3 className="font-bold mb-2">Strategy Guides</h3>
            <p className="text-sm text-gray-600 mb-3">
              Comprehensive guides for beginners to advanced players
            </p>
            <a 
              href="/guides" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
            >
              View Guides
            </a>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-3">🌟</div>
            <h3 className="font-bold mb-2">Unit Database</h3>
            <p className="text-sm text-gray-600 mb-3">
              Complete tier list with stats and strategies
            </p>
            <a 
              href="/units" 
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
            >
              Browse Units
            </a>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-3">💬</div>
            <h3 className="font-bold mb-2">Community</h3>
            <p className="text-sm text-gray-600 mb-3">
              Join thousands of players sharing tips and strategies
            </p>
            <a 
              href="https://discord.gg/gardentowerdefense" 
              target="_blank"
              className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
            >
              Join Discord
            </a>
          </div>
        </div>
      </div>

      {/* Popular Questions */}
      <div className="bg-green-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-green-800">🔥 Most Popular Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4 border border-green-200">
              <h4 className="font-semibold text-green-800 mb-2">🎁 How often do codes release?</h4>
              <p className="text-sm text-green-700">
                New codes typically drop 1-2 times per week during updates and events. 
                We monitor all channels 24/7 to bring you fresh codes instantly!
              </p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-green-200">
              <h4 className="font-semibold text-green-800 mb-2">⚔️ What's the current META?</h4>
              <p className="text-sm text-green-700">
                Golem dominates with massive area damage. Support with Venus Flytrap, 
                Ghost Pepper, and strategic economy units for the ultimate setup.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4 border border-green-200">
              <h4 className="font-semibold text-green-800 mb-2">💰 Best beginner strategy?</h4>
              <p className="text-sm text-green-700">
                Focus on Money Trees for economy, then Potato and Strawberry for combat. 
                Save seeds for META units once you have a solid foundation.
              </p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-green-200">
              <h4 className="font-semibold text-green-800 mb-2">🔄 Do expired codes come back?</h4>
              <p className="text-sm text-green-700">
                Sometimes! Developers occasionally reactivate popular codes during 
                special events. That's why we keep our expired codes list updated.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-4">Can't Find Your Answer?</h2>
        <p className="mb-6 text-green-100">
          Our community is here to help! Ask questions, share strategies, and connect with fellow defenders.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a 
            href="/contact"
            className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            📧 Contact Us
          </a>
          <a 
            href="https://discord.gg/gardentowerdefense"
            target="_blank"
            className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
          >
            💬 Join Discord
          </a>
        </div>
      </div>
    </div>
  )
}


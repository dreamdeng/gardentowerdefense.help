export function WebsiteStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Garden Tower Defense Central",
    "alternateName": "GTD Central",
    "url": "https://gardentowerdefense.help",
    "description": "Your ultimate resource hub for Garden Tower Defense. Fresh codes, META guides, and winning strategies updated daily.",
    "publisher": {
      "@type": "Organization",
      "name": "Garden Tower Defense Central",
      "url": "https://gardentowerdefense.help"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://gardentowerdefense.help/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

export function GameStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "Garden Tower Defense",
    "alternateName": "GTD",
    "description": "A tower defense game on Roblox where players use plant units to defend against waves of enemies",
    "url": "https://www.roblox.com/games/13253735473/Garden-Tower-Defense",
    "genre": ["Tower Defense", "Strategy", "Action"],
    "gamePlatform": "Roblox",
    "publisher": {
      "@type": "Organization", 
      "name": "Lightning Dragon Studio"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

export function FAQStructuredData({ faqs }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
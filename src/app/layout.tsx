import './globals.css'
import { Inter } from 'next/font/google'
import { Layout } from '@/components/Layout'
import { WebsiteStructuredData, GameStructuredData } from '@/components/StructuredData'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: {
    default: 'Garden Tower Defense Central - Your Ultimate GTD Resource Hub',
    template: '%s | Garden Tower Defense Central'
  },
  description: 'Discover the latest Garden Tower Defense codes, comprehensive unit guides, and winning strategies. Your go-to source for GTD tips, tricks, and free rewards!',
  keywords: ['Garden Tower Defense', 'GTD codes', 'Roblox tower defense', 'Garden Tower Defense units', 'GTD tier list', 'tower defense strategy'],
  openGraph: {
    title: 'Garden Tower Defense Central - Your Ultimate GTD Resource Hub',
    description: 'Discover the latest Garden Tower Defense codes, comprehensive unit guides, and winning strategies.',
    url: 'https://gardentowerdefense.help',
    siteName: 'Garden Tower Defense Central',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Garden Tower Defense Central - Your Ultimate GTD Resource Hub',
    description: 'Discover the latest Garden Tower Defense codes, comprehensive unit guides, and winning strategies.',
  }
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-REQN23EGTS"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-REQN23EGTS');
            `,
          }}
        />
        <WebsiteStructuredData />
        <GameStructuredData />
      </head>
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
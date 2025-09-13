// components/Footer.js
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">About GTD Central</h3>
            <p className="mt-4 text-base text-gray-500">
              Your ultimate resource hub for Garden Tower Defense. Fresh codes, META guides, and winning strategies updated daily by the community.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/codes" className="text-base text-gray-500 hover:text-gray-900">
                  Active Codes
                </Link>
              </li>
              <li>
                <Link href="/units" className="text-base text-gray-500 hover:text-gray-900">
                  Unit Database
                </Link>
              </li>
              <li>
                <Link href="/guides" className="text-base text-gray-500 hover:text-gray-900">
                  Strategy Guides
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-base text-gray-500 hover:text-gray-900">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">Game Resources</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="https://www.roblox.com/games/13253735473/Garden-Tower-Defense" target="_blank" className="text-base text-gray-500 hover:text-gray-900">
                  🎮 Play GTD
                </a>
              </li>
              <li>
                <a href="https://discord.gg/gardentowerdefense" target="_blank" className="text-base text-gray-500 hover:text-gray-900">
                  💬 Discord Server
                </a>
              </li>
              <li>
                <Link href="/submit-codes" className="text-base text-gray-500 hover:text-gray-900">
                  📝 Submit Codes
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">Community</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/privacy" className="text-base text-gray-500 hover:text-gray-900">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-base text-gray-500 hover:text-gray-900">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/report" className="text-base text-gray-500 hover:text-gray-900">
                  Report Issues
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 space-y-4">
          <p className="text-sm text-gray-500 text-center">
            <strong>🌻 Join the GTD Community:</strong> Connect with thousands of fellow defenders! Share strategies, trade tips, and be first to know about exclusive codes and updates.
          </p>
          <p className="text-base text-gray-400 text-center">
            This website is an unofficial fan resource. Garden Tower Defense is created by Lightning Dragon Studio. 
            All game assets and trademarks belong to their respective owners.
          </p>
          <p className="text-sm text-gray-400 text-center">
            &copy; {new Date().getFullYear()} Garden Tower Defense Central. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
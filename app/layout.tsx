import Link from 'next/link'
import { Inter } from 'next/font/google'
import '@/app/globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background text-foreground`}>
        <header className="bg-primary text-primary-foreground shadow-md">
          <div className="container mx-auto px-4 py-6">
            <nav className="flex flex-col sm:flex-row justify-between items-center">
              <Link href="/" className="text-3xl font-bold mb-4 sm:mb-0">Katzfey Realty Group</Link>
              <ul className="flex space-x-6 text-lg">
                <li><Link href="/listings" className="hover:underline">Listings</Link></li>
                <li><Link href="/about" className="hover:underline">About Us</Link></li>
                <li><Link href="/contact" className="hover:underline">Contact</Link></li>
                <li><Link href="/saved" className="hover:underline">Saved Homes</Link></li>
                <li><Link href="/financing" className="hover:underline">Financing</Link></li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="bg-muted text-muted-foreground mt-12">
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                <p>123 Realty Street</p>
                <p>Springfield, ST 12345</p>
                <p>Phone: (555) 123-4567</p>
                <p>Email: info@smithandsmith.com</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><Link href="/listings" className="hover:underline">Search Homes</Link></li>
                  <li><Link href="/sell" className="hover:underline">Sell Your Home</Link></li>
                  <li><Link href="/market-report" className="hover:underline">Market Report</Link></li>
                  <li><Link href="/testimonials" className="hover:underline">Testimonials</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
                <p className="mb-4">Sign up for our newsletter to receive updates on new listings and real estate tips.</p>
                <form className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-grow px-4 py-2 rounded-l-md border-t border-b border-l"
                  />
                  <button
                    type="submit"
                    className="bg-primary text-primary-foreground px-4 py-2 rounded-r-md hover:bg-primary/90 transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p>© 2023 Smith & Smith Realty. All rights reserved.</p>
              <p className="mt-2">
                <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link> | 
                <Link href="/terms-of-service" className="hover:underline ml-2">Terms of Service</Link>
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
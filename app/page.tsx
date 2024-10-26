import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Katzfey Realty Group</h1>
        <p className="text-xl mb-8">Your trusted partners in finding the perfect home</p>
        <div className="flex justify-center space-x-4">
          <Button asChild>
            <Link href="/listings">View Listings</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>

      <section className="bg-muted p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-4 text-center">Meet the Katzfey's</h2>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
          <div className="w-64 h-64 bg-gray-300 rounded-full flex items-center justify-center text-gray-600">
            Realtor Photo
          </div>
          <div className="max-w-md">
            <p className="mb-4">
              With over 10 years of combined experience, Rick and Donna Katzfey have been helping families find their dream homes in the greater Springfield area. Their dedication, expertise, and personal touch have made them the go-to realtors for hundreds of satisfied clients.
            </p>
            <Button asChild variant="link">
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-4 text-center">Featured Listings</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="border rounded-lg overflow-hidden">
              <div className="w-full h-48 bg-gray-300 flex items-center justify-center text-gray-600">
                Home Image
              </div>
              <div className="p-4">
                <h3 className="font-bold mb-2">Beautiful Family Home</h3>
                <p className="text-muted-foreground mb-2">123 Main St, Springfield</p>
                <p className="font-bold">$299,000</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button asChild>
            <Link href="/listings">View All Listings</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
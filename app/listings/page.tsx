import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function Listings() {
  // In a real application, you would fetch this data from an API
  const listings = [
    { id: 1, title: 'Cozy Cottage', address: '123 Oak St', price: 250000, bedrooms: 2, bathrooms: 1 },
    { id: 2, title: 'Modern Apartment', address: '456 Elm St', price: 350000, bedrooms: 3, bathrooms: 2 },
    { id: 3, title: 'Spacious Family Home', address: '789 Maple Ave', price: 450000, bedrooms: 4, bathrooms: 3 },
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Available Listings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {listings.map((listing) => (
          <div key={listing.id} className="border rounded-lg overflow-hidden">
            <Image
              src={`/placeholder.svg?height=200&width=300`}
              alt={listing.title}
              width={300}
              height={200}
              className="w-full"
            />
            <div className="p-4">
              <h2 className="font-bold text-xl mb-2">{listing.title}</h2>
              <p className="text-muted-foreground mb-2">{listing.address}</p>
              <p className="font-bold mb-2">${listing.price.toLocaleString()}</p>
              <p className="mb-4">{listing.bedrooms} beds • {listing.bathrooms} baths</p>
              <Button>View Details</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
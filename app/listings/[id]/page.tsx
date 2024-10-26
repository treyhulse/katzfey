'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Bed, Bath, Square, Heart } from 'lucide-react'

export default function ListingPage() {
  const { id } = useParams()
  const [isSaved, setIsSaved] = useState(false)

  // In a real app, you would fetch the listing data based on the id
  const listing = {
    id,
    title: 'Charming Family Home',
    address: '123 Maple Street, Springfield, ST 12345',
    price: 450000,
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2500,
    description: 'This beautiful family home features spacious rooms, a modern kitchen, and a large backyard perfect for entertaining. Located in a quiet neighborhood with excellent schools nearby.',
    features: ['Hardwood floors', 'Granite countertops', 'Stainless steel appliances', 'Central air conditioning', 'Attached two-car garage'],
    images: [
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600',
    ]
  }

  const toggleSave = () => {
    setIsSaved(!isSaved)
    // In a real app, you would update the saved status in your backend here
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold">{listing.title}</CardTitle>
          <CardDescription>{listing.address}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Image
                src={listing.images[0]}
                alt={listing.title}
                width={600}
                height={400}
                className="rounded-lg"
              />
              <div className="grid grid-cols-3 gap-2 mt-2">
                {listing.images.slice(1).map((image, index) => (
                  <Image
                    key={index}
                    src={image}
                    alt={`${listing.title} - Image ${index + 2}`}
                    width={200}
                    height={133}
                    className="rounded-lg"
                  />
                ))}
              </div>
            </div>
            <div>
              <p className="text-3xl font-bold mb-4">${listing.price.toLocaleString()}</p>
              <div className="flex justify-between mb-4">
                <span className="flex items-center"><Bed className="mr-2" /> {listing.bedrooms} beds</span>
                <span className="flex items-center"><Bath className="mr-2" /> {listing.bathrooms} baths</span>
                <span className="flex items-center"><Square className="mr-2" /> {listing.sqft} sqft</span>
              </div>
              <p className="mb-4">{listing.description}</p>
              <Button onClick={toggleSave} variant={isSaved ? "outline" : "default"} className="w-full mb-4">
                <Heart className={`mr-2 ${isSaved ? "fill-current" : ""}`} />
                {isSaved ? "Saved" : "Save Home"}
              </Button>
              <Button className="w-full">Contact Agent</Button>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Tabs defaultValue="features" className="w-full">
            <TabsList>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="neighborhood">Neighborhood</TabsTrigger>
              <TabsTrigger value="schools">Schools</TabsTrigger>
            </TabsList>
            <TabsContent value="features">
              <ul className="list-disc pl-5">
                {listing.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent value="neighborhood">
              <p>Information about the neighborhood would go here.</p>
            </TabsContent>
            <TabsContent value="schools">
              <p>Information about nearby schools would go here.</p>
            </TabsContent>
          </Tabs>
        </CardFooter>
      </Card>
    </div>
  )
}
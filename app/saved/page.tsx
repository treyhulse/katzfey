'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Bed, Bath, Square, Trash2 } from 'lucide-react'

export default function SavedHomesPage() {
  // In a real app, you would fetch this data from your backend
  const [savedHomes, setSavedHomes] = useState([
    { id: 1, title: 'Cozy Cottage', address: '123 Oak St', price: 250000, bedrooms: 2, bathrooms: 1, sqft: 1200, image: '/placeholder.svg?height=200&width=300' },
    { id: 2, title: 'Modern Apartment', address: '456 Elm St', price: 350000, bedrooms: 3, bathrooms: 2, sqft: 1800, image: '/placeholder.svg?height=200&width=300' },
    { id: 3, title: 'Spacious Family Home', address: '789 Maple Ave', price: 450000, bedrooms: 4, bathrooms: 3, sqft: 2500, image: '/placeholder.svg?height=200&width=300' },
  ])

  const removeSavedHome = (id: number) => {
    setSavedHomes(savedHomes.filter(home => home.id !== id))
    // In a real app, you would also update this in your backend
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Saved Homes</h1>
      {savedHomes.length === 0 ? (
        <Card>
          <CardContent className="pt-6">
            <p className="text-center text-muted-foreground">You haven't saved any homes yet.</p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button asChild>
              <Link href="/listings">Browse Listings</Link>
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {savedHomes.map(home => (
            <Card key={home.id}>
              <CardHeader>
                <Image
                  src={home.image}
                  alt={home.title}
                  width={300}
                  height={200}
                  className="rounded-lg w-full"
                />
              </CardHeader>
              <CardContent>
                <CardTitle>{home.title}</CardTitle>
                <CardDescription>{home.address}</CardDescription>
                <p className="text-2xl font-bold my-2">${home.price.toLocaleString()}</p>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span className="flex items-center"><Bed className="mr-1 h-4 w-4" /> {home.bedrooms}</span>
                  <span className="flex items-center"><Bath className="mr-1 h-4 w-4" /> {home.bathrooms}</span>
                  <span className="flex items-center"><Square className="mr-1 h-4 w-4" /> {home.sqft} sqft</span>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button asChild variant="outline">
                  <Link href={`/listings/${home.id}`}>View Details</Link>
                </Button>
                <Button variant="destructive" onClick={() => removeSavedHome(home.id)}>
                  <Trash2 className="mr-2 h-4 w-4" /> Remove
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function AboutUsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">About Katzfey Realty Group</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Our Story</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Started in __ by _____ has been serving the greater Springfield area for over 5 years. What started as a small family business has grown into one of the most trusted names in local real estate.
            </p>
            <p>
              Our commitment to personalized service, integrity, and deep local knowledge has helped thousands of families find their perfect homes and investors make sound real estate decisions.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Meet the Founders</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <Image
              src="/placeholder.svg?height=300&width=300"
              alt="John and Jane Smith"
              width={300}
              height={300}
              className="rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Rick and Donna Katzfey</h3>
            <p className="text-center">
              With years of combined experience, Rick and Donna have been the driving force behind some major growth in the NWA markets. This is built upon success and reputation for excellence.
            </p>
          </CardContent>
        </Card>
      </div>
      
      <Card className="mb-12">
        <CardHeader>
          <CardTitle>Our Values</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { title: "Integrity", description: "We believe in honest, transparent dealings in every transaction." },
            { title: "Expertise", description: "Our team stays at the forefront of market trends and local knowledge." },
            { title: "Client-First", description: "Your needs and satisfaction are always our top priority." },
          ].map((value, index) => (
            <div key={index} className="text-center">
              <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Our Achievements</CardTitle>
          <CardDescription>Recognized excellence in real estate</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap justify-center gap-4">
          {[
            "Top Realtor 2022",
            "Best Customer Service 2021",
            "Community Impact Award 2020",
            "Million Dollar Club",
            "5-Star Rated on Zillow",
          ].map((achievement, index) => (
            <Badge key={index} variant="secondary" className="text-sm py-1 px-3">
              {achievement}
            </Badge>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
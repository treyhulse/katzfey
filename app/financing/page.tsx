'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'

export default function FinancingPage() {
  const [loanAmount, setLoanAmount] = useState(300000)
  const [interestRate, setInterestRate] = useState(3.5)
  const [loanTerm, setLoanTerm] = useState(30)

  const calculateMonthlyPayment = () => {
    const monthlyRate = interestRate / 100 / 12
    const numberOfPayments = loanTerm * 12
    const monthlyPayment = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1)
    return monthlyPayment.toFixed(2)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Home Financing</h1>
      
      <Tabs defaultValue="calculator" className="mb-12">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="calculator">Mortgage Calculator</TabsTrigger>
          <TabsTrigger value="options">Financing Options</TabsTrigger>
        </TabsList>
        <TabsContent value="calculator">
          <Card>
            <CardHeader>
              <CardTitle>Mortgage Calculator</CardTitle>
              <CardDescription>Estimate your monthly mortgage payments</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="loanAmount">Loan Amount: ${loanAmount.toLocaleString()}</Label>
                <Slider
                  id="loanAmount"
                  min={50000}
                  max={1000000}
                  step={1000}
                  value={[loanAmount]}
                  onValueChange={(value) => setLoanAmount(value[0])}
                />
              </div>
              <div>
                <Label htmlFor="interestRate">Interest Rate: {interestRate}%</Label>
                <Slider
                  id="interestRate"
                  min={1}
                  max={10}
                  step={0.1}
                  value={[interestRate]}
                  onValueChange={(value) => setInterestRate(value[0])}
                />
              </div>
              <div>
                <Label htmlFor="loanTerm">Loan Term (years): {loanTerm}</Label>
                <Slider
                  id="loanTerm"
                  min={15}
                  max={30}
                  step={5}
                  value={[loanTerm]}
                  onValueChange={(value) => setLoanTerm(value[0])}
                />
              </div>
            </CardContent>
            <CardFooter>
              <div className="w-full text-center">
                <p className="text-lg mb-2">Estimated Monthly Payment:</p>
                <p className="text-3xl font-bold">${calculateMonthlyPayment()}</p>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="options">
          <Card>
            <CardHeader>
              <CardTitle>Financing Options</CardTitle>
              <CardDescription>Explore different ways to finance your home purchase</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-4">
                <li>
                  <h3 className="font-semibold">Conventional Loans</h3>
                  <p>Traditional mortgage loans not backed by the government, often requiring a higher credit score and down payment.</p>
                </li>
                <li>
                  <h3 className="font-semibold">FHA Loans</h3>
                  <p>Government-backed loans with lower down payment requirements, ideal for first-time homebuyers.</p>
                </li>
                <li>
                  <h3 className="font-semibold">VA Loans</h3>
                  <p>Loans for veterans and active-duty military personnel, often with no down payment required.</p>
                </li>
                <li>
                  <h3 className="font-semibold">USDA Loans</h3>
                  <p>Loans for rural and suburban homebuyers, often with no down payment required.</p>
                </li>
                <li>
                  <h3 className="font-semibold">Jumbo Loans</h3>
                  <p>Loans for high-value properties that exceed the limits set by Fannie Mae and Freddie Mac.</p>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Schedule a Consultation</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
      
      <Card>
        <CardHeader>
          <CardTitle>Financing Resources</CardTitle>
          <CardDescription>Learn more about home financing</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2">
            <li><a href="#" className="text-primary hover:underline">Understanding Your Credit Score</a></li>
            <li><a href="#" className="text-primary hover:underline">First-Time Homebuyer's Guide</a></li>
            <li><a href="#" className="text-primary hover:underline">How to Improve Your Debt-to-Income Ratio</a></li>
            <li><a href="#" className="text-primary hover:underline">The Pros and Cons of Different Loan Types</a></li>
            <li><a href="#" className="text-primary hover:underline">Preparing for the Mortgage Application Process</a></li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
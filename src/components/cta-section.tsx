'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useState, useEffect, useRef } from "react"

export default function CtaSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [isClient, setIsClient] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    const form = e.currentTarget
    const formData = new FormData(form)
    const data = {
      firstName: formData.get('firstName') as string,
      lastName: formData.get('lastName') as string,
      email: formData.get('email') as string,
      company: formData.get('company') as string,
      message: formData.get('message') as string,
    }

    console.log('Submitting form data:', data)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      console.log('Response status:', response.status)
      console.log('Response ok:', response.ok)

      const result = await response.json()
      console.log('Response data:', result)

      if (response.ok) {
        if (result.success) {
          setSubmitStatus('success')
          // Use the stored form reference instead of e.currentTarget
          if (formRef.current) {
            formRef.current.reset()
          }
        } else {
          setSubmitStatus('error')
          setErrorMessage(result.error || 'Failed to send message')
        }
      } else {
        setSubmitStatus('error')
        setErrorMessage(result.error || `Server error: ${response.status}`)
      }
    } catch (error) {
      console.error('Fetch error:', error)
      setSubmitStatus('error')
      
      if (error instanceof Error) {
        if (error.message.includes('Failed to fetch')) {
          setErrorMessage('Network error - please check your connection and try again.')
        } else {
          setErrorMessage(`Error: ${error.message}`)
        }
      } else {
        setErrorMessage('Unknown error occurred. Please try again.')
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="cta" className="py-16 bg-primary/5">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Streamline your business with automations
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Ready to transform your business operations? Contact us to learn how our automation and custom development solutions can
                help you save time, reduce errors, and drive growth.
              </p>
            </div>
          </div>
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
              </CardHeader>
              <CardContent>
                {!isClient ? (
                  <div className="grid gap-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">First name</Label>
                        <div className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Last name</Label>
                        <div className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <div className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <div className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <div className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm min-h-[100px]" />
                    </div>
                    <Button disabled className="w-full bg-primary hover:bg-primary/90">
                      Send Message
                    </Button>
                  </div>
                ) : (
                  <form ref={formRef} className="grid gap-4" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">First name</Label>
                        <Input id="first-name" name="firstName" placeholder="Enter your first name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Last name</Label>
                        <Input id="last-name" name="lastName" placeholder="Enter your last name" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" name="email" placeholder="Enter your email" type="email" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input id="company" name="company" placeholder="Enter your company name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your automation needs"
                        className="min-h-[100px]"
                        required
                      />
                    </div>
                    
                    {submitStatus === 'success' && (
                      <div className="text-green-600 text-sm">
                        Message sent successfully! We'll get back to you within 24 hours.
                      </div>
                    )}
                    
                    {submitStatus === 'error' && (
                      <div className="text-red-600 text-sm">
                        {errorMessage}
                      </div>
                    )}
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-primary hover:bg-primary/90"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
'use client'

import { useState } from 'react'

import Button from '@/app/_components/Button'
import { Input } from '@/app/_components/Inputs'
import { Textarea } from '@/app/_components/Inputs'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' })
    alert('Thank you for your message. We will get back to you soon!')
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl mb-8">Contact Us</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Get in Touch</h2>
              <p className="text-lg text-gray-700 mb-6">
                We&lsquo;re here to answer any questions you may have about our gutter installation services. Reach out to us and we&lsquo;ll respond as soon as we can.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="mt-1"
                  />
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-blue-600 mr-2" />
                  <span className="text-lg text-gray-700">info@gutterpro.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-blue-600 mr-2" />
                  <span className="text-lg text-gray-700">(123) 456-7890</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-blue-600 mr-2" />
                  <span className="text-lg text-gray-700">123 Gutter Lane, Rainville, RN 12345</span>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Business Hours</h3>
                <p className="text-lg text-gray-700">Monday - Friday: 8:00 AM - 6:00 PM</p>
                <p className="text-lg text-gray-700">Saturday: 9:00 AM - 2:00 PM</p>
                <p className="text-lg text-gray-700">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}


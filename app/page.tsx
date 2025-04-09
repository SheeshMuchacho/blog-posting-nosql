'use client'

import { useState } from 'react';
import { ChevronDown, ChevronRight, Layers, Code, BarChart, ArrowRight } from 'lucide-react';

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="p-4 border-b sticky top-0 bg-white z-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 bg-primary rounded-md flex items-center justify-center">
              <span className="text-white font-bold">N</span>
            </div>
            <span className="font-bold text-lg">NextFlow</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
            <a href="#solutions" className="text-gray-600 hover:text-gray-900">Solutions</a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
            <a href="#resources" className="text-gray-600 hover:text-gray-900">Resources</a>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-md" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <ChevronDown size={24} /> : <ChevronRight size={24} />}
          </button>

          <div className="hidden md:flex items-center gap-4">
            <button className="px-4 py-2 text-primary hover:bg-gray-100 rounded-md">Log in</button>
            <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-blue-800">Sign up</button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 border-t pt-4 flex flex-col gap-4">
            <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
            <a href="#solutions" className="text-gray-600 hover:text-gray-900">Solutions</a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
            <a href="#resources" className="text-gray-600 hover:text-gray-900">Resources</a>
            <div className="flex gap-4 pt-4 border-t">
              <button className="flex-1 px-4 py-2 text-primary border border-primary rounded-md">Log in</button>
              <button className="flex-1 px-4 py-2 bg-primary text-white rounded-md">Sign up</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="md:grid md:grid-cols-2 md:gap-12 items-center">
            <div className="mb-12 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-6">
                Build faster with Next.js
              </h1>
              <p className="text-lg text-gray-700 mb-8 max-w-lg">
                Modern web development platform with everything you need to create high-performance, responsive websites in record time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-6 py- bg-blue-500 text-white rounded-md hover:bg-blue-800 font-medium">
                  Get started
                </button>
                <button className="px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-50 flex items-center justify-center gap-2">
                  View documentation
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                <pre className="text-sm overflow-x-auto">
                  <code className="text-gray-800">
{`'use client'

import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)
  
  return (
    <div className="text-center">
      <p className="text-4xl font-bold">{count}</p>
      <button 
        onClick={() => setCount(count + 1)}
        className="mt-4 px-4 py-2 bg-primary text-white rounded">
        Increment
      </button>
    </div>
  )
}`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything you need to build modern apps</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our platform combines the best developer experience with all the features you need for production.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Layers size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Component-Based</h3>
              <p className="text-gray-600">
                Build encapsulated components that manage their own state, then compose them to make complex UIs.
              </p>
            </div>

            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Code size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Developer Experience</h3>
              <p className="text-gray-600">
                Enjoy hot reloading, error reporting, and modern tooling that helps you build faster.
              </p>
            </div>

            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <BarChart size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Performance Optimized</h3>
              <p className="text-gray-600">
                Automatic code splitting, image optimization, and hybrid rendering for blazing fast apps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gray-50 py-16 px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay updated with the latest features</h2>
          <p className="text-gray-600 mb-8">
            Join our newsletter to receive updates on new features, tutorials, and community highlights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <button className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-800 whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto bg-white border-t py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-8 w-8 bg-primary rounded-md flex items-center justify-center">
                  <span className="text-white font-bold">N</span>
                </div>
                <span className="font-bold text-lg">NextFlow</span>
              </div>
              <p className="text-gray-600 text-sm">
                Modern tools for modern web development. Build better, faster.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Features</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Pricing</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Changelog</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Roadmap</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Documentation</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Tutorials</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Blog</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Community</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">About</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Careers</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Contact</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Legal</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-500 text-sm">&copy; 2025 NextFlow. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-gray-600">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-gray-600">GitHub</a>
              <a href="#" className="text-gray-400 hover:text-gray-600">Discord</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
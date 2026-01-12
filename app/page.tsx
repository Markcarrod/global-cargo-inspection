'use client';

import Link from 'next/link';
import {
  ClipboardCheck,
  Container,
  Shield,
  FileSearch,
  FlaskConical,
  Clock,
  CheckCircle,
  Globe,
  Users,
  TrendingUp,
  Award
} from 'lucide-react';
import ServiceCard from '@/components/ui/ServiceCard';
import TestimonialCard from '@/components/ui/TestimonialCard';
import CTASection from '@/components/sections/CTASection';

const services = [
  {
    icon: ClipboardCheck,
    title: 'Pre-Shipment Inspection',
    description: 'Comprehensive inspection before shipment to ensure product quality, specifications, and compliance with your requirements.',
    href: '/services/pre-shipment-inspection',
  },
  {
    icon: Container,
    title: 'Container Loading Supervision',
    description: 'Professional oversight of container loading processes to prevent damage and ensure proper handling of your cargo.',
    href: '/services/container-loading',
  },
  {
    icon: Shield,
    title: 'Quality Control',
    description: 'Rigorous quality control inspections throughout the production process to maintain the highest standards.',
    href: '/services/quality-control',
  },
  {
    icon: FileSearch,
    title: 'Supplier Audit',
    description: 'Thorough evaluation of supplier capabilities, facilities, and processes to ensure reliability and compliance.',
    href: '/services/supplier-audit',
  },
  {
    icon: FlaskConical,
    title: 'Product Testing',
    description: 'Advanced testing and certification services to verify product safety, performance, and regulatory compliance.',
    href: '/services/product-testing',
  },
  {
    icon: Clock,
    title: 'Expediting Services',
    description: 'Proactive monitoring and coordination to keep your production and delivery schedules on track.',
    href: '/services/expediting',
  },
];

const stats = [
  { icon: CheckCircle, value: '1,000+', label: 'Inspections' },
  { icon: Globe, value: '50+', label: 'Countries' },
  { icon: TrendingUp, value: '98%', label: 'Client Satisfaction' },
];

const testimonials = [
  {
    quote: 'Global Cargo Inspection has been instrumental in maintaining our quality standards. Their attention to detail and professionalism is unmatched.',
    author: 'Sarah Johnson',
    company: 'Tech Electronics Corp',
    rating: 5,
  },
  {
    quote: 'We\'ve worked with several inspection companies, but GCI stands out for their thorough reports and quick turnaround times.',
    author: 'Michael Chen',
    company: 'Premium Textiles Ltd',
    rating: 5,
  },
  {
    quote: 'Their supplier audit service helped us identify and resolve potential issues before they became problems. Highly recommended!',
    author: 'Emma Rodriguez',
    company: 'Global Import Solutions',
    rating: 5,
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/hero-bg.png)',
          }}
        >
          {/* Dark Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>

        <div className="container-custom relative z-10 py-20">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
              Global Cargo Inspection Services You Can Trust
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100 leading-relaxed">
              Ensuring quality, compliance, and peace of mind with comprehensive inspection solutions across the globe.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/quote" className="btn-primary text-lg px-8 py-4">
                Request Quote
              </Link>
              <Link
                href="/services"
                style={{
                  padding: '1rem 2rem',
                  border: '2px solid white',
                  color: 'white',
                  fontWeight: 600,
                  borderRadius: '0.375rem',
                  transition: 'all 0.3s',
                  display: 'inline-block',
                  textDecoration: 'none',
                  fontSize: '1.125rem',
                  textAlign: 'center'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'white';
                  e.currentTarget.style.color = '#1e3a8a';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = 'white';
                }}
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Boxes */}
      <section className="py-12 bg-white border-b">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(249, 115, 22, 0.1)' }}>
                <Award className="w-8 h-8" style={{ color: '#f97316' }} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#1e3a8a' }}>Certified Inspectors</h3>
                <p style={{ color: '#334155' }}>Internationally certified professionals with extensive industry experience</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(249, 115, 22, 0.1)' }}>
                <Clock className="w-8 h-8" style={{ color: '#f97316' }} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#1e3a8a' }}>24/7 Availability</h3>
                <p style={{ color: '#334155' }}>Round-the-clock support and inspection services whenever you need us</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(249, 115, 22, 0.1)' }}>
                <Globe className="w-8 h-8" style={{ color: '#f97316' }} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#1e3a8a' }}>Global Coverage</h3>
                <p style={{ color: '#334155' }}>Inspection services available in over 50 countries worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-neutral-light py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 bg-accent-orange bg-opacity-10 rounded-full flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-accent-orange" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary-navy mb-1">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-neutral-dark">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-neutral-dark max-w-3xl mx-auto">
              Comprehensive inspection solutions tailored to your industry and requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn-secondary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Indicators Section */}
      <section className="section-padding bg-neutral-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-xl text-neutral-dark max-w-3xl mx-auto">
              Industry-leading expertise and commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-16 h-16 bg-accent-orange bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-accent-orange" />
              </div>
              <h3 className="text-xl font-bold mb-3">Certified Professionals</h3>
              <p className="text-neutral-dark">
                Our team holds international certifications and undergoes continuous training to stay ahead of industry standards.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-accent-orange bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-accent-orange" />
              </div>
              <h3 className="text-xl font-bold mb-3">Global Coverage</h3>
              <p className="text-neutral-dark">
                With inspectors in over 75 countries, we provide consistent quality service wherever your supply chain takes you.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-accent-orange bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-accent-orange" />
              </div>
              <h3 className="text-xl font-bold mb-3">Fast Turnaround</h3>
              <p className="text-neutral-dark">
                Receive detailed inspection reports within 24-48 hours, keeping your supply chain moving efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-neutral-dark max-w-3xl mx-auto">
              Trusted by businesses worldwide for quality and reliability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/testimonials" className="btn-outline">
              Read More Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Ensure Your Cargo Quality?"
        description="Get started with a free consultation and discover how our inspection services can protect your business and enhance your supply chain."
        primaryButtonText="Request a Quote"
        primaryButtonHref="/quote"
        secondaryButtonText="Contact Us"
        secondaryButtonHref="/contact"
      />
    </div>
  );
}

'use client';

import Link from 'next/link';
import {
    Search,
    Container,
    ClipboardCheck,
    Building2,
    FlaskConical,
    Clock,
    ArrowRight
} from 'lucide-react';

const services = [
    {
        icon: Search,
        title: 'Pre-Shipment Inspection',
        slug: 'pre-shipment-inspection',
        description: 'Comprehensive inspection before shipment to ensure product quality, specifications, and compliance with your requirements.',
    },
    {
        icon: Container,
        title: 'Container Loading Supervision',
        slug: 'container-loading',
        description: 'Professional oversight of container loading processes to prevent damage and ensure proper handling of your cargo.',
    },
    {
        icon: ClipboardCheck,
        title: 'Quality Control',
        slug: 'quality-control',
        description: 'Rigorous quality control inspections throughout the production process to maintain the highest standards.',
    },
    {
        icon: Building2,
        title: 'Supplier Audit',
        slug: 'supplier-audit',
        description: 'Thorough evaluation of supplier capabilities, facilities, and processes to ensure reliability and compliance.',
    },
    {
        icon: FlaskConical,
        title: 'Product Testing',
        slug: 'product-testing',
        description: 'Advanced testing and certification services to verify product safety, performance, and regulatory compliance.',
    },
    {
        icon: Clock,
        title: 'Expediting Services',
        slug: 'expediting',
        description: 'Proactive monitoring and coordination to keep your production and delivery schedules on track.',
    },
];

export default function ServicesPage() {
    return (
        <div>
            {/* Header Banner */}
            <section className="relative h-[400px] flex items-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: 'url(/images/services-header.png)',
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
                </div>

                <div className="container-custom relative z-10">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                        Our Inspection Services
                    </h1>
                    <p className="text-xl text-gray-100 max-w-2xl">
                        Comprehensive cargo inspection solutions tailored to your industry and requirements
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <Link
                                key={index}
                                href={`/services/${service.slug}`}
                                className="group"
                            >
                                <div className="card h-full flex flex-col transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
                                    <div
                                        className="w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                                        style={{ backgroundColor: 'rgba(249, 115, 22, 0.1)' }}
                                    >
                                        <service.icon className="w-8 h-8" style={{ color: '#f97316' }} />
                                    </div>
                                    <h3
                                        className="text-xl font-bold mb-3 group-hover:text-orange-600 transition-colors"
                                        style={{ color: '#1e3a8a' }}
                                    >
                                        {service.title}
                                    </h3>
                                    <p className="text-sm leading-relaxed mb-4 flex-grow" style={{ color: '#334155' }}>
                                        {service.description}
                                    </p>
                                    <div className="flex items-center font-semibold text-sm group-hover:gap-2 transition-all" style={{ color: '#f97316' }}>
                                        <span>Learn More</span>
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding" style={{ backgroundColor: '#1e3a8a' }}>
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                            Need a Custom Inspection Solution?
                        </h2>
                        <p className="text-lg md:text-xl mb-8 text-gray-200">
                            Our team can create a tailored inspection program to meet your specific requirements
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/quote"
                                className="btn-primary text-lg px-8 py-4"
                            >
                                Request a Quote
                            </Link>
                            <Link
                                href="/contact"
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
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

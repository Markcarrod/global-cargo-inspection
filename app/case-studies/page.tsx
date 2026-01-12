'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
    ArrowRight,
    MapPin,
    Tag,
    BarChart
} from 'lucide-react';

// Mock Data
const caseStudies = [
    {
        id: 1,
        title: 'Reducing Defect Rates for High-End Electronics',
        category: 'Electronics',
        image: '/images/industry-electronics.png',
        location: 'Shenzhen, China',
        summary: 'How we helped a US consumer electronics brand reduce defect rates from 5% to 0.5% through rigorous Pre-Shipment Inspection.',
        result: '90% Defect Reduction',
    },
    {
        id: 2,
        title: 'Material Compliance for Organic Textiles',
        category: 'Textiles',
        image: '/images/industry-textiles.png',
        location: 'Ho Chi Minh City, Vietnam',
        summary: 'Ensuring organic cotton certification compliance and fabric quality for a sustainable fashion retailer.',
        result: '100% Compliance Verified',
    },
    {
        id: 3,
        title: 'Engine Component Precision Verification',
        category: 'Automotive',
        image: '/images/industry-automotive.png',
        location: 'Munich, Germany',
        summary: 'High-precision measurement and quality control for critical automotive engine parts preventing assembly line stoppages.',
        result: 'Zero Assembly Failures',
    },
    {
        id: 4,
        title: 'Fresh Produce Quality Assurance',
        category: 'Food & Beverage',
        image: '/images/industry-food.png',
        location: 'Bangkok, Thailand',
        summary: 'Implementing a cold-chain monitoring and quality check system for tropical fruit exports to Europe.',
        result: 'Extended Shelf Life',
    },
    {
        id: 5,
        title: 'Smart Toy Safety Testing',
        category: 'Toys',
        image: '/images/industry-toys.png',
        location: 'Dongguan, China',
        summary: 'Comprehensive safety testing (ASTM F963) for a new line of smart interactive toys for children.',
        result: 'Passed Safety Standards',
    },
    {
        id: 6,
        title: 'Furniture Loading Supervision',
        category: 'Home & Garden',
        image: '/images/industry-home-garden.png',
        location: 'Jepara, Indonesia',
        summary: 'Supervising the loading of high-value teak furniture to prevent transit damage and moisture issues.',
        result: '0% Transit Damage',
    },
];

const categories = ['All', 'Electronics', 'Textiles', 'Automotive', 'Food & Beverage', 'Toys', 'Home & Garden'];

export default function CaseStudiesPage() {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredStudies = activeCategory === 'All'
        ? caseStudies
        : caseStudies.filter(study => study.category === activeCategory);

    return (
        <div className="bg-neutral-light min-h-screen">
            {/* Header */}
            <section className="bg-primary-navy py-16 text-white text-center">
                <div className="container-custom">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Case Studies</h1>
                    <p className="text-xl text-gray-200">
                        Real-world examples of how we ensure quality and compliance for our global clients.
                    </p>
                </div>
            </section>

            {/* Filter & Grid */}
            <section className="section-padding">
                <div className="container-custom">

                    {/* Filters */}
                    <div className="flex flex-wrap justify-center gap-2 mb-12">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${activeCategory === cat
                                    ? 'bg-accent-orange text-white shadow-md'
                                    : 'bg-white text-gray-600 hover:bg-gray-100'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredStudies.map((study) => (
                            <Link
                                key={study.id}
                                href="/contact"
                                className="bg-white rounded-lg overflow-hidden shadow-md group hover:shadow-xl transition-all duration-300 flex flex-col h-full"
                            >
                                {/* Image */}
                                <div className="h-48 relative overflow-hidden">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                                        style={{ backgroundImage: `url(${study.image})` }}
                                    ></div>
                                    <div className="absolute top-4 left-4 bg-primary-navy/90 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide backdrop-blur-sm">
                                        {study.category}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex items-center text-sm text-gray-500 mb-3">
                                        <MapPin className="w-4 h-4 mr-1 text-accent-orange" />
                                        {study.location}
                                    </div>

                                    <h3 className="text-xl font-bold text-primary-navy mb-3 line-clamp-2 group-hover:text-accent-orange transition-colors">
                                        {study.title}
                                    </h3>

                                    <p className="text-gray-600 mb-4 line-clamp-3 text-sm flex-grow">
                                        {study.summary}
                                    </p>

                                    <div className="mt-auto pt-4 border-t border-gray-100">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center text-primary-navy font-bold text-sm">
                                                <BarChart className="w-4 h-4 mr-2 text-success" />
                                                {study.result}
                                            </div>
                                            <span className="text-accent-orange font-semibold text-sm flex items-center group-hover:translate-x-1 transition-transform">
                                                Learn More <ArrowRight className="w-4 h-4 ml-1" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {filteredStudies.length === 0 && (
                        <div className="text-center py-20 text-gray-500">
                            <p className="text-xl">No case studies found for this category.</p>
                        </div>
                    )}

                </div>
            </section>
        </div>
    );
}

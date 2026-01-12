'use client';

import Link from 'next/link';
import {
    ArrowRight,
    Cpu,
    Shirt,
    Car,
    Sofa,
    Gamepad2,
    Apple,
    Stethoscope,
    Factory
} from 'lucide-react';

const industries = [
    {
        title: 'Electronics & Technology',
        description: 'Circuit boards, consumer electronics, and home appliances.',
        image: '/images/industry-electronics.png',
        icon: Cpu,
        color: 'bg-blue-600',
        hover: 'hover:border-blue-600',
    },
    {
        title: 'Textiles & Apparel',
        description: 'Fabrics, garments, footwear, and fashion accessories.',
        image: '/images/industry-textiles.png',
        icon: Shirt,
        color: 'bg-purple-600',
        hover: 'hover:border-purple-600',
    },
    {
        title: 'Automotive Parts',
        description: 'Engine components, body parts, and accessories.',
        image: '/images/industry-automotive.png',
        icon: Car,
        color: 'bg-slate-600',
        hover: 'hover:border-slate-600',
    },
    {
        title: 'Food & Beverages',
        description: 'Fresh produce, processed foods, and packaging safety.',
        image: '/images/industry-food.png',
        icon: Apple,
        color: 'bg-green-600',
        hover: 'hover:border-green-600',
    },
    {
        title: 'Home & Garden',
        description: 'Furniture, kitchenware, and outdoor equipment.',
        image: '/images/industry-home-garden.png',
        icon: Sofa,
        color: 'bg-emerald-600',
        hover: 'hover:border-emerald-600',
    },
    {
        title: 'Toys & Games',
        description: 'Safety testing for children\'s toys and recreational products.',
        image: '/images/industry-toys.png',
        icon: Gamepad2,
        color: 'bg-orange-500',
        hover: 'hover:border-orange-500',
    },
    {
        title: 'Medical Devices',
        description: 'Surgical instruments, diagnostic equipment, and supplies.',
        image: '/images/industry-medical.png',
        icon: Stethoscope,
        color: 'bg-cyan-600',
        hover: 'hover:border-cyan-600',
    },
    {
        title: 'Industrial Equipment',
        description: 'Heavy machinery, tools, and construction materials.',
        image: '/images/industry-industrial.png',
        icon: Factory,
        color: 'bg-indigo-700',
        hover: 'hover:border-indigo-700',
    },
];

export default function IndustriesPage() {
    return (
        <div className="bg-neutral-light min-h-screen">
            {/* Header */}
            <section className="bg-primary-navy py-20 text-white text-center">
                <div className="container-custom">
                    <h1 className="text-5xl font-bold mb-6">Industries We Serve</h1>
                    <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                        Specialized inspection expertise across a wide range of sectors to meet your specific compliance and quality needs.
                    </p>
                </div>
            </section>

            {/* Masonry Grid */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                        {industries.map((industry, index) => (
                            <div
                                key={index}
                                className={`break-inside-avoid bg-white rounded-lg overflow-hidden shadow-md group border-2 border-transparent transition-all duration-300 ${industry.hover}`}
                            >
                                {/* Image or Color Header */}
                                <div className="h-56 relative overflow-hidden bg-gray-100">
                                    {industry.image ? (
                                        <div
                                            className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                                            style={{ backgroundImage: `url(${industry.image})` }}
                                        ></div>
                                    ) : (
                                        <div className={`absolute inset-0 ${industry.color} flex items-center justify-center`}>
                                            <industry.icon className="w-20 h-20 text-white opacity-50" />
                                        </div>
                                    )}
                                    {/* Overlay for icon */}
                                    <div className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md z-10">
                                        <industry.icon className={`w-5 h-5 ${industry.color.replace('bg-', 'text-')}`} />
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-primary-navy mb-3">{industry.title}</h3>
                                    <p className="text-neutral-dark mb-6 leading-relaxed">
                                        {industry.description}
                                    </p>

                                    <Link href="/services" className={`inline-flex items-center font-bold text-sm uppercase tracking-wide ${industry.color.replace('bg-', 'text-')} hover:underline`}>
                                        View Services <ArrowRight className="w-4 h-4 ml-2" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer Call to Action */}
            <section className="bg-white py-12 border-t text-center">
                <div className="container-custom">
                    <h2 className="text-2xl font-bold text-primary-navy mb-4">Don't see your industry?</h2>
                    <p className="text-gray-600 mb-6">We cover many specialized sectors. Contact us to discuss your specific needs.</p>
                    <Link href="/contact" className="btn-primary">Contact Us</Link>
                </div>
            </section>
        </div>
    );
}

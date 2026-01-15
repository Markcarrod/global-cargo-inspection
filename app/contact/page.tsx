'use client';

import { useState } from 'react';
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    Upload,
    Send,
    Linkedin,
    Twitter,
    Facebook
} from 'lucide-react';

const offices = {
    asia: [
        { country: 'Vietnam', cities: ['Ho Chi Minh City', 'Hanoi'] },
        { country: 'Thailand', cities: ['Bangkok'] },
    ],
    europe: [
        { country: 'Belgium', cities: ['Antwerp'] },
        { country: 'Germany', cities: ['Hamburg'] },
        { country: 'Turkey', cities: ['Istanbul', 'Izmir'] },
    ],
    americas: [
        {
            country: 'Colombia',
            cities: [],
            phone: '+57 302 461 30 83',
            email: 'info@globalcargoinspection.com'
        },
        {
            country: 'Ecuador',
            cities: [],
            phone: '+593 95 882 81 28',
            email: 'info@globalcargoinspection.com'
        },
        {
            country: 'Nicaragua',
            cities: [],
            phone: '+505 8167 1948',
            email: 'info@globalcargoinspection.com'
        },
        { country: 'USA (Head Office)', cities: ['Los Angeles', 'New York'] },
        { country: 'Mexico', cities: ['Mexico City'] },
        { country: 'Brazil', cities: ['Sao Paulo'] },
    ]
};

export default function ContactPage() {
    const [activeTab, setActiveTab] = useState<'asia' | 'europe' | 'americas'>('asia');

    return (
        <div className="bg-neutral-light min-h-screen">
            {/* Header */}
            <section className="bg-primary-navy py-16 text-white text-center">
                <div className="container-custom">
                    <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
                    <p className="text-xl text-gray-200">
                        Get in touch with our global team for inquiries, quotes, or support.
                    </p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                        {/* Contact Form */}
                        <div className="bg-white p-8 rounded-lg shadow-md order-2 lg:order-1">
                            <h2 className="text-2xl font-bold text-primary-navy mb-6">Send us a Message</h2>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                                        <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-orange focus:border-transparent outline-none" placeholder="John Doe" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                        <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-orange focus:border-transparent outline-none" placeholder="john@company.com" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                        <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-orange focus:border-transparent outline-none" placeholder="+1 (555) 000-0000" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                                        <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-orange focus:border-transparent outline-none" placeholder="Company Ltd." />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Service Interested In</label>
                                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-orange focus:border-transparent outline-none bg-white">
                                        <option value="">Select a Service</option>
                                        <option value="pre-shipment">Pre-Shipment Inspection</option>
                                        <option value="container-loading">Container Loading Supervision</option>
                                        <option value="quality-control">Quality Control</option>
                                        <option value="supplier-audit">Supplier Audit</option>
                                        <option value="other">Other / General Inquiry</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                    <textarea rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-orange focus:border-transparent outline-none" placeholder="How can we help you?"></textarea>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Attachments (Optional)</label>
                                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:bg-gray-50 transition-colors cursor-pointer">
                                        <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                                        <p className="text-sm text-gray-500">Click to upload or drag and drop files here</p>
                                    </div>
                                </div>

                                <button type="submit" className="btn-primary w-full py-4 text-lg flex items-center justify-center">
                                    <Send className="w-5 h-5 mr-2" /> Send Message
                                </button>
                            </form>
                        </div>

                        {/* Contact Info & Map */}
                        <div className="space-y-8 order-1 lg:order-2">
                            {/* Info Cards */}
                            <div className="bg-white p-8 rounded-lg shadow-md">
                                <h3 className="text-xl font-bold text-primary-navy mb-6">Head Office Details</h3>
                                <ul className="space-y-6">
                                    <li className="flex items-start">
                                        <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                                            <MapPin className="w-5 h-5 text-primary-navy" />
                                        </div>
                                        <div>
                                            <strong className="block text-neutral-dark mb-1">Address</strong>
                                            <span className="text-gray-600">North America Corporate Headquarters<br />United States</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                                            <Phone className="w-5 h-5 text-primary-navy" />
                                        </div>
                                        <div>
                                            <strong className="block text-neutral-dark mb-1">Phone</strong>
                                            <span className="text-gray-600">+86 21 1234 5678 (Global)<br />+1 800 123 4567 (USA Toll Free)</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                                            <Mail className="w-5 h-5 text-primary-navy" />
                                        </div>
                                        <div>
                                            <strong className="block text-neutral-dark mb-1">Email</strong>
                                            <span className="text-gray-600">info@globalcargoinspection.com</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                                            <Clock className="w-5 h-5 text-primary-navy" />
                                        </div>
                                        <div>
                                            <strong className="block text-neutral-dark mb-1">Business Hours</strong>
                                            <span className="text-gray-600">Mon - Fri: 9:00 AM - 6:00 PM (Local Time)<br />24/7 Support for Urgent Inquiries</span>
                                        </div>
                                    </li>
                                </ul>

                                <div className="mt-8 pt-8 border-t border-gray-100 flex gap-4">
                                    <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary-navy hover:text-white transition-colors">
                                        <Linkedin className="w-5 h-5" />
                                    </a>
                                    <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary-navy hover:text-white transition-colors">
                                        <Twitter className="w-5 h-5" />
                                    </a>
                                    <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary-navy hover:text-white transition-colors">
                                        <Facebook className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>

                            {/* Map Placeholder */}
                            <div className="bg-gray-200 rounded-lg shadow-md h-64 overflow-hidden relative">
                                <div className="absolute inset-0 flex items-center justify-center bg-gray-300">
                                    <p className="text-gray-500 font-medium">Interactive Google Map would load here</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Global Offices Section with Tabs */}
            <section className="bg-white section-padding border-t">
                <div className="container-custom">
                    <h2 className="text-3xl font-bold text-primary-navy text-center mb-8">Our Global Offices</h2>

                    {/* Tabs */}
                    <div className="flex justify-center mb-10">
                        <div className="inline-flex bg-gray-100 rounded-lg p-1">
                            {(['asia', 'europe', 'americas'] as const).map((region) => (
                                <button
                                    key={region}
                                    onClick={() => setActiveTab(region)}
                                    className={`px-8 py-3 rounded-md text-sm font-bold uppercase tracking-wide transition-all ${activeTab === region
                                        ? 'bg-white text-accent-orange shadow-sm'
                                        : 'text-gray-500 hover:text-gray-700'
                                        }`}
                                >
                                    {region}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Tab Content */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {offices[activeTab].map((item: any, index: number) => (
                            <div key={index} className="border border-gray-200 rounded-lg p-6 hover:border-accent-orange transition-colors">
                                <h3 className="text-lg font-bold text-primary-navy mb-3">{item.country}</h3>
                                {item.phone && (
                                    <div className="flex items-center text-gray-600 text-sm mb-2">
                                        <Phone className="w-3 h-3 mr-2 text-gray-400" />
                                        {item.phone}
                                    </div>
                                )}
                                {item.email && (
                                    <div className="flex items-center text-gray-600 text-xs mb-2 break-all">
                                        <Mail className="w-3 h-3 mr-2 text-gray-400 flex-shrink-0" />
                                        {item.email}
                                    </div>
                                )}
                                <ul className="space-y-2">
                                    {item.cities && item.cities.map((city: string, idx: number) => (
                                        <li key={idx} className="flex items-center text-gray-600 text-sm">
                                            <MapPin className="w-3 h-3 mr-2 text-gray-400" />
                                            {city}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

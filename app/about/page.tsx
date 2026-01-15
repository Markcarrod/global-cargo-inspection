'use client';

import Image from 'next/image';
import {
    Award,
    Globe,
    Users,
    Clock,
    ShieldCheck,
    Briefcase,
    MapPin,
    CheckCircle,
    TrendingUp
} from 'lucide-react';

export default function AboutPage() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative h-[500px] flex items-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: 'url(/images/about-hero-gci.png)',
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-navy/90 to-primary-navy/40"></div>
                </div>

                <div className="container-custom relative z-10 text-white">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-md" style={{ color: 'white' }}>
                            Ensuring Quality Across Global Supply Chains Since 2010
                        </h1>
                        <p className="text-xl text-gray-100 max-w-2xl leading-relaxed">
                            We are a dedicated team of professionals committed to protecting your interests and ensuring product quality worldwide.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission & Values */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-primary-navy mb-6">Our Mission</h2>
                            <p className="text-lg text-neutral-dark mb-8 leading-relaxed">
                                To provide thorough, reliable, and timely inspection services that empower businesses to trade with confidence. We strive to be the eyes and ears of our clients on the factory floor, ensuring every product meets their exacting standards.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                                        <ShieldCheck className="w-6 h-6 text-primary-navy" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-primary-navy mb-2">Integrity</h3>
                                        <p className="text-neutral-dark">Uncompromising honesty and transparency in every report we deliver.</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                                        <Award className="w-6 h-6 text-primary-navy" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-primary-navy mb-2">Excellence</h3>
                                        <p className="text-neutral-dark">Commitment to the highest standards of inspection and service quality.</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                                        <Clock className="w-6 h-6 text-primary-navy" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-primary-navy mb-2">Reliability</h3>
                                        <p className="text-neutral-dark">Consistently accurate results delivered when you need them.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-neutral-light p-6 rounded-lg text-center h-48 flex flex-col items-center justify-center">
                                <div className="text-4xl font-bold text-accent-orange mb-2">15+</div>
                                <div className="text-primary-navy font-semibold">Years Experience</div>
                            </div>
                            <div className="bg-primary-navy p-6 rounded-lg text-center h-48 flex flex-col items-center justify-center text-white">
                                <div className="text-4xl font-bold mb-2">15+</div>
                                <div className="font-semibold">Countries Covered</div>
                            </div>
                            <div className="bg-neutral-light p-6 rounded-lg text-center h-48 flex flex-col items-center justify-center">
                                <div className="text-4xl font-bold text-accent-orange mb-2">50k+</div>
                                <div className="text-primary-navy font-semibold">Inspections Done</div>
                            </div>
                            <div className="bg-neutral-light p-6 rounded-lg text-center h-48 flex flex-col items-center justify-center">
                                <div className="text-4xl font-bold text-primary-navy mb-2">200+</div>
                                <div className="text-primary-navy font-semibold">Expert Inspectors</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="bg-neutral-light section-padding">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-primary-navy mb-4">Our Journey</h2>
                        <p className="text-lg text-neutral-dark">A history of growth and commitment to quality</p>
                    </div>

                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-300"></div>

                        <div className="space-y-12">
                            {/* 2010 */}
                            <div className="flex flex-col md:flex-row items-center justify-between">
                                <div className="md:w-5/12 text-center md:text-right p-4">
                                    <h3 className="text-2xl font-bold text-accent-orange">2010</h3>
                                    <h4 className="text-xl font-bold text-primary-navy mb-2">Founded</h4>
                                    <p className="text-neutral-dark">Global Cargo Inspection was originally founded in Belgium with a vision to standardize quality control.</p>
                                </div>
                                <div className="w-8 h-8 bg-primary-navy rounded-full border-4 border-white shadow-md z-10 flex-shrink-0 my-4 md:my-0"></div>
                                <div className="md:w-5/12 p-4"></div>
                            </div>

                            {/* 2015 */}
                            <div className="flex flex-col md:flex-row items-center justify-between">
                                <div className="md:w-5/12 p-4 order-3 md:order-1"></div>
                                <div className="w-8 h-8 bg-accent-orange rounded-full border-4 border-white shadow-md z-10 flex-shrink-0 my-4 md:my-0 order-2"></div>
                                <div className="md:w-5/12 text-center md:text-left p-4 order-1 md:order-3">
                                    <h3 className="text-2xl font-bold text-accent-orange">2015</h3>
                                    <h4 className="text-xl font-bold text-primary-navy mb-2">Expansion to Southeast Asia</h4>
                                    <p className="text-neutral-dark">Opened offices in Vietnam, Thailand, and Indonesia to support growing manufacturing hubs.</p>
                                </div>
                            </div>

                            {/* 2020 */}
                            <div className="flex flex-col md:flex-row items-center justify-between">
                                <div className="md:w-5/12 text-center md:text-right p-4">
                                    <h3 className="text-2xl font-bold text-accent-orange">2020</h3>
                                    <h4 className="text-xl font-bold text-primary-navy mb-2">Digital Transformation</h4>
                                    <p className="text-neutral-dark">Launched our digital reporting platform for real-time inspection updates.</p>
                                </div>
                                <div className="w-8 h-8 bg-primary-navy rounded-full border-4 border-white shadow-md z-10 flex-shrink-0 my-4 md:my-0"></div>
                                <div className="md:w-5/12 p-4"></div>
                            </div>

                            {/* 2025 */}
                            <div className="flex flex-col md:flex-row items-center justify-between">
                                <div className="md:w-5/12 p-4 order-3 md:order-1"></div>
                                <div className="w-8 h-8 bg-accent-orange rounded-full border-4 border-white shadow-md z-10 flex-shrink-0 my-4 md:my-0 order-2"></div>
                                <div className="md:w-5/12 text-center md:text-left p-4 order-1 md:order-3">
                                    <h3 className="text-2xl font-bold text-accent-orange">2025</h3>
                                    <h4 className="text-xl font-bold text-primary-navy mb-2">Global Leader</h4>
                                    <p className="text-neutral-dark">Celebrating 15 years of excellence with coverage in over 15 countries.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership Team */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-primary-navy mb-4">Our Leadership</h2>
                        <p className="text-lg text-neutral-dark">Guided by industry veterans</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Leader 1 */}
                        <div className="bg-white rounded-lg overflow-hidden shadow-md text-center group hover:-translate-y-2 transition-transform duration-300">
                            <div className="h-64 bg-gray-200 relative overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center bg-gray-300 text-gray-500">
                                    <Users className="w-16 h-16 opacity-50" />
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-primary-navy">David Chen</h3>
                                <p className="text-accent-orange font-medium mb-4">CEO & Founder</p>
                                <p className="text-sm text-gray-600">20+ years in supply chain management and quality assurance across Asia and Europe.</p>
                            </div>
                        </div>

                        {/* Leader 2 */}
                        <div className="bg-white rounded-lg overflow-hidden shadow-md text-center group hover:-translate-y-2 transition-transform duration-300">
                            <div className="h-64 bg-gray-200 relative overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center bg-gray-300 text-gray-500">
                                    <Users className="w-16 h-16 opacity-50" />
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-primary-navy">Sarah Meyer</h3>
                                <p className="text-accent-orange font-medium mb-4">Head of Operations</p>
                                <p className="text-sm text-gray-600">Expert in operational efficiency and global team coordination with a focus on textiles.</p>
                            </div>
                        </div>

                        {/* Leader 3 */}
                        <div className="bg-white rounded-lg overflow-hidden shadow-md text-center group hover:-translate-y-2 transition-transform duration-300">
                            <div className="h-64 bg-gray-200 relative overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center bg-gray-300 text-gray-500">
                                    <Users className="w-16 h-16 opacity-50" />
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-primary-navy">James Wilson</h3>
                                <p className="text-accent-orange font-medium mb-4">Technical Director</p>
                                <p className="text-sm text-gray-600">Certified ISO auditor ensuring our standards meet and exceed international requirements.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Global Locations Placeholder Map */}
            <section className="bg-primary-navy py-16 text-white text-center">
                <div className="container-custom">
                    <Globe className="w-16 h-16 text-accent-orange mx-auto mb-6" />
                    <h2 className="text-4xl font-bold mb-6">Global Presence</h2>
                    <p className="text-xl max-w-3xl mx-auto mb-10 text-gray-200">
                        With offices and inspectors strategically located in major manufacturing hubs, we are where you need us to be.
                    </p>
                    <div className="bg-white/10 rounded-lg p-8 backdrop-blur-sm">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            <div>
                                <h3 className="text-xl font-bold text-accent-orange mb-2">Asia</h3>
                                <ul className="text-sm space-y-1 text-white">
                                    <li>Vietnam</li>
                                    <li>Thailand</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-accent-orange mb-2">Europe</h3>
                                <ul className="text-sm space-y-1 text-white">
                                    <li>Belgium</li>
                                    <li>Germany</li>
                                    <li>Turkey</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-accent-orange mb-2">Americas</h3>
                                <ul className="text-sm space-y-1 text-white">
                                    <li>Colombia</li>
                                    <li>Ecuador</li>
                                    <li>Nicaragua</li>
                                    <li>USA (Head Office)</li>
                                    <li>Mexico</li>
                                    <li>Brazil</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-accent-orange mb-2">Middle East</h3>
                                <ul className="text-sm space-y-1 text-white">
                                    <li>Saudi Arabia</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Certifications */}
            <section className="section-padding bg-white">
                <div className="container-custom text-center">
                    <h2 className="text-3xl font-bold text-primary-navy mb-8">Accreditations & Memberships</h2>
                    <div className="flex flex-wrap justify-center gap-12 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Placeholders for certification logos */}
                        <div className="text-2xl font-bold text-gray-400 border-2 border-gray-300 p-4 rounded-lg">ISO 9001:2015</div>
                        <div className="text-2xl font-bold text-gray-400 border-2 border-gray-300 p-4 rounded-lg">CNAS Accredited</div>
                        <div className="text-2xl font-bold text-gray-400 border-2 border-gray-300 p-4 rounded-lg">IFIA Member</div>
                        <div className="text-2xl font-bold text-gray-400 border-2 border-gray-300 p-4 rounded-lg">AQSIQ Licensed</div>
                    </div>
                </div>
            </section>
        </div>
    );
}

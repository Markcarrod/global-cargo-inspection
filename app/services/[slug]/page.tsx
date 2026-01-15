'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import {
    CheckCircle,
    Clock,
    FileText,
    MapPin,
    ChevronRight,
    ClipboardList,
    ShieldCheck,
    Package,
    Factory,
    AlertTriangle
} from 'lucide-react';

// Data for services (simulated database)
const servicesData = {
    'pre-shipment-inspection': {
        title: 'Pre-Shipment Inspection',
        description: 'Ensure your goods meet quality standards and specifications before they leave the factory.',
        headerImage: '/images/factory-inspection.png',
        quickFacts: [
            { label: 'Turnaround Time', value: '24-48 Hours' },
            { label: 'Report Delivery', value: 'Same Day' },
            { label: 'Price', value: 'From $299' },
            { label: 'Coverage', value: 'Global' },
        ],
        overview: 'Pre-Shipment Inspection (PSI) is a systematic inspection of units selected at random from all batches of your order. This inspection is conducted when your production is at least 80% complete and packed. It is the most effective way to confirm that the quality, quantity, labeling, and packing of your shipment conform to your specifications and purchase orders.',
        whatWeInspect: [
            'Product quantity and workmanship',
            'Style, color, and material',
            'Dimensions and measurements',
            'Labeling and marking',
            'Packaging and packing',
            'Functional testing'
        ],
        processSteps: [
            { title: 'Booking', description: 'Schedule inspection 3 days in advance' },
            { title: 'Preparation', description: 'Inspector prepares protocol based on your specs' },
            { title: 'Inspection', description: 'On-site execution at supplier factory' },
            { title: 'Reporting', description: 'Detailed report with photos within 24 hours' },
            { title: 'Decision', description: 'You approve or reject the shipment' }
        ],
        benefits: [
            'Avoid paying for defective goods',
            'Ensure compliance with safety standards',
            'Protect your brand reputation',
            'Monitor supplier performance'
        ],
        industries: ['Consumer Electronics', 'Textiles & Apparel', 'Home & Garden', 'Industrial Machinery', 'Toys']
    },
    'container-loading': {
        title: 'Container Loading Supervision',
        description: 'Professional oversight of container loading to prevent cargo damage and ensure proper handling.',
        headerImage: '/images/services-header.png',
        quickFacts: [
            { label: 'Turnaround Time', value: '4-6 Hours' },
            { label: 'Report Delivery', value: '12 Hours' },
            { label: 'Price', value: 'From $249' },
            { label: 'Coverage', value: 'Worldwide' },
        ],
        overview: 'Container Loading Supervision (CLS) ensures that your cargo is loaded correctly, safely, and in accordance with shipping regulations. Our experienced inspectors monitor the entire loading process to prevent damage during transit, verify cargo count and condition, and ensure proper securing methods are used. This service is crucial for protecting high-value shipments and preventing insurance claims.',
        whatWeInspect: [
            'Container condition and cleanliness',
            'Proper cargo arrangement and weight distribution',
            'Securing and blocking methods',
            'Carton count and verification',
            'Damage prevention measures',
            'Seal integrity and documentation'
        ],
        processSteps: [
            { title: 'Pre-Loading', description: 'Inspect container condition and cleanliness' },
            { title: 'Loading Process', description: 'Monitor cargo placement and securing methods' },
            { title: 'Count Verification', description: 'Verify quantities match shipping documents' },
            { title: 'Documentation', description: 'Photo documentation of the entire process' },
            { title: 'Sealing', description: 'Record seal number and issue completion certificate' }
        ],
        benefits: [
            'Prevent cargo damage during transit',
            'Verify accurate quantities are loaded',
            'Ensure compliance with shipping regulations',
            'Reduce insurance claims and losses'
        ],
        industries: ['Electronics', 'Furniture', 'Automotive Parts', 'Heavy Machinery', 'Food & Beverage']
    },
    'quality-control': {
        title: 'Quality Control Inspection',
        description: 'Rigorous quality inspections throughout the production process to maintain the highest standards.',
        headerImage: '/images/factory-inspection.png',
        quickFacts: [
            { label: 'Frequency', value: 'During Production' },
            { label: 'Report Delivery', value: '24 Hours' },
            { label: 'Price', value: 'From $349' },
            { label: 'Coverage', value: 'Global' },
        ],
        overview: 'During Production Inspection (DUPRO) or In-Process Quality Control (IPQC) allows you to identify and correct quality issues before production is complete. Our inspectors visit the factory when 20-80% of production is finished to check product quality, manufacturing processes, and ensure production is on schedule. Early detection of problems saves time and money by allowing corrections before final production.',
        whatWeInspect: [
            'Production progress and timeline',
            'Product quality and specifications',
            'Manufacturing process compliance',
            'Raw material quality',
            'Workmanship standards',
            'Quality control procedures'
        ],
        processSteps: [
            { title: 'Planning', description: 'Schedule inspection during critical production phase' },
            { title: 'On-Site Visit', description: 'Visit factory and assess production status' },
            { title: 'Quality Testing', description: 'Sample testing and quality verification' },
            { title: 'Issue Identification', description: 'Identify defects or non-conformities' },
            { title: 'Recommendations', description: 'Provide corrective action recommendations' }
        ],
        benefits: [
            'Early detection of quality problems',
            'Prevent mass production of defective goods',
            'Monitor production timeline adherence',
            'Reduce final inspection failures'
        ],
        industries: ['Manufacturing', 'Textiles', 'Electronics', 'Automotive', 'Consumer Goods']
    },
    'supplier-audit': {
        title: 'Supplier Audit',
        description: 'Thorough evaluation of supplier capabilities, facilities, and processes to ensure reliability.',
        headerImage: '/images/services-header.png',
        quickFacts: [
            { label: 'Duration', value: '1-2 Days' },
            { label: 'Report Delivery', value: '3-5 Days' },
            { label: 'Price', value: 'From $799' },
            { label: 'Coverage', value: 'Global' },
        ],
        overview: 'Supplier Audit services provide comprehensive evaluation of your potential or current suppliers. Our experienced auditors assess manufacturing capabilities, quality management systems, production capacity, social compliance, and overall reliability. This due diligence helps you make informed sourcing decisions and ensure your suppliers meet your quality and ethical standards.',
        whatWeInspect: [
            'Factory infrastructure and equipment',
            'Quality management systems (ISO, etc.)',
            'Production capacity and capabilities',
            'Worker conditions and safety',
            'Environmental compliance',
            'Financial stability indicators'
        ],
        processSteps: [
            { title: 'Preparation', description: 'Define audit scope and requirements' },
            { title: 'On-Site Visit', description: 'Comprehensive facility walkthrough' },
            { title: 'Documentation Review', description: 'Examine certifications and records' },
            { title: 'Interviews', description: 'Speak with management and workers' },
            { title: 'Final Report', description: 'Detailed audit report with recommendations' }
        ],
        benefits: [
            'Mitigate supply chain risks',
            'Verify supplier claims and capabilities',
            'Ensure ethical and social compliance',
            'Make informed sourcing decisions'
        ],
        industries: ['All Industries', 'Manufacturing', 'Textiles', 'Electronics', 'Food Production']
    },
    'product-testing': {
        title: 'Product Testing & Certification',
        description: 'Advanced testing services to verify product safety, performance, and regulatory compliance.',
        headerImage: '/images/factory-inspection.png',
        quickFacts: [
            { label: 'Testing Time', value: '3-10 Days' },
            { label: 'Report Delivery', value: '5-7 Days' },
            { label: 'Price', value: 'From $499' },
            { label: 'Accreditation', value: 'ISO 17025' },
        ],
        overview: 'Our product testing services ensure your products meet international safety standards and regulatory requirements. We conduct comprehensive laboratory testing for physical, chemical, and performance characteristics. Our accredited laboratories test according to standards such as ASTM, EN, ISO, and country-specific regulations (CE, FCC, CPSIA, RoHS, REACH). Certification support ensures your products can be legally sold in target markets.',
        whatWeInspect: [
            'Physical and mechanical properties',
            'Chemical composition analysis',
            'Safety and performance testing',
            'Regulatory compliance verification',
            'Electrical safety testing',
            'Environmental testing (RoHS, REACH)'
        ],
        processSteps: [
            { title: 'Sample Collection', description: 'Collect representative product samples' },
            { title: 'Lab Testing', description: 'Comprehensive testing at accredited laboratory' },
            { title: 'Analysis', description: 'Evaluate results against standards' },
            { title: 'Certification', description: 'Issue compliance certificates if passed' },
            { title: 'Final Report', description: 'Detailed test report with all findings' }
        ],
        benefits: [
            'Ensure regulatory compliance',
            'Reduce liability and recall risks',
            'Access international markets',
            'Verify product safety and quality'
        ],
        industries: ['Electronics', 'Toys', 'Textiles', 'Cosmetics', 'Food & Beverage', 'Medical Devices']
    },
    'expediting': {
        title: 'Expediting Services',
        description: 'Proactive monitoring and coordination to keep your production and delivery schedules on track.',
        headerImage: '/images/services-header.png',
        quickFacts: [
            { label: 'Frequency', value: 'Weekly/Bi-Weekly' },
            { label: 'Report Delivery', value: 'Real-Time' },
            { label: 'Price', value: 'From $399/month' },
            { label: 'Coverage', value: 'Global' },
        ],
        overview: 'Production Expediting services help you stay informed about production progress and prevent delays before they impact your schedule. Our inspectors make regular visits to your supplier to monitor production status, verify timeline adherence, and identify potential bottlenecks. You receive timely updates and can take proactive measures to keep your projects on schedule. This service is essential for time-sensitive orders and just-in-time delivery requirements.',
        whatWeInspect: [
            'Production progress vs. schedule',
            'Raw material availability',
            'Manufacturing bottlenecks',
            'Quality issues causing delays',
            'Shipping readiness status',
            'Supplier communication accuracy'
        ],
        processSteps: [
            { title: 'Schedule Setup', description: 'Define monitoring frequency and milestones' },
            { title: 'Regular Visits', description: 'Weekly or bi-weekly factory visits' },
            { title: 'Progress Monitoring', description: 'Track production against timeline' },
            { title: 'Issue Alerts', description: 'Immediate notification of delays or problems' },
            { title: 'Status Reports', description: 'Regular updates and recommendations' }
        ],
        benefits: [
            'Prevent shipment delays',
            'Early warning of production issues',
            'Improved supplier accountability',
            'Better inventory planning'
        ],
        industries: ['Retail', 'E-commerce', 'Fashion', 'Seasonal Products', 'Just-in-Time Manufacturing']
    },
    // Fallback for other services
    'default': {
        title: 'Service Detail',
        description: 'Detailed information about our inspection services.',
        headerImage: '/images/services-header.png',
        quickFacts: [],
        overview: 'Detailed description of this service coming soon.',
        whatWeInspect: [],
        processSteps: [],
        benefits: [],
        industries: []
    }
};

export default function ServiceDetailPage() {
    const params = useParams();
    const slug = params?.slug as string;
    const service = servicesData[slug as keyof typeof servicesData] || servicesData['default'];

    // If we're on the specific Pre-Shipment Inspection page or a generic one, render content
    // In a real app we'd handle 404s here

    return (
        <div className="bg-neutral-light min-h-screen">
            {/* Breadcrumb */}
            <div className="bg-white border-b">
                <div className="container-custom py-4">
                    <div className="flex items-center text-sm text-neutral-dark">
                        <Link href="/" className="hover:text-accent-orange transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
                        <Link href="/services" className="hover:text-accent-orange transition-colors">Services</Link>
                        <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
                        <span className="font-semibold text-primary-navy">{service.title}</span>
                    </div>
                </div>
            </div>

            {/* Hero Header */}
            <section className="relative h-[300px] flex items-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${service.headerImage})`,
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-navy/90 to-primary-navy/60"></div>
                </div>

                <div className="container-custom relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-md" style={{ color: 'white' }}>
                        {service.title}
                    </h1>
                    <p className="text-xl text-gray-100 max-w-2xl">
                        {service.description}
                    </p>
                </div>
            </section>

            {/* Main Content Layout */}
            <div className="container-custom py-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* LEFT SIDEBAR - Quick Facts (lg:col-span-3) */}
                    <div className="lg:col-span-3">
                        <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-accent-orange sticky top-24">
                            <h3 className="text-lg font-bold text-primary-navy mb-4 flex items-center">
                                <ClipboardList className="w-5 h-5 mr-2 text-accent-orange" />
                                Quick Facts
                            </h3>
                            <div className="space-y-4">
                                {service.quickFacts.map((fact, index) => (
                                    <div key={index} className="border-b border-gray-100 last:border-0 pb-3 last:pb-0">
                                        <p className="text-xs text-gray-500 uppercase font-semibold">{fact.label}</p>
                                        <p className="text-neutral-dark font-medium">{fact.value}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 pt-4 border-t border-gray-100">
                                <h4 className="text-sm font-bold text-primary-navy mb-2">Industries Served</h4>
                                <div className="flex flex-wrap gap-2">
                                    {service.industries.map((industry, i) => (
                                        <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                                            {industry}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* MAIN CONTENT (lg:col-span-6) */}
                    <div className="lg:col-span-6 space-y-10">

                        {/* Overview */}
                        <section className="bg-white p-8 rounded-lg shadow-sm">
                            <h2 className="text-2xl font-bold text-primary-navy mb-4">Overview</h2>
                            <p className="text-neutral-dark leading-relaxed">
                                {service.overview}
                            </p>
                        </section>

                        {/* What We Inspect */}
                        <section className="bg-white p-8 rounded-lg shadow-sm">
                            <h2 className="text-2xl font-bold text-primary-navy mb-6">What We Inspect</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {service.whatWeInspect.map((item, index) => (
                                    <div key={index} className="flex items-start">
                                        <CheckCircle className="w-5 h-5 text-success mr-3 flex-shrink-0 mt-0.5" />
                                        <span className="text-neutral-dark">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Process Steps */}
                        <section className="bg-white p-8 rounded-lg shadow-sm">
                            <h2 className="text-2xl font-bold text-primary-navy mb-6">Inspection Process</h2>
                            <div className="space-y-6">
                                {service.processSteps.map((step, index) => (
                                    <div key={index} className="flex">
                                        <div className="flex-shrink-0 mr-4 flex flex-col items-center">
                                            <div className="w-8 h-8 rounded-full bg-primary-navy text-white flex items-center justify-center font-bold text-sm">
                                                {index + 1}
                                            </div>
                                            {index < service.processSteps.length - 1 && (
                                                <div className="w-0.5 h-full bg-gray-200 mt-2"></div>
                                            )}
                                        </div>
                                        <div className="pb-6">
                                            <h4 className="text-lg font-bold text-primary-navy">{step.title}</h4>
                                            <p className="text-gray-600 text-sm mt-1">{step.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Benefits */}
                        <section>
                            <h2 className="text-2xl font-bold text-primary-navy mb-6">Key Benefits</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {service.benefits.map((benefit, index) => (
                                    <div key={index} className="bg-white p-4 rounded-lg border-l-4 border-accent-orange shadow-sm flex items-start">
                                        <ShieldCheck className="w-6 h-6 text-primary-navy mr-3 flex-shrink-0" />
                                        <span className="font-medium text-neutral-dark">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                    </div>

                    {/* RIGHT SIDEBAR - Request Form (lg:col-span-3) */}
                    <div className="lg:col-span-3">
                        <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
                            <h3 className="text-xl font-bold text-primary-navy mb-2">Request This Service</h3>
                            <p className="text-sm text-gray-500 mb-6">Get a quote within 24 hours</p>

                            <form className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-orange focus:border-transparent"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Business Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-orange focus:border-transparent"
                                        placeholder="john@company.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="product" className="block text-sm font-medium text-gray-700 mb-1">Product Type</label>
                                    <input
                                        type="text"
                                        id="product"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-orange focus:border-transparent"
                                        placeholder="e.g. Electronics, Textiles"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Inspection Location</label>
                                    <input
                                        type="text"
                                        id="location"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-orange focus:border-transparent"
                                        placeholder="City, Country"
                                    />
                                </div>

                                <div className="pt-2">
                                    <button
                                        type="submit"
                                        className="w-full bg-accent-orange text-white font-bold py-3 px-4 rounded-md hover:bg-orange-600 transition-colors shadow-sm"
                                    >
                                        Request Quote
                                    </button>
                                </div>
                            </form>

                            <div className="mt-6 flex items-center justify-center space-x-2 text-gray-500 text-sm">
                                <ShieldCheck className="w-4 h-4" />
                                <span>Secure & Confidential</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Related Services (Footer area) */}
            <div className="bg-white border-t py-12">
                <div className="container-custom">
                    <h3 className="text-2xl font-bold text-primary-navy mb-8 text-center">Related Services</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Link href="/services/container-loading" className="block group">
                            <div className="border rounded-lg p-6 hover:shadow-lg transition-all h-full">
                                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                                    <Package className="w-6 h-6 text-primary-navy" />
                                </div>
                                <h4 className="font-bold text-lg text-primary-navy mb-2 group-hover:text-accent-orange transition-colors">Container Loading</h4>
                                <p className="text-sm text-gray-600">Ensure proper handling and loading of your cargo.</p>
                            </div>
                        </Link>

                        <Link href="/services/supplier-audit" className="block group">
                            <div className="border rounded-lg p-6 hover:shadow-lg transition-all h-full">
                                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                                    <Factory className="w-6 h-6 text-primary-navy" />
                                </div>
                                <h4 className="font-bold text-lg text-primary-navy mb-2 group-hover:text-accent-orange transition-colors">Supplier Audit</h4>
                                <p className="text-sm text-gray-600">Evaluate supplier capabilities and compliance.</p>
                            </div>
                        </Link>

                        <Link href="/services/quality-control" className="block group">
                            <div className="border rounded-lg p-6 hover:shadow-lg transition-all h-full">
                                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                                    <AlertTriangle className="w-6 h-6 text-primary-navy" />
                                </div>
                                <h4 className="font-bold text-lg text-primary-navy mb-2 group-hover:text-accent-orange transition-colors">Quality Control</h4>
                                <p className="text-sm text-gray-600">Rigorous inspections throughout production.</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

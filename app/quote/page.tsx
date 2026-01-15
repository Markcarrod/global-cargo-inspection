'use client';

import { useState } from 'react';
import {
    CheckCircle,
    ChevronRight,
    ChevronLeft,
    ShieldCheck,
    Clock,
    FileCheck,
    Search,
    Container,
    ClipboardCheck,
    Building2,
    FlaskConical
} from 'lucide-react';

const steps = [
    { id: 1, title: 'Service Details' },
    { id: 2, title: 'Product Info' },
    { id: 3, title: 'Inspection' },
    { id: 4, title: 'Contact' },
];

export default function QuotePage() {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        serviceType: '',
        productName: '',
        productCategory: '',
        quantity: '',
        inspectionDate: '',
        inspectionLocation: '',
        requirements: '',
        fullName: '',
        email: '',
        phone: '',
        companyName: ''
    });

    const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 4));
    const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleServiceSelect = (service: string) => {
        setFormData(prev => ({ ...prev, serviceType: service }));
    };

    return (
        <div className="bg-neutral-light min-h-screen py-12">
            <div className="container-custom">
                <div className="max-w-6xl mx-auto">

                    <div className="text-center mb-10">
                        <h1 className="text-4xl font-bold text-primary-navy mb-4">Request a Quote</h1>
                        <p className="text-gray-600">Tell us about your needs and get a comprehensive quote within 24 hours.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        {/* Main Form Area */}
                        <div className="lg:col-span-8">
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden">

                                {/* Progress Bar */}
                                <div className="bg-gray-50 border-b p-6">
                                    <div className="flex items-center justify-between relative">
                                        {/* Line behind circles */}
                                        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-1 bg-gray-200 -z-0"></div>
                                        <div
                                            className="absolute left-0 top-1/2 transform -translate-y-1/2 h-1 bg-accent-orange -z-0 transition-all duration-300"
                                            style={{ width: `${((currentStep - 1) / 3) * 100}%` }}
                                        ></div>

                                        {steps.map((step) => (
                                            <div key={step.id} className="relative z-10 flex flex-col items-center">
                                                <div
                                                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 border-4 ${currentStep >= step.id
                                                        ? 'bg-accent-orange text-white border-white shadow-md'
                                                        : 'bg-white text-gray-400 border-gray-200'
                                                        }`}
                                                >
                                                    {currentStep > step.id ? <CheckCircle className="w-6 h-6" /> : step.id}
                                                </div>
                                                <span className={`text-xs font-semibold mt-2 absolute -bottom-6 w-32 text-center ${currentStep >= step.id ? 'text-primary-navy' : 'text-gray-400'
                                                    }`}>
                                                    {step.title}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="p-8 mt-4">
                                    {/* Step 1: Service Details */}
                                    {currentStep === 1 && (
                                        <div className="animate-fade-in">
                                            <h2 className="text-2xl font-bold text-primary-navy mb-6">Select Service Type</h2>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {[
                                                    { id: 'psi', title: 'Pre-Shipment Inspection', icon: Search },
                                                    { id: 'cls', title: 'Container Loading', icon: Container },
                                                    { id: 'qc', title: 'Quality Control', icon: ClipboardCheck },
                                                    { id: 'audit', title: 'Supplier Audit', icon: Building2 },
                                                    { id: 'lab', title: 'Product Testing', icon: FlaskConical },
                                                    { id: 'other', title: 'Other Service', icon: FileCheck },
                                                ].map((service) => (
                                                    <div
                                                        key={service.id}
                                                        onClick={() => handleServiceSelect(service.id)}
                                                        className={`border-2 rounded-lg p-4 cursor-pointer hover:border-accent-orange transition-all flex items-center ${formData.serviceType === service.id
                                                            ? 'border-accent-orange bg-orange-50'
                                                            : 'border-gray-200'
                                                            }`}
                                                    >
                                                        <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${formData.serviceType === service.id
                                                            ? 'bg-accent-orange text-white'
                                                            : 'bg-gray-100 text-gray-500'
                                                            }`}>
                                                            <service.icon className="w-6 h-6" />
                                                        </div>
                                                        <span className={`font-bold ${formData.serviceType === service.id ? 'text-primary-navy' : 'text-gray-600'
                                                            }`}>
                                                            {service.title}
                                                        </span>
                                                        {formData.serviceType === service.id && (
                                                            <CheckCircle className="w-5 h-5 text-accent-orange ml-auto" />
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Step 2: Product Info */}
                                    {currentStep === 2 && (
                                        <div className="animate-fade-in">
                                            <h2 className="text-2xl font-bold text-primary-navy mb-6">Product Information</h2>
                                            <div className="space-y-6">
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">Product Name</label>
                                                    <input
                                                        type="text"
                                                        name="productName"
                                                        value={formData.productName}
                                                        onChange={handleChange}
                                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-orange focus:border-transparent outline-none"
                                                        placeholder="e.g. Wireless Headphones"
                                                    />
                                                </div>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700 mb-2">Product Category</label>
                                                        <select
                                                            name="productCategory"
                                                            value={formData.productCategory}
                                                            onChange={handleChange}
                                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-orange focus:border-transparent outline-none bg-white"
                                                        >
                                                            <option value="">Select Category</option>
                                                            <option value="electronics">Electronics</option>
                                                            <option value="textiles">Textiles & Apparel</option>
                                                            <option value="furniture">Furniture</option>
                                                            <option value="toys">Toys</option>
                                                            <option value="industrial">Industrial Goods</option>
                                                            <option value="other">Other</option>
                                                        </select>
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700 mb-2">Total Quantity</label>
                                                        <input
                                                            type="text"
                                                            name="quantity"
                                                            value={formData.quantity}
                                                            onChange={handleChange}
                                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-orange focus:border-transparent outline-none"
                                                            placeholder="e.g. 5000 units"
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">Reference / PO Number (Optional)</label>
                                                    <input
                                                        type="text"
                                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-orange focus:border-transparent outline-none"
                                                        placeholder="e.g. PO-2023-001"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Step 3: Inspection Requirements */}
                                    {currentStep === 3 && (
                                        <div className="animate-fade-in">
                                            <h2 className="text-2xl font-bold text-primary-navy mb-6">Inspection Details</h2>
                                            <div className="space-y-6">
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
                                                        <input
                                                            type="date"
                                                            name="inspectionDate"
                                                            value={formData.inspectionDate}
                                                            onChange={handleChange}
                                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-orange focus:border-transparent outline-none"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700 mb-2">Factory Location (City, Country)</label>
                                                        <input
                                                            type="text"
                                                            name="inspectionLocation"
                                                            value={formData.inspectionLocation}
                                                            onChange={handleChange}
                                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-orange focus:border-transparent outline-none"
                                                            placeholder="e.g. Shenzhen, China"
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">Specific Requirements / AQL</label>
                                                    <textarea
                                                        name="requirements"
                                                        value={formData.requirements}
                                                        onChange={handleChange}
                                                        rows={4}
                                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-orange focus:border-transparent outline-none"
                                                        placeholder="Describe any specific check points, AQL levels, or standards required..."
                                                    ></textarea>
                                                    <p className="text-xs text-gray-500 mt-2">If unsure about AQL levels, leave blank and our team will recommend standard ISO 2859-1.</p>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Step 4: Contact Info */}
                                    {currentStep === 4 && (
                                        <div className="animate-fade-in">
                                            <h2 className="text-2xl font-bold text-primary-navy mb-6">Contact Information</h2>
                                            <div className="space-y-6">
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                                                        <input
                                                            type="text"
                                                            name="fullName"
                                                            value={formData.fullName}
                                                            onChange={handleChange}
                                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-orange focus:border-transparent outline-none"
                                                            placeholder="John Doe"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                                                        <input
                                                            type="text"
                                                            name="companyName"
                                                            value={formData.companyName}
                                                            onChange={handleChange}
                                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-orange focus:border-transparent outline-none"
                                                            placeholder="Company Ltd."
                                                        />
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                                        <input
                                                            type="email"
                                                            name="email"
                                                            value={formData.email}
                                                            onChange={handleChange}
                                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-orange focus:border-transparent outline-none"
                                                            placeholder="john@company.com"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                                        <input
                                                            type="tel"
                                                            name="phone"
                                                            value={formData.phone}
                                                            onChange={handleChange}
                                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-orange focus:border-transparent outline-none"
                                                            placeholder="+1 (555) 000-0000"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Navigation Buttons */}
                                    <div className="flex justify-between mt-10 pt-6 border-t border-gray-100">
                                        {currentStep > 1 ? (
                                            <button
                                                onClick={prevStep}
                                                className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors flex items-center"
                                            >
                                                <ChevronLeft className="w-5 h-5 mr-2" /> Previous
                                            </button>
                                        ) : (
                                            <div></div>
                                        )}

                                        {currentStep < 4 ? (
                                            <button
                                                onClick={nextStep}
                                                className="px-8 py-3 bg-primary-navy text-white font-bold rounded-lg hover:bg-blue-900 transition-colors flex items-center shadow-md"
                                            >
                                                Next Step <ChevronRight className="w-5 h-5 ml-2" />
                                            </button>
                                        ) : (
                                            <button
                                                className="px-8 py-3 bg-accent-orange text-white font-bold rounded-lg hover:bg-orange-600 transition-colors flex items-center shadow-md"
                                            >
                                                Submit Request <CheckCircle className="w-5 h-5 ml-2" />
                                            </button>
                                        )}
                                    </div>

                                </div>
                            </div>
                        </div>

                        {/* Sidebar Information */}
                        <div className="lg:col-span-4 space-y-8">
                            {/* What Happens Next */}
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-lg font-bold text-primary-navy mb-4">What Happens Next?</h3>
                                <div className="space-y-6">
                                    <div className="flex">
                                        <div className="flex-shrink-0 mr-4">
                                            <div className="w-8 h-8 rounded-full bg-blue-100 text-primary-navy flex items-center justify-center font-bold text-sm">1</div>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-primary-navy">We Review Your Request</h4>
                                            <p className="text-sm text-gray-600">Our operations team analyzes your requirements.</p>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div className="flex-shrink-0 mr-4">
                                            <div className="w-8 h-8 rounded-full bg-blue-100 text-primary-navy flex items-center justify-center font-bold text-sm">2</div>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-primary-navy">Receive Quotation</h4>
                                            <p className="text-sm text-gray-600">You'll receive a detailed quote and protocol within 24 hours.</p>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div className="flex-shrink-0 mr-4">
                                            <div className="w-8 h-8 rounded-full bg-blue-100 text-primary-navy flex items-center justify-center font-bold text-sm">3</div>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-primary-navy">Confirm Booking</h4>
                                            <p className="text-sm text-gray-600">Approve the quote and we schedule the inspection.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Trust Indicators */}
                            <div className="bg-primary-navy text-white p-6 rounded-lg shadow-md">
                                <h3 className="text-lg font-bold mb-4">Why Choose Us?</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-center">
                                        <ShieldCheck className="w-5 h-5 text-accent-orange mr-3" />
                                        <span className="text-sm">Secure & Confidential Data</span>
                                    </li>
                                    <li className="flex items-center">
                                        <Clock className="w-5 h-5 text-accent-orange mr-3" />
                                        <span className="text-sm">Response within 1 Hour</span>
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircle className="w-5 h-5 text-accent-orange mr-3" />
                                        <span className="text-sm">No Hidden Fees</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-gray-100 p-6 rounded-lg text-center">
                                <p className="text-sm text-gray-600 mb-2">Need help with this form?</p>
                                <a href="mailto:info@globalcargoinspection.com" className="text-primary-navy font-bold hover:underline">info@globalcargoinspection.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

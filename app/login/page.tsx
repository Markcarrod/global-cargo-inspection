'use client';

import Link from 'next/link';
import {
    Lock,
    FileText,
    ShieldCheck,
    Download,
    User,
    LayoutDashboard
} from 'lucide-react';

export default function LoginPage() {
    return (
        <div className="min-h-screen bg-neutral-light flex items-center justify-center p-4">
            <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">

                {/* Left Side - Login Form */}
                <div className="w-full md:w-1/2 p-8 md:p-12">
                    <div className="text-center mb-8">
                        <div className="text-2xl font-bold text-primary-navy flex items-center justify-center gap-2 mb-2">
                            <ShieldCheck className="w-8 h-8 text-accent-orange" />
                            GCI Portal
                        </div>
                        <p className="text-gray-500 text-sm">Welcome back! Please login to your account.</p>
                    </div>

                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <User className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type="email"
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-orange focus:border-transparent outline-none"
                                    placeholder="john@company.com"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type="password"
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-orange focus:border-transparent outline-none"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center cursor-pointer">
                                <input type="checkbox" className="w-4 h-4 text-accent-orange border-gray-300 rounded focus:ring-accent-orange" />
                                <span className="ml-2 text-gray-600">Remember me</span>
                            </label>
                            <a href="#" className="text-accent-orange font-semibold hover:underline">Forgot password?</a>
                        </div>

                        <button type="submit" className="btn-primary w-full py-3 text-lg font-bold shadow-md hover:shadow-lg transition-all">
                            Sign In
                        </button>
                    </form>

                    <div className="mt-8 text-center text-sm text-gray-500">
                        Don't have an account? <Link href="/contact" className="text-primary-navy font-bold hover:underline">Request Access</Link>
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-100 flex justify-center gap-4 opacity-50 grayscale hover:grayscale-0 transition-all">
                        {/* Security badges placeholder */}
                        <div className="flex items-center gap-1 text-xs font-semibold text-green-600">
                            <Lock className="w-3 h-3" /> SSL Secured
                        </div>
                        <div className="flex items-center gap-1 text-xs font-semibold text-blue-600">
                            <ShieldCheck className="w-3 h-3" /> GDPR Compliant
                        </div>
                    </div>
                </div>

                {/* Right Side - Benefits */}
                <div className="w-full md:w-1/2 bg-primary-navy p-8 md:p-12 text-white flex flex-col justify-center relative overflow-hidden">
                    {/* Background pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '30px 30px' }}></div>
                    </div>

                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold mb-6">Why use the Client Portal?</h2>
                        <ul className="space-y-6">
                            <li className="flex items-start">
                                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 mr-4 backdrop-blur-sm">
                                    <FileText className="w-5 h-5 text-accent-orange" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">Access Reports Instantly</h3>
                                    <p className="text-gray-300 text-sm">View and download inspection reports as soon as they are approved.</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 mr-4 backdrop-blur-sm">
                                    <LayoutDashboard className="w-5 h-5 text-accent-orange" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">Track Requests</h3>
                                    <p className="text-gray-300 text-sm">Real-time status updates on all your pending inspections and audits.</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 mr-4 backdrop-blur-sm">
                                    <Download className="w-5 h-5 text-accent-orange" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">Download Certificates</h3>
                                    <p className="text-gray-300 text-sm">Get your official inspection certificates and compliance documents.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
}

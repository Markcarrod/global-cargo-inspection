import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const footerLinks = {
    services: [
        { name: 'Pre-Shipment Inspection', href: '/services/pre-shipment-inspection' },
        { name: 'Container Loading', href: '/services/container-loading' },
        { name: 'Quality Control', href: '/services/quality-control' },
        { name: 'Supplier Audit', href: '/services/supplier-audit' },
    ],
    company: [
        { name: 'About Us', href: '/about' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'Industries', href: '/industries' },
        { name: 'Testimonials', href: '/testimonials' },
    ],
    resources: [
        { name: 'Blog', href: '/blog' },
        { name: 'FAQ', href: '/faq' },
        { name: 'Pricing', href: '/pricing' },
        { name: 'Contact', href: '/contact' },
    ],
};

export default function Footer() {
    return (
        <footer className="bg-primary-navy text-white">
            <div className="container-custom py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-10 h-10 bg-accent-orange rounded-md flex items-center justify-center">
                                <span className="text-white font-bold text-lg">GCI</span>
                            </div>
                            <div>
                                <div className="text-white font-bold text-base leading-tight">
                                    Global Cargo
                                </div>
                                <div className="text-accent-orange text-xs font-semibold">
                                    Inspection
                                </div>
                            </div>
                        </div>
                        <p className="text-gray-300 text-sm mb-4">
                            Your trusted partner for comprehensive cargo inspection services worldwide.
                        </p>
                        <div className="space-y-2">
                            <div className="flex items-center space-x-2 text-sm text-gray-300">
                                <Mail className="w-4 h-4" />
                                <a href="mailto:info@globalcargoinspection.com" className="hover:text-accent-orange transition-colors">
                                    info@globalcargoinspection.com
                                </a>
                            </div>
                            <div className="flex items-center space-x-2 text-sm text-gray-300">
                                <Phone className="w-4 h-4" />
                                <a href="tel:+1234567890" className="hover:text-accent-orange transition-colors">
                                    +1 (234) 567-890
                                </a>
                            </div>
                            <div className="flex items-center space-x-2 text-sm text-gray-300">
                                <MapPin className="w-4 h-4" />
                                <span>360 E 2nd St, Suite 800, Los Angeles, CA 90012, USA</span>
                            </div>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-4">Services</h3>
                        <ul className="space-y-2">
                            {footerLinks.services.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-300 hover:text-accent-orange transition-colors text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-4">Company</h3>
                        <ul className="space-y-2">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-300 hover:text-accent-orange transition-colors text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources & Newsletter */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-4">Resources</h3>
                        <ul className="space-y-2 mb-6">
                            {footerLinks.resources.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-300 hover:text-accent-orange transition-colors text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* Newsletter */}
                        <div>
                            <h4 className="text-white font-semibold text-sm mb-2">Newsletter</h4>
                            <form className="flex flex-col space-y-2">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="px-3 py-2 rounded-md text-sm text-neutral-dark focus:outline-none focus:ring-2 focus:ring-accent-orange"
                                />
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-accent-orange text-white rounded-md hover:bg-opacity-90 transition-all text-sm font-semibold"
                                >
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm mb-4 md:mb-0">
                        © {new Date().getFullYear()} Global Cargo Inspection. All rights reserved.
                    </p>

                    {/* Social Links */}
                    <div className="flex space-x-4">
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-accent-orange transition-colors"
                        >
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-accent-orange transition-colors"
                        >
                            <Twitter className="w-5 h-5" />
                        </a>
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-accent-orange transition-colors"
                        >
                            <Facebook className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

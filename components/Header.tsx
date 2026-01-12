'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const navigation = [
    { name: 'Home', href: '/' },
    {
        name: 'Services',
        href: '/services',
        submenu: [
            { name: 'Pre-Shipment Inspection', href: '/services/pre-shipment-inspection' },
            { name: 'Container Loading Supervision', href: '/services/container-loading' },
            { name: 'Quality Control', href: '/services/quality-control' },
            { name: 'Supplier Audit', href: '/services/supplier-audit' },
            { name: 'Product Testing', href: '/services/product-testing' },
            { name: 'Expediting Services', href: '/services/expediting' },
        ]
    },
    { name: 'Industries', href: '/industries' },
    { name: 'About', href: '/about' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Contact', href: '/contact' },
];

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <nav className="container-custom">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="w-12 h-12 bg-primary-navy rounded-md flex items-center justify-center">
                            <span className="text-white font-bold text-xl">GCI</span>
                        </div>
                        <div className="hidden md:block">
                            <div className="text-primary-navy font-bold text-lg leading-tight">
                                Global Cargo
                            </div>
                            <div className="text-accent-orange text-sm font-semibold">
                                Inspection
                            </div>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {navigation.map((item) => (
                            <div key={item.name} className="relative group">
                                {item.submenu ? (
                                    <>
                                        <button className="flex items-center space-x-1 text-neutral-dark hover:text-accent-orange transition-colors duration-200 font-medium">
                                            <span>{item.name}</span>
                                            <ChevronDown className="w-4 h-4" />
                                        </button>
                                        <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                            <div className="py-2">
                                                {item.submenu.map((subItem) => (
                                                    <Link
                                                        key={subItem.name}
                                                        href={subItem.href}
                                                        className="block px-4 py-2 text-sm text-neutral-dark hover:bg-neutral-light hover:text-accent-orange transition-colors duration-200"
                                                    >
                                                        {subItem.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <Link
                                        href={item.href}
                                        className="text-neutral-dark hover:text-accent-orange transition-colors duration-200 font-medium"
                                    >
                                        {item.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden lg:block">
                        <Link href="/quote" className="btn-primary">
                            Get a Quote
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="lg:hidden p-2 rounded-md text-neutral-dark hover:bg-neutral-light"
                    >
                        {mobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <div className="lg:hidden py-4 border-t border-neutral-light">
                        {navigation.map((item) => (
                            <div key={item.name}>
                                {item.submenu ? (
                                    <>
                                        <button
                                            onClick={() => setServicesOpen(!servicesOpen)}
                                            className="flex items-center justify-between w-full px-4 py-3 text-neutral-dark hover:bg-neutral-light font-medium"
                                        >
                                            <span>{item.name}</span>
                                            <ChevronDown
                                                className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''
                                                    }`}
                                            />
                                        </button>
                                        {servicesOpen && (
                                            <div className="bg-neutral-light">
                                                {item.submenu.map((subItem) => (
                                                    <Link
                                                        key={subItem.name}
                                                        href={subItem.href}
                                                        className="block px-8 py-2 text-sm text-neutral-dark hover:text-accent-orange"
                                                        onClick={() => setMobileMenuOpen(false)}
                                                    >
                                                        {subItem.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <Link
                                        href={item.href}
                                        className="block px-4 py-3 text-neutral-dark hover:bg-neutral-light font-medium"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                        <div className="px-4 pt-4">
                            <Link
                                href="/quote"
                                className="btn-primary w-full text-center block"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Get a Quote
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}

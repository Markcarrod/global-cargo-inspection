'use client';

import Link from 'next/link';
import {
    Search,
    Calendar,
    Clock,
    User,
    ArrowRight,
    Tag,
    ChevronRight,
    Download,
    Mail,
    FileText
} from 'lucide-react';
import { blogPosts, BlogPost } from '@/app/lib/blogData';

// Data is now imported from @/app/lib/blogData

const featuredPost = blogPosts.find(post => post.featured);
const recentPosts = blogPosts.filter(post => !post.featured);

const categories = [
    { name: 'Industry Insights', count: 12 },
    { name: 'Quality Standards', count: 8 },
    { name: 'Best Practices', count: 15 },
    { name: 'Case Studies', count: 6 },
    { name: 'Technology', count: 4 },
];

export default function BlogPage() {
    return (
        <div className="bg-neutral-light min-h-screen">
            {/* Header */}
            <section className="bg-primary-navy py-16 text-white text-center">
                <div className="container-custom">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Insights & Resources</h1>
                    <p className="text-xl text-gray-200">
                        Expert advice, industry news, and guides on quality control and supply chain management.
                    </p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                        {/* Main Content (Left) */}
                        <div className="lg:col-span-8">

                            {/* Featured Post */}
                            {featuredPost && (
                                <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12 group">
                                    <div className="h-80 relative overflow-hidden">
                                        <div
                                            className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                                            style={{ backgroundImage: `url(${featuredPost.image})` }}
                                        ></div>
                                        <div className="absolute top-4 left-4 bg-accent-orange text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                            {featuredPost.category}
                                        </div>
                                    </div>
                                    <div className="p-8">
                                        <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
                                            <span className="flex items-center"><User className="w-4 h-4 mr-1 text-accent-orange" /> {featuredPost.author}</span>
                                            <span className="flex items-center"><Calendar className="w-4 h-4 mr-1 text-accent-orange" /> {featuredPost.date}</span>
                                            <span className="flex items-center"><Clock className="w-4 h-4 mr-1 text-accent-orange" /> {featuredPost.readTime}</span>
                                        </div>
                                        <h2 className="text-3xl font-bold text-primary-navy mb-4 group-hover:text-accent-orange transition-colors">
                                            <Link href={`/blog/${featuredPost.slug}`}>{featuredPost.title}</Link>
                                        </h2>
                                        <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                                            {featuredPost.excerpt}
                                        </p>
                                        <Link href={`/blog/${featuredPost.slug}`} className="inline-flex items-center font-bold text-primary-navy hover:text-accent-orange transition-colors">
                                            Read Article <ArrowRight className="w-5 h-5 ml-2" />
                                        </Link>
                                    </div>
                                </div>
                            )}

                            {/* Recent Posts Grid */}
                            <h3 className="text-2xl font-bold text-primary-navy mb-6 border-l-4 border-accent-orange pl-3">Recent Articles</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {recentPosts.map((post) => (
                                    <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-all h-full flex flex-col">
                                        <div className="h-48 relative overflow-hidden">
                                            <div
                                                className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                                                style={{ backgroundImage: `url(${post.image})` }}
                                            ></div>
                                            <div className="absolute top-4 left-4 bg-primary-navy/90 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide backdrop-blur-sm">
                                                {post.category}
                                            </div>
                                        </div>
                                        <div className="p-6 flex flex-col flex-grow">
                                            <div className="flex items-center text-xs text-gray-500 mb-3 space-x-3">
                                                <span className="flex items-center"><Calendar className="w-3 h-3 mr-1" /> {post.date}</span>
                                                <span className="flex items-center"><Clock className="w-3 h-3 mr-1" /> {post.readTime}</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-primary-navy mb-3 line-clamp-2 group-hover:text-accent-orange transition-colors">
                                                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                                            </h3>
                                            <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
                                                {post.excerpt}
                                            </p>
                                            <div className="mt-auto pt-4 border-t border-gray-100 font-semibold text-sm">
                                                <Link href={`/blog/${post.slug}`} className="text-primary-navy hover:text-accent-orange transition-colors">
                                                    Read More
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>

                        {/* Sidebar (Right) */}
                        <div className="lg:col-span-4 space-y-8">

                            {/* Search */}
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-lg font-bold text-primary-navy mb-4">Search</h3>
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Search articles..."
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-orange focus:border-transparent outline-none"
                                    />
                                    <Search className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                                </div>
                            </div>

                            {/* Categories */}
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-lg font-bold text-primary-navy mb-4">Categories</h3>
                                <ul className="space-y-2">
                                    {categories.map((cat, idx) => (
                                        <li key={idx}>
                                            <a href="#" className="flex justify-between items-center text-gray-600 hover:text-accent-orange transition-colors p-2 hover:bg-gray-50 rounded-md">
                                                <span>{cat.name}</span>
                                                <span className="bg-gray-100 text-gray-500 text-xs py-1 px-2 rounded-full">{cat.count}</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Newsletter */}
                            <div className="bg-primary-navy p-6 rounded-lg shadow-md text-white">
                                <h3 className="text-lg font-bold mb-2">Subscribe to Newsletter</h3>
                                <p className="text-gray-300 text-sm mb-4">Get the latest industry insights delivered to your inbox.</p>
                                <form className="space-y-3">
                                    <input
                                        type="email"
                                        placeholder="Your Email Address"
                                        className="w-full px-4 py-3 rounded-lg text-gray-900 border-none outline-none focus:ring-2 focus:ring-accent-orange"
                                    />
                                    <button className="w-full bg-accent-orange text-white font-bold py-3 rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center">
                                        <Mail className="w-4 h-4 mr-2" /> Subscribe
                                    </button>
                                </form>
                            </div>

                            {/* Download Resources */}
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-lg font-bold text-primary-navy mb-4">Download Resources</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start p-3 border border-gray-200 rounded-lg hover:border-accent-orange transition-colors cursor-pointer group">
                                        <div className="bg-red-50 text-red-500 p-2 rounded-md mr-3 group-hover:bg-red-100 transition-colors">
                                            <FileText className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm text-primary-navy">ISO 2859-1 Standards PDF</h4>
                                            <span className="text-xs text-gray-500 flex items-center mt-1">
                                                <Download className="w-3 h-3 mr-1" /> 2.4 MB
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex items-start p-3 border border-gray-200 rounded-lg hover:border-accent-orange transition-colors cursor-pointer group">
                                        <div className="bg-red-50 text-red-500 p-2 rounded-md mr-3 group-hover:bg-red-100 transition-colors">
                                            <FileText className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm text-primary-navy">2026 Inspection Guide</h4>
                                            <span className="text-xs text-gray-500 flex items-center mt-1">
                                                <Download className="w-3 h-3 mr-1" /> 5.1 MB
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

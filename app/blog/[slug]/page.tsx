import { blogPosts, BlogPost } from '@/app/lib/blogData';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
    Calendar,
    Clock,
    User,
    ArrowLeft,
    Share2,
    Tag
} from 'lucide-react';

interface BlogPostPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    // Related posts (simple strategy: same category or just next ones)
    const relatedPosts = blogPosts
        .filter(p => p.id !== post.id && p.category === post.category)
        .slice(0, 2);

    return (
        <article className="bg-neutral-light min-h-screen">
            {/* Header/Hero */}
            <header className="bg-primary-navy text-white relative py-20">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute inset-0 bg-primary-navy/80 z-10"></div>
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${post.image})` }}
                    ></div>
                </div>

                <div className="container-custom relative z-20">
                    <Link href="/blog" className="inline-flex items-center text-gray-300 hover:text-accent-orange mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
                    </Link>

                    <div className="max-w-4xl">
                        <div className="flex items-center space-x-2 text-sm text-accent-orange font-bold uppercase tracking-wide mb-4">
                            <Tag className="w-4 h-4" />
                            <span>{post.category}</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            {post.title}
                        </h1>

                        <div className="flex flex-wrap items-center text-sm md:text-base text-gray-300 gap-6">
                            <span className="flex items-center">
                                <User className="w-5 h-5 mr-2 text-accent-orange" />
                                {post.author}
                            </span>
                            <span className="flex items-center">
                                <Calendar className="w-5 h-5 mr-2 text-accent-orange" />
                                {post.date}
                            </span>
                            <span className="flex items-center">
                                <Clock className="w-5 h-5 mr-2 text-accent-orange" />
                                {post.readTime}
                            </span>
                        </div>
                    </div>
                </div>
            </header>

            {/* Content Section */}
            <div className="container-custom py-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-8">
                        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
                            <div className="prose prose-lg max-w-none text-gray-600 prose-headings:text-primary-navy prose-a:text-accent-orange hover:prose-a:text-orange-600"
                                dangerouslySetInnerHTML={{ __html: post.content }}
                            />

                            {/* Share & Tags */}
                            <div className="mt-12 pt-8 border-t border-gray-100 flex items-center justify-between">
                                <div className="font-bold text-primary-navy">
                                    Share this article:
                                </div>
                                <div className="flex space-x-4">
                                    <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                                        <Share2 className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Related Posts */}
                        {relatedPosts.length > 0 && (
                            <div className="mt-12">
                                <h3 className="text-2xl font-bold text-primary-navy mb-6">Related Articles</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {relatedPosts.map((related) => (
                                        <div key={related.id} className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-all">
                                            <div className="h-40 relative overflow-hidden">
                                                <div
                                                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                                                    style={{ backgroundImage: `url(${related.image})` }}
                                                ></div>
                                            </div>
                                            <div className="p-6">
                                                <span className="text-xs text-accent-orange font-bold uppercase tracking-wide">{related.category}</span>
                                                <h4 className="text-lg font-bold text-primary-navy mt-2 mb-2 group-hover:text-accent-orange transition-colors">
                                                    <Link href={`/blog/${related.slug}`}>{related.title}</Link>
                                                </h4>
                                                <Link href={`/blog/${related.slug}`} className="text-sm text-gray-500 underline decoration-gray-300 hover:decoration-accent-orange transition-all">
                                                    Read Now
                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Sidebar Placeholder (simplified from main blog page) */}
                    <div className="lg:col-span-4 space-y-8">
                        <div className="bg-primary-navy text-white p-8 rounded-lg">
                            <h3 className="text-xl font-bold mb-4">Need Professional Inspection?</h3>
                            <p className="text-gray-300 mb-6">Ensure your products meet international quality standards with our expert inspection services.</p>
                            <Link href="/quote" className="block w-full py-3 bg-accent-orange text-center rounded-lg font-bold hover:bg-orange-600 transition-colors">
                                Get a Free Quote
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}

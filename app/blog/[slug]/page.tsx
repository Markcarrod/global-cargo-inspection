'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import {
    Calendar,
    Clock,
    User,
    ChevronRight,
    Share2,
    Twitter,
    Linkedin,
    Facebook,
    Tag
} from 'lucide-react';

// Mock blog post data
const blogPosts = {
    'top-5-cargo-inspection-checkpoints-2026': {
        id: 1,
        title: 'Top 5 Cargo Inspection Checkpoints for 2026',
        excerpt: 'As global supply chains evolve, these are the critical quality control checkpoints you cannot afford to miss this year.',
        content: `
            <p>As we navigate through 2026, global supply chains continue to evolve with new challenges and opportunities. Quality control has never been more critical, and knowing exactly when and what to inspect can mean the difference between a successful shipment and a costly mistake.</p>

            <h2>1. Pre-Production Material Verification</h2>
            <p>Before production even begins, verifying that your supplier is using the correct raw materials is essential. This checkpoint involves:</p>
            <ul>
                <li>Material composition testing</li>
                <li>Color and texture verification</li>
                <li>Quality grade confirmation</li>
                <li>Supplier documentation review</li>
            </ul>
            <p>Early detection of material issues prevents costly rework and production delays. In 2026, we're seeing increased use of portable spectrometers and AI-powered material analysis tools making this process faster and more accurate than ever.</p>

            <h2>2. During Production Inspection (DUPRO)</h2>
            <p>When 30-50% of your order is complete, a DUPRO inspection allows you to catch and correct issues before mass production is finished. Key elements include:</p>
            <ul>
                <li>Production timeline verification</li>
                <li>Quality sampling of finished units</li>
                <li>Manufacturing process assessment</li>
                <li>Worker training and capability review</li>
            </ul>

            <h2>3. Pre-Shipment Inspection (PSI)</h2>
            <p>The most popular inspection type, PSI should occur when 100% of production is complete and at least 80% is packed. This comprehensive check covers:</p>
            <ul>
                <li>Product quality and workmanship</li>
                <li>Quantity verification</li>
                <li>Packing and labeling compliance</li>
                <li>Functional testing</li>
            </ul>

            <h2>4. Container Loading Supervision</h2>
            <p>Protect your investment during the critical loading phase. Container loading supervision ensures:</p>
            <ul>
                <li>Proper cargo arrangement and weight distribution</li>
                <li>Adequate securing and blocking</li>
                <li>Container condition verification</li>
                <li>Final count confirmation</li>
            </ul>

            <h2>5. Laboratory Testing Checkpoint</h2>
            <p>For regulated products or high-risk categories, laboratory testing is non-negotiable. In 2026, key testing areas include:</p>
            <ul>
                <li>Chemical compliance (REACH, RoHS, California Prop 65)</li>
                <li>Physical and mechanical safety</li>
                <li>Performance verification</li>
                <li>Environmental impact assessment</li>
            </ul>

            <h2>Conclusion</h2>
            <p>Implementing these five checkpoints creates a comprehensive quality assurance system that significantly reduces risk. The key is consistency and proper timing. Work with an experienced inspection partner who understands your industry's specific requirements and can customize these checkpoints to your needs.</p>

            <p><strong>Need help implementing these checkpoints?</strong> Our team can design a custom inspection program tailored to your supply chain. <a href="/contact">Contact us today</a> for a consultation.</p>
        `,
        image: '/images/services-header.png',
        category: 'Best Practices',
        author: 'Sarah Meyer',
        date: 'January 8, 2026',
        readTime: '8 min read',
        tags: ['Quality Control', 'Inspection', 'Best Practices', 'Supply Chain']
    },
    'understanding-iso-quality-standards': {
        id: 2,
        title: 'Understanding ISO Quality Standards in Global Trade',
        excerpt: 'A comprehensive guide to the most important ISO standards for importers and exporters in today\\'s marketplace.',
        content: `
            <p>ISO (International Organization for Standardization) quality standards provide a universal framework for ensuring product safety, quality, and consistency across borders. Understanding which standards apply to your products is crucial for international trade.</p>

            <h2>What is ISO and Why Does It Matter?</h2>
            <p>ISO develops international standards that help organizations ensure quality, safety, and efficiency in their products and services. For importers and exporters, ISO compliance often determines market access and customer confidence.</p>

            <h2>Key ISO Standards for Trade</h2>
            <h3>ISO 9001: Quality Management Systems</h3>
            <p>The most recognized quality standard globally, ISO 9001 sets out criteria for a quality management system. It helps organizations demonstrate their ability to consistently provide products and services that meet customer and regulatory requirements.</p>

            <h3>ISO 14001: Environmental Management</h3>
            <p>As sustainability becomes increasingly important, ISO 14001 helps companies minimize their environmental footprint and comply with environmental regulations.</p>

            <h3>ISO 45001: Occupational Health and Safety</h3>
            <p>This standard ensures safe working conditions and demonstrates your commitment to worker welfare throughout your supply chain.</p>

            <h2>Industry-Specific Standards</h2>
            <p>Different industries have specialized ISO standards:</p>
            <ul>
                <li><strong>Food Industry:</strong> ISO 22000 (Food Safety Management)</li>
                <li><strong>Automotive:</strong> IATF 16949 (Automotive Quality Management)</li>
                <li><strong>Medical Devices:</strong> ISO 13485 (Medical Devices Quality Management)</li>
                <li><strong>Textiles:</strong> ISO 12947 (Textile Durability)</li>
            </ul>

            <h2>How to Verify ISO Compliance</h2>
            <p>Verification of ISO compliance should be part of your supplier audit process:</p>
            <ol>
                <li>Request certification certificates</li>
                <li>Verify certificates with issuing bodies</li>
                <li>Conduct on-site audits to confirm implementation</li>
                <li>Review documentation and quality records</li>
                <li>Request corrective action plans for non-conformities</li>
            </ol>

            <h2>Common Pitfalls to Avoid</h                <ul>
                <li>Accepting expired or fraudulent certificates</li>
                <li>Assuming certification guarantees quality</li>
                <li>Not verifying scope of certification</li>
                <li>Ignoring industry-specific standards</li>
            </ul>

            <p><strong>Want to ensure your suppliers meet ISO standards?</strong> Our supplier audit services include comprehensive ISO compliance verification. <a href="/services/supplier-audit">Learn more about supplier audits</a>.</p>
        `,
    image: '/images/factory-inspection.png',
    category: 'Quality Standards',
    author: 'Michael Torres',
    date: 'December 15, 2025',
    readTime: '6 min read',
    tags: ['ISO', 'Quality Standards', 'Compliance', 'Supplier Audit']
},
'common-defects-electronics': {
    id: 3,
        title: 'Common Defects Found in Electronics Inspections',
            excerpt: 'Learn about the most frequently identified quality issues in consumer electronics and how to prevent them.',
                content: `
            <p>Electronics inspection requires specialized knowledge and attention to detail. After conducting thousands of inspections, we've identified the most common defects that plague electronic product shipments.</p>

            <h2>Visual and Cosmetic Defects</h2>
            <h3>1. Scratches and Surface Damage</h3>
            <p>Surface imperfections are the most common visual defect, often occurring during:</p>
            <ul>
                <li>Manufacturing and assembly</li>
                <li>Packaging processes</li>
                <li>Storage and handling</li>
            </ul>
            <p><strong>Prevention:</strong> Implement protective films during production, train workers on careful handling, and use appropriate padding in packaging.</p>

            <h3>2. Color Inconsistency</h3>
            <p>Color variations between units or batches can indicate quality control issues in the manufacturing process.</p>

            <h2>Functional Defects</h2>
            <h3>3. Button and Switch Malfunctions</h3>
            <p>Physical controls are high-risk components. Common issues include:</p>
            <ul>
                <li>Unresponsive buttons</li>
                <li>Loose switches</li>
                <li>Misaligned controls</li>
                <li>Weak tactile feedback</li>
            </ul>

            <h3>4. Display Problems</h3>
            <p>Screen-related defects include dead pixels, uneven backlighting, color calibration issues, and touch sensitivity problems.</p>

            <h3>5. Battery and Power Issues</h3>
            <p>Battery defects are serious safety concerns:</p>
            <ul>
                <li>Incorrect battery capacity</li>
                <li>Poor battery contacts</li>
                <li>Charging circuit failures</li>
                <li>Overheating during charging</li>
            </ul>

            <h2>Safety and Compliance Defects</h2>
            <h3>6. Electrical Safety Failures</h3>
            <p>Critical safety issues that must be caught before shipment:</p>
            <ul>
                <li>Inadequate insulation</li>
                <li>Missing safety certifications</li>
                <li>Non-compliant power adapters</li>
                <li>Insufficient grounding</li>
            </ul>

            <h3>7. Labeling and Marking Defects</h3>
            <p>Regulatory compliance requires proper labeling:</p>
            <ul>
                <li>Missing safety warnings</li>
                <li>Incorrect voltage ratings</li>
                <li>Missing certification marks (CE, FCC, etc.)</li>
                <li>Unclear user instructions</li>
            </ul>

            <h2>Packaging Defects</h2>
            <p>Packaging issues often lead to transit damage:</p>
            <ul>
                <li>Insufficient padding and protection</li>
                <li>Missing accessories or components</li>
                <li>Poor box strength</li>
                <li>Incorrect product information on packaging</li>
            </ul>

            <h2>Prevention Strategy</h2>
            <p>A multi-checkpoint inspection strategy significantly reduces these defects:</p>
            <ol>
                <li><strong>During Production:</strong> Catch manufacturing issues early</li>
                <li><strong>Pre-Shipment:</strong> Final comprehensive check</li>
                <li><strong>Laboratory Testing:</strong> Verify electrical safety and performance</li>
            </ol>

            <p><strong>Protect your electronics shipments</strong> with our specialized electronics inspection services. <a href="/quote">Request a quote</a> today.</p>
        `,
                    image: '/images/industry-electronics.png',
                        category: 'Industry Insights',
                            author: 'David Chen',
                                date: 'November 22, 2025',
                                    readTime: '7 min read',
                                        tags: ['Electronics', 'Quality Control', 'Defect Prevention', 'Inspection']
},
'ai-impact-quality-control': {
    id: 4,
        title: 'The Impact of AI on Quality Control',
            excerpt: 'Exploring how artificial intelligence and machine vision are transforming the traditional inspection landscape.',
                content: `
            <p>Artificial Intelligence is revolutionizing quality control and inspection processes. While human expertise remains irreplaceable, AI tools are enhancing accuracy, speed, and consistency in ways previously impossible.</p>

            <h2>Machine Vision in Visual Inspection</h2>
            <p>AI-powered machine vision systems can now detect visual defects with remarkable precision:</p>
            <ul>
                <li>Identifying microscopic surface defects</li>
                <li>Measuring component dimensions with sub-millimeter accuracy</li>
                <li>Detecting color variations invisible to the human eye</li>
                <li>Inspecting 100% of production vs. statistical sampling</li>
            </ul>

            <h2>Predictive Quality Analytics</h2>
            <p>AI algorithms analyze historical inspection data to predict potential quality issues before they occur. This enables:</p>
            <ul>
                <li>Early warning systems for production problems</li>
                <li>Supplier performance prediction</li>
                <li>Optimal inspection timing recommendations</li>
                <li>Risk assessment for different product categories</li>
            </ul>

            <h2>Automated Defect Classification</h2>
            <p>Machine learning models can categorize defects and assess their severity, ensuring consistent quality standards across different inspectors and locations.</p>

            <h2>The Human Element Remains Critical</h2>
            <p>Despite AI advancements, human inspectors provide irreplaceable value:</p>
            <ul>
                <li>Contextual understanding and judgment</li>
                <li>Complex problem-solving</li>
                <li>Supplier relationship management</li>
                <li>Adapting to unique situations</li>
                <li>Ethical considerations</li>
            </ul>

            <h2>The Future: Human-AI Collaboration</h2>
            <p>The most effective approach combines AI capabilities with human expertise. AI handles repetitive, high-volume tasks while inspectors focus on complex evaluation, supplier communication, and strategic decision-making.</p>

            <h2>Implementation Considerations</h2>
            <p>When adopting AI in quality control:</p>
            <ol>
                <li>Start with pilot projects in controlled environments</li>
                <li>Ensure data quality for AI training</li>
                <li>Maintain human oversight and validation</li>
                <li>Consider ROI and implementation costs</li>
                <li>Train staff to work alongside AI systems</li>
            </ol>

            <p><strong>Stay ahead of quality control technology.</strong> Our inspection services leverage the latest AI tools while maintaining expert human oversight. <a href="/services">Explore our services</a>.</p>
        `,
                    image: '/images/industry-food.png',
                        category: 'Technology',
                            author: 'James Wilson',
                                date: 'September 5, 2025',
                                    readTime: '6 min read',
                                        tags: ['AI', 'Technology', 'Innovation', 'Quality Control']
}
};

export default function BlogPostPage() {
    const params = useParams();
    const slug = params?.slug as string;
    const post = blogPosts[slug as keyof typeof blogPosts];

    // In a real app, handle 404 here
    if (!post) {
        return (
            <div className="min-h-screen bg-neutral-light flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-primary-navy mb-4">Article Not Found</h1>
                    <Link href="/blog" className="btn-primary">
                        Back to Blog
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-neutral-light min-h-screen">
            {/* Breadcrumb */}
            <div className="bg-white border-b">
                <div className="container-custom py-4">
                    <div className="flex items-center text-sm text-neutral-dark">
                        <Link href="/" className="hover:text-accent-orange transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
                        <Link href="/blog" className="hover:text-accent-orange transition-colors">Blog</Link>
                        <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
                        <span className="font-semibold text-primary-navy">{post.title}</span>
                    </div>
                </div>
            </div>

            {/* Article Header */}
            <div className="bg-white border-b">
                <div className="container-custom py-12 max-w-4xl">
                    <div className="mb-6">
                        <span className="inline-block bg-accent-orange text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                            {post.category}
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-primary-navy mb-6 leading-tight">
                        {post.title}
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                        {post.excerpt}
                    </p>

                    {/* Meta Information */}
                    <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
                        <div className="flex items-center">
                            <User className="w-4 h-4 mr-2" />
                            <span>{post.author}</span>
                        </div>
                        <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span>{post.date}</span>
                        </div>
                        <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-2" />
                            <span>{post.readTime}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Featured Image */}
            <div className="bg-white">
                <div className="container-custom max-w-4xl py-8">
                    <div
                        className="w-full h-96 bg-cover bg-center rounded-lg"
                        style={{ backgroundImage: `url(${post.image})` }}
                    ></div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container-custom py-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Article Content */}
                    <article className="lg:col-span-8">
                        <div className="bg-white p-8 md:p-12 rounded-lg shadow-sm">
                            <div
                                className="prose prose-lg max-w-none
                                    prose-headings:text-primary-navy prose-headings:font-bold
                                    prose-h2:text-3xl prose-h2:mt-8 prose-h2:mb-4
                                    prose-h3:text-2xl prose-h3:mt-6 prose-h3:mb-3
                                    prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
                                    prose-a:text-accent-orange prose-a:font-semibold prose-a:no-underline hover:prose-a:underline
                                    prose-strong:text-primary-navy prose-strong:font-bold
                                    prose-ul:my-6 prose-li:text-gray-700 prose-li:mb-2
                                    prose-ol:my-6"
                                dangerouslySetInnerHTML={{ __html: post.content }}
                            />
                        </div>

                        {/* Tags */}
                        <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="text-lg font-bold text-primary-navy mb-4 flex items-center">
                                <Tag className="w-5 h-5 mr-2 text-accent-orange" />
                                Tags
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {post.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-pointer"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Share */}
                        <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="text-lg font-bold text-primary-navy mb-4 flex items-center">
                                <Share2 className="w-5 h-5 mr-2 text-accent-orange" />
                                Share This Article
                            </h3>
                            <div className="flex gap-4">
                                <button className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
                                    <Linkedin className="w-4 h-4" />
                                    LinkedIn
                                </button>
                                <button className="flex items-center gap-2 bg-sky-500 text-white px-4 py-2 rounded-md hover:bg-sky-600 transition-colors">
                                    <Twitter className="w-4 h-4" />
                                    Twitter
                                </button>
                                <button className="flex items-center gap-2 bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-colors">
                                    <Facebook className="w-4 h-4" />
                                    Facebook
                                </button>
                            </div>
                        </div>
                    </article>

                    {/* Sidebar */}
                    <aside className="lg:col-span-4">
                        {/* Author Card */}
                        <div className="bg-white p-6 rounded-lg shadow-sm mb-8 sticky top-24">
                            <h3 className="text-lg font-bold text-primary-navy mb-4">About the Author</h3>
                            <div className="flex items-center mb-4">
                                <div className="w-16 h-16 bg-primary-navy rounded-full flex items-center justify-center text-white text-xl font-bold">
                                    {post.author.split(' ').map(n => n[0]).join('')}
                                </div>
                                <div className="ml-4">
                                    <p className="font-bold text-primary-navy">{post.author}</p>
                                    <p className="text-sm text-gray-500">Quality Control Expert</p>
                                </div>
                            </div>
                            <p className="text-sm text-gray-600 mb-4">
                                {post.author} has over 10 years of experience in global quality inspection and supply chain management.
                            </p>
                        </div>

                        {/* CTA Box */}
                        <div className="bg-primary-navy p-6 rounded-lg shadow-lg text-white">
                            <h3 className="text-xl font-bold mb-3">Need Inspection Services?</h3>
                            <p className="text-gray-200 mb-6 text-sm">
                                Get professional cargo inspection from industry experts.
                            </p>
                            <Link href="/quote" className="btn-primary w-full text-center block bg-accent-orange border-accent-orange hover:bg-orange-600">
                                Request a Quote
                            </Link>
                        </div>
                    </aside>
                </div>
            </div>

            {/* Related Articles */}
            <div className="bg-white border-t py-12">
                <div className="container-custom">
                    <h2 className="text-3xl font-bold text-primary-navy mb-8">Related Articles</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {Object.entries(blogPosts)
                            .filter(([key]) => key !== slug)
                            .slice(0, 3)
                            .map(([key, relatedPost]) => (
                                <Link
                                    key={key}
                                    href={`/blog/${key}`}
                                    className="group block bg-neutral-light rounded-lg overflow-hidden hover:shadow-lg transition-all"
                                >
                                    <div
                                        className="h-48 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                                        style={{ backgroundImage: `url(${relatedPost.image})` }}
                                    ></div>
                                    <div className="p-6">
                                        <span className="text-xs font-bold text-accent-orange uppercase">{relatedPost.category}</span>
                                        <h3 className="text-lg font-bold text-primary-navy mt-2 mb-3 group-hover:text-accent-orange transition-colors">
                                            {relatedPost.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 line-clamp-2">
                                            {relatedPost.excerpt}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

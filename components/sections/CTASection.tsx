import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface CTASectionProps {
    title: string;
    description: string;
    primaryButtonText?: string;
    primaryButtonHref?: string;
    secondaryButtonText?: string;
    secondaryButtonHref?: string;
    backgroundImage?: string;
}

export default function CTASection({
    title,
    description,
    primaryButtonText = 'Get Started',
    primaryButtonHref = '/quote',
    secondaryButtonText,
    secondaryButtonHref,
    backgroundImage,
}: CTASectionProps) {
    return (
        <section
            className={`section-padding relative overflow-hidden ${backgroundImage ? 'text-white' : 'bg-primary-navy text-white'
                }`}
        >
            {backgroundImage && (
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${backgroundImage})` }}
                >
                    <div className="absolute inset-0 bg-primary-navy bg-opacity-90"></div>
                </div>
            )}

            <div className="container-custom relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                        {title}
                    </h2>
                    <p className="text-lg md:text-xl mb-8 text-gray-200">
                        {description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href={primaryButtonHref}
                            className="inline-flex items-center justify-center px-8 py-4 bg-accent-orange text-white font-semibold rounded-md hover:bg-opacity-90 transition-all duration-300 group"
                        >
                            {primaryButtonText}
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        {secondaryButtonText && secondaryButtonHref && (
                            <Link
                                href={secondaryButtonHref}
                                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-md hover:bg-white hover:text-primary-navy transition-all duration-300"
                            >
                                {secondaryButtonText}
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

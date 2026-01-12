import { Star, Quote } from 'lucide-react';

interface TestimonialCardProps {
    quote: string;
    author: string;
    company: string;
    rating?: number;
}

export default function TestimonialCard({
    quote,
    author,
    company,
    rating = 5
}: TestimonialCardProps) {
    return (
        <div className="card h-full flex flex-col">
            <div className="mb-4">
                <Quote className="w-10 h-10 text-accent-orange opacity-50" />
            </div>

            {/* Rating */}
            <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                    <Star
                        key={i}
                        className={`w-5 h-5 ${i < rating ? 'text-accent-orange fill-accent-orange' : 'text-gray-300'
                            }`}
                    />
                ))}
            </div>

            {/* Quote */}
            <p className="text-neutral-dark text-base leading-relaxed mb-6 flex-grow italic">
                "{quote}"
            </p>

            {/* Author */}
            <div className="border-t border-neutral-light pt-4">
                <p className="font-bold text-primary-navy">{author}</p>
                <p className="text-sm text-gray-600">{company}</p>
            </div>
        </div>
    );
}

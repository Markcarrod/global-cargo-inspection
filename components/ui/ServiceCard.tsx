import Link from 'next/link';
import { LucideIcon } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    href: string;
}

export default function ServiceCard({ icon: Icon, title, description, href }: ServiceCardProps) {
    return (
        <Link href={href} className="group">
            <div className="card h-full flex flex-col transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
                <div className="w-16 h-16 bg-accent-orange bg-opacity-10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-opacity-20 transition-all">
                    <Icon className="w-8 h-8 text-accent-orange" />
                </div>
                <h3 className="text-xl font-bold text-primary-navy mb-3 group-hover:text-accent-orange transition-colors">
                    {title}
                </h3>
                <p className="text-neutral-dark text-sm leading-relaxed mb-4 flex-grow">
                    {description}
                </p>
                <div className="flex items-center text-accent-orange font-semibold text-sm group-hover:gap-2 transition-all">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
            </div>
        </Link>
    );
}

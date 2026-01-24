'use client';

import { useState } from 'react';
import { Search, Loader2, CheckCircle, XCircle, AlertTriangle, FileText, Calendar, User, Download } from 'lucide-react';
import Link from 'next/link';

// Mock Data for verification
const MOCK_DB: Record<string, { status: 'valid' | 'expired' | 'revoked'; client: string; product: string; date: string; inspector: string; pdfUrl?: string }> = {
    'GCI-2025-4492': {
        status: 'valid',
        client: 'TechImport Solutions',
        product: 'Consumer Electronics (Batch A-22)',
        date: '2025-01-10',
        inspector: 'James W.',
        pdfUrl: '/certificates/sample_report.pdf'
    },
    'GCI-2024-8821': {
        status: 'valid',
        client: 'Global Textiles Ltd',
        product: 'Cotton Fabrics Shipment',
        date: '2024-11-05',
        inspector: 'Sarah M.'
    },
    'GCI-2023-1102': {
        status: 'expired',
        client: 'MegaConstruct Inc',
        product: 'Steel Beams',
        date: '2023-05-20',
        inspector: 'David C.'
    }
};

export default function VerifyPage() {
    const [certId, setCertId] = useState('');
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<null | { id: string; data?: typeof MOCK_DB[string]; error?: string }>(null);

    const handleVerify = (e: React.FormEvent) => {
        e.preventDefault();
        if (!certId.trim()) return;

        setLoading(true);
        setResult(null);

        // Simulate network delay
        setTimeout(() => {
            const id = certId.trim().toUpperCase();
            const data = MOCK_DB[id];

            if (data) {
                setResult({ id, data });
            } else {
                setResult({ id, error: 'Certificate not found' });
            }
            setLoading(false);
        }, 800);
    };

    return (
        <div className="bg-neutral-light min-h-screen">
            {/* Hero Section */}
            <section className="bg-primary-navy py-16 text-white text-center">
                <div className="container-custom">
                    <h1 className="text-4xl font-bold mb-4">Certificate Verification</h1>
                    <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                        Validate the authenticity of Global Cargo Inspection reports and certificates.
                    </p>
                </div>
            </section>

            {/* Verification Section */}
            <section className="section-padding">
                <div className="container-custom max-w-3xl">
                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <form onSubmit={handleVerify} className="mb-10">
                            <label className="block text-sm font-bold text-primary-navy mb-2">
                                Enter Certificate Number
                            </label>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <div className="relative flex-grow">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Search className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        type="text"
                                        value={certId}
                                        onChange={(e) => setCertId(e.target.value)}
                                        className="block w-full pl-10 pr-3 py-4 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-accent-orange focus:border-accent-orange sm:text-sm transition-shadow shadow-sm"
                                        placeholder="e.g. GCI-2025-4492"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="btn-primary py-4 px-8 flex items-center justify-center min-w-[140px]"
                                >
                                    {loading ? (
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                    ) : (
                                        'Verify Now'
                                    )}
                                </button>
                            </div>
                            <p className="text-xs text-gray-500 mt-2">
                                Please ensure the ID matches exactly as it appears on your document.
                            </p>
                        </form>

                        {/* Results Display */}
                        {result && (
                            <div className={`border-t-4 pt-6 animate-fade-in ${result.error ? 'border-red-500' : result.data?.status === 'valid' ? 'border-green-500' : 'border-yellow-500'}`}>
                                {result.error ? (
                                    <div className="bg-red-50 p-6 rounded-lg border border-red-100 flex items-start gap-4">
                                        <XCircle className="w-8 h-8 text-red-500 flex-shrink-0" />
                                        <div>
                                            <h3 className="text-lg font-bold text-red-800 mb-1">Invalid Certificate</h3>
                                            <p className="text-red-600">
                                                The certificate ID <strong>{result.id}</strong> could not be found in our database.
                                            </p>
                                            <p className="text-sm text-red-600 mt-4">
                                                If you believe this is an error, please contact our support team at <a href="mailto:info@globalcargoinspection.com" className="underline font-bold">info@globalcargoinspection.com</a>.
                                            </p>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-3">
                                            {result.data?.status === 'valid' ? (
                                                <CheckCircle className="w-10 h-10 text-green-500" />
                                            ) : (
                                                <AlertTriangle className="w-10 h-10 text-yellow-500" />
                                            )}
                                            <div>
                                                <h2 className="text-2xl font-bold text-primary-navy">
                                                    {result.data?.status === 'valid' ? 'Valid Certificate' : 'Certificate Expired'}
                                                </h2>
                                                <p className="text-gray-500 text-sm">ID: {result.id}</p>
                                            </div>
                                        </div>

                                        <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                                            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Inspection Details</h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
                                                <div className="flex items-start gap-3">
                                                    <User className="w-5 h-5 text-gray-400 mt-0.5" />
                                                    <div>
                                                        <span className="block text-xs text-gray-500">Client</span>
                                                        <span className="font-semibold text-primary-navy">{result.data?.client}</span>
                                                    </div>
                                                </div>
                                                <div className="flex items-start gap-3">
                                                    <FileText className="w-5 h-5 text-gray-400 mt-0.5" />
                                                    <div>
                                                        <span className="block text-xs text-gray-500">Product / Service</span>
                                                        <span className="font-semibold text-primary-navy">{result.data?.product}</span>
                                                    </div>
                                                </div>
                                                <div className="flex items-start gap-3">
                                                    <Calendar className="w-5 h-5 text-gray-400 mt-0.5" />
                                                    <div>
                                                        <span className="block text-xs text-gray-500">Issue Date</span>
                                                        <span className="font-semibold text-primary-navy">{result.data?.date}</span>
                                                    </div>
                                                </div>
                                                <div className="flex items-start gap-3">
                                                    <CheckCircle className="w-5 h-5 text-gray-400 mt-0.5" />
                                                    <div>
                                                        <span className="block text-xs text-gray-500">Inspector</span>
                                                        <span className="font-semibold text-primary-navy">{result.data?.inspector}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {result.data?.pdfUrl && (
                                            <div className="flex justify-center">
                                                <a
                                                    href={result.data.pdfUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="btn-primary py-3 px-6 flex items-center justify-center rounded-lg shadow-md hover:shadow-lg transition-all"
                                                >
                                                    <Download className="w-5 h-5 mr-2" />
                                                    View Full Report (PDF)
                                                </a>
                                            </div>
                                        )}

                                        <div className="text-center pt-2">
                                            <p className="text-sm text-gray-500">
                                                This certificate validates that the inspection was carried out according to GCI standards.
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    <div className="mt-8 text-center">
                        <p className="text-gray-600 mb-4">Need to schedule a new inspection?</p>
                        <Link href="/quote" className="text-accent-orange font-bold hover:underline">
                            Request a Quote &rarr;
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

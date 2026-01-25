import { VERIFICATION_DB } from '@/app/lib/verificationData';
import { CheckCircle, XCircle, AlertTriangle, FileText, Calendar, User, Download, Search } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default function DocumentVerificationPage({ params }: { params: { id: string } }) {
    const id = params.id;
    const data = VERIFICATION_DB[id];

    if (!data) {
        return (
            <div className="bg-neutral-light min-h-screen pt-20 pb-12">
                <div className="container-custom max-w-3xl">
                    <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-red-500">
                        <div className="bg-red-50 p-6 rounded-lg border border-red-100 flex items-start gap-4">
                            <XCircle className="w-8 h-8 text-red-500 flex-shrink-0" />
                            <div>
                                <h3 className="text-lg font-bold text-red-800 mb-1">Invalid Certificate</h3>
                                <p className="text-red-600">
                                    The certificate ID <strong>{id}</strong> could not be found in our database.
                                </p>
                                <p className="text-sm text-red-600 mt-4">
                                    If you believe this is an error, please contact our support team at <a href="mailto:info@globalcargoinspection.com" className="underline font-bold">info@globalcargoinspection.com</a>.
                                </p>
                            </div>
                        </div>
                        <div className="mt-8 text-center">
                            <Link href="/verify" className="btn-secondary py-3 px-6 inline-flex items-center">
                                <Search className="w-4 h-4 mr-2" />
                                Try Another ID
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-neutral-light min-h-screen pt-20 pb-12">
            <div className="container-custom max-w-3xl">
                <div className="bg-white rounded-lg shadow-lg p-8">
                    <div className={`border-t-4 pt-6 ${data.status === 'valid' ? 'border-green-500' : 'border-yellow-500'}`}>
                        <div className="space-y-6">
                            <div className="flex items-center gap-3">
                                {data.status === 'valid' ? (
                                    <CheckCircle className="w-10 h-10 text-green-500" />
                                ) : (
                                    <AlertTriangle className="w-10 h-10 text-yellow-500" />
                                )}
                                <div>
                                    <h2 className="text-2xl font-bold text-primary-navy">
                                        {data.status === 'valid' ? 'Valid Certificate' : 'Certificate Expired'}
                                    </h2>
                                    <p className="text-gray-500 text-sm">ID: {id}</p>
                                </div>
                            </div>

                            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Inspection Details</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
                                    <div className="flex items-start gap-3">
                                        <User className="w-5 h-5 text-gray-400 mt-0.5" />
                                        <div>
                                            <span className="block text-xs text-gray-500">Client</span>
                                            <span className="font-semibold text-primary-navy">{data.client}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <FileText className="w-5 h-5 text-gray-400 mt-0.5" />
                                        <div>
                                            <span className="block text-xs text-gray-500">Product / Service</span>
                                            <span className="font-semibold text-primary-navy">{data.product}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Calendar className="w-5 h-5 text-gray-400 mt-0.5" />
                                        <div>
                                            <span className="block text-xs text-gray-500">Issue Date</span>
                                            <span className="font-semibold text-primary-navy">{data.date}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-gray-400 mt-0.5" />
                                        <div>
                                            <span className="block text-xs text-gray-500">Inspector</span>
                                            <span className="font-semibold text-primary-navy">{data.inspector}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {data.pdfUrl && (
                                <div className="flex justify-center flex-col gap-4 text-center">
                                    <a
                                        href={data.pdfUrl}
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

                            <div className="border-t border-gray-100 pt-6 mt-6 text-center">
                                <Link href="/verify" className="text-sm text-gray-500 hover:text-primary-navy flex items-center justify-center gap-1">
                                    <Search className="w-3 h-3" />
                                    Verify another certificate
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

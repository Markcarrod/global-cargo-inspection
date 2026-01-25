export type VerificationStatus = 'valid' | 'expired' | 'revoked';

export interface VerificationRecord {
    status: VerificationStatus;
    client: string;
    product: string;
    date: string;
    inspector: string;
    pdfUrl?: string;
}

export const VERIFICATION_DB: Record<string, VerificationRecord> = {
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
    },
    'GCI-3495PSI-0426': {
        status: 'valid',
        client: 'Global Trade Corp',
        product: 'PRE-SHIPMENT INSPECTION',
        date: '2026-01-25',
        inspector: 'GCI Team',
        pdfUrl: '/certificates/GCI-3495PSI-0426.pdf'
    },
    'GCI-201LS-8003': {
        status: 'valid',
        client: 'Lab Services Inc',
        product: 'CERTIFICATE OF ANALYSIS',
        date: '2026-01-26',
        inspector: 'Dr. Sarah J.',
        pdfUrl: '/certificates/GCI-201LS-8003.pdf'
    }
};

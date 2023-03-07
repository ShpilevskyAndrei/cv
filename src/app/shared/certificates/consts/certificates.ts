import { CertificatesEnum } from '../enums/certificates.enum';
import { CertificateInterface } from '../interfaces/certificate.interface';

export const CERTIFICATES: Record<string, CertificateInterface> = {
    Microsoft: {
        logo: 'assets/certificates/microsoft-logo.png',
        company: CertificatesEnum.Microsoft,
        title: 'AZ-900: Microsoft Azure',
        url: 'https://drive.google.com/file/d/1KvCW1Xw7zXVGzAuCh3AcIUwbq1IX3UG1/view',
    },
    Stepik: {
        logo: 'assets/certificates/stepik-logo.svg',
        company: CertificatesEnum.Stepik,
        title: 'Interactive SQL Trainer',
        url: 'https://drive.google.com/file/d/1IpM-35NWf2VWpcK5_NGFXC3btYGzAUeE/view',
    },
    ITechArtDotNet: {
        logo: 'assets/certificates/itechart-logo.png',
        company: CertificatesEnum.ITechArt,
        title: 'Back-End (.NET)',
        url: 'https://drive.google.com/file/d/184t0nJa95EsoxDpkbdDYkxOgigpKeN6W/view',
    },
    ITechArtAngular: {
        logo: 'assets/certificates/itechart-logo.png',
        company: CertificatesEnum.ITechArt,
        title: 'Front-End (Angular)',
        url: 'https://drive.google.com/file/d/1a1lhUDimhxikYQpQtbVJIvgp5nLpDGVe/view',
    },
    Alison: {
        logo: 'assets/certificates/alison-logo.png',
        company: CertificatesEnum.Alison,
        title: 'Angular 2: Fundamentals',
        url: 'https://drive.google.com/file/d/1yVywbdeaG4axxlibvh2Uqgi_UuKlsKzo/view',
    },
};

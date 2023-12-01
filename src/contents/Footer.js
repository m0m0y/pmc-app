import React from 'react';
import { Link } from 'react-router-dom';

const companyProfile = [
    { name: 'Progressive Medical Corporation', phone: '+63 (2) 8656 6888', email: 'info@pmc.ph', address: '200 C. Raymundo Avenue Caniogan, Pasig City 1606 Philippines', id: 1 }
];

const socialMedia = [
    { link: 'https://www.youtube.com/channel/UCRVCYrGPB0wsS6RsnTd31CQ', title: 'youtube', icon: 'bx bxl-youtube', id: 4 },
    { link: 'https://www.facebook.com/pmcphofficial', title: 'facebook', icon: 'bx bxl-facebook', id: 1 },
    { link: 'https://www.instagram.com/progressivemedicalcorp/', title: 'instagram', icon: 'bx bxl-instagram', id: 2 },
    { link: 'https://www.linkedin.com/company/progressive-medical-corporation-ph/about/', title: 'linkedin', icon: 'bx bxl-linkedin', id: 3 },
];

const UsefulLinks = [
    { link: '#', title: 'Home', icon: 'bx bx-chevron-right', id: 1 },
    { link: '#', title: 'About us', icon: 'bx bx-chevron-right', id: 2 },
    { link: '#', title: 'Services', icon: 'bx bx-chevron-right', id: 3 },
    { link: '#', title: 'Terms of service', icon: 'bx bx-chevron-right', id: 4 },
    { link: '#', title: 'Privacy policy', icon: 'bx bx-chevron-right', id: 5 },
];

export function CompanyProfile() {
    return (
        companyProfile.map(companyInfos => (
            <>
                <h3>{ companyInfos.name }</h3>
                <p>{ companyInfos.address }</p>
                <br></br>
                <p><strong>Phone:</strong> { companyInfos.phone }</p>
                <p><strong>Email:</strong> { companyInfos.email } </p>
            </>
        )
    )
    );
}

export function Social() {
    return (
        socialMedia.map(socialMed => (
                <Link to={ socialMed.link } className={ socialMed.title }> <i className={ socialMed.icon }></i> </Link>
            )
        )
    );
}

export function Links() {
    return (
        UsefulLinks.map(UsefulLink => (
                <li><i className={ UsefulLink.icon }></i><Link to={ UsefulLink.link }> { UsefulLink.title } </Link></li>
            )
        )
    )
}
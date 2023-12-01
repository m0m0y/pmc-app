import React from 'react';

const serviceContent = [
    { title: '100% Filipino Owned and Managed Company', icon: 'bi bi-building', content: 'We take pride in serving the Philippines and prioritizing the medical needs of Filipinos.', id: 1 },
    { title: 'Quality Assured', icon: 'bi bi-award', content: 'We are the first certified healthcare products distribution company in the Philippines. Under the ISO certification, we offer products that are guaranteed to be of the highest quality.', id: 2 },
    { title: 'Quality Assured', icon: 'bi bi-award', content: 'We are the first certified healthcare products distribution company in the Philippines. Under the ISO certification, we offer products that are guaranteed to be of the highest quality.', id: 2 }

]

export function WhoWeAreContent() {
    return(
        <>
            <div class="section-title mb-4">
                <h2>About</h2>
                <p>Who we are</p>
            </div>
            <h4 className="fs-2 fw-light">Established in 1982, Progressive Medical Corporation is a company based in the Philippines, dedicated to providing Filipinos with healthcare products of the highest standard.</h4>
        </>
    )
}

export function AboutContent() {
    return(
        <>
            <p>
                Progressive Medical Corporation is the first ISO-9001:2015 certified Healthcare Products Distribution Company in the Philippines. Today, Progressive Medical Corporation is an industry leader in importing and exporting medical, surgical, laboratory, and scientific products, providing service to approximately 6,000 customers throughout the  mossing qonc maacim Philippines and overseas.
            </p>
            
            <p className="fst-italic">
                Our vision is to be the industry leader in providing customers with world-class healthcare products.
            </p>

            <p>
                We want to effectively address the needs of major medical and healthcare industries and practices, including hospitals, medical  clinics, healthcare centres and professionals, pharmacies, laboratories, and other institutions focused on the chain of care. We also cater to different schools, universities, industrial, and government units.
            </p>

            <p>
                At Progressive Medical Corporation, we are determined to grow together with our customers by providing them with the best value and cost-effective medical and healthcare products.
            </p>
        </>
    )
}

export function ServicesContent({box, column}) {
    return (
        serviceContent.map(serviceContents => (
            <>
            <div className={column}>
                <div className={box}>
                    <i className={serviceContents.icon}></i>
                    <h4>{serviceContents.title}</h4>
                    <p>{serviceContents.content}</p>
                </div>
            </div>
            </>
        )
        )
    )
}
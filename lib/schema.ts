/**
 * Centralized Schema.org structured data utilities
 * Generates JSON-LD for various schema types used across the site
 */

export interface Job {
    id: string;
    title: string;
    description: string;
    department: string;
    type: string;
    location: string;
    slug: string;
    datePosted?: string;
}

export interface Service {
    name: string;
    description: string;
    category: string;
}

export interface FAQItem {
    question: string;
    answer: string;
}

export interface BreadcrumbItem {
    name: string;
    url: string;
}

const baseUrl = 'https://www.navagathagroup.com';

/**
 * Enhanced Organization Schema with LocalBusiness
 */
export function getOrganizationSchema() {
    return {
        "@context": "https://schema.org",
        "@type": ["Organization", "LocalBusiness"],
        "name": "NAVAGATHA MERCANTILE FLEET MANAGEMENT PVT. LTD.",
        "url": baseUrl,
        "logo": `${baseUrl}/images/logo_navagatha.png`,
        "image": `${baseUrl}/images/logo_navagatha.png`,
        "description": "Premier Ship Management and Crewing Services active in global maritime trade.",
        "foundingDate": "2014",
        "slogan": "Premier Ship Management and Crewing Services",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-9699024245",
            "contactType": "customer service",
            "email": "info@navagathagroup.com",
            "availableLanguage": ["en", "Hindi"],
            "areaServed": "IN"
        },
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Office. 604, Reliable Business Centre, Near Heera Panna Mall, Oshiwara, Anand Nagar, Andheri West",
            "addressLocality": "Andheri West",
            "addressRegion": "Maharashtra",
            "postalCode": "400102",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "19.1334",
            "longitude": "72.8267"
        },
        "sameAs": [
            "https://www.facebook.com/navagathagroup",
            "https://www.linkedin.com/company/navagathagroup",
            "https://www.instagram.com/navagathagroup"
        ],
        "areaServed": {
            "@type": "GeoCircle",
            "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": "19.1334",
                "longitude": "72.8267"
            },
            "geoRadius": "Global"
        },
        "priceRange": "$$",
        "openingHours": "Mo-Fr 09:00-18:00",
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Maritime Services",
            "itemListElement": [
                {
                    "@type": "OfferCatalog",
                    "name": "Ship Management",
                    "itemListElement": [
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Technical Management",
                                "description": "Complete technical oversight, maintenance, and dry-docking support."
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Crew Management",
                                "description": "Recruitment, training, and placement of qualified seafarers."
                            }
                        }
                    ]
                },
                {
                    "@type": "OfferCatalog",
                    "name": "Logistics & Commercial",
                    "itemListElement": [
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Import / Export",
                                "description": "Global freight forwarding and cargo logistics solutions."
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Chartering",
                                "description": "Vessel chartering and commercial operations."
                            }
                        }
                    ]
                }
            ]
        }
    };
}

/**
 * WebSite Schema with Search Action
 */
export function getWebSiteSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Navagatha Mercantile Fleet Management",
        "url": baseUrl,
        "description": "Premier Ship Management and Crewing Services",
        "publisher": {
            "@type": "Organization",
            "name": "NAVAGATHA MERCANTILE FLEET MANAGEMENT PVT. LTD.",
            "logo": {
                "@type": "ImageObject",
                "url": `${baseUrl}/images/logo_navagatha.png`
            }
        },
        "potentialAction": {
            "@type": "SearchAction",
            "target": {
                "@type": "EntryPoint",
                "urlTemplate": `${baseUrl}/search?q={search_term_string}`
            },
            "query-input": "required name=search_term_string"
        }
    };
}

/**
 * Service Schema Generator
 */
export function getServiceSchema(service: Service) {
    return {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": service.name,
        "description": service.description,
        "provider": {
            "@type": "Organization",
            "name": "NAVAGATHA MERCANTILE FLEET MANAGEMENT PVT. LTD.",
            "url": baseUrl
        },
        "serviceType": service.category,
        "areaServed": {
            "@type": "Country",
            "name": "India"
        }
    };
}

/**
 * JobPosting Schema Generator
 */
export function getJobPostingSchema(job: Job) {
    return {
        "@context": "https://schema.org",
        "@type": "JobPosting",
        "title": job.title,
        "description": job.description,
        "identifier": {
            "@type": "PropertyValue",
            "name": "Navagatha Mercantile",
            "value": job.id
        },
        "datePosted": job.datePosted || new Date().toISOString(),
        "validThrough": new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString(), // 90 days from now
        "employmentType": job.type.toUpperCase(),
        "hiringOrganization": {
            "@type": "Organization",
            "name": "NAVAGATHA MERCANTILE FLEET MANAGEMENT PVT. LTD.",
            "sameAs": baseUrl,
            "logo": `${baseUrl}/images/logo_navagatha.png`
        },
        "jobLocation": {
            "@type": "Place",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": job.location,
                "addressCountry": "IN"
            }
        },
        "baseSalary": {
            "@type": "MonetaryAmount",
            "currency": "INR",
            "value": {
                "@type": "QuantitativeValue",
                "value": "Competitive",
                "unitText": "YEAR"
            }
        },
        "industry": "Maritime",
        "occupationalCategory": job.department,
        "url": `${baseUrl}/careers/${job.slug}`
    };
}

/**
 * FAQPage Schema Generator
 */
export function getFAQPageSchema(faqs: FAQItem[]) {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };
}

/**
 * BreadcrumbList Schema Generator
 */
export function getBreadcrumbSchema(items: BreadcrumbItem[]) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.url
        }))
    };
}

/**
 * ContactPage Schema
 */
export function getContactPageSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact Navagatha Mercantile",
        "description": "Get in touch with Navagatha Mercantile Fleet Management for Ship Management and Crewing services",
        "url": `${baseUrl}/contact`,
        "mainEntity": {
            "@type": "Organization",
            "name": "NAVAGATHA MERCANTILE FLEET MANAGEMENT PVT. LTD.",
            "contactPoint": [
                {
                    "@type": "ContactPoint",
                    "telephone": "+91-9699024245",
                    "contactType": "customer service",
                    "email": "info@navagathagroup.com",
                    "availableLanguage": ["en", "Hindi"]
                },
                {
                    "@type": "ContactPoint",
                    "email": "hr@navagathagroup.com",
                    "contactType": "recruitment",
                    "availableLanguage": ["en", "Hindi"]
                }
            ]
        }
    };
}

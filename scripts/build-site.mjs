import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const phone = "+966 59 446 8411";
const phoneLink = "+966594468411";
const email = "waqas.varisali@gmail.com";
const address = "Dammam, Saudi Arabia";
const whatsappUrl = `https://wa.me/${phoneLink}?text=${encodeURIComponent("Hello WAG Construction, I would like to discuss a project.")}`;

const services = [
  {
    key: "windows",
    route: "glass-aluminium-windows",
    title: "Aluminium Windows & Frames",
    image: "7.jpeg",
    alt: "Aluminium-framed windows installed in a bright interior",
    summary: "Made-to-measure window systems that bring natural light and a clean finish to your space.",
    description: "Bring more light into your space with aluminium window systems planned around the building, the opening and the finish you want. WAG Construction supports the process from site measurement through fabrication and installation.",
    features: ["Made-to-measure window openings", "Aluminium frames and glazed systems", "Options for residential and commercial spaces", "Site measurement and installation coordination"],
    gallery: ["7.jpeg", "10.jpeg", "13.jpeg", "3.jpeg"],
    galleryAlt: ["Interior with installed aluminium-framed windows", "Arched aluminium window frame", "Contemporary villa window facade", "Glazed building facade under installation"]
  },
  {
    key: "facades",
    route: "curtain-wall-solutions",
    title: "Glass Facades & Curtain Walls",
    image: "2.jpeg",
    alt: "Modern commercial building with a glazed exterior",
    summary: "Architectural glazing and facade work for buildings with a confident, contemporary presence.",
    description: "Create a clear, modern exterior with glass facade systems designed to suit the building and its structure. We coordinate the details, materials and installation for commercial and residential projects.",
    features: ["Curtain wall and facade glazing", "Glazed exterior features", "Coordination with the building openings", "Careful finishing and installation"],
    gallery: ["2.jpeg", "4.jpeg", "6.jpeg", "1.jpeg"],
    galleryAlt: ["Commercial building with a glazed exterior", "Glass atrium inside a contemporary building", "Glazed commercial storefront", "Exterior facade with aluminium details"]
  },
  {
    key: "entrances",
    route: "glass-door-solutions",
    title: "Glass Entrances & Doors",
    image: "11.jpeg",
    alt: "Dark aluminium-framed glass entrance doors",
    summary: "Welcoming glass entrances and door systems for homes, offices and commercial spaces.",
    description: "A well-planned entrance makes a strong first impression. Choose a glass and aluminium door solution shaped around the opening, the building and how the space is used.",
    features: ["Framed glass entrance systems", "Door and sidelight configurations", "Residential and commercial applications", "Installation planned around the opening"],
    gallery: ["11.jpeg", "8.jpeg", "6.jpeg"],
    galleryAlt: ["Dark framed glass entrance doors", "Glass entrance with sidelights", "Glazed storefront exterior"]
  },
  {
    key: "sliding",
    route: "sliding-glass-systems",
    title: "Sliding Glass Systems",
    image: "8.jpeg",
    alt: "Large sliding glass doors with aluminium frames",
    summary: "Space-conscious sliding doors that connect interiors with balconies, patios and views.",
    description: "Sliding glass systems make a natural connection between indoor and outdoor spaces while keeping the opening practical. We help plan the configuration and fit for your project.",
    features: ["Sliding glass door configurations", "Aluminium framing", "Balcony and patio openings", "Project-specific measurement and fitting"],
    gallery: ["8.jpeg", "11.jpeg", "7.jpeg"],
    galleryAlt: ["Large glass opening with aluminium frames", "Framed glass entrance doors", "Aluminium-framed windows in an interior"]
  },
  {
    key: "railings",
    route: "glass-handrails-balustrades",
    title: "Stair Railings & Balustrades",
    image: "16.jpeg",
    alt: "Stainless steel handrail following a staircase",
    summary: "Purposeful railing and balustrade details for stairs, landings and building edges.",
    description: "Bring safety and a considered finish together with railing systems planned for the lines and use of the space. Our project photos show examples of stair railings and metalwork installations.",
    features: ["Staircase and landing railings", "Metal balustrade systems", "Designs suited to the surrounding finishes", "Installation planned to fit the site"],
    gallery: ["16.jpeg", "15.jpeg"],
    galleryAlt: ["Finished metal staircase railing", "Stainless steel railing during installation"]
  },
  {
    key: "gates",
    route: "cast-aluminum-sliding-gates",
    title: "Villa Gates & Entrances",
    image: "12.jpeg",
    alt: "Modern villa entrance with dark architectural details",
    summary: "Distinctive entrance and gate work designed to sit naturally with the property's exterior.",
    description: "Make the arrival feel considered with an entrance solution that complements the home's facade. WAG Construction can coordinate the gate and surrounding aluminium or glass details as part of the project.",
    features: ["Villa entrance and gate projects", "Architectural metalwork details", "Coordination with the exterior facade", "Custom project measurement and installation"],
    gallery: ["12.jpeg", "13.jpeg", "1.jpeg"],
    galleryAlt: ["Contemporary villa entrance", "Dark-framed villa windows", "Exterior building facade"]
  },
  {
    key: "doors",
    route: "room-doors",
    title: "Interior & Entry Doors",
    image: "14.jpeg",
    alt: "Finished timber interior double door",
    summary: "Interior and entry doors with considered proportions, materials and finishing.",
    description: "Choose an entry or interior door that feels right for the room and the way it is used. From measuring the opening to fitting the finished door, the details matter.",
    features: ["Interior room doors", "Entry door options", "Door frames and finishing", "Measurement and installation coordination"],
    gallery: ["14.jpeg", "9.jpeg"],
    galleryAlt: ["Finished timber door in a bright interior", "Door panel being prepared for installation"]
  },
  {
    key: "parking",
    route: "car-parking-shades",
    title: "Car Parking Shades",
    image: null,
    alt: "",
    summary: "Talk with our team about a shade structure planned for your parking area.",
    description: "A parking shade should work with the available space and the property around it. Contact our team to discuss your location, preferred layout and project requirements.",
    features: ["Project-specific parking layouts", "Shade structure planning", "Residential and commercial enquiries", "Site details reviewed before quotation"],
    gallery: [],
    galleryAlt: []
  },
  {
    key: "roof",
    route: "roof-glazing-solutions",
    title: "Skylights & Roof Glazing",
    image: "5.jpeg",
    alt: "Glass skylight set into a high ceiling",
    summary: "Overhead glazing that brings daylight into atriums and interior spaces.",
    description: "Open a space to natural light with a skylight or roof-glazing feature. We plan the glazing and frame details around the architecture and the site conditions.",
    features: ["Skylight and roof glazing features", "Atrium glazing", "Project-specific frame details", "Installation coordinated with the site"],
    gallery: ["5.jpeg", "4.jpeg"],
    galleryAlt: ["Glass skylight viewed from beneath", "Glazed atrium inside a commercial building"]
  }
];

const esc = (value) => String(value).replace(/[&<>"']/g, (character) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;"
})[character]);

const arrow = `<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M3.5 10h12m-5-5 5 5-5 5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const whatsappIcon = `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20.2 11.7a8.2 8.2 0 0 1-12.1 7.2L3 20l1.2-4.9a8.2 8.2 0 1 1 16-3.4Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M8.1 7.6c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.8 1.8c.1.2.1.4 0 .6l-.6.8c-.2.2-.2.4 0 .6.5.8 1.2 1.5 2.1 2 .2.1.4.1.6-.1l.8-1c.2-.2.4-.2.7-.1l1.7.8c.3.1.4.3.4.5 0 .8-.4 1.5-1 1.9-.6.4-1.4.5-2.2.2-1.4-.4-2.8-1.3-4-2.5-1.1-1.2-1.9-2.5-2.2-3.8-.2-.7 0-1.4.4-1.9.2-.3.5-.6.8-.8Z" fill="currentColor"/></svg>`;
const parkingSvg = `<svg viewBox="0 0 440 250" fill="none" aria-hidden="true"><path d="M44 84h352M62 84l30 96m286-96-30 96M84 61h272l40 23H44l40-23Z" stroke="currentColor" stroke-width="3"/><path d="M112 163h216l22 29H90l22-29Z" stroke="currentColor" stroke-width="3"/><path d="M144 162v-28h144v28m-122-28 16-37h88l18 37" stroke="currentColor" stroke-width="3"/><circle cx="157" cy="194" r="15" fill="#142235" stroke="currentColor" stroke-width="3"/><circle cx="283" cy="194" r="15" fill="#142235" stroke="currentColor" stroke-width="3"/><path d="M220 31v-14m-7 7h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`;

function servicePath(service, prefix) {
  return `${prefix}${service.route}/index.html`;
}

function header(prefix, activeKey = "") {
  const active = (key) => activeKey === key ? ' aria-current="page"' : "";
  return `<a class="skip-link" href="#main">Skip to content</a>
<div class="topline"><div class="topline-inner"><span>Architectural Glass &amp; Aluminium</span><a href="tel:${phoneLink}">${phone}</a></div></div>
<header class="site-header"><div class="header-inner">
  <a class="brand" href="${prefix}index.html" aria-label="WAG Construction home"><img src="${prefix}assets/wag-mark.svg" alt="" width="52" height="56"><span class="brand-copy">WAG Construction<small>ARCHITECTURAL GLASS &amp; ALUMINIUM</small></span></a>
  <nav class="site-nav" id="site-nav" aria-label="Main navigation">
    <a href="${prefix}index.html"${active("home")}>Home</a>
    <a href="${prefix}index.html#services">Services</a>
    <a href="${prefix}about-us/index.html"${active("about")}>About</a>
    <a href="${prefix}contact-us/index.html"${active("contact")}>Contact</a>
    <a class="mobile-quote" href="${prefix}contact-us/index.html">Request a quote</a>
  </nav>
  <div class="header-actions"><a class="header-phone" href="tel:${phoneLink}">${phone}</a><a class="button button-gold" href="${prefix}contact-us/index.html">Request a quote ${arrow}</a>
    <button class="theme-toggle" type="button" aria-label="Switch to dark mode" title="Switch to dark mode"><svg class="theme-icon-moon" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20.2 15.3A8.5 8.5 0 0 1 8.7 3.8 8.5 8.5 0 1 0 20.2 15.3Z" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg><svg class="theme-icon-sun" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.7"/><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg></button>
    <button class="menu-toggle" type="button" aria-controls="site-nav" aria-expanded="false" aria-label="Open navigation menu"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg></button>
  </div>
</div></header>`;
}

function footer(prefix) {
  const serviceLinks = services.filter((service) => service.key !== "parking").map((service) =>
    `<li><a href="${servicePath(service, prefix)}">${esc(service.title)}</a></li>`).join("");
  return `<footer class="footer"><div class="footer-inner">
  <div class="footer-main">
    <div class="footer-about"><a class="brand" href="${prefix}index.html"><img src="${prefix}assets/wag-mark.svg" alt="" width="52" height="56"><span class="brand-copy">WAG Construction<small>ARCHITECTURAL GLASS &amp; ALUMINIUM</small></span></a><p>Thoughtful glass, aluminium and architectural metalwork for homes and commercial spaces in Dammam, Saudi Arabia.</p></div>
    <div><h2>Explore</h2><ul class="footer-links"><li><a href="${prefix}index.html">Home</a></li><li><a href="${prefix}index.html#services">Services</a></li><li><a href="${prefix}about-us/index.html">About us</a></li><li><a href="${prefix}contact-us/index.html">Contact</a></li><li><a href="${servicePath(services.find((item) => item.key === "parking"), prefix)}">Car parking shades</a></li></ul></div>
    <div><h2>Get in touch</h2><ul class="footer-contact"><li><a href="tel:${phoneLink}">${phone}</a></li><li><a href="mailto:${email}">${email}</a></li><li>${address}</li><li>By appointment</li></ul></div>
  </div>
  <div class="footer-bottom"><span>© <span data-year></span> WAG Construction. All rights reserved.</span><span>Dammam, Saudi Arabia</span></div>
</div></footer>
<a class="whatsapp-float" href="${whatsappUrl}" aria-label="Chat with WAG Construction on WhatsApp" target="_blank" rel="noopener noreferrer">${whatsappIcon}</a>`;
}

function layout({ title, description, page, prefix, content, image }) {
  const imagePreload = image ? `<link rel="preload" as="image" href="${prefix}assets/${esc(image)}">` : "";
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#f7f6f2">
  <meta name="description" content="${esc(description)}">
  <title>${esc(title)} | WAG Construction</title>
  <link rel="icon" href="${prefix}assets/wag-mark.svg" type="image/svg+xml">
  ${imagePreload}
  <link rel="stylesheet" href="${prefix}styles/site.css">
  <script src="${prefix}scripts/site.js" defer></script>
</head>
<body data-page="${esc(page)}">
${header(prefix, page)}
<main id="main">${content}</main>
${footer(prefix)}
</body>
</html>
`;
}

function serviceCard(service, index, prefix = "") {
  const picture = service.image
    ? `<div class="service-card-image"><img src="${prefix}assets/${esc(service.image)}" alt="${esc(service.alt)}" loading="lazy" width="900" height="650"><span class="service-card-number">0${index + 1}</span></div>`
    : `<div class="service-card-image"><div class="service-card-illustration">${parkingSvg}</div><span class="service-card-number">0${index + 1}</span></div>`;
  return `<article class="service-card reveal${index % 3 ? ` delay-${index % 3}` : ""}">
  <a href="${servicePath(service, prefix)}" aria-label="Explore ${esc(service.title)}">${picture}</a>
  <div class="service-card-body"><h3><a href="${servicePath(service, prefix)}">${esc(service.title)}</a></h3><p>${esc(service.summary)}</p><a class="text-link" href="${servicePath(service, prefix)}">Explore service ${arrow}</a></div>
</article>`;
}

function homePage() {
  const prefix = "";
  const cards = services.map((service, index) => serviceCard(service, index, prefix)).join("\n");
  const projects = [
    ["2.jpeg", "Glass facade installation", "Glazing & facades"],
    ["16.jpeg", "Metal stair railing installation", "Architectural metalwork"],
    ["14.jpeg", "Finished timber entry doors", "Interior doors"]
  ].map(([image, alt, label], index) => `<figure class="project-image reveal${index ? ` delay-${index}` : ""}"><img src="assets/${image}" alt="${alt}" loading="lazy" width="900" height="700"><figcaption class="project-label">${label}</figcaption></figure>`).join("\n");
  const content = `<section class="container hero">
  <div class="hero-copy reveal"><span class="eyebrow">WAG Construction · Dammam</span><h1>Make room for <em>better</em> light.</h1><p class="lead">Glass, aluminium and architectural metalwork shaped around the way you live and work.</p><div class="hero-actions"><a class="button button-gold" href="contact-us/index.html">Discuss your project ${arrow}</a><a class="button button-outline" href="#services">Explore our services</a></div><p class="hero-note">Residential and commercial projects · Dammam, Saudi Arabia</p></div>
  <div class="hero-visual reveal delay-1"><img class="hero-image" src="assets/2.jpeg" alt="Modern commercial building with a glazed facade" width="1200" height="900" fetchpriority="high"><div class="image-caption"><span class="caption-mark">${arrow}</span><span><strong>Designed for the building</strong><span>Measured. Fabricated. Installed.</span></span></div></div>
</section>
<section class="section section-white" id="services"><div class="container"><div class="section-heading reveal"><div><span class="eyebrow">What we do</span><h2>Details that shape a space.</h2><p class="lead">From the first frame to the final fitting, explore solutions made for your project.</p></div><a class="text-link" href="contact-us/index.html">Tell us what you need ${arrow}</a></div><div class="services-grid">${cards}</div></div></section>
<section class="section"><div class="container"><div class="section-heading reveal"><div><span class="eyebrow">Project gallery</span><h2>Work made to fit.</h2><p class="lead">A selection of recent glass, door and metalwork installations.</p></div></div><div class="project-grid">${projects}</div></div></section>
<section class="section section-dark"><div class="container about-grid"><div class="about-copy reveal"><span class="eyebrow">A practical partner</span><h2>Good work begins with listening.</h2><p class="lead">Every building is different. We take time to understand the opening, the finish and how the space will be used before planning the work.</p><a class="button button-gold" href="about-us/index.html">Meet WAG Construction ${arrow}</a></div><div class="value-list reveal delay-1"><div class="value-item"><strong>Thoughtful planning</strong><span>Start with the site and your requirements.</span></div><div class="value-item"><strong>Considered materials</strong><span>Choose details to suit the space.</span></div><div class="value-item"><strong>Careful installation</strong><span>Give the finishing details their due.</span></div></div></div></section>
<section class="section"><div class="container"><div class="cta-band reveal"><div><span class="eyebrow">Start a conversation</span><h2>Have a project in mind?</h2><p>Share a few details and we’ll help you plan the next step.</p></div><a class="button button-gold" href="contact-us/index.html">Contact WAG Construction ${arrow}</a></div></div></section>`;
  return layout({
    title: "Glass, Aluminium & Architectural Metalwork",
    description: "WAG Construction provides glass, aluminium, door, facade and architectural metalwork solutions in Dammam, Saudi Arabia.",
    page: "home", prefix, content, image: "2.jpeg"
  });
}

function servicePage(service) {
  const prefix = "../";
  const visual = service.image
    ? `<img src="${prefix}assets/${esc(service.image)}" alt="${esc(service.alt)}" width="1000" height="800" fetchpriority="high">`
    : `<div class="parking-illustration">${parkingSvg}</div>`;
  const gallery = service.gallery.length
    ? `<section class="section section-white"><div class="container"><div class="section-heading reveal"><div><span class="eyebrow">Project gallery</span><h2>Work in the details.</h2></div></div><div class="gallery-grid">${service.gallery.map((image, index) => `<figure class="reveal${index ? ` delay-${Math.min(index, 3)}` : ""}"><img src="${prefix}assets/${esc(image)}" alt="${esc(service.galleryAlt[index])}" loading="lazy" width="900" height="700"></figure>`).join("")}</div></div></section>`
    : "";
  const content = `<section class="container page-hero"><div class="reveal"><nav class="breadcrumbs" aria-label="Breadcrumb"><a href="${prefix}index.html">Home</a><span aria-hidden="true">/</span><a href="${prefix}index.html#services">Services</a><span aria-hidden="true">/</span><span aria-current="page">${esc(service.title)}</span></nav><span class="eyebrow">WAG Construction · Dammam</span><h1>${esc(service.title)}</h1><p class="lead">${esc(service.description)}</p><div class="hero-actions"><a class="button button-gold" href="${prefix}contact-us/index.html">Request a quote ${arrow}</a><a class="button button-outline" href="${whatsappUrl}" target="_blank" rel="noopener noreferrer">WhatsApp us ${whatsappIcon}</a></div></div><div class="page-hero-visual reveal delay-1">${visual}</div></section>
<section class="section section-white"><div class="container service-details"><div class="reveal"><span class="eyebrow">Our approach</span><h2>Planned around your space.</h2><p class="lead">${esc(service.summary)} We’ll discuss the opening, materials and installation details with you before work begins.</p></div><div class="reveal delay-1"><span class="eyebrow">What to expect</span><ul class="feature-list">${service.features.map((feature) => `<li><span class="feature-check" aria-hidden="true">✓</span><span>${esc(feature)}</span></li>`).join("")}</ul></div></div></section>
${gallery}
<section class="section"><div class="container"><div class="cta-band reveal"><div><span class="eyebrow">Let’s talk</span><h2>Planning ${esc(service.title.toLowerCase())}?</h2><p>Contact our team to discuss your project in Dammam.</p></div><a class="button button-gold" href="${prefix}contact-us/index.html">Discuss your project ${arrow}</a></div></div></section>`;
  return layout({
    title: service.title,
    description: service.description,
    page: service.key, prefix, content, image: service.image
  });
}

function aboutPage() {
  const prefix = "../";
  const content = `<section class="container page-hero"><div class="reveal"><nav class="breadcrumbs" aria-label="Breadcrumb"><a href="${prefix}index.html">Home</a><span aria-hidden="true">/</span><span aria-current="page">About</span></nav><span class="eyebrow">About WAG Construction</span><h1>Crafted with care. Built around you.</h1><p class="lead">We bring glass, aluminium, doors and architectural metalwork together with a practical, detail-focused approach.</p><div class="hero-actions"><a class="button button-gold" href="${prefix}contact-us/index.html">Start a conversation ${arrow}</a></div></div><div class="page-hero-visual reveal delay-1"><img src="${prefix}assets/1.jpeg" alt="Exterior facade with aluminium and glass details" width="1000" height="800" fetchpriority="high"></div></section>
<section class="section section-white"><div class="container about-grid"><div class="about-visual reveal"><img src="${prefix}assets/6.jpeg" alt="Commercial glass facade project" loading="lazy" width="1000" height="800"><img src="${prefix}assets/16.jpeg" alt="Stair railing project detail" loading="lazy" width="700" height="500"></div><div class="about-copy reveal delay-1"><span class="eyebrow">How we work</span><h2>Good results come from getting the details right.</h2><p class="lead">Based in Dammam, Saudi Arabia, WAG Construction works on glass, aluminium, doors and metalwork for residential and commercial spaces.</p><p class="muted">We start by understanding the site and the way the space needs to work. From there, we help plan the right system, coordinate the measurements and carry the details through to installation.</p><a class="text-link" href="${prefix}index.html#services">Explore our services ${arrow}</a></div></div></section>
<section class="section section-dark"><div class="container"><div class="section-heading reveal"><div><span class="eyebrow">What matters to us</span><h2>Care in every stage.</h2></div></div><div class="value-list reveal"><div class="value-item"><strong>Listen first</strong><span>Understand the space and your priorities.</span></div><div class="value-item"><strong>Plan clearly</strong><span>Keep materials and installation details in view.</span></div><div class="value-item"><strong>Finish thoughtfully</strong><span>Pay attention to how everything comes together.</span></div></div></div></section>
<section class="section"><div class="container"><div class="cta-band reveal"><div><span class="eyebrow">WAG Construction</span><h2>Let’s talk about your next project.</h2><p>We’re based in Dammam and ready to hear what you have in mind.</p></div><a class="button button-gold" href="${prefix}contact-us/index.html">Get in touch ${arrow}</a></div></div></section>`;
  return layout({
    title: "About WAG Construction",
    description: "Meet WAG Construction, a Dammam-based team for glass, aluminium, doors and architectural metalwork.",
    page: "about", prefix, content, image: "1.jpeg"
  });
}

function contactPage() {
  const prefix = "../";
  const content = `<section class="section"><div class="container contact-grid"><div class="reveal"><nav class="breadcrumbs" aria-label="Breadcrumb"><a href="${prefix}index.html">Home</a><span aria-hidden="true">/</span><span aria-current="page">Contact</span></nav><span class="eyebrow">Contact WAG Construction</span><h1>Let’s plan your project.</h1><p class="lead">Tell us what you’re looking for. Contact us directly by phone, email or WhatsApp.</p><div class="contact-cards"><a class="contact-card" href="tel:${phoneLink}"><span class="contact-icon">${phoneIcon}</span><span><small>Call our team</small><strong>${phone}</strong></span></a><a class="contact-card" href="mailto:${email}"><span class="contact-icon">${mailIcon}</span><span><small>Email</small><strong>${email}</strong></span></a><div class="contact-card"><span class="contact-icon">${pinIcon}</span><span><small>Based in</small><strong>${address}</strong></span></div></div></div><div class="contact-panel reveal delay-1"><div><span class="eyebrow">A quick message</span><h2>Start with a few words about the space.</h2><p>Share the type of work, where the project is and the best way to reach you.</p></div><a class="button button-gold" href="${whatsappUrl}" target="_blank" rel="noopener noreferrer">${whatsappIcon} Message us on WhatsApp</a></div></div></section>`;
  return layout({
    title: "Contact WAG Construction",
    description: "Contact WAG Construction in Dammam, Saudi Arabia, by phone, email or WhatsApp.",
    page: "contact", prefix, content, image: null
  });
}

const phoneIcon = `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m7.2 3.8 2.2-.5 2 4.7-1.8 1.5a14.2 14.2 0 0 0 4.9 4.9l1.5-1.8 4.7 2-.5 2.2a2 2 0 0 1-2.1 1.6C10.8 17.8 6.2 13.2 5.6 5.9a2 2 0 0 1 1.6-2.1Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>`;
const mailIcon = `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3.5" y="5" width="17" height="14" rx="1.5" stroke="currentColor" stroke-width="1.6"/><path d="m4.5 7 7.5 6 7.5-6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const pinIcon = `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" stroke="currentColor" stroke-width="1.6"/><circle cx="12" cy="10" r="2.3" stroke="currentColor" stroke-width="1.6"/></svg>`;

const pages = [
  ["index.html", homePage()],
  ["about-us/index.html", aboutPage()],
  ["contact-us/index.html", contactPage()],
  ...services.map((service) => [`${service.route}/index.html`, servicePage(service)])
];

for (const [relativePath, html] of pages) {
  const target = path.join(root, relativePath);
  await mkdir(path.dirname(target), { recursive: true });
  await writeFile(target, html, "utf8");
}

console.log(`Generated ${pages.length} responsive WAG Construction pages.`);

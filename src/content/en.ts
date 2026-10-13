import type { Contenido } from './tipos';

export const en: Contenido = {
  idioma: 'en',
  meta: {
    titulo: 'Paco López · Full-stack developer',
    descripcion:
      'I build custom websites and applications, and I build them secure. Web development, cybersecurity and data from Málaga, Spain, for clients anywhere.',
    ogAlt: 'Paco López, full-stack developer: custom websites and applications, built secure',
    locale: 'en_GB',
  },
  accesibilidad: {
    saltar: 'Skip to content',
    irAlInicio: 'Go to the top',
  },
  nav: [
    { id: 'trabajos', etiqueta: 'Work' },
    { id: 'servicios', etiqueta: 'Services' },
    { id: 'certificaciones', etiqueta: 'Certifications' },
    { id: 'sobre-mi', etiqueta: 'About' },
    { id: 'contacto', etiqueta: 'Contact' },
  ],
  portada: {
    disponible: 'Available for projects',
    titular: ['I build custom websites and apps.', 'And I build them secure.'],
    subtitulo:
      "I'm Paco López, a full-stack developer in Málaga, Spain. I take care of the whole path from idea to working product, and I look at security from day one, not at the end. I work with small businesses and freelancers.",
    ctaContacto: 'Tell me about your project',
    ctaTrabajos: 'See my work',
    fotoAlt: 'Portrait of Paco López',
  },
  sello: {
    titulo: 'This site scores A+',
    nota: 'on my own security analyser',
    detalle: "Don't take my word for it: paste this site's address into ¿Es segura tu web? and see for yourself.",
    verificar: 'Check it now',
    cabeceras: ['Content policy with nonce', 'Two-year HSTS', 'No third-party scripts', 'No cookies'],
  },
  disciplinas: [
    { titulo: 'Custom websites and apps', texto: 'Shops, dashboards and tools that fit how you work, not the other way round.' },
    { titulo: 'Security', texto: 'Review, hardening and secure design: what I build holds up, and so does what you already have.' },
    { titulo: 'Data and integrations', texto: 'Connecting your tools, automating repetitive work and turning data into reports people actually read.' },
  ],
  trabajos: {
    titulo: 'Work',
    intro: 'Three projects of my own, finished and published. You can open them, use them and read the code. Ovillo & Co. is a demo shop with no real client; the other two are tools anyone can use.',
    etiquetas: {
      problema: 'The problem',
      solucion: 'What I did',
      construccion: 'How it is built',
      datos: 'In numbers',
      pila: 'Technologies',
    },
    items: [
      {
        id: 'ovillo-co',
        tema: 'ovillo',
        nombre: 'Ovillo & Co.',
        tipo: 'Complete online shop (demo)',
        resumen: 'A demo shop for a crochet workshop, with checkout and an owner dashboard, built end to end. There is no real client behind it.',
        problema:
          "The case I set myself: a small business selling one-off and made-to-order pieces doesn't fit a generic template: it needs lead times, personalisation and a dashboard the owner can use without being technical.",
        solucion:
          'A shop with catalogue and filters, a basket that never loses anything, Stripe checkout, customer accounts, custom orders with reference photos and a workshop dashboard with sales, orders, stock and messages. In four languages.',
        construccion:
          'Almost everything is rendered on the server and the browser only gets the JavaScript for what is interactive. Security lives in the database (RLS policies), prices are always recalculated on the server and payment happens on Stripe, so the shop never sees a card.',
        datos: ['Over 220 logic tests and over 200 checks against a real PostgreSQL', '4 languages: Spanish, English, French and German', 'Lighthouse: accessibility 100 on every page'],
        pila: ['Next.js 16', 'React 19', 'TypeScript', 'Supabase', 'Stripe', 'Vercel'],
        enlaces: [
          { etiqueta: 'Visit the shop', href: 'https://ovillo-co.vercel.app' },
          { etiqueta: 'Code on GitHub', href: 'https://github.com/soypacodev/ovillo-co' },
        ],
        imagenes: [
          { src: '/img/ovillo-portada.webp', ancho: 1440, alto: 900, alt: 'Ovillo & Co. home page: headline "Cositas blanditas, de una en una" and a photo of a crocheted fawn' },
          { src: '/img/ovillo-panel.webp', ancho: 1440, alto: 900, alt: 'Workshop dashboard with monthly sales, average order value, orders to prepare and a sales-per-day chart' },
          { src: '/img/ovillo-movil.webp', ancho: 520, alto: 1125, alt: 'The shop on a phone: compact header and full-width product cards' },
        ],
      },
      {
        id: 'es-segura-tu-web',
        tema: 'seguridad',
        nombre: '¿Es segura tu web?',
        tipo: 'Free security tool',
        resumen: 'Paste a website address and get a grade from A+ to F, with what is wrong and how to fix it.',
        problema:
          "Small businesses don't know whether their website is properly protected, and technical reports are unreadable for anyone outside the trade. Many don't even know what to ask.",
        solucion:
          'An analyser that checks nine areas (connection, domain and email, headers, cookies, privacy, exposed files…), explains it in plain Spanish and produces a PDF report and a shareable link.',
        construccion:
          "It only looks at what any visitor can see and stores nothing about the analysed site. Results stream in while they are computed; shared reports are stored signed (HMAC) in Supabase and expire on their own. It is itself protected with a per-request nonce CSP.",
        datos: ['Over 1,000 automated tests', '9 areas of analysis graded from A+ to F', 'Signed shareable links that expire after 30 days'],
        pila: ['Next.js 16', 'React 19', 'TypeScript', 'Zod', 'Supabase', 'Vercel'],
        enlaces: [
          { etiqueta: 'Check a website', href: 'https://es-segura-tu-web.vercel.app' },
          { etiqueta: 'Code on GitHub', href: 'https://github.com/soypacodev/es-segura-tu-web' },
        ],
        imagenes: [
          { src: '/img/seguridad-informe.webp', ancho: 1640, alto: 1037, alt: 'Report for an insecure example site: grade F, 63 out of 100, six areas with their scores and a radar chart' },
          { src: '/img/seguridad-portada.webp', ancho: 1640, alto: 1037, alt: 'Analyser home page: address field and the grade scale from A+ to F' },
        ],
      },
      {
        id: 'cachivache',
        tema: 'cachivache',
        nombre: 'Cachivache',
        tipo: 'Windows desktop application',
        resumen: 'Frees up space on Windows and tells you what it will delete and what happens if you do. It only touches what you tick.',
        problema:
          'Cleaners ask for blind faith: a progress bar, "you recovered 12 GB" and no idea what it was. Deleting the wrong thing can break a PC, and these programs are rarely transparent.',
        solucion:
          'A cleaner that explains every item: what it is, how big it is and what happens if it goes. Nothing risky comes pre-ticked, everything goes to the recycle bin and a simulation mode walks through it all without touching a file.',
        construccion:
          'No dependencies: PowerShell and WPF, which ship with Windows. Safety is an allow-list (only things under an authorised folder can be deleted), every path is checked again right before it is touched, and there is no internet access unless you press "Check for updates".',
        datos: ['Over 2,300 automated tests', '21 independent analysis modules', 'Every release publishes the SHA-256 of its files'],
        pila: ['PowerShell', 'WPF', 'C#', 'Pester', 'GitHub Actions'],
        enlaces: [
          { etiqueta: 'Download', href: 'https://github.com/soypacodev/cachivache/releases/latest' },
          { etiqueta: 'Code on GitHub', href: 'https://github.com/soypacodev/cachivache' },
        ],
        imagenes: [
          { src: '/img/cachivache-resultados.webp', ancho: 1237, alto: 756, alt: 'Analysis results: each item with its size, its risk and what happens if it is deleted (interface in Spanish)' },
          { src: '/img/cachivache-inicio.webp', ancho: 1234, alto: 754, alt: 'Home screen: cleaning profiles, modules with their risk level and disk status (interface in Spanish)' },
        ],
      },
    ],
  },
  servicios: {
    titulo: 'Services',
    intro: 'I do three things, and I do them together: a site that works, that is protected, and that gives you useful information.',
    incluyeEtiqueta: 'Includes',
    items: [
      {
        id: 'webs',
        titulo: 'Custom websites and applications',
        texto: 'From a company website to a shop or an internal tool. Designed for mobile, fast and easy to maintain.',
        incluye: ['Complete design and development', 'Online shops and payment gateways', 'Admin dashboards and user accounts', 'Search visibility and accessibility built in'],
      },
      {
        id: 'seguridad',
        titulo: 'Security',
        texto: 'Review what you already have, or build it right from the start. With a clear report and a list of what to fix, in order of importance. I only review sites with the written permission of their owner.',
        incluye: ['Technical review and hardening of existing sites', 'Authentication and access control', 'Data protection: basic technical measures (GDPR)', 'Headers, CSP and secure configuration'],
      },
      {
        id: 'datos',
        titulo: 'Data and integrations',
        texto: "Connect the tools you already use and get more out of your data, without depending on one person or one spreadsheet.",
        incluye: ['API, payment, email and messaging integrations', 'Automation of repetitive tasks', 'Dashboards and reports with Power BI', 'PostgreSQL and MySQL databases'],
      },
    ],
    proceso: {
      titulo: 'How I work',
      pasos: [
        { titulo: 'A conversation', texto: 'You tell me what you need and what problem you want to solve. No commitment and no jargon.' },
        { titulo: 'A clear proposal', texto: 'In writing: what I will do, in which phases, how long it takes and what it costs. No surprises afterwards.' },
        { titulo: 'Delivery in phases', texto: 'You see real progress from the first week, you can change course, and in the end the code is yours.' },
      ],
    },
    nota: "Every project is different, so I don't publish rates: I give you one after listening to you.",
  },
  certificaciones: {
    titulo: 'Certifications',
    intro: 'Recognised training in cybersecurity, networking and IT support.',
    items: [
      { nombre: 'Certified in Cybersecurity (CC)', emisor: '(ISC)²', anio: 2023 },
      { nombre: 'NSE 1 · Information Security Awareness', emisor: 'Fortinet', anio: 2023 },
      { nombre: 'NSE 2 · The Evolution of Cybersecurity', emisor: 'Fortinet', anio: 2023 },
      { nombre: 'NSE 3 · Fortinet Product Awareness', emisor: 'Fortinet', anio: 2023 },
      { nombre: 'Google IT Support Professional Certificate', emisor: 'Google', anio: 2023 },
      { nombre: 'Networking Basics', emisor: 'Cisco', anio: 2023 },
      { nombre: 'Basic cybersecurity course (Spanish)', emisor: 'CCN-CERT', anio: 2023 },
      { nombre: 'Introduction to Cyber Security', emisor: 'Great Learning', anio: 2023 },
    ],
    nota: 'These are training certificates, not official audit credentials. If you need to verify one, I will send you the original.',
  },
  sobre: {
    titulo: 'About me',
    parrafos: [
      "I'm a programmer from Málaga. I like to understand how something works from top to bottom, from the screen to the database, and not leave loose ends.",
      'My training comes from cybersecurity, networking and IT support, and it shows in how I build: I always think from both sides, the person using it and the person trying to break it. The three projects above are my way of showing that instead of telling it.',
      'I work remotely, in Spanish or English, and I prefer a few projects done well to many done halfway.',
    ],
  },
  contacto: {
    titulo: "Let's talk",
    texto: "Tell me what you want to build. If you don't know where to start, that's fine too: we'll work it out together.",
    correoEtiqueta: 'Send me an email',
    asunto: 'Hi Paco, I would like to talk about a project',
    cuerpo: 'Hi Paco,\n\nI would like to talk to you about this project:\n\n',
    redes: [
      { etiqueta: 'GitHub', href: 'https://github.com/soypacodev' },
      { etiqueta: 'Instagram', href: 'https://www.instagram.com/soypacodev' },
    ],
    respuesta: 'I usually reply within one working day.',
  },
  pie: {
    derechos: 'Paco López',
    codigo: 'Source code of this site',
    privacidad: 'This site uses no cookies, has no analytics or third-party scripts and stores none of your data by itself.',
    enlacePrivacidad: 'Privacy',
    enlaceAvisoLegal: 'Legal notice',
  },
  legal: {
    volver: 'Back to the home page',
    actualizado: 'Last reviewed',
    privacidad: {
      titulo: 'Privacy policy',
      descripcion: 'What data this site handles: none, automatically. No cookies, no analytics and no third-party scripts.',
      fecha: '13 October 2026',
      secciones: [
        {
          titulo: 'Summary',
          parrafos: ['This site uses no cookies, has no analytics, loads no third-party scripts or fonts and has no forms. It stores none of your data by itself; only the hosting provider may log technical connection data (see “Hosting”).'],
        },
        {
          titulo: 'Who is responsible',
          parrafos: ['Paco López. You can write to soypacodev@gmail.com with any question about your data.'],
        },
        {
          titulo: 'If you write to me',
          parrafos: [
            'The contact links open your email program: the message does not go through this site, it reaches my inbox directly. I use your message and details only to reply to you and, if you decide so, to prepare a proposal. The legal basis is your enquiry and the steps prior to a possible contract (art. 6.1.b GDPR) or, if you only ask me a question, my legitimate interest in answering you (art. 6.1.f). My email runs on Gmail (Google), which acts as the email service provider.',
            'I keep the conversation while it lasts and, if no contract follows, I delete it 12 months after the last message. If there was a commercial relationship, I keep it for as long as the law requires. I do not share your data with anyone, except where legally required or with the email and hosting providers named here.',
          ],
        },
        {
          titulo: 'Hosting',
          parrafos: [
            'The site is hosted on Vercel. Like any server, Vercel may log technical connection data (such as the IP address) for the operation and security of the service. Vercel is a US company; transfers outside the European Economic Area rely on standard contractual clauses. Fonts are served from this same site, without going through Google.',
          ],
        },
        {
          titulo: 'Your rights',
          parrafos: [
            'You can ask me for access, rectification, erasure, objection, restriction or portability of your data by writing to the email above. If you think I have not handled your data properly, you can complain to the Spanish Data Protection Agency (aepd.es).',
          ],
        },
      ],
    },
    avisoLegal: {
      titulo: 'Legal notice',
      descripcion: 'Who is behind this site, terms of use and intellectual property.',
      fecha: '13 October 2026',
      secciones: [
        {
          titulo: 'Owner',
          parrafos: ['This site is the professional portfolio of Paco López, developer, based in Málaga (Spain). Contact: soypacodev@gmail.com.',
            'I am not yet self-employed. Before invoicing anyone I will register and publish my tax ID and my business address here.',
          ],
        },
        {
          titulo: 'Purpose',
          parrafos: ['To present my work and services. The information on the site is indicative and not a binding offer: each project is defined in a written proposal.'],
        },
        {
          titulo: 'Intellectual property',
          parrafos: [
            'The text, design and photos are mine and are not covered by the MIT licence, which covers only the code of this site, public on GitHub. The screenshots show my own projects; third-party names and trademarks that appear (Stripe, Supabase, Vercel and others) belong to their owners.',
          ],
        },
        {
          titulo: 'Links',
          parrafos: ['The site links to other sites. I am not responsible for their content or their privacy policy.'],
        },
        {
          titulo: 'Governing law',
          parrafos: ['This site is governed by Spanish law.'],
        },
      ],
    },
  },
  noEncontrada: { titulo: "I can't find that page", texto: "The address doesn't exist or has moved.", volver: 'Go to the home page' },
  error: { titulo: 'Something went wrong', texto: "It's not your fault. Try again and, if it keeps happening, write to me.", reintentar: 'Try again' },
};

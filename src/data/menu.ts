// src/data/menu.ts

export const headerMenu = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'Team', link: '/team' },
    { name: 'Register', link: 'https://causeofdeathindia.com/join-us-as-va-coder/', target: '_blank'},
    { name: 'Process', link: '/process' },
    { name: 'Gallery', link: '/gallery' },
    { name: 'Data & Insights', link: '/insights' },
    { name: 'Capacity Building', link: '/capacity' },
    { name: 'Resources', link: '#', showArrow: false,
        children: [
            { name: 'Guidelines & Policy Documents', link: '/guidelines' },
            { name: 'Research Papers', link: '/researchpapers' },
            { name: 'Videos', link: '/videos' },
            { name: 'Tools ', link: '/tools' },
        ]
    }
];

export const footerMenu = [
    { name: 'Contact Us', link: '/contact' },
    
];

export const legalMenu = [
    { name: 'Copyright', link: '/copyright' },
    { name: 'Disclaimer', link: '/disclaimer' },
    { name: 'Privacy Policy', link: '/privacy-policy' },
    { name: 'Sitemap', link: '/sitemap' },
    

];


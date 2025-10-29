// src/data/menu.ts

export const headerMenu = [
    { name: 'About', link: '/about' },
    { name: 'Our Team', link: '/team' },
    { name: 'Registration', link: '/registration' , showArrow: false,
             children: [
            { name: 'Process', link: '/process' },
            { name: 'Join us as VA coder', link: 'https://causeofdeathindia.com/join-us-as-va-coder/' },
             ]   
     },
    { name: 'Tools & Innovations', link: '/tools' },
    { name: 'Data & Insights', link: '/insights' },
    { name: 'Capacity Building', link: '/capacity' },
    { name: 'Resources', link: '/resources', showArrow: false,
        children: [
            { name: 'Guidelines and Policy Documents', link: '/style-guide#typography' },
            { name: 'Research Papers', link: '/style-guide#colors' },
        ]
    }
];

export const footerMenu = [
    { name: 'Style Guide', link: '/style-guide' },
];

export const legalMenu = [
    { name: 'Privacy Policy', link: '/legal/privacy-policy' },
    { name: 'Terms of Service', link: '/legal/terms-of-service' }
];


module.exports = {
    title: 'Cours de japonais',
    base: '/nihongo-vuepress/',
    description: 'Les notes de 4 années de cours de japonais.',
    serviceWorker: true,
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
    ],
    themeConfig: {
        sidebarDepth: 0,
        sidebar: [
            '/Cours_1annee/',
            '/Cours_2annee/',
            '/Cours_3annee/',
            '/Cours_3b/',
            '/annexes/',
            '/Calligraphie/',
            '/kanji/'
        ],
        nav: [
            {
                text: 'Cours',
                items: [
                    { text: 'Cours 1ère année', link: '/Cours_1annee/' },
                    { text: 'Cours 2nd année', link: '/Cours_2annee/' },
                    { text: 'Cours 3ième année', link: '/Cours_3annee/' },
                    { text: 'Cours 3ième année bis', link: '/Cours_3b/' }
                ]
            },
            {
                text: 'Annexes', link: '/annexes/'
            },
            {
                text: 'Calligraphie', link: '/Calligraphie/'
            },
            {
                text: 'Kanji', link: '/kanji/'
            }
        ]
    },
    markdown: {
        toc: {
            includeLevel: [2, 3]
        },
        config: md => {
            md.use(require('markdown-it-furigana'))
        }
    }
}
module.exports = {
    markdown: {
        toc: {
            includeLevel: [1, 2]
        },
        config: md => {
            // use more markdown-it plugins!
            md.use(require('markdown-it-furigana'))
        }
    }
}
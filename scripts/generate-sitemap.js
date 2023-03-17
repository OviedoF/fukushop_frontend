const sitemap = require('nextjs-sitemap-generator');
const path = require('path');

sitemap({
    baseUrl: 'https://fukushop.com.ar',
    ignoredPaths: ['admin'],
    pagesDirectory: path.resolve(__dirname, '../out/'),
    targetDirectory: 'out',
    fileName: 'sitemap.xml',
    ignoredExtensions: ['png', 'jpg'],
    extraPaths: ['/'],
    priorityMap: {
        '/': 1.0,
        '/*': 0.9,
    }
});
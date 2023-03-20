const sitemap = require('nextjs-sitemap-generator');
const path = require('path');

sitemap({
    baseUrl: 'https://fukushop.com.ar',
    ignoredPaths: ['admin', '404', '500', 'api', 'sitemap', 'robots'],
    pagesDirectory: path.resolve(__dirname, '../out'),
    targetDirectory: 'out',
    fileName: 'sitemap.xml',
    ignoredExtensions: ['png', 'jpg', 'ico', 'svg', 'css', 'js', 'zip', 'json', ''],
    extraPaths: ['/'],
    priorityMap: {
        '/': 1.0,
        '/productos/*': 0.9,
        '/productos/': 0.9,
        '/contacto/': 0.8,
        '/talles/': 0.8,
    }
});
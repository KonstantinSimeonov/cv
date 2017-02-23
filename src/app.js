'use strict';

/* constants */
const PUBLIC_ROUTE = '/public',
    MIME_TYPES = Object.freeze({
        'css': 'text/css',
        'js': 'text/javascript',
        'json': 'application/json',
        'pdf': 'application/pdf',
        'html': 'text/html',
        'handlebars': 'text/plain',
        'png': 'image/png',
        'jpg': 'image/jpeg',
        'gif': 'image/gif',
        'ico': 'image/x-icon'
    }),
    PORT = process.env.PORT || 3334;

/* dependencies */
const fs = require('fs'),
    path = require('path'),
    http = require('http');

/* startup setup */
const html = fs.readFileSync('./index.html', 'utf8'),
    pdfStats = fs.statSync('./resume.pdf'),
    pdfResume = fs.readFileSync('./resume.pdf');

const server = http.createServer((request, response) => {
    const cleanUrl = request.url.split('?')[0];
    response.setHeader('X-Powered-By', 'Node.js');

    /* static files */
    if (cleanUrl.startsWith(PUBLIC_ROUTE)) {
        const staticFilePath = path.join(__dirname, cleanUrl);

        if (!fs.existsSync(staticFilePath)) {
            response.writeHead(404);
            response.end();
        }

        const staticFileExtension = cleanUrl.split('.').pop(),
            fileStat = fs.statSync(staticFilePath),
            fileStream$ = fs.createReadStream(staticFilePath);

        response.writeHead(200, {
            'Content-Type': MIME_TYPES[staticFileExtension],
            'Content-Length': fileStat.size
        });

        fileStream$.pipe(response);
        fileStream$.on('end', () => response.end());
    /* server the exported pdf */
    } else if (cleanUrl === '/pdf') {
        response.writeHead(200, {
            'Content-Type': 'application/pdf',
            'Content-Disposition': 'attachment; filename=konstantin-simeonov-resume.pdf',
            'Content-Length': pdfStats.size
        });

        response.write(pdfResume, 'binary');
        response.end();
    /* serve the data for the handlebars templates */
    } else if (cleanUrl === '/') {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write(html);
        response.end();
    /* favicon */
    } else if (cleanUrl === '/favicon.ico') {
        response.writeHead(200, { 'Content-Type': MIME_TYPES['ico'] });
        fs.createReadStream('./public/assets/favicon.ico')
            .on('end', () => response.end())
            .pipe(response);
    /* not found */
    } else {
        response.writeHead(404);
        response.end();
    }
});

server.listen(PORT || 3334, () => console.log(`Server running on ${PORT}`));
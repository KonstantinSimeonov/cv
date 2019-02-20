const fs = require('fs');
const path = require('path');
const http = require('http');
const { promisify } = require('util');
const stat = promisify(fs.stat);

const getExtension = filePath => filePath.split('.').pop();

const MIME_TYPES = Object.freeze({
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
});
const PORT = process.env.PORT || 3334;

const server = http.createServer((request, response) => {
	const urlWithoutQueryParams = request.url.split('?')[0];
	const cleanUrl = urlWithoutQueryParams === '/' ? '/index.html' : urlWithoutQueryParams;
	const fileExt = getExtension(cleanUrl);
	response.setHeader('X-Powered-By', 'Node.js');

	const requestedPath = path.join(__dirname, cleanUrl);
	stat(requestedPath)
		.then(fileStats => {
			const readPipe$ = fs.createReadStream(requestedPath);

			readPipe$.on('error', () => {
				response.writeHead(500);
				response.end();
			});

			response.writeHead(200, {
				'Content-Type': MIME_TYPES[fileExt],
				'Content-Length': fileStats.size
			});

			readPipe$.pipe(response);
		})
		.catch(() => {
			response.writeHead(404);
			response.end();
		});
});

server.listen(PORT, () => process.stdout.write(`Server running on ${PORT}`));

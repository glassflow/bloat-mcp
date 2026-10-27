// Local wrapper: node server.js [port]
const http = require('http');
const handler = require('./api/mcp.js');
const port = Number(process.argv[2] || process.env.PORT || 8787);
http.createServer((req, res) => {
  if (req.url.split('?')[0] !== '/mcp') { res.statusCode = 404; return res.end(); }
  handler(req, res);
}).listen(port, '127.0.0.1', () => console.log('bloat-mcp on http://127.0.0.1:' + port + '/mcp'));

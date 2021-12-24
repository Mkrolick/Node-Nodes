const http = require('http');
const process = require('process');

const hostname = '127.0.0.1';
const port = 3000;


// Server Creation
const server = http.createServer((res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

// Print Command
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
/*
process.exitCode = 1
process.exit()
*/
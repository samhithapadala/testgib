const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
    <html>
      <head>
        <title>Node.js Test</title>
        <style>
          body {
            background-color: gray;
            color: white;
            font-family: Arial, sans-serif;
            text-align: center;
            padding-top: 50px;
          }
        </style>
      </head>
      <body>
        <h1>Hello from Node.js!</h1>
      </body>
    </html>
  `);
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});

const http = require('http');
const port = 3000;
http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>Hola CI/CD</h1>');
}).listen(port, () => {
  console.log(`Servidor escuchando en puerto ${port}`);
});

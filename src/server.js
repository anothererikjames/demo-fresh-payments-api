const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/transactions" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify([{ id: "txn-101", amount: 149.99 }]));
    return;
  }

  if (req.url === "/transactions" && req.method === "POST") {
    res.writeHead(201, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ created: true }));
    return;
  }

  res.writeHead(404);
  res.end();
});

server.listen(3000);

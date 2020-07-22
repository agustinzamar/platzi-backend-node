const http = require("http");
const server = http.createServer();

server.on("request", (req, res) => {
  if (req.method === "POST" && req.url === "/echo") {
    let body = [];

    req
      .on("data", (chunk) => {
        body.push(chunk);
      })
      .on("end", () => {
        res.writeHead(200, { "Content-Type": "text/plain" });
        body = Buffer.concat(body).toString().split("/");

        const date = new Date(`${body[2]}-${body[1]}-${body[0]} 00:00:00`);

        const dayOfWeek = date.getDay();

        let dayNames = [
          "Domingo",
          "Lunes",
          "Martes",
          "Miercoles",
          "Jueves",
          "Viernes",
          "Sabado",
        ];

        res.end(dayNames[dayOfWeek]);
      });
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(3001);
console.log("Server on port 3001");

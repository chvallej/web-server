const http = require("http");

http
  .createServer((req, res) => {
    // headers
    // res.setHeader("Content-Disposition", "attachment; filename=lista.csv");
    // res.writeHead(200, { "Content-Type": "application/csv" });
    // res.write("id, nombre \n");
    // res.write("1, Camilo \n");
    // res.write("2, Daniel \n");
    // res.write("3, Martha \n");

    res.write("Hola mundo");

    res.end();
  })
  .listen(8080);

console.log("Escuchando en el pueto", 8080);

const http = require('http');

const nama = "EVELYN ANASTASIA";
const nim = "2312101";
const email = "anastasia20@upi.edu";

const server = http.createServer((req, res) => {
    const urlParts = req.url.split('/');

    if (req.url === "/") {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end("Selamat datang di aplikasi Node.js sederhana!");
    } else if (req.url === "/contact") {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end(`Nama: ${nama}\nNIM: ${nim}\nEmail: ${email}`);
    } else if (urlParts[1] === "greet" && urlParts.length === 3) {
        const name = urlParts[2];
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end(`Hello, ${name}!`);
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end("Halaman tidak ditemukan");
    }
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});

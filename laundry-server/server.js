const http = require("http");
const handleRoutes = require("./routes");

const server = http.createServer((req, res) => {
    handleRoutes(req, res);
});

// Assignment requires port 3000
server.listen(3000, () => {
    console.log("Server running at http://localhost:3000/home");
});
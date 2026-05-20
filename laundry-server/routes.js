const fs = require("fs");
const path = require("path");

/*
    Function to load HTML files asynchronously
    using fs.readFile()
*/
function loadPage(res, filePath, statusCode = 200) {

    fs.readFile(filePath, "utf-8", (err, data) => {

        if (err) {
            res.writeHead(500, { "Content-Type": "text/html" });
            return res.end("<h1>500 Internal Server Error</h1>");
        }

        /*
            Load navbar separately
            and inject into pages
        */
        const navbarPath = path.join(__dirname, "components", "navbar.html");

        fs.readFile(navbarPath, "utf-8", (navErr, navbar) => {

            if (navErr) {
                res.writeHead(500, { "Content-Type": "text/html" });
                return res.end("<h1>Navbar Loading Error</h1>");
            }

            // Replace placeholder with navbar
            const finalPage = data.replace("{{navbar}}", navbar);

            res.writeHead(statusCode, {
                "Content-Type": "text/html"
            });

            res.end(finalPage);
        });
    });
}

/*
    Main route handling logic
*/
function handleRoutes(req, res) {

    const pagesDir = path.join(__dirname, "pages");

    if (req.url === "/" || req.url === "/home") {

        return loadPage(
            res,
            path.join(pagesDir, "home.html")
        );
    }

    if (req.url === "/services") {

        return loadPage(
            res,
            path.join(pagesDir, "services.html")
        );
    }

    if (req.url === "/about") {

        return loadPage(
            res,
            path.join(pagesDir, "about.html")
        );
    }

    if (req.url === "/contact") {

        return loadPage(
            res,
            path.join(pagesDir, "contact.html")
        );
    }

    // 404 route
    return loadPage(
        res,
        path.join(pagesDir, "404.html"),
        404
    );
}

module.exports = handleRoutes;
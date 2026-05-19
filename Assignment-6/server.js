const http = require("http");

const server = http.createServer((req, res) => {
    const navbar = `
        <header style="padding: 15px; background: #f0f0f0; font-family: sans-serif;">
            <b style="color: #0076df; font-size: 20px;">Laundry Wallah</b> &nbsp;&nbsp;&nbsp;
            <a href="/home">Home</a> | 
            <a href="/services">Services</a> | 
            <a href="/about">About Us</a> | 
            <a href="/contact">Contact Us</a>
        </header>
        <hr>
    `;

    if (req.url === "/" || req.url === "/home") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(`
            <html>
            <body style="font-family: sans-serif; margin: 0; padding: 0;">
                ${navbar}
                <div style="padding: 30px; max-width: 600px;">
                    <h1>Welcome to Laundry Wallah</h1>
                    <p>Revitalize Your
Clothes with Expert

Laundry Services!

From Premium dry cleaning to swift wash and fold, we deliver care and convenience. Schedule a pickup and rediscover the freshness of your clothes today!</p>
                </div>
            </body>
            </html>
        `);
        return res.end();
    }

    if (req.url === "/services") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(`
            <html>
            <body style="font-family: sans-serif; margin: 0; padding: 0;">
                ${navbar}
                <div style="padding: 30px; max-width: 600px;">
                    <h1>Our Simple Offerings</h1>
                    <ul>
                        <li>Dry Cleaning - $20</li>
                        <li>Wash & Fold - $10</li>
                        <li>Steam Ironing - $30</li>
                        <li>Stain Removal - $50</li>
                        <li>Leather and Suede Cleaning - $99</li>
                        <li>Wedding Dress Cleaning - $500</li>
                    </ul>
                    <p>Elevate your wardrobe with our meticulous dry cleaning, ensuring garments look and feel as good as new. We're committed to providing prompt solutions to ensure your experience is smooth and worry free. Enjoy seamless service with our convenient pickup and delivery options tailored to your schedule.  Experience exceptional care without breaking the bank - our affordable prices make laundry day stress-free</p>
                </div>
            </body>
            </html>
        `);
        return res.end();
    }

    if (req.url === "/about") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(`
            <html>
            <body style="font-family: sans-serif; margin: 0; padding: 0;">
                ${navbar}
                <div style="padding: 30px; max-width: 600px;">
                    <h1>About Our Workshop</h1>
                    <p>Laundry Wallah brings convenience and care to your doorstep. We specialize in professional washing, ironing, and dry‑cleaning services designed for busy lives. With eco‑friendly practices, reliable delivery, and attention to detail, we ensure your clothes look fresh, feel great, and last longer—making laundry effortless every day.</p>
                </div>
            </body>
            </html>
        `);
        return res.end();
    }

    if (req.url === "/contact") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(`
            <html>
            <body style="font-family: sans-serif; margin: 0; padding: 0;">
                ${navbar}
                <div style="padding: 30px; max-width: 600px;">
                    <h1>Contact Details</h1>
                    <p><b>Email:</b> mail@laundrywallah.com</p>
                    <p><b>Phone:</b> +91 91234 56780</p>
                    <p><b>Address:</b> Natraj Market,Malad, Mumbai</p>
                </div>
            </body>
            </html>
        `);
        return res.end();
    }

    res.writeHead(404, { "Content-Type": "text/html" });
    res.write(`
        <html>
        <body style="font-family: sans-serif; text-align: center; padding-top: 100px;">
            <h1 style="color: red; font-size: 50px;">404</h1>
            <h2>Page Not Found</h2>
            <p>The requested URL route path does not exist.</p>
            <p><a href="/home">Click here to go back Home</a></p>
        </body>
        </html>
    `);
    return res.end();
});

server.listen(4000, () => {
    console.log("Simple web server is live at http://localhost:4000/home");
});

class Service {
    constructor(iconUrl, name, amount) {
        this.iconUrl = iconUrl;
        this.name = name;
        this.amount = amount;
        this.inCart = false; // default state
    }
}

let added = [];
let total = 0;

const services = [
    new Service("img/drycleaning.png", "Dry Cleaning", 200.00),
    new Service("img/wash.png", "Wash & Fold", 100.00),
    new Service("img/iron.png", "Ironing", 30.00),
    new Service("img/stain-remover.png","Stain Removal",500.00),
    new Service("img/leather.png","Leather & Suede Cleaning",999.00),
    new Service("img/wedding.png","Wedding Dress Cleaning",2800.00)
];

const container = document.getElementById("servicesContainer");
const tabledata = document.getElementById("tableBody");
const totalCell = document.getElementById("totalCell"); // add a <td id="totalCell"></td> in your table footer

function updatetable() {
    // Clear old rows and reset total
    tabledata.innerHTML = "";
    total = 0;

    added.forEach((item, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${item.name}</td>
            <td>₹${item.amount.toFixed(2)}</td>
        `;
        tabledata.appendChild(row);
        total += item.amount;
    });

    // Update total cell
    totalCell.textContent = `₹${total.toFixed(2)}`;
}

services.forEach(service => {
    const card = document.createElement("div");
    card.classList.add("service-card");

    const info = document.createElement("div");
    info.style.display = "flex";
    info.style.alignItems = "center";
    info.style.gap = "10px";
    info.innerHTML = `
        <img src="${service.iconUrl}" class="icon" alt="icon">
        <div class="name">${service.name} <span style="color: lightgray">•</span></div>
        <div class="amount"><b>₹${service.amount.toFixed(2)}</b></div>
    `;

    const button = document.createElement("button");
    button.classList.add("btnalt"); // initial style
    button.textContent = "Add Item";

    button.addEventListener("click", () => {
        service.inCart = !service.inCart;

        if (service.inCart) {
            button.textContent = "Remove Item";
            button.classList.remove("btnalt");
            button.classList.add("btn");
            card.style.backgroundColor = "#eaf5fc";

            // Add service to cart
            added.push(service);
        } else {
            button.textContent = "Add Item";
            button.classList.remove("btn");
            button.classList.add("btnalt");
            card.style.backgroundColor = "white";

            // Remove service from cart
            added = added.filter(item => item !== service);
        }

        updatetable(); // refresh table
    });

    card.style.display = "flex";
    card.style.alignItems = "center";
    card.style.justifyContent = "space-between";

    card.appendChild(info);
    card.appendChild(button);
    container.appendChild(card);
});

class Quality{
    constructor(icon,title,desc){
        this.icon = icon;
        this.title = title;
        this.desc = desc;
    }
}
const qualcontain = document.getElementById("quality");
const qualities=[
    new Quality("img/laundry-machine.png","Premium Service","Elevate your wardrobe with our meticulous dry cleaning, ensuring garments look and feel as good as new"),
    new Quality("img/support.png","Quick Support","We're committed to providing prompt solutions to ensure your experience is smooth and worry free"),
    new Quality("img/delivered.png","Hassle Free Delivery","Enjoy seamless service with our convenient pickup and delivery options tailored to your schedule"),
    new Quality("img/handshake.png","Affordable Prices","Experience exceptional care without breaking the bank - our affordable prices make laundry day stress-free")
]
qualities.forEach(quality => {
    // const card = document.createElement("div");
    // card.classList.add("qualitystruct");
    //
    // const info = document.createElement("div");
    // info.innerHTML=`
    // <img class="image" src="${quality.icon}" alt="icon">
    // <div class="name">${quality.title}</div>
    // <div class="desc">${quality.desc}</div>
    // `
    // card.appendChild(info);
    // qualcontain.appendChild(card);

    const info = document.createElement("div");
    info.classList.add("qualitystruct");
    info.innerHTML=`
    <img class="image" src="${quality.icon}" alt="icon">
    <div class="name" style="text-align: center"><b>${quality.title}</b></div>
    <div class="desc" style="text-align: center">${quality.desc}</div>
    `
    qualcontain.appendChild(info);

})

document.getElementById("bookNowBtn").addEventListener("click", function() {
    // Collect form values
    const fullName = document.querySelector('input[placeholder="Enter Your Full Name"]').value;
    const email = document.querySelector('input[placeholder="Enter Your Email ID"]').value;
    const phone = document.querySelector('input[placeholder="Enter Your Phone Number"]').value;
    const totalAmount = document.getElementById("totalCell").innerText;

    // Prepare template parameters
    const templateParams = {
        full_name: fullName,
        email_id: email,
        phone_number: phone,
        total_amount: totalAmount
    };

    // Send email using EmailJS
    emailjs.send("service_j17e8fh", "template_b77cskj", templateParams)
        .then(function(response) {
            alert("Booking confirmed! Email sent successfully.");
        }, function(error) {
            alert("Failed to send email. Please try again.");
            console.error("EmailJS Error:", error);
        });
});

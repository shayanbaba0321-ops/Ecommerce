```javascript
// ================= ADD TO CART =================

function addToCart(product) {

    alert(product + " has been added to your cart!");

}


// ================= DARK / LIGHT MODE =================

function toggleMode() {

    document.body.classList.toggle("dark-mode");

}


// ================= PRODUCT SEARCH =================

function searchProducts() {

    let search = document
        .getElementById("searchBox")
        .value
        .toLowerCase();

    let products = document.querySelectorAll(".product");

    products.forEach(function(product) {

        let name = product
            .querySelector(".product-name")
            .innerText
            .toLowerCase();

        if (name.includes(search)) {

            product.style.display = "";

        } else {

            product.style.display = "none";

        }

    });

}


// ================= CONTACT FORM =================

function contactForm(event) {

    event.preventDefault();

    let name = document
        .getElementById("contactName")
        .value;

    let email = document
        .getElementById("contactEmail")
        .value;

    let message = document
        .getElementById("message")
        .value;

    if (name === "" || email === "" || message === "") {

        alert("Please fill all fields!");

        return;

    }

    alert("Thank you " + name + "! Your message has been sent.");

}


// ================= LOGIN FORM =================

function loginForm(event) {

    event.preventDefault();

    let email = document
        .getElementById("loginEmail")
        .value;

    let password = document
        .getElementById("loginPassword")
        .value;

    if (email === "" || password === "") {

        alert("Please enter email and password!");

        return;

    }

    if (password.length < 6) {

        alert("Password must be at least 6 characters!");

        return;

    }

    alert("Login successful!");

}


// ================= ACTIVE NAVBAR =================

let links = document.querySelectorAll(".nav-link");

links.forEach(function(link) {

    link.addEventListener("click", function() {

        links.forEach(function(item) {

            item.classList.remove("active");

        });

        this.classList.add("active");

    });

});
```

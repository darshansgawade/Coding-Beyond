//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Get the products div element
var products = document.getElementById("products");

// Create an array of product objects
var productArray = [
  {
    name: "200g Turmeric Powder Kesar",
    price: 35,
    url: "[1](http://listing.url)"
  },
  {
    name: "Selam Turmeric Powder",
    price: 130,
    url: "[2](http://listing2.url)"
  },
  {
    name: "White Turmeric Powder",
    price: 15,
    url: "[3](http://domain.com/related_prod.js?keyword=home)"
  },
  {
    name: "Sayyam Turmeric Powder",
    price: 150,
    url: "[4](http://example.com/1)"
  }
];

// Loop through the product array and create HTML elements for each product
for (var i = 0; i < productArray.length; i++) {
  // Create a div element for each product
  var productDiv = document.createElement("div");
  productDiv.className = "product";

  // Create an image element for each product
  var productImg = document.createElement("img");
  productImg.src = productArray[i].url;
  productImg.alt = productArray[i].name;

  // Create a paragraph element for the product name
  var productName = document.createElement("p");
  productName.textContent = productArray[i].name;

  // Create a paragraph element for the product price
  var productPrice = document.createElement("p");
  productPrice.textContent = "₹" + productArray[i].price + "/Pack";

  // Append the image, name, and price elements to the product div
  productDiv.appendChild(productImg);
  productDiv.appendChild(productName);
  productDiv.appendChild(productPrice);

  // Append the product div to the products div
  products.appendChild(productDiv);
}

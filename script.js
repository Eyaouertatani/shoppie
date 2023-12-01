'use strict';

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");
const header = document.querySelector("[data-header]");

var counterElement = document.getElementById('counter');
var plusButton = document.getElementById('plus');
var minusButton = document.getElementById('minus');

var counterValue = 0;
counterElement.innerHTML = counterValue;

plusButton.addEventListener('click', function () {
    if (counterValue < 10) {
        counterValue++;
        counterElement.innerHTML = counterValue;
    } else if (counterValue === 10) {
        alert("Le compteur a atteint la valeur maximale de 10.");
    }
});

minusButton.addEventListener('click', function () {
    if (counterValue > 0) {
        counterValue--;
        counterElement.innerHTML = counterValue;
    }
});

let count = 0;

function updateCounter() {
    count++;
    counterElement.innerText = count;
}

navToggler.addEventListener("click", function () {
    navbar.classList.toggle("active");
    updateCounter();
});

window.addEventListener("scroll", function () {
    header.classList[this.scrollY > 50 ? "add" : "remove"]("active");
});

function addToCart(productId) {
    alert('Article ajouté au panier');
}

function toggleLike(productId) {
    const likeBtn = document.querySelector(`.like-btn[data-product-id="${productId}"]`);
    likeBtn.classList.toggle('liked');
}

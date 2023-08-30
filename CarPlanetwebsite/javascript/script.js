// Customize Header
let header = document.querySelector("header");
let upButton = document.querySelector(".up");

window.onscroll = function () {
    if (scrollY >= "80") {
        header.style.boxShadow = "0 .5rem 1rem rgba(0,0,0,.1)";
        header.style.backgroundColor = "white";
    } else {
        header.style.boxShadow = "none";
        header.style.backgroundColor = "transparent";
    }

    if (scrollY >= "850") {
        upButton.classList.add("show");
    } else {
        upButton.classList.remove("show");
    }
};

// Customize Login Form
let loginInput = document.querySelector(".login");
let overlay = document.querySelector(".overlay");
let closeSpan = document.querySelector(".overlay span");
let userLogin = document.querySelector(".login-user");

loginInput.onclick = function () {
    overlay.classList.add("open");
    closeSpan.onclick = function () {
        overlay.classList.remove("open");
    };
};
userLogin.onclick = function () {
    overlay.classList.add("open");
    closeSpan.onclick = function () {
        overlay.classList.remove("open");
    };
};

// Customize Toggle Menu
let toggleMenu = document.querySelector(".toggle");
let nav = document.querySelector("nav");

toggleMenu.onclick = () => {
    toggleMenu.classList.toggle("fa-times");
    nav.classList.toggle("active");
};

// Set Active Class On Current Nav li
let lis = document.querySelectorAll("header nav ul li a");
let logo = document.querySelector("header .container a");

lis.forEach(li => {
    li.addEventListener("click", (e) => {
        lis.forEach(li => {
            li.classList.remove("active");
        });
        e.target.classList.add("active");
        if (document.querySelector("header nav").classList.contains("active")) {
            document.querySelector("header nav").classList.remove("active");
            toggleMenu.classList.remove("fa-times");
        }
    });
});
logo.onclick = () => {
    lis.forEach(li => {
        li.classList.remove("active");
    });
    document.querySelector("header nav ul li a.home").classList.add("active");
};


// Initialize Swiper
// Motor Section
var swiper = new Swiper(".holder", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
});

// Features Section
var swiper = new Swiper(".featured-swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
});

// Testimonial Section
var swiper = new Swiper(".testimonial-swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
});
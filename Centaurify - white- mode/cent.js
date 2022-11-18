AOS.init();


const control = document.getElementById("direction-toggle");
const marquees = document.querySelectorAll(".marquee");
const wrapper = document.querySelector(".wrapper");










// Preloader
window.addEventListener("load", () => {
    

    document.querySelector(".js-preloader").classList.add("fade-out");
    setTimeout(() => {
        document.querySelector(".js-preloader").style.display = "none";
    },2000)
});




document.querySelector('.more-button').addEventListener('click', function () {
    document.querySelector('.list-container').classList.toggle('active');
});




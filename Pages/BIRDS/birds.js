// ================= FILTER BUTTON =================

const buttons = document.querySelectorAll(".filter-btn");

const cards = document.querySelectorAll(".bird-card");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        // Remove active class

        buttons.forEach(btn => {
            btn.classList.remove("active");
        });

        // Add active class

        button.classList.add("active");

        // Get filter value

        const filter = button.getAttribute("data-filter");

        // Filter cards

        cards.forEach(card => {

            if(filter === "all"){

                card.style.display = "block";

            }

            else if(card.classList.contains(filter)){

                card.style.display = "block";

            }

            else{

                card.style.display = "none";

            }

        });

    });

});





/*====FOOTER SECTION====*/

const slides = document.querySelectorAll(".slide");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let current = 0;
let slider;

// Show Slide
function showSlide(index){

    // sabai slide bata active ra show-details hataune
    slides.forEach(slide => {
        slide.classList.remove("active");
        slide.classList.remove("show-details");
    });

    slides[index].classList.add("active");

    // purano timer rokna
    clearTimeout(slider);

    // last slide 30 second dekhauna
    if(index === slides.length - 1){
        slider = setTimeout(nextSlide, 30000);
    }
    else{
        slider = setTimeout(nextSlide, 4000);
    }
}

// Next Slide Function
function nextSlide(){

    current++;

    if(current >= slides.length){
        current = 0;
    }

    showSlide(current);
}

// Previous Slide Function
function prevSlide(){

    current--;

    if(current < 0){
        current = slides.length - 1;
    }

    showSlide(current);
}

// Next Button
next.addEventListener("click", () => {

    nextSlide();

});

// Previous Button
prev.addEventListener("click", () => {

    prevSlide();

});

// Click to Toggle Image and Description
slides.forEach(slide => {

    slide.addEventListener("click", () => {

        slide.classList.toggle("show-details");

    });

});

// start slider
showSlide(current);



//birds section 
const birdCards = document.querySelectorAll(".bird-card");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });
},{
    threshold:0.1
});

birdCards.forEach((card)=>{
    observer.observe(card);
});
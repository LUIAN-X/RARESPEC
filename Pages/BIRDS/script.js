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
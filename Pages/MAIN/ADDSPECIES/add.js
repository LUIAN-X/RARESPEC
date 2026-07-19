




//   TO ACCEPT IMAGE FROM USERS


const getImage = document.getElementById("imageFile");
const image = document.getElementById("picture");

let selectedFile = null;

getImage.addEventListener("change", function () {
    selectedFile = this.files[0];

    if (selectedFile) {
        image.src = URL.createObjectURL(selectedFile);
        image.style.visibility = "visible";
    }
});







//  .......................



// TO GO BACK TO MAIN PAGE

let back = document.getElementById("back");

back.addEventListener("click", () => {
    location.replace("../INDEX/index.html");
});

// ........................................


// TO DISPLAY HIDDEN TEXT

let text = document.getElementById("textToShow");
back.addEventListener('mouseenter', () => {
    if (text.style.display = 'none') {
        text.style.display = 'block';
    }

});
back.addEventListener("mouseleave", () => {
    if (text.style.display = 'block') {
        text.style.display = 'none';
    }

});

// ........................................





//  LOGIC OF  SUBMIT BUTTON

const submit = document.getElementById("submit");
submit.addEventListener("click", () => {
    const name = document.getElementById("name").value;
    const comment = document.getElementById("comment").value;


    if (selectedFile && name && comment) {
        alert('posted sucessfully')

          location.reload();

    }
    else {
        alert("please fill every table")
    }

});





// .................................




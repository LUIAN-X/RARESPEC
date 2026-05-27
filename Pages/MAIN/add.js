//   TO ACCEPT IMAGE FROM USERS


const getImage = document.getElementById("imageFile");
const image = document.getElementById("picture");

getImage.addEventListener("change", function () {
    const file = this.files[0];

    if (file) {
        image.src = URL.createObjectURL(file);
    }
});

//    END OF ACCEPTING
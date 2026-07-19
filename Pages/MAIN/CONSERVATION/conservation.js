let chitwanImage = document.getElementById("chitwanImage");

let raraImage = document.getElementById("raraImage")

let rhino = document.getElementById("rhino");
let rara = document.getElementById("rara");



//  FUNCTION SHOWS TEXT
function shows(e) {
  e.style.left = '0vw';
}

chitwanImage.addEventListener("mouseenter", () => {
  shows(rhino)
});

raraImage.addEventListener("mouseenter", () => {
  shows(rara)
});

// ...........................


// FUNCTION TO DISAPPEAR TEXT

function hides(e) {
  e.style.left = '-60vw';

}

chitwanImage.addEventListener('mouseleave', () => {
  hides(rhino)
});

raraImage.addEventListener("mouseleave", () => {
  hides(rara)
});


//   ................................


//   TO OPEN GOOGLE MAP



let chitwanLocation =document.getElementById("chitwanLocation");
let raraLocation = document.getElementById("raraLocation");

chitwanLocation.addEventListener("click",()=>{
window.open("https://www.google.com/maps/@27.5374133,84.3236779,13.29z?entry=ttu&g_ep=EgoyMDI2MDYyNC4wIKXMDSoASAFQAw%3D%3D")
});


raraLocation.addEventListener("click",()=>{

  window.open("https://www.google.com/maps/@29.5273096,82.0940704,13.77z?entry=ttu&g_ep=EgoyMDI2MDYyNC4wIKXMDSoASAFQAw%3D%3D")
});




// .......................
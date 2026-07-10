// FOR NAVIGATION SECTION


// ADD




let addImg = document.querySelector(".add img");
let h6 = document.createElement("h6");
h6.id = "addSpeciesText"
h6.textContent = "Add Species";
h6.style.visibility = 'hidden';
h6.style.marginTop = "20px";
addImg.style.marginTop = '0px';


addImg.addEventListener("mouseenter", () => {
  addImg.style.marginTop = '32px'
  h6.style.visibility = "visible";
  add.appendChild(h6);
});

addImg.addEventListener("mouseleave", () => {
  addImg.style.marginTop = '0px'
  if (h6.style.visibility === 'visible') {
    h6.remove();
  }
});








// END FOR ADD




// END OF NAVIGATION SECTION







//  FOR SELECT CATEGORIES OPTIONS


//  FOR CATEGORY
const select = document.querySelector("select");
select.addEventListener("change", function () {

  if (this.value === "category") {
    window.location.replace("index.html");
  }
});

// FOR PLANTS


select.addEventListener("change", function () {
  if (this.value === "plants") {
    window.location.assign("../PLANTS/plantsMain/plants.html");
  }
});


// FOR ANIMALS


select.addEventListener("change", function () { 

  if (this.value === "animals") {
    window.location.assign("../ANIMALS/animal.html");
  }
});


// FOR BIRDS


select.addEventListener("change", function () {

  if (this.value === "birds") {
    window.location.assign("../BIRDS/birds.html");
  }
});


// FOR INSECTS


select.addEventListener("change", function () {

  if (this.value === "insects") {
    window.location.asign("insects.html");
  }
});



// END OF CATEGORY SECTIONS









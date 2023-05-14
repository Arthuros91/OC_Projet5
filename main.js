/* GALLERY FUNCTIONS */

const gallery = $(".gallery");

// Fonction appelée lors du clic sur le bouton
function filtrerImagesParTag(tag) {
    // Sélectionner toutes les images de la galerie
    var images = document.getElementsByClassName('gallery-item');
    console.log(images);
    // Parcourir toutes les images
    for (var i = 0; i < images.length; i++) {
      var image = images[i];
      var imageTag = image.getAttribute('data-gallery-tag');
      console.log(images[i]);
      // Vérifier si le tag de l'image correspond au tag sélectionné
      if (imageTag === tag) {
        // Afficher l'image
        image.style.display = 'block';
      } else {
        // Masquer l'image
        image.style.display = 'none';
      }
    }
  }
  
  // Exemple d'utilisation : filtrer les images ayant le tag "Entreprises"
  filtrerImagesParTag('Entreprises');


//GenerateGallery(galleryitems);


/* BUTTONS FUNCTIONS */

const btnAll = document.querySelector(".btnAll");
const btnConcerts = document.querySelector(".btnConcerts");
const btnEntreprises = document.querySelector(".btnEntreprises");
const btnMariages = document.querySelector(".btnMariages");
const btnPortraits = document.querySelector(".btnPortraits");

const leftButton = document.querySelector(".leftArrow");
const rightButton = document.querySelector(".rightArrow");

btnAll.addEventListener("click", function(){
    var images = document.getElementsByClassName('gallery-item');
    for (var i = 0; i < images.length; i++) {
        var image = images[i];
        image.style.display = 'block';
    }
});

btnConcerts.addEventListener("click",function(){
    filtrerImagesParTag('Concert');
});

btnEntreprises.addEventListener("click",function(){
    filtrerImagesParTag('Entreprises');
});

btnMariages.addEventListener("click",function(){
    filtrerImagesParTag('Mariages');
});

btnPortraits.addEventListener("click",function(){
    filtrerImagesParTag('Portrait');
});





/* CAROUSEL FUNCTIONS */

const carousel = document.querySelector(".carousel-inner");
const carousel_img = document.querySelectorAll(".carousel-inner img");

const imgSize = carousel_img[0].offsetWidth;
const maxSize = (carousel.children.length - 1) * imgSize;

let scrollInterval;
let scrollValue = 0;
const header = document.querySelector("header");

carousel.style.marginTop = header.offsetHeight + "px";
navigateButtons();
playScrollAnimation();

function navigateButtons() {
  rightButton.addEventListener("click", function() {
    scrollValue += imgSize;
    if (scrollValue > maxSize) {
      scrollValue = 0;
    }
    carousel.scrollTo({ left: scrollValue, behavior: 'smooth' });
  });

  leftButton.addEventListener("click", function() {
    scrollValue -= imgSize;
    if (scrollValue < 0) {
      scrollValue = maxSize;
    }
    carousel.scrollTo({ left: scrollValue, behavior: 'smooth' });
  });
}

function playScrollAnimation() {
  scrollInterval = setInterval(function() {
    scrollValue += imgSize;
    if (scrollValue > maxSize) {
      scrollValue = 0;
    }
    carousel.scrollTo({ left: scrollValue, behavior: 'smooth' });
  }, 5000);
}










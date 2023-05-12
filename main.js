/* GALLERY FUNCTIONS */

const gallery = $(".gallery");
const reponse = await fetch('gallery.json')
const galleryitem = await reponse.json();

for( let i = 0; i < galleryitem.length; i++ ){
    const item = galleryitem[i];

    const img = $("<img>").addClass("gallery-item").attr({src : item.ImageURL, alt : item.alt});
    
    img.appendTo(gallery);
}



/* BUTTONS FUNCTIONS */

const btnAll = $(".btnAll");
const btnConcerts = $(".btnConcerts");
const btnEntreprises = $(".btnEntreprises");
const btnMariages = $(".btnMariages");
const btnPortraits = $(".btnPortraits");

const leftButton = $(".leftArrow");
const rightButton = $(".rightArrow");

const carousel = $(".carousel-inner");
const carousel_img = $(".carousel-inner img");

const imgSize = carousel_img.width();
const maxSize = (carousel.children().length - 1) * imgSize;

/* CAROUSEL FUNCTIONS */

var scrollInterval;
var scrollValue = 0;
const header = $("header");

carousel.css("margin-top", header.height());
navigateButtons();
playScrollAnimation();


function navigateButtons(){
    rightButton.on("click", function(){ 
        scrollValue += imgSize ;
        if (scrollValue > maxSize) { 
            scrollValue = 0;
        }
        carousel.animate({ scrollLeft: scrollValue }, 0);  
    }); 
    leftButton.on("click", function(){ 
        scrollValue -=imgSize;
        if (scrollValue < 0) { 
            scrollValue = maxSize;
        }
        carousel.animate({ scrollLeft: scrollValue }, 0);
    });
};

function playScrollAnimation() {
    scrollInterval = setInterval(function(){
        scrollValue += carousel_img.width(); 
        if (scrollValue > maxSize) { 
            scrollValue = 0;
        }
        carousel.animate({ scrollLeft: scrollValue }, 0); 
    }, 5000); 
}



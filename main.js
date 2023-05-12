/* GALLERY FUNCTIONS */

const gallery = $(".gallery");
const galleryitems = await $.getJSON("./assets/gallery.json");

function GenerateGallery(items){
    for( let i = 0; i < items.length; i++ ){
        const item = items[i];
        const img = $("<img>").addClass("gallery-item").attr({src : item.ImageURL, alt : item.alt});
        img.appendTo(gallery);
    }

}

function UpdateGallery(items){
    gallery.html("");
    GenerateGallery(items);  
};

GenerateGallery(galleryitems);


/* BUTTONS FUNCTIONS */

const btnAll = $(".btnAll");
const btnConcerts = $(".btnConcerts");
const btnEntreprises = $(".btnEntreprises");
const btnMariages = $(".btnMariages");
const btnPortraits = $(".btnPortraits");

const leftButton = $(".leftArrow");
const rightButton = $(".rightArrow");

btnAll.on("click", function(){
    UpdateGallery(galleryitems);
    return;
});

btnConcerts.on("click",function(){
    const list = galleryitems.filter(function(item){
        return item.tag === "Concerts";
    });
    UpdateGallery(list);
});

btnEntreprises.on("click",function(){
    const list = galleryitems.filter(function(item){
        return item.tag === "Entreprises";
    });
    UpdateGallery(list);
});

btnMariages.on("click",function(){
    const list = galleryitems.filter(function(item){
        return item.tag === "Mariages";
    });
    UpdateGallery(list);
});

btnPortraits.on("click",function(){
    const list = galleryitems.filter(function(item){
        return item.tag === "Portraits";
    });
    UpdateGallery(list);
});





/* CAROUSEL FUNCTIONS */

const carousel = $(".carousel-inner");
const carousel_img = $(".carousel-inner img");

const imgSize = carousel_img.width();
const maxSize = (carousel.children().length - 1) * imgSize;

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



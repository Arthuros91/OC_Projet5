const carousel=document.querySelector("#carousel");const leftButton=document.querySelector(".leftArrow");const rightButton=document.querySelector(".rightArrow");const carouselIndicators=document.querySelectorAll('.carIndic');const gallery=document.querySelector(".gallery");const images=document.querySelectorAll('.gallery-item');let photoNumber=0;let scrollInterval;carousel.style.backgroundImage="url('./assets/images/slider/0.webp')";changeColorButton();addNav();generateGallery();scrollInterval=setInterval(function(){photoNumber++;checkPhotoNumber();changeColorButton();carousel.style.backgroundImage="url('./assets/images/slider/"+String(photoNumber)+".webp')"},5000);leftButton.addEventListener("click",function(){photoNumber--;checkPhotoNumber();changeColorButton();console.log(photoNumber);carousel.style.backgroundImage="url('./assets/images/slider/"+String(photoNumber)+".webp')"});rightButton.addEventListener("click",function(){photoNumber++;checkPhotoNumber();changeColorButton();console.log(photoNumber);carousel.style.backgroundImage="url('./assets/images/slider/"+String(photoNumber)+".webp')"});function checkPhotoNumber(){if(photoNumber===-1){photoNumber=2}
if(photoNumber==0){photoNumber=2}else{photoNumber--};if(photoNumber<2){photoNumber++}else{photoNumber=0}}
function addNav(){for(let j=0;j<carouselIndicators.length;j++){carouselIndicators[j].addEventListener("click",function(){photoNumber=carouselIndicators[j].getAttribute("data-bs-slide-to");carousel.style.backgroundImage="url('./assets/images/slider/"+carouselIndicators[j].getAttribute("data-bs-slide-to")+".webp')";changeColorButton()})}}
function changeColorButton(){for(let j=0;j<carouselIndicators.length;j++){if(String(photoNumber)===carouselIndicators[j].getAttribute("data-bs-slide-to")){carouselIndicators[j].style.backgroundColor="white"}else{carouselIndicators[j].style.backgroundColor="#898786"}}}
function generateGallery(){for(var i=0;i<images.length;i++){var image=images[i];image.style.display='block'}}
const btnAll=document.querySelector(".btnAll");const btnConcerts=document.querySelector(".btnConcerts");const btnEntreprises=document.querySelector(".btnEntreprises");const btnMariages=document.querySelector(".btnMariages");const btnPortraits=document.querySelector(".btnPortraits");function filtrerImagesParTag(tag){for(var i=0;i<images.length;i++){var image=images[i];var imageTag=image.getAttribute('data-gallery-tag');if(imageTag===tag){image.style.display='flex'}else{image.style.display='none'}}}
btnAll.addEventListener("click",function(){generateGallery()});btnConcerts.addEventListener("click",function(){filtrerImagesParTag('Concert')});btnEntreprises.addEventListener("click",function(){filtrerImagesParTag('Entreprises')});btnMariages.addEventListener("click",function(){filtrerImagesParTag('Mariages')});btnPortraits.addEventListener("click",function(){filtrerImagesParTag('Portrait')})
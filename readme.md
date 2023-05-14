<img data-gallery-tag="Concert" class="gallery-item" src="./assets/images/gallery/concerts/aaron-paul-wnX-fXzB6Cw-unsplash.jpg" alt="Photo prise pendant un concert avec des lumières rouges" >
<img data-gallery-tag="Entreprises" class="gallery-item" src="./assets/images/gallery/entreprise/ali-morshedlou-WMD64tMfc4k-unsplash.jpg" alt="Photo d'un homme en costume avec les bras croisés">
<img data-gallery-tag="Entreprises" class="gallery-item" src="./assets/images/gallery/entreprise/jason-goodman-tHO1_OuKbg0-unsplash.jpg" alt="Photo de deux femmes au travail qui rigolent">
<img data-gallery-tag="Mariages" class="gallery-item" src="./assets/images/gallery/mariage/hannah-busing-RvF2R_qMpRk-unsplash.jpg" alt="Photo des deux mains d'un homme allant serrer les deux mains d'une femme">
<img data-gallery-tag="Portrait" class="gallery-item" src="./assets/images/gallery/portraits/ade-tunji-rVkhWWZFAtQ-unsplash.jpg" alt="Photo d'un homme noir serrant fortement les yeux">
<img data-gallery-tag="Mariages" class="gallery-item" src="./assets/images/gallery/mariage/jakob-owens-SiniLJkXhMc-unsplash.jpg" alt="Photo d'un couple de mariés rigolant devant un palmier">
<img data-gallery-tag="Portrait" class="gallery-item" src="./assets/images/gallery/portraits/nino-van-prattenburg - 443cl1uR_8-unsplash.jpg" alt="Photo d'une femme pensive derrière un grillage">
<img data-gallery-tag="Concert" class="gallery-item" src="./assets/images/gallery/concerts/austin-neill-hgO1wFPXl3I-unsplash.jpg" alt="Photo d'un chanteur en plein concert avec son micro"/>
<img data-gallery-tag="Entreprises" class="gallery-item" src="./assets/images/gallery/entreprise/mateus-campos-felipe-Fsgzm8N0hIY-unsplash.jpg" alt="Photo d'une femme qui rigole au travail derrière son ordinateur">



const generatedImages = []; // Tableau pour stocker les images générées

function GenerateGallery(items) {
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const img = new Image(); // Créer un nouvel objet Image
    img.className = "gallery-item";
    img.src = item.ImageURL; // Définir la source de l'image
    img.alt = item.alt; // Définir l'attribut alt de l'image
    img.width = "100%";
    img.height = "auto";
    // Ajouter l'image à la galerie une fois qu'elle est préchargée
    img.onload = function() {
      gallery.append(img);
    };

    generatedImages.push(img); // Ajouter l'image au tableau generatedImages
  }
}
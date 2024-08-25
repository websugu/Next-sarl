document.getElementById('themeToggle').addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const isLightTheme = document.body.classList.contains('light-theme');
    // Update button icon based on the current theme
    this.innerHTML = isLightTheme ? '<i class="ri-toggle-line" style="color: rgb(40, 37, 37);"></i>' : '<i class="ri-toggle-fill" style="color: white;"></i>';

    // Store the current theme in localStorage
    localStorage.setItem('theme', isLightTheme ? 'light' : 'dark');
});

// Display "image name 1" section when the website is opened or refreshed
document.addEventListener('DOMContentLoaded', function() {
    // Retrieve the stored theme from localStorage
    const storedTheme = localStorage.getItem('theme');

    // Apply the stored theme
    if (storedTheme) {
        document.body.classList.add(storedTheme === 'light' ? 'light-theme' : 'dark-theme');
        document.body.classList.remove(storedTheme === 'light' ? 'dark-theme' : 'light-theme');
    } else {
        // Default to light theme if no theme is stored
        document.body.classList.add('light-theme');
    }

    // Initialize the button text based on the current theme
    const isLightTheme = document.body.classList.contains('light-theme');
    document.getElementById('themeToggle').innerHTML = isLightTheme ? '<i class="ri-toggle-line" style="color: rgb(40, 37, 37);"></i>' : '<i class="ri-toggle-fill" style="color: white;"></i>';

    updateCarousel(imageData.item1); // Initialize the carousel with the default item
});

const scrollList = document.getElementById('scrollList');
const scrollAmount = 150; // Adjust as needed

document.getElementById('nextBtn').addEventListener('click', function() {
    scrollList.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});

document.getElementById('prevBtn').addEventListener('click', function() {
    scrollList.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});

const sidebarItems = document.querySelectorAll('.sidebar-item');
const carouselInner = document.getElementById('carouselInner');
const carouselDescription = document.getElementById('carouselDescription');
const modalBody = document.getElementById('modalBody');
const searchInput = document.getElementById('searchInput');
const notFoundMessage = document.createElement('div');
notFoundMessage.id = 'notFoundMessage';
notFoundMessage.innerText = 'Image not found';

const imageData = {
     item1: {
        images: [' next_phpmq/pm-img-1/p1.jpg', ' next_phpmq/pm-img-1/p2.jpg', ' next_phpmq/pm-img-1/p3.jpg',' next_phpmq/pm-img-1/p4.jpg',' next_phpmq/pm-img-1/p5.jpg',' next_phpmq/pm-img-1/p6.jpg'],
        description: 
        `
        <div class="des-styles">
    <h2>Portillon Grille 1 Batt BE4 :</h2>
    <p>Portillon Grille 1 Batt BE4 en fer découpé au laser
Nos portillons métalliques sont des portes avec des caractéristiques et des performances supérieures aux portillons dis standards. Multi-usages par définition, ceux-ci  peuvent être posées dans Établissements du Public, les collectivités, dans des bureaux, mais aussi les bâtiments d'habitation et commerciaux.
Nos portillons d’accès en fer découpé au laser reflètent votre personnalité et donne le ton à l’accueil dans votre 
maison.
A la fois élément de protection, mais aussi de décoration, nos portillons allient la solidité et le raffinement.
C’est pourquoi ils sont des réalisations qui s’inscrivent dans la durée tout comme nos autres créations.
Après validation de votre commande, vous serez contactés pour plus d’informations.


 </p>
    <p><i class="ri-calendar-line"></i><b> Fabriqué et expédié sous 5 à 15 jours.</b></p> 
    <table style="width:100%" >
        <tr>
          <th colspan="2">CONFIGURATION</th>
      
        </tr>
        <tr>
          <td>Nom du production</td>
          <td>Portillon Grille 1 Batt BE4</td>
         
        </tr>
        <tr>
          <td>Largeur de la porte </td>
          <td>Personnalisée/100 à 200 cm (+/- 10 cm)</td>
        </tr>
        <tr>
            <td>Hauteur de la porte  </td>
            <td>Personnalisée/220 à 352 cm (+/- 10 cm)</td>
          </tr>
          <tr>
            <td>Cadre dormant </td>
            <td>Cornière 50X4MM</td>
          </tr>
          <tr>
            <td>Encadrement du battant </td>
            <td>Tube 40X40X1.50MM</td>
          </tr>
          <tr>
            <td>Tôle de remplissage </td>
            <td>Tôle 30/10 3.0mm</td>
          </tr>
          <tr>
            <td>Fermeture intérieur</td>
            <td>Néant</td>
          </tr>
          <tr>
            <td>Peinture </td>
            <td>Antirouille sur l'ensemble</td>
          </tr>
          <tr>
            <td>Épaisseur du battant de porte </td>
            <td>40mm</td>
          </tr>
          <tr>
            <td>Sens d'ouverture de la porte</td>
            <td>Au choix du client</td>
          </tr>
          <tr>
            <td>Avantage </td>
            <td>Moderne / Simple</td>
          </tr>
          <tr>
            <td>Système de verrouillage</td>
            <td>Verrouillage principal</td>
          </tr>
          <tr>
            <td>Poignée </td>
            <td>Poignée normale de fer</td>
          </tr>
          <tr>
            <td>Quantité</td>
            <td>1 pièce</td>
          </tr>
          <tr>
            <td>Poids </td>
            <td>KGS</td>
          </tr>       
      </table>
</div>
        `,
        categoryImages: {
            ' next_phpmq/pm-img-1/p1.jpg': ['https://www.m1trofeos.com/7089-large_default/m1-med-iron-dor-50mm.jpg', 'https://tse4.explicit.bing.net/th?id=OIP.MfbIu-LElXoVKX4fRM0nxgHaE8&pid=Api&P=0&h=220', 'https://www.m1trofeos.com/7018-large_default/m1-med-iron-dor-50mm.jpg'],
            'image1b.jpg': ['category1b1.jpg', 'category1b2.jpg', 'category1b3.jpg'],
            'image1c.jpg': ['category1c1.jpg', 'category1c2.jpg', 'category1c3.jpg']
        }
    },


    item2: {
        images: ['next_phpmq/pm-img-1/p1.jpg', 'next_phpmq/pm-img-1/p2.jpg', 'next_phpmq/pm-img-1/p3.jpg', 'next_phpmq/pm-img-1/p4.jpg','next_phpmq/pm-img-1/p5.jpg', 'next_phpmq/pm-img-1/p6.jpg'],
        description: 
        `
        <div class="des-styles">
        <h2>Portillon Plein 1 Batt BE4 :</h2>
    <p>Portillon Plein 1 Batt BE4 en fer découpé au laser
Nos portillons métalliques sont des portes avec des caractéristiques et des performances supérieures aux portillons dis standards. Multi-usages par définition, ceux-ci  peuvent être posées dans Établissements du Public, les collectivités, dans des bureaux, mais aussi les bâtiments d'habitation et commerciaux.
Nos portillons d’accès en fer découpé au laser reflètent votre personnalité et donne le ton à l’accueil dans votre 
maison.
A la fois élément de protection, mais aussi de décoration, nos portillons allient la solidité et le raffinement.
C’est pourquoi ils sont des réalisations qui s’inscrivent dans la durée tout comme nos autres créations.
Après validation de votre commande, vous serez contactés pour plus d’informations.
    </p>
    <p><i class="ri-calendar-line"></i><b> Fabriqué et expédié sous 5 à 15 jours.</b></p> 
    <p><i class="ri-bar-chart-fill"></i> Caractéristiques spécifiques :</p>
    <table style="width:100%" >
        <tr>
          <th colspan="2">CONFIGURATION</th>
      
        </tr>
        <tr>
          <td>Nom du production</td>
          <td>Portillon Plein 1 Batt BE4</td>
         
        </tr>
        <tr>
          <td>Largeur de la porte </td>
          <td>Personnalisée/100 à 200 cm (+/- 10 cm)</td>
        </tr>
        <tr>
            <td>Hauteur de la porte  </td>
            <td>Personnalisée/220 à 350 cm (+/- 10 cm)</td>
          </tr>
          <tr>
            <td>Cadre dormant </td>
            <td>Cornière 50X4MM</td>
          </tr>
          <tr>
            <td>Encadrement du battant </td>
            <td>Tube 40X40X1.50MM</td>
          </tr>
          <tr>
            <td>Tôle de remplissage </td>
            <td>Tôle 20/10 2.0mm</td>
          </tr>
          <tr>
            <td>Fermeture intérieur</td>
            <td>Tôle 15/10 1.5mm</td>
          </tr>
          <tr>
            <td>Peinture </td>
            <td>Antirouille sur l'ensemble</td>
          </tr>
          <tr>
            <td>Épaisseur du battant de porte </td>
            <td>40mm</td>
          </tr>
          <tr>
            <td>Sens d'ouverture de la porte</td>
            <td>Au choix du client</td>
          </tr>
          <tr>
            <td>Avantage </td>
            <td>Moderne / Simple</td>
          </tr>
          <tr>
            <td>Système de verrouillage</td>
            <td>Verrouillage principal</td>
          </tr>
          <tr>
            <td>Poignée </td>
            <td>Poignée normale de fer</td>
          </tr>
          <tr>
            <td>Quantité</td>
            <td>1 pièce</td>
          </tr>
          <tr>
            <td>Poids </td>
            <td>KGS</td>
          </tr>       
      </table>
</div>
        `,
        categoryImages: {
            'image2a.jpg': ['category2a1.jpg', 'category2a2.jpg', 'category2a3.jpg'],
            'image2b.jpg': ['category2b1.jpg', 'category2b2.jpg', 'category2b3.jpg'],
            'image2c.jpg': ['category2c1.jpg', 'category2c2.jpg', 'category2c3.jpg']
        }
    },

    
    item3: {
        images: ['next_phpmq/pm-img-1/p1.jpg', 'next_phpmq/pm-img-1/p2.jpg', 'next_phpmq/pm-img-1/p3.jpg', 'next_phpmq/pm-img-1/p4.jpg','next_phpmq/pm-img-1/p5.jpg', 'next_phpmq/pm-img-1/p6.jpg'],
        description: `
        <div class="des-styles">
        <h2>Portillon Plexiglass 1 Batt BE4</h2>
    <p>Portillon Plexiglass 1 Batt BE4en fer découpé au laser
        Nos portes métalliques sont des portes avec des caractéristiques et des performances supérieures aux portes dites standards. Multi-usages par définition, celles-ci peuvent être posées dans Établissements du Public, les collectivités, dans des bureaux, mais aussi les bâtiments d'habitation et commerciaux.
        Nos portes d’accès en fer découpé au laser reflètent votre personnalité et donne le ton à l’accueil dans votre maison.
        A la fois élément de protection, mais aussi de décoration, nos portes allient la solidité et le raffinement.
        C’est pourquoi elles sont des réalisations qui s’inscrivent dans la durée tout comme nos autres créations.
        Après validation de votre commande, vous serez contactés pour plus d’informations.
    </p>
    <p><i class="ri-calendar-line"></i><b> Fabriqué et expédié sous 5 à 15 jours.</b></p> 
    <p><i class="ri-bar-chart-fill"></i> Caractéristiques spécifiques :</p>
    <table style="width:100%" >
        <tr>
          <th colspan="2">CONFIGURATION</th>
      
        </tr>
        <tr>
          <td>Nom du production</td>
          <td>Portillon Plexiglass 1 Batt BE4</td>
         
        </tr>
        <tr>
          <td>Largeur de la porte </td>
          <td>Personnalisée/073 à 100 cm (+/- 10 cm)</td>
        </tr>
        <tr>
            <td>Hauteur de la porte  </td>
            <td>Personnalisée/100 à 200 cm (+/- 10 cm)</td>
          </tr>
          <tr>
            <td>Cadre dormant </td>
            <td>Cornière 50X4MM</td>
          </tr>
          <tr>
            <td>Encadrement du battant </td>
            <td>Tube 40X40X1.50MM</td>
          </tr>
          <tr>
            <td>Tôle de remplissage </td>
            <td>Tôle 20/10 2.0mm</td>
          </tr>
          <tr>
            <td>Fermeture intérieur</td>
            <td>Plexiglass/ Alucobond</td>
          </tr>
          <tr>
            <td>Peinture </td>
            <td>Antirouille sur l'ensemble</td>
          </tr>
          <tr>
            <td>Épaisseur du battant de porte </td>
            <td>40mm</td>
          </tr>
          <tr>
            <td>Sens d'ouverture de la porte</td>
            <td>Au choix du client</td>
          </tr>
          <tr>
            <td>Avantage </td>
            <td>Moderne / Simple</td>
          </tr>
          <tr>
            <td>Système de verrouillage</td>
            <td>Verrouillage principal</td>
          </tr>
          <tr>
            <td>Poignée </td>
            <td>Poignée normale de fer</td>
          </tr>
          <tr>
            <td>Quantité</td>
            <td>1 pièce</td>
          </tr>
          <tr>
            <td>Poids </td>
            <td>KGS</td>
          </tr>       
      </table>
</div>
        `,
        categoryImages: {
            'image3a.jpg': ['category3a1.jpg', 'category3a2.jpg', 'category3a3.jpg'],
            'image3b.jpg': ['category3b1.jpg', 'category3b2.jpg', 'category3b3.jpg'],
            'image3c.jpg': ['category3c1.jpg', 'category3c2.jpg', 'category3c3.jpg']
        }
    }
    ,
    item4: {
        images: ['next_phpmq/pm-img-1/p1.jpg', 'next_phpmq/pm-img-1/p2.jpg', 'next_phpmq/pm-img-1/p3.jpg', 'next_phpmq/pm-img-1/p4.jpg','next_phpmq/pm-img-1/p5.jpg', 'next_phpmq/pm-img-1/p6.jpg'],
        description: `
        
         <div class="des-styles">
        <h2>Portillon Grille 1 Batt BE6 :</h2>
    <p> Portillon Grille 1 Batt BE6 en fer découpé au laser
        Nos portes métalliques sont des portes avec des caractéristiques et des performances supérieures aux portes dites standards. Multi-usages par définition, celles-ci peuvent être posées dans Établissements du Public, les collectivités, dans des bureaux, mais aussi les bâtiments d'habitation et commerciaux.
        Nos portes d’accès en fer découpé au laser reflètent votre personnalité et donne le ton à l’accueil dans votre maison.
        A la fois élément de protection, mais aussi de décoration, nos portes allient la solidité et le raffinement.
        C’est pourquoi elles sont des réalisations qui s’inscrivent dans la durée tout comme nos autres créations.
        Après validation de votre commande, vous serez contactés pour plus d’informations.
    </p>
    <p><i class="ri-calendar-line"></i><b> Fabriqué et expédié sous 5 à 15 jours.</b></p> 
    <p><i class="ri-bar-chart-fill"></i> Caractéristiques spécifiques :</p>
    <table style="width:100%" >
        <tr>
          <th colspan="2">CONFIGURATION</th>
      
        </tr>
        <tr>
          <td>Nom du production</td>
          <td>Portillon Grille 1 Batt BE6</td>
         
        </tr>
        <tr>
          <td>Largeur de la porte </td>
          <td>Personnalisée/100 à 200 cm (+/- 10 cm)</td>
        </tr>
        <tr>
            <td>Hauteur de la porte  </td>
            <td>Personnalisée/220 à 352 cm (+/- 10 cm)</td>
          </tr>
          <tr>
            <td>Cadre dormant </td>
            <td>Cornière 40X4MM</td>
          </tr>
          <tr>
            <td>Encadrement du battant </td>
            <td>Tube 60X40X1.50MM</td>
          </tr>
          <tr>
            <td>Tôle de remplissage </td>
            <td>Tôle 30/10 3.0mm</td>
          </tr>
          <tr>
            <td>Fermeture intérieur</td>
            <td>Néant</td>
          </tr>
          <tr>
            <td>Peinture </td>
            <td>Antirouille sur l'ensemble</td>
          </tr>
          <tr>
            <td>Épaisseur du battant de porte </td>
            <td>40mm</td>
          </tr>
          <tr>
            <td>Sens d'ouverture de la porte</td>
            <td>Au choix du client</td>
          </tr>
          <tr>
            <td>Avantage </td>
            <td>Moderne / Simple</td>
          </tr>
          <tr>
            <td>Système de verrouillage</td>
            <td>Verrouillage principal</td>
          </tr>
          <tr>
            <td>Poignée </td>
            <td>Poignée normale de fer</td>
          </tr>
          <tr>
            <td>Quantité</td>
            <td>1 pièce</td>
          </tr>
          <tr>
            <td>Poids </td>
            <td>KGS</td>
          </tr>       
      </table>
</div>
        `,
        categoryImages: {
            'image3a.jpg': ['category3a1.jpg', 'category3a2.jpg', 'category3a3.jpg'],
            'image3b.jpg': ['category3b1.jpg', 'category3b2.jpg', 'category3b3.jpg'],
            'image3c.jpg': ['category3c1.jpg', 'category3c2.jpg', 'category3c3.jpg']
        }
    }

    ,
    item5: {
        images: ['next_phpmq/pm-img-1/p1.jpg', 'next_phpmq/pm-img-1/p2.jpg', 'next_phpmq/pm-img-1/p3.jpg', 'next_phpmq/pm-img-1/p4.jpg','next_phpmq/pm-img-1/p5.jpg', 'next_phpmq/pm-img-1/p6.jpg'],
        description: `
        
         <div class="des-styles">
        <h2>Portillon Plein 1 Batt BE6:</h2>
    <p>Portillon Plein 1 Batt BE6 en fer découpé au laser
        Nos portes métalliques sont des portes avec des caractéristiques et des performances supérieures aux portes dites standards. Multi-usages par définition, celles-ci peuvent être posées dans Établissements du Public, les collectivités, dans des bureaux, mais aussi les bâtiments d'habitation et commerciaux.
        Nos portes d’accès en fer découpé au laser reflètent votre personnalité et donne le ton à l’accueil dans votre maison.
        A la fois élément de protection, mais aussi de décoration, nos portes allient la solidité et le raffinement.
        C’est pourquoi elles sont des réalisations qui s’inscrivent dans la durée tout comme nos autres créations.
        Après validation de votre commande, vous serez contactés pour plus d’informations.
    </p>
    <p><i class="ri-calendar-line"></i><b> Fabriqué et expédié sous 5 à 15 jours.</b></p> 
    <p><i class="ri-bar-chart-fill"></i> Caractéristiques spécifiques :</p>
    <table style="width:100%" >
        <tr>
          <th colspan="2">CONFIGURATION</th>
      
        </tr>
        <tr>
          <td>Nom du production</td>
          <td>Portillon Plein 1 Batt BE6</td>
         
        </tr>
        <tr>
          <td>Largeur de la porte </td>
          <td>Personnalisée/100 à 200 cm (+/- 10 cm)</td>
        </tr>
        <tr>
            <td>Hauteur de la porte  </td>
            <td>Personnalisée/220 à 352 cm (+/- 10 cm)</td>
          </tr>
          <tr>
            <td>Cadre dormant </td>
            <td>Cornière 50X4MM</td>
          </tr>
          <tr>
            <td>Encadrement du battant </td>
            <td>Tube 60X40X1.50MM</td>
          </tr>
          <tr>
            <td>Tôle de remplissage </td>
            <td>Tôle 20/10 2.0mm</td>
          </tr>
          <tr>
            <td>Fermeture intérieur</td>
            <td>Tôle 15/10 1.5mm</td>
          </tr>
          <tr>
            <td>Peinture </td>
            <td>Antirouille sur l'ensemble</td>
          </tr>
          <tr>
            <td>Épaisseur du battant de porte </td>
            <td>40mm</td>
          </tr>
          <tr>
            <td>Sens d'ouverture de la porte</td>
            <td>Au choix du client</td>
          </tr>
          <tr>
            <td>Avantage </td>
            <td>Moderne / Simple</td>
          </tr>
          <tr>
            <td>Système de verrouillage</td>
            <td>Verrouillage principal</td>
          </tr>
          <tr>
            <td>Poignée </td>
            <td>Poignée normale de fer</td>
          </tr>
          <tr>
            <td>Quantité</td>
            <td>1 pièce</td>
          </tr>
          <tr>
            <td>Poids </td>
            <td>KGS</td>
          </tr>       
      </table>
</div>
        `,
        categoryImages: {
            'image3a.jpg': ['category3a1.jpg', 'category3a2.jpg', 'category3a3.jpg'],
            'image3b.jpg': ['category3b1.jpg', 'category3b2.jpg', 'category3b3.jpg'],
            'image3c.jpg': ['category3c1.jpg', 'category3c2.jpg', 'category3c3.jpg']
        }
    }

    ,
    item6: {
        images: ['next_phpmq/pm-img-1/p1.jpg', 'next_phpmq/pm-img-1/p2.jpg', 'next_phpmq/pm-img-1/p3.jpg', 'next_phpmq/pm-img-1/p4.jpg','next_phpmq/pm-img-1/p5.jpg', 'next_phpmq/pm-img-1/p6.jpg'],
        description: `
        
         <div class="des-styles">
        <h2>Portillon Plexiglass 1 Batt BE6 :</h2>
    <p>Portillon Plexiglass 1 Batt BE6 en fer découpé au laser      
        Nos portes métalliques sont des portes avec des caractéristiques et des performances supérieures aux portes dites standards. Multi-usages par définition, celles-ci peuvent être posées dans Établissements du Public, les collectivités, dans des bureaux, mais aussi les bâtiments d'habitation et commerciaux.       
        Nos portes d’accès en fer découpé au laser reflètent votre personnalité et donne le ton à l’accueil dans votre maison.      
        A la fois élément de protection, mais aussi de décoration, nos portes allient la solidité et le raffinement.        
        C’est pourquoi elles sont des réalisations qui s’inscrivent dans la durée tout comme nos autres créations.
        Après validation de votre commande, vous serez contactés pour plus d’informations.
    </p>
    <p><i class="ri-calendar-line"></i><b> Fabriqué et expédié sous 5 à 15 jours.</b></p> 
    <p><i class="ri-bar-chart-fill"></i> Caractéristiques spécifiques :</p>
    <table style="width:100%" >
        <tr>
          <th colspan="2">CONFIGURATION</th>
      
        </tr>
        <tr>
          <td>Nom du production</td>
          <td>Portillon Plexiglass 1 Batt BE6</td>
         
        </tr>
        <tr>
          <td>Largeur de la porte </td>
          <td>Personnalisée/100 à 200 cm (+/- 10 cm)</td>
        </tr>
        <tr>
            <td>Hauteur de la porte  </td>
            <td>Personnalisée/220 à 352 cm (+/- 10 cm)</td>
          </tr>
          <tr>
            <td>Cadre dormant </td>
            <td>Cornière 50X4MM</td>
          </tr>
          <tr>
            <td>Encadrement du battant </td>
            <td>Tube 60X40X1.50MM</td>
          </tr>
          <tr>
            <td>Tôle de remplissage </td>
            <td>Tôle 20/10 2.0mm</td>
          </tr>
          <tr>
            <td>Fermeture intérieur</td>
            <td>Plexiglass/ Alucobond</td>
          </tr>
          <tr>
            <td>Peinture </td>
            <td>Antirouille sur l'ensemble</td>
          </tr>
          <tr>
            <td>Épaisseur du battant de porte </td>
            <td>40mm</td>
          </tr>
          <tr>
            <td>Sens d'ouverture de la porte</td>
            <td>Au choix du client</td>
          </tr>
          <tr>
            <td>Avantage </td>
            <td>Moderne / Simple</td>
          </tr>
          <tr>
            <td>Système de verrouillage</td>
            <td>Verrouillage principal</td>
          </tr>
          <tr>
            <td>Poignée </td>
            <td>Poignée normale de fer</td>
          </tr>
          <tr>
            <td>Quantité</td>
            <td>1 pièce</td>
          </tr>
          <tr>
            <td>Poids </td>
            <td>KGS</td>
          </tr>       
      </table>
</div>
        `,
        categoryImages: {
            'image3a.jpg': ['category3a1.jpg', 'category3a2.jpg', 'category3a3.jpg'],
            'image3b.jpg': ['category3b1.jpg', 'category3b2.jpg', 'category3b3.jpg'],
            'image3c.jpg': ['category3c1.jpg', 'category3c2.jpg', 'category3c3.jpg']
        }
    }

    ,
    item7: {
        images: ['next_phpmq/pm-img-1/p1.jpg', 'next_phpmq/pm-img-1/p2.jpg', 'next_phpmq/pm-img-1/p3.jpg', 'next_phpmq/pm-img-1/p4.jpg','next_phpmq/pm-img-1/p5.jpg', 'next_phpmq/pm-img-1/p6.jpg'],
        description: `
        
         <div class="des-styles">
        <h2>Portillon Grille 1 Batt BE8 :</h2>
    <p>Portillon Grille 1 Batt BE8 en fer découpé au laser
        Nos portes métalliques sont des portes avec des caractéristiques et des performances supérieures aux portes dites standards. Multi-usages par définition, celles-ci peuvent être posées dans Établissements du Public, les collectivités, dans des bureaux, mais aussi les bâtiments d'habitation et commerciaux.
        Nos portes d’accès en fer découpé au laser reflètent votre personnalité et donne le ton à l’accueil dans votre maison.
        A la fois élément de protection, mais aussi de décoration, nos portes allient la solidité et le raffinement.
        C’est pourquoi elles sont des réalisations qui s’inscrivent dans la durée tout comme nos autres créations.
        Après validation de votre commande, vous serez contactés pour plus d’informations.
    </p>
    <p><i class="ri-calendar-line"></i><b> Fabriqué et expédié sous 5 à 15 jours.</b></p> 
    <p><i class="ri-bar-chart-fill"></i> Caractéristiques spécifiques :</p>
    <table style="width:100%" >
        <tr>
          <th colspan="2">CONFIGURATION</th>
      
        </tr>
        <tr>
          <td>Nom du production</td>
          <td>Portillon Grille 1 Batt BE8</td>
         
        </tr>
        <tr>
          <td>Largeur de la porte </td>
          <td>Personnalisée/100 à 200 cm (+/- 10 cm)</td>
        </tr>
        <tr>
            <td>Hauteur de la porte  </td>
            <td>Personnalisée/220 à 352 cm (+/- 10 cm)</td>
          </tr>
          <tr>
            <td>Cadre dormant </td>
            <td>Cornière 50X4MM</td>
          </tr>
          <tr>
            <td>Encadrement du battant </td>
            <td>Tube 80X40X1.50MM</td>
          </tr>
          <tr>
            <td>Tôle de remplissage </td>
            <td>Tôle 30/10 3.0mm</td>
          </tr>
          <tr>
            <td>Fermeture intérieur</td>
            <td>Néant</td>
          </tr>
          <tr>
            <td>Peinture </td>
            <td>Antirouille sur l'ensemble</td>
          </tr>
          <tr>
            <td>Épaisseur du battant de porte </td>
            <td>40mm</td>
          </tr>
          <tr>
            <td>Sens d'ouverture de la porte</td>
            <td>Au choix du client</td>
          </tr>
          <tr>
            <td>Avantage </td>
            <td>Moderne / Simple</td>
          </tr>
          <tr>
            <td>Système de verrouillage</td>
            <td>Verrouillage principal</td>
          </tr>
          <tr>
            <td>Poignée </td>
            <td>Poignée normale de fer</td>
          </tr>
          <tr>
            <td>Quantité</td>
            <td>1 pièce</td>
          </tr>
          <tr>
            <td>Poids </td>
            <td>KGS</td>
          </tr>       
      </table>
</div>
        `,
        categoryImages: {
            'image3a.jpg': ['category3a1.jpg', 'category3a2.jpg', 'category3a3.jpg'],
            'image3b.jpg': ['category3b1.jpg', 'category3b2.jpg', 'category3b3.jpg'],
            'image3c.jpg': ['category3c1.jpg', 'category3c2.jpg', 'category3c3.jpg']
        }
    }

    ,
    item8: {
        images: ['next_phpmq/pm-img-1/p1.jpg', 'next_phpmq/pm-img-1/p2.jpg', 'next_phpmq/pm-img-1/p3.jpg', 'next_phpmq/pm-img-1/p4.jpg','next_phpmq/pm-img-1/p5.jpg', 'next_phpmq/pm-img-1/p6.jpg'],
        description: `
        
         <div class="des-styles">
        <h2>Portillon Plein 1 Batt BE8 :</h2>
    <p>Portillon Plein 1 Batt BE8 en fer découpé au laser
        Nos portes métalliques sont des portes avec des caractéristiques et des performances supérieures aux portes dites standards. Multi-usages par définition, celles-ci peuvent être posées dans Établissements du Public, les collectivités, dans des bureaux, mais aussi les bâtiments d'habitation et commerciaux.
        Nos portes d’accès en fer découpé au laser reflètent votre personnalité et donne le ton à l’accueil dans votre maison.
        A la fois élément de protection, mais aussi de décoration, nos portes allient la solidité et le raffinement.
        C’est pourquoi elles sont des réalisations qui s’inscrivent dans la durée tout comme nos autres créations.
        Après validation de votre commande, vous serez contactés pour plus d’informations.
    </p>
    <p><i class="ri-calendar-line"></i><b> Fabriqué et expédié sous 5 à 15 jours.</b></p> 
    <p><i class="ri-bar-chart-fill"></i> Caractéristiques spécifiques :</p>
    <table style="width:100%" >
        <tr>
          <th colspan="2">CONFIGURATION</th>
      
        </tr>
        <tr>
          <td>Nom du production</td>
          <td>Portillon Plein 1 Batt BE8 </td>
         
        </tr>
        <tr>
          <td>Largeur de la porte </td>
          <td>Personnalisée/100 à 200 cm (+/- 10 cm)</td>
        </tr>
        <tr>
            <td>Hauteur de la porte  </td>
            <td>Personnalisée/220 à 352 cm (+/- 10 cm)</td>
          </tr>
          <tr>
            <td>Cadre dormant </td>
            <td>Cornière 50X4MM</td>
          </tr>
          <tr>
            <td>Encadrement du battant </td>
            <td>Tube 80X40X1.50MM</td>
          </tr>
          <tr>
            <td>Tôle de remplissage </td>
            <td>Tôle 20/10 2.0mm</td>
          </tr>
          <tr>
            <td>Fermeture intérieur</td>
            <td>Tôle 15/10 1.5mm</td>
          </tr>
          <tr>
            <td>Peinture </td>
            <td>Antirouille sur l'ensemble</td>
          </tr>
          <tr>
            <td>Épaisseur du battant de porte </td>
            <td>40mm</td>
          </tr>
          <tr>
            <td>Sens d'ouverture de la porte</td>
            <td>Au choix du client</td>
          </tr>
          <tr>
            <td>Avantage </td>
            <td>Moderne / Simple</td>
          </tr>
          <tr>
            <td>Système de verrouillage</td>
            <td>Verrouillage principal</td>
          </tr>
          <tr>
            <td>Poignée </td>
            <td>Poignée normale de fer</td>
          </tr>
          <tr>
            <td>Quantité</td>
            <td>1 pièce</td>
          </tr>
          <tr>
            <td>Poids </td>
            <td>KGS</td>
          </tr>       
      </table>
</div>
        `,
        categoryImages: {
            'image3a.jpg': ['category3a1.jpg', 'category3a2.jpg', 'category3a3.jpg'],
            'image3b.jpg': ['category3b1.jpg', 'category3b2.jpg', 'category3b3.jpg'],
            'image3c.jpg': ['category3c1.jpg', 'category3c2.jpg', 'category3c3.jpg']
        }
    }

    ,
    item9: {
        images: ['next_phpmq/pm-img-1/p1.jpg', 'next_phpmq/pm-img-1/p2.jpg', 'next_phpmq/pm-img-1/p3.jpg', 'next_phpmq/pm-img-1/p4.jpg','next_phpmq/pm-img-1/p5.jpg', 'next_phpmq/pm-img-1/p6.jpg'],
        description: `
        
         <div class="des-styles">
        <h2>Portillon Plexiglass 1 Batt BE8 :</h2>
    <p>Portillon Plexiglass 1 Batt BE8 en fer découpé au laser
        Nos portes métalliques sont des portes avec des caractéristiques et des performances supérieures aux portes dites standards. Multi-usages par définition, celles-ci peuvent être posées dans Établissements du Public, les collectivités, dans des bureaux, mais aussi les bâtiments d'habitation et commerciaux.
        Nos portes d’accès en fer découpé au laser reflètent votre personnalité et donne le ton à l’accueil dans votre maison.
        A la fois élément de protection, mais aussi de décoration, nos portes allient la solidité et le raffinement.
        C’est pourquoi elles sont des réalisations qui s’inscrivent dans la durée tout comme nos autres créations.
        Après validation de votre commande, vous serez contactés pour plus d’informations.
    </p>
    <p><i class="ri-calendar-line"></i><b> Fabriqué et expédié sous 5 à 15 jours.</b></p> 
    <p><i class="ri-bar-chart-fill"></i> Caractéristiques spécifiques :</p>
    <table style="width:100%" >
        <tr>
          <th colspan="2">CONFIGURATION</th>
      
        </tr>
        <tr>
          <td>Nom du production</td>
          <td>Portillon Plexiglass 1 Batt BE8 </td>
         
        </tr>
        <tr>
          <td>Largeur de la porte </td>
          <td>Personnalisée/100 à 200 cm (+/- 10 cm)</td>
        </tr>
        <tr>
            <td>Hauteur de la porte  </td>
            <td>Personnalisée/220 à 352 cm (+/- 10 cm)</td>
          </tr>
          <tr>
            <td>Cadre dormant </td>
            <td>Cornière 50X4MM</td>
          </tr>
          <tr>
            <td>Encadrement du battant </td>
            <td>Tube 80X40X1.50MM</td>
          </tr>
          <tr>
            <td>Tôle de remplissage </td>
            <td>Tôle 20/10 2.0mm</td>
          </tr>
          <tr>
            <td>Fermeture intérieur</td>
            <td>Plexiglass/ Alucobond</td>
          </tr>
          <tr>
            <td>Peinture </td>
            <td>Antirouille sur l'ensemble</td>
          </tr>
          <tr>
            <td>Épaisseur du battant de porte </td>
            <td>40mm</td>
          </tr>
          <tr>
            <td>Sens d'ouverture de la porte</td>
            <td>Au choix du client</td>
          </tr>
          <tr>
            <td>Avantage </td>
            <td>Moderne / Simple</td>
          </tr>
          <tr>
            <td>Système de verrouillage</td>
            <td>Verrouillage principal</td>
          </tr>
          <tr>
            <td>Poignée </td>
            <td>Poignée normale de fer</td>
          </tr>
          <tr>
            <td>Quantité</td>
            <td>1 pièce</td>
          </tr>
          <tr>
            <td>Poids </td>
            <td>KGS</td>
          </tr>       
      </table>
</div>
        `,
        categoryImages: {
            'image3a.jpg': ['category3a1.jpg', 'category3a2.jpg', 'category3a3.jpg'],
            'image3b.jpg': ['category3b1.jpg', 'category3b2.jpg', 'category3b3.jpg'],
            'image3c.jpg': ['category3c1.jpg', 'category3c2.jpg', 'category3c3.jpg']
        }
    }
// TO BE UPDATED
    ,
    item10: {
        images: ['next_phpmq/pm-img-1/p1.jpg', 'next_phpmq/pm-img-1/p2.jpg', 'next_phpmq/pm-img-1/p3.jpg', 'next_phpmq/pm-img-1/p4.jpg','next_phpmq/pm-img-1/p5.jpg', 'next_phpmq/pm-img-1/p6.jpg'],
        description: `
        
         <div class="des-styles">
        <h2>Porte Pleine 2 Batt BE8 :</h2>
    <p>Porte Grille 1 Batt BE8 en fer découpé au laser
        Nos portes métalliques sont des portes avec des caractéristiques et des performances supérieures aux portes dites standards. Multi-usages par définition, celles-ci peuvent être posées dans Établissements du Public, les collectivités, dans des bureaux, mais aussi les bâtiments d'habitation et commerciaux.
        Nos portes d’accès en fer découpé au laser reflètent votre personnalité et donne le ton à l’accueil dans votre maison.
        A la fois élément de protection, mais aussi de décoration, nos portes allient la solidité et le raffinement.
        C’est pourquoi elles sont des réalisations qui s’inscrivent dans la durée tout comme nos autres créations.
        Après validation de votre commande, vous serez contactés pour plus d’informations.
    </p>
    <p><i class="ri-calendar-line"></i><b> Fabriqué et expédié sous 5 à 15 jours.</b></p> 
    <p><i class="ri-bar-chart-fill"></i> Caractéristiques spécifiques :</p>
    <table style="width:100%" >
        <tr>
          <th colspan="2">CONFIGURATION</th>
      
        </tr>
        <tr>
          <td>Nom du production</td>
          <td>Porte Pleine 2 Batt BE8 </td>
         
        </tr>
        <tr>
          <td>Largeur de la porte </td>
          <td>Personnalisée/073 à 100 cm (+/- 10 cm)</td>
        </tr>
        <tr>
            <td>Hauteur de la porte  </td>
            <td>Personnalisée/220 à 264 cm (+/- 10 cm)</td>
          </tr>
          <tr>
            <td>Cadre dormant </td>
            <td>Cornière 40X4MM</td>
          </tr>
          <tr>
            <td>Encadrement du battant </td>
            <td>Tube 80X40X1.50MM</td>
          </tr>
          <tr>
            <td>Tôle de remplissage </td>
            <td>Tôle 30/10 3.0mm</td>
          </tr>
          <tr>
            <td>Fermeture intérieur</td>
            <td>Néant</td>
          </tr>
          <tr>
            <td>Peinture </td>
            <td>Antirouille sur l'ensemble</td>
          </tr>
          <tr>
            <td>Épaisseur du battant de porte </td>
            <td>40mm</td>
          </tr>
          <tr>
            <td>Sens d'ouverture de la porte</td>
            <td>Au choix du client</td>
          </tr>
          <tr>
            <td>Avantage </td>
            <td>Moderne / Simple</td>
          </tr>
          <tr>
            <td>Système de verrouillage</td>
            <td>Verrouillage principal</td>
          </tr>
          <tr>
            <td>Poignée </td>
            <td>Poignée normale de fer</td>
          </tr>
          <tr>
            <td>Quantité</td>
            <td>1 pièce</td>
          </tr>
          <tr>
            <td>Poids </td>
            <td>KGS</td>
          </tr>       
      </table>
</div>
        `,
        categoryImages: {
            'image3a.jpg': ['category3a1.jpg', 'category3a2.jpg', 'category3a3.jpg'],
            'image3b.jpg': ['category3b1.jpg', 'category3b2.jpg', 'category3b3.jpg'],
            'image3c.jpg': ['category3c1.jpg', 'category3c2.jpg', 'category3c3.jpg']
        }
    }

    ,
    item11: {
        images: ['next_phpmq/pm-img-1/p1.jpg', 'next_phpmq/pm-img-1/p2.jpg', 'next_phpmq/pm-img-1/p3.jpg', 'next_phpmq/pm-img-1/p4.jpg','next_phpmq/pm-img-1/p5.jpg', 'next_phpmq/pm-img-1/p6.jpg'],
        description: `
        
         <div class="des-styles">
        <h2>Porte Plexiglass 2 Batt BE8 :</h2>
    <p>Porte Pleine 1 Batt BE8 en fer découpé au laser
        Nos portes d’accès en fer découpé au laser reflètent votre personnalité et donne le ton à l’accueil dans votre maison.
        A la fois élément de protection, mais aussi de décoration, nos portes allient la solidité et le raffinement.
        C’est pourquoi elles sont des réalisations qui s’inscrivent dans la durée tout comme nos autres créations.
        Après validation de votre commande, vous serez contactés pour plus d’informations.
        Nos portes métalliques sont des portes avec des caractéristiques et des performances supérieures aux portes dites standards. Multi-usages par définition, celles-ci peuvent être posées dans Établissements du Public, les collectivités, dans des bureaux, mais aussi les bâtiments d'habitation et commerciaux.
    </p>
    <p><i class="ri-calendar-line"></i><b> Fabriqué et expédié sous 5 à 15 jours.</b></p> 
    <p><i class="ri-bar-chart-fill"></i> Caractéristiques spécifiques :</p>
    <table style="width:100%" >
        <tr>
          <th colspan="2">CONFIGURATION</th>
      
        </tr>
        <tr>
          <td>Nom du production</td>
          <td>Porte Plexiglass 2 Batt BE8</td>
         
        </tr>
        <tr>
          <td>Largeur de la porte </td>
          <td>Personnalisée/073 à 100 cm (+/- 10 cm)</td>
        </tr>
        <tr>
            <td>Hauteur de la porte  </td>
            <td>Personnalisée/220 à 264 cm (+/- 10 cm)</td>
          </tr>
          <tr>
            <td>Cadre dormant </td>
            <td>Cornière 40X4MM</td>
          </tr>
          <tr>
            <td>Encadrement du battant </td>
            <td>Tube 80X40X1.50MM</td>
          </tr>
          <tr>
            <td>Tôle de remplissage </td>
            <td>Tôle 20/10 2.0mm</td>
          </tr>
          <tr>
            <td>Fermeture intérieur</td>
            <td>Tôle 15/10 1.5mm</td>
          </tr>
          <tr>
            <td>Peinture </td>
            <td>Antirouille sur l'ensemble</td>
          </tr>
          <tr>
            <td>Épaisseur du battant de porte </td>
            <td>40mm</td>
          </tr>
          <tr>
            <td>Sens d'ouverture de la porte</td>
            <td>Au choix du client</td>
          </tr>
          <tr>
            <td>Avantage </td>
            <td>Moderne / Simple</td>
          </tr>
          <tr>
            <td>Système de verrouillage</td>
            <td>Verrouillage principal</td>
          </tr>
          <tr>
            <td>Poignée </td>
            <td>Poignée normale de fer</td>
          </tr>
          <tr>
            <td>Quantité</td>
            <td>1 pièce</td>
          </tr>
          <tr>
            <td>Poids </td>
            <td>KGS</td>
          </tr>       
      </table>
</div>
        `,
        categoryImages: {
            'image3a.jpg': ['category3a1.jpg', 'category3a2.jpg', 'category3a3.jpg'],
            'image3b.jpg': ['category3b1.jpg', 'category3b2.jpg', 'category3b3.jpg'],
            'image3c.jpg': ['category3c1.jpg', 'category3c2.jpg', 'category3c3.jpg']
        }
    }

    ,
    item12: {
        images: ['next_phpmq/pm-img-1/p1.jpg', 'next_phpmq/pm-img-1/p2.jpg', 'next_phpmq/pm-img-1/p3.jpg', 'next_phpmq/pm-img-1/p4.jpg','next_phpmq/pm-img-1/p5.jpg', 'next_phpmq/pm-img-1/p6.jpg'],
        description: `
        
         <div class="des-styles">
        <h2>Porte Vitrée 2 Batt BE8 :</h2>
    <p>Porte Plexiglass 1 Batt BE8 en fer découpé au laser
        Nos portes métalliques sont des portes avec des caractéristiques et des performances supérieures aux portes dites standards. Multi-usages par définition, celles-ci peuvent être posées dans Établissements du Public, les collectivités, dans des bureaux, mais aussi les bâtiments d'habitation et commerciaux.
        Nos portes d’accès en fer découpé au laser reflètent votre personnalité et donne le ton à l’accueil dans votre maison.
        A la fois élément de protection, mais aussi de décoration, nos portes allient la solidité et le raffinement.
        C’est pourquoi elles sont des réalisations qui s’inscrivent dans la durée tout comme nos autres créations.
        Après validation de votre commande, vous serez contactés pour plus d’informations.
    </p>
    <p><i class="ri-calendar-line"></i><b> Fabriqué et expédié sous 5 à 15 jours.</b></p> 
    <p><i class="ri-bar-chart-fill"></i> Caractéristiques spécifiques :</p>
    <table style="width:100%" >
        <tr>
          <th colspan="2">CONFIGURATION</th>
      
        </tr>
        <tr>
          <td>Nom du production</td>
          <td>Porte Vitrée 2 Batt BE8 </td>
         
        </tr>
        <tr>
          <td>Largeur de la porte </td>
          <td>Personnalisée/073 à 100 cm (+/- 10 cm)</td>
        </tr>
        <tr>
            <td>Hauteur de la porte  </td>
            <td>Personnalisée/220 à 264 cm (+/- 10 cm)</td>
          </tr>
          <tr>
            <td>Cadre dormant </td>
            <td>Cornière 40X4MM</td>
          </tr>
          <tr>
            <td>Encadrement du battant </td>
            <td>Tube 80X40X1.50MM</td>
          </tr>
          <tr>
            <td>Tôle de remplissage </td>
            <td>Tôle 20/10 2.0mm</td>
          </tr>
          <tr>
            <td>Fermeture intérieur</td>
            <td>Plexiglass/ Alucobond</td>
          </tr>
          <tr>
            <td>Peinture </td>
            <td>Antirouille sur l'ensemble</td>
          </tr>
          <tr>
            <td>Épaisseur du battant de porte </td>
            <td>40mm</td>
          </tr>
          <tr>
            <td>Sens d'ouverture de la porte</td>
            <td>Au choix du client</td>
          </tr>
          <tr>
            <td>Avantage </td>
            <td>Moderne / Simple</td>
          </tr>
          <tr>
            <td>Système de verrouillage</td>
            <td>Verrouillage principal</td>
          </tr>
          <tr>
            <td>Poignée </td>
            <td>Poignée normale de fer</td>
          </tr>
          <tr>
            <td>Quantité</td>
            <td>1 pièce</td>
          </tr>
          <tr>
            <td>Poids </td>
            <td>KGS</td>
          </tr>       
      </table>
</div>
        `,
        categoryImages: {
            'image3a.jpg': ['category3a1.jpg', 'category3a2.jpg', 'category3a3.jpg'],
            'image3b.jpg': ['category3b1.jpg', 'category3b2.jpg', 'category3b3.jpg'],
            'image3c.jpg': ['category3c1.jpg', 'category3c2.jpg', 'category3c3.jpg']
        }
    }

   
};

function updateCarousel(item) {
    const images = item.images;
    const description = item.description;

    let carouselItems = '';
    for (let i = 0; i < images.length; i += 3) {
        const imageSet = images.slice(i, i + 3).map(src => `
            <div class="col-4">
                <img src="${src}" class="d-block w-100" alt="Image" data-toggle="modal" data-target="#imageModal" data-src="${src}">
            </div>
        `).join('');
        const activeClass = i === 0 ? 'active' : '';
        carouselItems += `
            <div class="carousel-item ${activeClass}">
                <div class="row">
                    ${imageSet}
                </div>
            </div>
        `;
    }
    carouselInner.innerHTML = carouselItems;
    carouselDescription.innerHTML = description;
    $('#carouselExampleControls').carousel('dispose'); // Dispose of existing carousel instance
    $('#carouselExampleControls').carousel(); // Reinitialize carousel
}

function updateModal(src) {
    const item = Object.values(imageData).find(item => item.images.includes(src));
    if (item && item.categoryImages[src]) {
        const images = item.categoryImages[src];
        const modalContent = images.map(imgSrc => `
            <img src="${imgSrc}" alt="Category Image" class="img-fluid">
        `).join('');
        modalBody.innerHTML = modalContent;
    } else {
        modalBody.innerHTML = '<p>No category images available.</p>';
    }
}

function filterSidebar(searchTerm) {
    let found = false;
    sidebarItems.forEach(item => {
        const itemName = item.innerText.toLowerCase();
        if (itemName.includes(searchTerm.toLowerCase())) {
            item.style.display = 'block';
            found = true;
        } else {
            item.style.display = 'none';
        }
    });
    if (!found) {
        if (!document.getElementById('notFoundMessage')) {
            document.querySelector('.sidebar').appendChild(notFoundMessage);
        }
    } else {
        const message = document.getElementById('notFoundMessage');
        if (message) {
            message.remove();
        }
    }
}

sidebarItems.forEach(item => {
    item.addEventListener('click', function() {
        const target = this.getAttribute('data-target');
        if (imageData[target]) {
            updateCarousel(imageData[target]);
        }
    });
});

document.addEventListener('click', function(event) {
    if (event.target.tagName === 'IMG' && event.target.hasAttribute('data-src')) {
        const src = event.target.getAttribute('data-src');
        updateModal(src);
    }
});

searchInput.addEventListener('input', function() {
    const searchTerm = this.value;
    filterSidebar(searchTerm);
});

// Display "image name 1" section when the website is opened or refreshed
document.addEventListener('DOMContentLoaded', function() {
    updateCarousel(imageData.item1);
});
document.getElementById('dropdownMenuButton').addEventListener('click', function() {
    const menu = document.getElementById('dropdownMenu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});

document.getElementById('closeDropdownMenu').addEventListener('click', function() {
    document.getElementById('dropdownMenu').style.display = 'none';
});

const dropdownItems = document.querySelectorAll('.dropdown-item');

dropdownItems.forEach(item => {
    item.addEventListener('click', function() {
        const target = this.getAttribute('data-target');
        if (imageData[target]) {
            updateCarousel(imageData[target]);
        }
        document.getElementById('dropdownMenu').style.display = 'none';
    });
});


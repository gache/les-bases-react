import React from 'react';

// Function Declaration: On déclare le return si j'efface le return notre code ne va pas marcher avec cette déclaration on a plus de ligne de code.
function Header(){
    return(
        // Pour la création d'une classe en React il faut utiliser className car class c'est une mot réservé en javascript
        <h1 className="titre">Magasin Vituel</h1>
        );
}

export default Header;
import React from 'react';

// J'injecte mon Props dans mon composant. à ma fonction je mets entre les parenthèse des accolade et à l'intérieur mon Props. et je déclare mon Props ou je veux qu'il s'affiche.
function Header({ titre }){
    return(
        <h1 className="titre"> { titre } </h1>
        );
}

export default Header;
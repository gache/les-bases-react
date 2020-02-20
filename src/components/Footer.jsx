import React from 'react'

// J'injecte mon Props dans mon composant. à ma fonction je mets entre les parenthèse des accolade et à l'intérieur mon Props. et je déclare mon Props ou je veux qu'il s'affiche.
const Footer  = ({ annee }) => ( 
       <footer>
           <p>© Copyright {annee} Erick Franco. Tous droits réservés </p>
       </footer>
    );

export default Footer ;
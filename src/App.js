import React, { Fragment } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  // En React la communication entre composant se fait du composant principal ou père vers les composants interne ou enfants.

  // Avoir l'année en cours
  const annee = new Date().getFullYear();

  return (
    <Fragment>
      {/* Composant */}

      {/* Création de Props 

        Je peux passer variables de type string, boolean, number et functions.
        dans mon exemple je déclare ma variable de type string, je l'injecte à mon composant Header.
        
        Important 

        Quand je passe string va entre guillemet simple ou double. 
        Par contre si je passe une variable, une fonction un boolean un number va être accolade. 
      */}

      <Header titre = "Magasin Vituel" />

      <Footer annee ={ annee } />
    </Fragment>
  );
}

export default App;

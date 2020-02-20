import React, { Fragment } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
// 
  return (
    //return retourne un élément on peut mettre un div mais le mieux c’est d’importer Fragment. le return va retourner Fragment  et lui contient l'ensembles des composants. On utilise Fragment car il ne va pas créer du code html de plus à ma page cas contraire d’une div. 
    <Fragment>

      {/* Composant */}

      <Header />
      <Footer />  

    </Fragment>
  );
}

export default App;
import React from 'react';
import Header from './components/Header';


function App() {
    //  En react on peut melange code html avec du Javascript grâce à JSX.


    /* Par exemple en dehors de return je peux créer de variables, faire une condition n'importe quel code de javascript. 
    Dans notre exemple  pour que la valeur de la variable message s’affiche dans notre balise h1. 
    Il faut lui dire à JSX qu'il faut l'interpréter cette variable comme du Javascript et pas comme un text du coup il faut mettre notre variable entre accolade.
     */
const edad = 18;
let message;


if (edad >= 18) {
  message = "Tu es Major";
} else {
  message = "tu es Mineur";
}
// tout ce qui est à l'intérieur de return c’est le qu’on voit dans la page.
  return (
    //
    <div className="App">
      <h1> Hola { message } </h1> 
      {/* Composant */}
        <div>
            <Header />
        </div>

    </div>
  );
}

export default App;
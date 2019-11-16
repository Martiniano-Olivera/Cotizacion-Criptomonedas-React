import React from "react";

import imagen from "./cryptomonedas.png";
import Formulario from "./components/Formulario";
import Cotizacion from "./components/Cotizacion";
import Criptomoneda from "./components/Criptomoneda";
import Error from "./components/Error";
import Spinner from "./components/Spinner";

//import Formulario from './components/Formulario';
//import Cotizacion from './components/Cotizacion';
//import Spinner from './components/Spinner';

function App() {
  // si no hay moneda, no ejecutar

  // mostrar spinner

  // Mostrar Spinner o resultado
  /*   const componente = cargando ? (
    <Spinner />
  ) : (
    <Cotizacion resultado={resultado} />
  ); */

  return (
    <div className="container">
      <div className="row">
        <div className="one-half column">
          <img src={imagen} alt="imagen criptomonedas" className="logotipo" />
        </div>
        <div className="one-half column">
          <h1>Cotiza Criptomonedas al Instante</h1>
        </div>
      </div>
      <Formulario />
    </div>
  );
}

export default App;

import React from "react";

import Criptomoneda from "./Criptomoneda";
import Error from "./Error";

function Formulario({ componente }) {
  // Validar que el usuario llene ambos campos
  const cotizarMoneda = e => {
    e.preventDefault();

    // validar si ambos campos estan llenos

    // pasar los datos al componente principal
  };

  // Mostrar el error en caso de que exista
  // const componente = (error) ?  <Error mensaje="Ambos campos son obligatorios" /> : null;

  return (
    <form>
      {componente}
      <div className="row">
        <label>Elige tu Moneda</label>
        <select className="u-full-width">
          <option value="">- Elige tu Moneda -</option>
          <option value="USD">Dolar Estadounidense</option>
          <option value="MXN">Peso Mexicano</option>
          <option value="GBP">Libras</option>
          <option value="EUR">Euro</option>
        </select>
      </div>

      <div className="row">
        <label>Elige tu Criptomoneda</label>
        <select className="u-full-width">
          <option value="">- Elige tu Criptomoneda -</option>
          <option value="Bitcon"> Bitcoin </option>
          <option value="Ethereum"> Ethereum </option>
          <option value="EOS"> EOS </option>
          <option value="XRP"> XRP </option>
          <option value="BitcoinCash"> Bitcoin Cash </option>
          <option value="Litecoin"> Litecoin </option>
          <option value="TRON"> TRON </option>
          <option value="VeChain"> VeChain </option>
          <option value="ChainLink"> ChainLink </option>
          <option value="EthereumClassic"> Ethereum Classic </option>
        </select>
      </div>

      <input
        type="submit"
        className="button-primary u-full-width"
        value="Calcular"
      />
    </form>
  );
}
export default Formulario;

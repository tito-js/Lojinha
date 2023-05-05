import React, { useState } from "react";

function Lojinha(props) {

    const [compra, setCompra] = useState(0);
    const [item, setItem] = useState(0);

    function realizaCompra(valor) {
        setItem(item + 1);
        setCompra(compra + valor);
    }

    function finalizaCompra() {
        alert("Compra feita com sucesso!");
        setCompra(0);
        setItem(0);
    }

  return (
    <div>
      <h1>Lojinha</h1>
      <p> itens no carrinho: {item}</p>
      <p>Valor total: R$ {compra}</p>
      <button onClick={() => finalizaCompra()}>Finalizar compra</button>

      <hr />

      <p>
        Camisa Polo - R$ 79,90{""}
        <button onClick={() => realizaCompra(79.9)}>Comprar</button>
      </p>

      <p>
        Calça jeans - R$ 120,00{""}
        <button onClick={() => realizaCompra(120.0)}>Comprar</button>
      </p>

      <p>
        Tênis Nike - R$ 110,99{""}
        <button onClick={() => realizaCompra(110.99)}>Comprar</button>
      </p>

      <button onClick={() => props.setLogin(false)}>Sair</button>
    </div>
  );
}

export default Lojinha;

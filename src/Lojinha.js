import React, { useState } from "react";
import { toast } from "react-toastify";

function Lojinha(props) {

    const [compra, setCompra] = useState(0);
    const [item, setItem] = useState(0);

    function realizaCompra(valor) {
        setItem(item + 1);
        setCompra(compra + valor);
    }

    function finalizaCompra() {
      toast.success('Compra feita com sucesso!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
        setCompra(0);
        setItem(0);
    }

  return (
    <div>
      <h1>Lojinha</h1>
      <p> itens no carrinho: <span className="badge bg-success"> {item} </span> </p>
      <p className="alert alert-info">Valor total: R$ {compra}</p>
      <button className="btn btn-success" onClick={() => finalizaCompra()}>Finalizar compra</button>

      <hr />

      <div className="d-flex justify-content-around"> 

          <div class="card">
              <img src="https://via.placeholder.com/150" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Camisa Polo</h5>
                    <p class="card-text">R$79,90</p>
                    <button class="btn btn-primary" onClick={() => realizaCompra(79.9)}>Comprar</button>
                </div>
          </div>

          <div class="card">
              <img src="https://via.placeholder.com/150" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Calça Jeans</h5>
                    <p class="card-text">R$120,00</p>
                    <button class="btn btn-primary" onClick={() => realizaCompra(120.00)}>Comprar</button>
                </div>
          </div>

          <div class="card">
              <img src="https://via.placeholder.com/150" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Tênis Nike</h5>
                    <p class="card-text">R$110,99</p>
                    <button class="btn btn-primary" onClick={() => realizaCompra(110.99)}>Comprar</button>
                </div>
          </div>

      </div>
      
      <button className="btn btn-danger" onClick={() => props.setLogin(false)}>Sair</button>
    </div>
  );
}

export default Lojinha;

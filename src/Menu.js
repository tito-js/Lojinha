import React, {useState} from "react";

function Menu(){

    const [fundo,setFundo] = useState("black");

    const estilo = {
        backgroundColor: fundo,
        color: "white"
    }

    return(
        <div style={estilo}>
            <p>Lojinha do Gabszito <button onClick={()=> setFundo( fundo == "black" ? "green" : "black" )}>Fundo</button></p>
        </div>
    )
}

export default Menu;
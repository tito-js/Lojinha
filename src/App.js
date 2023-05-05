import React, { useState } from "react";
import Lojinha from './Lojinha';
import Menu from "./Menu";

function App() {
  
  const [login, setLogin] = useState(false);

  return (
    <div className="App">

      <Menu/> 
      
      {
        login == false?
          <>
            <p>Faça login para continuar</p>
            <button onClick={()=> setLogin(true)}>Logar</button>
          </>
        :
          <Lojinha setLogin= {setLogin} />
      }
    </div>
  );
}

export default App;

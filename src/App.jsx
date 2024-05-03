import React from "react";

import {CardGrid} from "./component/CardGrid.jsx";
import {Navegacion} from "./component/Navegacion.jsx";

function App() {


  return (
    <>
      <Navegacion></Navegacion>
      <div style={{margin: '1em auto 0'}} className="md:container md:mx-auto">
        <CardGrid ></CardGrid>

      </div>
    </>
  )
}

export default App
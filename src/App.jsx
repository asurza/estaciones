import {Mapa} from "./component/Mapa.jsx";
import {Sketchfab} from "./component/Sketchfab.jsx";

import React from "react";

import {CardGrid} from "./component/CardGrid.jsx";
import {Navegacion} from "./component/Navegacion.jsx";

function App() {

  const embedUrl = 'https://sketchfab.com/models/39023092a8794082beb0df04fe55c88b/embed?ui_controls=0&ui_infos=0&ui_inspector=0&ui_stop=0&ui_watermark=0&ui_watermark_link=0';

  return (
    <>
      <Navegacion></Navegacion>
      <div style={{margin: '1em auto 0'}} className="md:container md:mx-auto">
        <CardGrid ></CardGrid>
        <Mapa></Mapa>
        <Sketchfab embedUrl={embedUrl}></Sketchfab>
      </div>
    </>
  )
}

export default App
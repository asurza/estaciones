import './App.css'
import {Header} from "./component/Header.jsx";
import {Mapa} from "./component/Mapa.jsx";
import {Sketchfab} from "./component/Sketchfab.jsx";

function App() {

  const embedUrl = 'https://sketchfab.com/models/39023092a8794082beb0df04fe55c88b/embed?autostart=1&ui_controls=0&autostart=1&ui_stop=0&ui_infos=0&ui_inspector=0&ui_stop=0&ui_watermark=0&ui_watermark_link=0';

  return (
    <>
      {/*<Header></Header>*/}
      <Mapa></Mapa>
      <Sketchfab embedUrl={embedUrl}></Sketchfab>
    </>
  )
}

export default App
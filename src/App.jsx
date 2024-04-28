import './App.css'
import {Header} from "./component/Header.jsx";
import {Mapa} from "./component/Mapa.jsx";
import {Sketchfab} from "./component/Sketchfab.jsx";

function App() {

  const embedUrl = 'https://sketchfab.com/models/39023092a8794082beb0df04fe55c88b/embed';

  return (
    <>
      {/*<Header></Header>*/}
      <Mapa></Mapa>
      <Sketchfab embedUrl={embedUrl}></Sketchfab>
    </>
  )
}

export default App
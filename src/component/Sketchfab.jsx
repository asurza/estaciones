import './header.css'
import {useEffect, useState} from "react";

export function Sketchfab({ embedUrl }){

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Marcar como cargado después de 2 segundos (ejemplo)
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 1000);

    return () => clearTimeout(timer); // Limpiar el temporizador al desmontar el componente
  }, []); // Ejecutar solo una vez al montar el componente


  return (
    <div style={{margin: '10px auto'}}>
      <iframe
        title="Metro Pinar del Rey - Madrid"
        width="100%"
        height="600px"
        src={embedUrl}
        frameBorder="0"
        preload="1"
        allow="autoplay; fullscreen"
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
      />
    </div>
  );

}
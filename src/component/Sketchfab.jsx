import {useEffect, useState} from "react";

export function Sketchfab({ embedUrl }){

  return (
    <div style={{margin: '10px auto'}} >
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
import './header.css'

export function Sketchfab({ embedUrl }){

  return (
    <div style={{width: '80%', margin: '10px auto'}}>
      <iframe
        title="Sketchfab Model"
        width="100%"
        height="600px"
        src={embedUrl}
        frameBorder="0"
        allow="autoplay; fullscreen; vr"
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
      />
    </div>
  );

}
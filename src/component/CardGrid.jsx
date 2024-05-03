import React, {useEffect, useRef, useState} from "react";
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import {estaciones} from "./../data/estaciones.js";
import {Mapa} from "./Mapa.jsx";
import {Sketchfab} from "./Sketchfab.jsx";
import {MapContainer, TileLayer, useMap} from "react-leaflet";

export function CardGrid() {

  const refIframe = useRef(null);
  const [estacion, setEstacion] = useState(estaciones[0]);
  const [iframeUrl, setIframeUrl] = useState(estaciones[0].url);

  const handleCambiarEstacion = (nuevaEstacion) => {
    // Cambiar la posición del centro del mapa a una nueva coordenada
    setEstacion(nuevaEstacion);
    setIframeUrl(nuevaEstacion.url);

    console.log("item pressed: ", nuevaEstacion);// Nueva posición (Nueva York)
    console.log("Nueva estacion: ", estacion);// Nueva posición (Nueva York)

  };

  return (
    <>
      <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
        {estaciones.map((item, index) => (
          <Card shadow="sm" key={index} isPressable onPress={() => handleCambiarEstacion(item)}>
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={item.nombre}
                className="w-full object-cover h-[140px]"
                src={item.img}
              />
            </CardBody>
            <CardFooter className="text-small justify-between">
              <b>{item.title}</b>
              <p className="font-bold">{item.nombre} | {item.linea}</p>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className='mapa-container'>
        <MapContainer center={estacion.posicion}
                      zoom={18}
                      style={{height: '250px', width: '100%'}}>
          <TileLayer
            url="https://tile.thunderforest.com/transport/{z}/{x}/{y}@2x.png?apikey=6a45f6dce3954ca5913a23f97697fe3d"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <FlyMapTo center={estacion.posicion} zoom={18} />
        </MapContainer>
      </div>

      <div style={{margin: '10px auto'}}>
        <iframe
          title="Metro Pinar del Rey - Madrid"
          width="100%"
          height="600px"
          src={iframeUrl}
          frameBorder="0"
          preload="1"
          allow="autoplay; fullscreen"
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          ref={refIframe}
        />
      </div>
    </>
  );
}

function FlyMapTo(props) {
  const map = useMap();

  useEffect(() => {
    map.flyTo(props.center, props.zoom);
  });

  return null;
}

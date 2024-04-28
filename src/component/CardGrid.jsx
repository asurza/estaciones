import React from "react";
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import {estaciones} from "./../data/estaciones.js";

export function CardGrid() {

  return (
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
      {estaciones.map((item, index) => (
        <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
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
            <p className="text-zinc-100 font-bold">{item.nombre} | {item.linea}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

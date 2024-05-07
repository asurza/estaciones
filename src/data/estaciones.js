const linea1 = {
  numero: "1",
  color: "bg-sky-400"
};

const linea2 = {
  numero: "2",
  color: "bg-red-600"
};

const linea3 = {
  numero: "3",
  color: "bg-yellow-300"
};

const linea4 = {
  numero: "4",
  color: "bg-orange-900"
};

const linea8 = {
  numero: "8",
  color: "bg-pink-600"
};

const linea9 = {
  numero: "9",
  color: "bg-purple-700"
};

const linea10 = {
  numero: "10",
  color: "bg-blue-700"
};

export const estaciones = [
  {
    nombre: "Pinar del Rey",
    descripcion: "La estación ubicada en el distrito de Hortaleza en Madrid.",
    img: "/images/pinar-rey.jpg",
    lineas: [linea8],
    posicion: [40.46786,-3.64857],
    url: "https://sketchfab.com/models/39023092a8794082beb0df04fe55c88b/embed?ui_controls=0&ui_infos=0&ui_inspector=0&ui_stop=0&ui_watermark=0&ui_watermark_link=0",
  },
  {
    nombre: "Esperanza",
    img: "/images/esperanza.jpg",
    lineas: [linea4],
    posicion: [40.45906,-3.64518],
    url: "https://sketchfab.com/models/61a292a2b5eb4eecab351bdd8c9cb3a0/embed?ui_controls=0&ui_infos=0&ui_inspector=0&ui_stop=0&ui_watermark=0&ui_watermark_link=0",
  },
  {
    nombre: "Mar de Cristal",
    img: "/images/mar-cristal.jpg",
    lineas: [linea8, linea4],
    posicion: [40.46932,-3.63806],
    url: "",
  },
  {
    nombre: "San Lorenzo",
    img: "/images/san-lorenzo.jpg",
    lineas: [linea4],
    posicion: [40.47454,-3.63938],
    url: "",
  },
  {
    nombre: "Arturo Soria",
    img: "/images/arturo-soria.jpg",
    lineas: [linea4],
    posicion: [40.45598,-3.65572],
    url: "",
  },
  {
    nombre: "Sol",
    img: "/images/sol.jpg",
    lineas: [linea3, linea2, linea1],
    posicion: [40.41687,-3.70321],
    url: "",
  },
  {
    nombre: "Colombia",
    img: "/images/colombia.jpg",
    lineas: [linea9, linea8],
    posicion: [40.45847,-3.67633],
    url: "",
  },
  {
    nombre: "Santiago Bernabeu",
    img: "/images/santiago-bernabeu.jpg",
    linea: "L10",
    lineas: [linea10],
    posicion: [40.45208,-3.69035],
    url: "",
  },
];
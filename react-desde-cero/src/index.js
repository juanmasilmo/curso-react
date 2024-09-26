import React from "react";
import ReactDom from "react-dom/client";
import { Objeto } from "./objeto";
import { Si, Si2 } from "./funcionSi";
import { NavVar } from "./funcionNav";
import { Name } from "./name";

//const root-element = document.getElementById('root'); capturo id root(carpeta public-index.html-linea 31) del element y guardo en la constante
//reactDom.createRoot(root-element) creo un root con la constante root-element

//esto es lo mismo pero en una sola linea
const root = ReactDom.createRoot(document.getElementById("root"));
//para formatear el codigo en el buscador se pone >format document
// dentro del root.render y dentro del div o del fragment(<> </>) podria llamar esta funcion asi {NavVar()}
//pero tambien se puede llamar con el nombre como una etiquetade html <NavVar></NavVar>
//y otra forma de llamar es una sola etiqueta que se cierra
root.render(
  <>
    <NavVar />
    <Name />
    <Si />
    <Si2 />
    <Objeto />
  </>
);

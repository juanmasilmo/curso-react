import React from "react";
import ReactDom from "react-dom/client";
import { Objeto } from "./objeto";
import Si2, { Si } from "./funcionSi";//primero importo el componente default(predeterminado) puede tener cualquier nombre y despues el nombrado
import {NavVar} from "./funcionNav";
import { Name } from "./name";
import {Propiedades} from "./Props"

//const root-element = document.getElementById('root'); capturo id root(carpeta public-index.html-linea 31) del element y guardo en la constante
//reactDom.createRoot(root-element) creo un root con la constante root-element

//esto es lo mismo pero en una sola linea
const root = ReactDom.createRoot(document.getElementById("root"));
//para formatear el codigo en el buscador se pone >format document
// dentro del root.render y dentro del div o del fragment(<> </>) podria llamar esta funcion asi {NavVar()}
//pero tambien se puede llamar con el nombre como una etiquetade html <NavVar></NavVar>
//y otra forma de llamar es una sola etiqueta que se cierra
//props funciona como un objeto, en este caso se llama title, pero se podria llamar coso, se envia a la funcion si es texto entre comillas si es numero entre llaves
root.render(
  <>
    <NavVar />
    <Name />
    <Si />
    <Si2 />
    <Objeto />
    <Propiedades title = "props 1" />
    <Propiedades title = {30} />
    <Propiedades title = {true} />
    <Propiedades title = {["props 4 ",1," juanma"]} />
  </>
);

export function Objeto() {
  const persona = {
    nombre: "juanma",
    edad: 39,
    ocupacion: "desarrollador",
  };
  //return <h3> {JSON.stringify(persona)} </h3> //JSON.stringify() muestra todo el objeto como texto
  return (
    <div>
      <h1>{persona.nombre}</h1>
      <h2>{persona.edad}</h2>
      <h3>{persona.ocupacion}</h3>
    </div>
  );
}

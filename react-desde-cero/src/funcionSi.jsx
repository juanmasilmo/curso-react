export function Si() {
  const mayor = true;
  if (mayor) {
    return <h2> {mayor.toString()} Es mayor 😉</h2>; //mayor.toString() convierte un bolleano a string
  } else {
    return <h2>No es mayor</h2>;
  }
}

//esto es lo mismo pero en una sola linea
//el signo ? es el if y los : es el else
function Si2() {
  const mayor = true;
  function add(x, y) {
    return x + y;
  }
  return (
    <div>
      <h1>{mayor ? "Es mayor" : "No es mayor 🙃"}</h1>
      <h2>
        {"este es el resultado de la funcion add: "}
        {add(10, 20)}
      </h2>
    </div>
  );
}
// con este export, exporto por defecto una funcion y le asigno un nombre donde hago la importacion
export default Si2
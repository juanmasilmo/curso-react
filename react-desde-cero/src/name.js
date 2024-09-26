import { Suma } from "./suma";

export function Name() {
  const name = "juanma";
  return (
    <h2>
      {name} la suma es: {Suma()}{" "}
    </h2>
  );
}

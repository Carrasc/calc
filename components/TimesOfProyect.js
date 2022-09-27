import React from "react";
import { GeneralContext } from "../Context/GeneralContext";
import MilUnoTextField from "./MilUnoTextField";

export default function TimesOfProyect() {
  const { setTimes, times } = React.useContext(GeneralContext);
  const handleChange = (event) => {
    event.target.value < 0
      ? setTimes({ value: 0 })
      : setTimes({ value: parseInt(event.target.value) });
  };
  return (
    <div className="flex flex-col items-center justify-center w-full my-16">
      <p className="text-center mb-2 font-[Montserrat-bold] text-sm text-miluno-white tracking-wide">
        ¿Cuántas veces será replicado el proyecto?
      </p>
      <p className="text-center mb-6 font-[Montserrat] text-xs text-miluno-white tracking-wide">
        (Repeticiones extra además del original. Es decir, 0 equivale a realizar
        el proyecto una sola vez)
      </p>
      <MilUnoTextField
        handleChange={handleChange}
        defaultVal={0}
        value={times.value}
      />
    </div>
  );
}

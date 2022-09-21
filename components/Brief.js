import React from "react";
import { GeneralContext } from "../Context/GeneralContext";

export default function Brief() {
  const {
    gender,
    typeOfProject,
    surface,
    lag_margin,
    plan,
    times,
    bim_selection,
  } = React.useContext(GeneralContext);
  const data = [
    {
      title: "Género del Proyecto",
      string: gender.type + " / " + gender.son,
    },
    {
      title: "Superficie",
      string: surface.value + "m2",
    },
    {
      title: "Modalidad",
      string: typeOfProject.title,
    },
    {
      title: "Lugar",
      string: lag_margin.estado + " / " + lag_margin.municipio,
    },
    {
      title: "Componentes de proyecto",
      string: plan.item.titles.map((item, index) => {
        const comma = index !== plan.item.titles.length - 1 ? ", " : ".";
        return item + comma;
      }),
    },
    {
      title: "Alcances extras",
      string: gender.type + " / " + gender.son,
    },
    {
      title: "MIC (BIM)",
      string: bim_selection.title,
    },
    {
      title: "Repeticiones",
      string: times.value,
    },
    {
      title: "Contrataciones",
      string: gender.type + " / " + gender.son,
    },
  ];
  return (
    <div className="flex flex-col items-center max-w-2xl mx-auto justify-center w-full min-h-[80vh] mt-64">
      <p className="text-center mb-12 font-[Montserrat-bold] text-sm text-miluno-white ">
        ¿Están todos los datos en orden?
      </p>
      {data.map((item, index) => (
        <div
          key={index}
          className="flex items-center w-full mb-10 justify-evenly "
        >
          <div className="text-start font-montserrat-bold text-sm text-miluno-white">
            {item.title}
          </div>
          <div className="w-full mx-10 h-[1px] bg-miluno-green "></div>
          <div className="text-end font-montserrat text-sm text-miluno-white">
            {item.string}
          </div>
        </div>
      ))}
      {/* <div className="flex items-center w-full mt-5 break-all justify-evenly ">
				<div className="">
					aksd ñlfjñsdljfñ f asd ff asdmnfkjsadlfkjlsdjflsdjkdf
				</div>
				<div className="w-full mx-10 h-[1px] bg-miluno-green "></div>
				<div className=" font-montserrat">
					csd kfjalsdjfñl kasdjfñlkj asñlaca
				</div>
			</div> */}
    </div>
  );
}

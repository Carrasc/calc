import TypeAndSize from "../components/TypeAndSize";
import TypeOfProyects from "../components/TypeOfProyects";
import { useContext, useState } from "react";
import { GeneralContext } from "../Context/GeneralContext";
import EstadosYMunicipios from "../components/EstadosYMunicipios";
import ProyectPlans from "../components/ProyectPlans";
import TimesOfProyect from "../components/TimesOfProyect";
import BIMView from "../components/BIMView";
import Brief from "../components/Brief";
import ExtraComponents from "../components/ExtraComponents";
import PrintComponent from "../components/PrintComponent";
import Testing from "../components/Test";
import ExtraPeople from "../components/ExtraPeople";
import TableResult from "../components/TableResult";
import ScrollBar from "../components/ScrollBar";
import calculateCosts from "../libs/calculator";
export default function Home() {
  const [value, setValue] = useState(undefined);
  const {
    gender,
    typeOfProject,
    surface,
    lag_margin,
    plan,
    times,
    bim_selection,
    scopes,
    peopleSelected,
  } = useContext(GeneralContext);
  return (
    <div className=" w-full py-20 max-w-6xl mx-auto px-10  font-[Montserrat-bold]">
      <ScrollBar />
      <TypeOfProyects />
      <TypeAndSize />
      <EstadosYMunicipios />
      <ProyectPlans />
      <ExtraComponents />
      <BIMView />
      <ExtraPeople />
      <TimesOfProyect />
      {/* <Testing value={value} setValue={setValue} /> */}
      {/* <PrintComponent>
				{value && <TableResult value={value} />}
			</PrintComponent> */}
      <Brief />
      <div className="flex items-center justify-center w-full ">
        <button
          disabled={
            surface.value === 0 ||
            gender.value === 0 ||
            typeOfProject.value === 0 ||
            lag_margin.value === 0 ||
            plan.value === 0 ||
            bim_selection.value === 0
          }
          className={`flex items-center justify-center px-4 py-2 transition duration-300 ease-in-out border-2 rounded-md w-44  font-montserrat ${
            surface.value === 0 ||
            gender.value === 0 ||
            typeOfProject.value === 0 ||
            lag_margin.value === 0 ||
            plan.value === 0 ||
            bim_selection.value === 0
              ? "  border-[#6b6b6b] hover:border-[#6b6b6b] text-[#6b6b6b]"
              : "hover:border-miluno-green border-miluno-gray"
          }`}
          onClick={() =>
            setValue(
              calculateCosts(
                surface.value,
                gender.value,
                typeOfProject.value,
                lag_margin.value,
                plan.value,
                scopes,
                bim_selection.value,
                times.value,
                peopleSelected.join(" + ") || null
              )
            )
          }
        >
          Calcular
        </button>
      </div>
      {value && <TableResult value={value} />}
    </div>
  );
}

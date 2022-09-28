import TypeAndSize from "../components/TypeAndSize";
import TypeOfProyects from "../components/TypeOfProyects";
import { useCallback, useContext, useRef, useState } from "react";
import { GeneralContext } from "../Context/GeneralContext";
import EstadosYMunicipios from "../components/EstadosYMunicipios";
import ProyectPlans from "../components/ProyectPlans";
import TimesOfProyect from "../components/TimesOfProyect";
import BIMView from "../components/BIMView";
import Brief from "../components/Brief";
import ExtraComponents from "../components/ExtraComponents";
import ExtraPeople from "../components/ExtraPeople";
import TableResult from "../components/TableResult";
import ScrollBar from "../components/ScrollBar";
import calculateCosts from "../libs/calculator";
import logo from "../Images/camsam_marca_2022.png";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Home() {
  const myRef = useRef();
  const router = useRouter();
  const { setValue, value } = useContext(GeneralContext);
  const [render, setRender] = useState(false);
  const [calculateVariables, setCalculateVariables] = useState();
  // const [value, setValue] = useState();
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

  const scroll_to_top = () => {
    window.scrollTo(0, 0);
  };
  const executeScroll = () => myRef.current.scrollIntoView();

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));
  // const addValue =()=> useCallback(
  // 	(val) => {
  // 		console.log('entra2');
  // 		setValue(val);
  // 	},
  // 	[value]
  // );

  return (
    <div className="w-full py-12 md:py-20 max-w-6xl mx-auto px-8 md:px-10 print:bg-white  font-[Montserrat-bold]">
      <div className="flex justify-center">
        <div className="inline-block w-full max-w-xl mt-0 md:mt-4 mb-20 md:mb-24 text-center align-middle border border-solid rounded-md border-[#696969]">
          <h1 className="text-center mt-4 font-[Montserrat-light] text-xs text-miluno-gray tracking-wider">
            Calculadora de aranceles de honorarios profesionales por el
          </h1>
          <div className="relative mb-4 mt-4 mx-auto w-[150px] h-[32px] sm:w-[225px] sm:h-[48px] md:w-[325px] md:h-[62px] ">
            <Image
              className="brightness-75 m-auto"
              src={logo}
              alt="Logo-CAMSAM"
              objectFit="contain"
              layout="fill"
              priority
            />
          </div>
        </div>
      </div>
      <ScrollBar />
      <TypeOfProyects />
      <TypeAndSize />
      <EstadosYMunicipios />
      <ProyectPlans />
      <ExtraComponents />
      <BIMView />
      <ExtraPeople />
      <TimesOfProyect />
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
              : "hover:border-miluno-green border-miluno-gray text-miluno-white"
          }`}
          onClick={async () => {
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
            );
            setCalculateVariables((prevValue) => ({
              ...prevValue,
              surface_: surface.value,
              gender_: gender,
              typeOfProject_: typeOfProject.title,
              place: lag_margin,
            }));
            await delay(100);
            router.push("result");
            // executeScroll('table');
          }}
        >
          Calcular
        </button>
      </div>
      {/* <div id="table" className=" scroll-mt-20" ref={myRef}>
				{value && (
					<TableResult
						calculateVariables={calculateVariables}
						resetTable={() => {
							setValue(undefined);
							scroll_to_top();
						}}
						value={value}
					/>
				)}
			</div> */}
    </div>
  );
}

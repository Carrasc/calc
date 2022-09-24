import TypeAndSize from "../components/TypeAndSize";
import TypeOfProyects from "../components/TypeOfProyects";
import { createRef, useContext, useEffect, useRef, useState } from "react";
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
import PrintComponentCool from "../components/PrintComponentCool";
import { Events, animateScroll as scroll, scrollSpy } from "react-scroll";
import logo from "../Images/cam-sam-logo.png";
import Image from "next/image";
export default function Home() {
  const myRef = useRef();
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
  const test = (53, 1.76, 1.3, 0.9, 1.16, [], 1.15, 0, "DRO + CDUYA");
  useEffect(() => {
    Events.scrollEvent.register("begin", function () {
      // console.log('begin', arguments);
    });

    Events.scrollEvent.register("end", function () {
      // console.log('end', arguments);
    });

    scrollSpy.update();
  }, []);
  const scroll_to_top = () => {
    window.scrollTo(0, 0);
    // myRef.current.scrollTo(0, 0);
  };
  const executeScroll = () => myRef.current.scrollIntoView();
  // const executeScroll = (to) =>
  // 	window.scrollTo({
  // 		top: document.getElementById(to)?.offsetTop,
  // 	});
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  return (
    <div className="w-full py-20 max-w-6xl mx-auto px-10 print:bg-white  font-[Montserrat-bold]">
      <div className="w-full inline-block align-middle text-center mb-20 mt-2 border-solid border rounded-md border-miluno-gray">
        <h1 className="text-center mt-4 font-[Montserrat-light] text-xs text-miluno-gray tracking-wider">
          Calculadora de aranceles de honorarios profesionales por el
        </h1>
        <div className="relative ">
          <Image
            className=""
            src={logo}
            alt="Logo-CAMSAM"
            width={150}
            height={40}
            objectFit="contain"
            // layout="responsive"
            layout="fixed"
            priority
          />
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
      {/* <button onClick={executeScroll}> Click to scroll </button> */}

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
                // 53,
                // 1.76,
                // 1.3,
                // 0.9,
                // 1.16,
                // [],
                // 1.15,
                // 0,
                // 'DRO + CDUyA'
              )
            );
            await delay(100);

            executeScroll("table");
          }}
        >
          Calcular
        </button>
      </div>
      {/* <button onClick={scroll_to_top}>to top</button> */}
      <div id="table" className=" scroll-mt-20" ref={myRef}>
        {value && (
          <TableResult
            value={value}
            resetTable={() => {
              setValue(undefined);
              scroll_to_top();
            }}
          />
        )}
      </div>
    </div>
  );
}

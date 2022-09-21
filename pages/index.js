import { useTheme } from "next-themes";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import ArcStepper from "../components/ArcStepper";
import TypeAndSize from "../components/TypeAndSize";
import TypeOfProyects from "../components/TypeOfProyects";
import { steps } from "../Data/Steps";
import { useContext, useState } from "react";
import { GeneralContext } from "../Context/GeneralContext";
import EstadosYMunicipios from "../components/EstadosYMunicipios";
import ProyectPlans from "../components/ProyectPlans";
import TimesOfProyect from "../components/TimesOfProyect";
import ExtraComponents from "../components/ExtraComponents";
export default function Home() {
  const { theme, setTheme } = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const [selected, setSelected] = useState(undefined);
  const { generalValue } = useContext(GeneralContext);

  const handleNext = () => {
    setActiveStep((index) => index + 1);
  };
  const handlePrev = () => {
    setActiveStep((index) => index - 1);
  };

  console.log({ generalValue });
  return (
    <div className=" w-full py-20 max-w-6xl mx-auto px-10  font-[Montserrat-bold]">
      {/* <button
				className="absolute p-2 border-2 rounded-xl top-10 border-neutral-200 dark:border-neutral-600 right-10 dark:bg-neutral-600 bg-neutral-200 hover:border-2 hover:border-indigo-400 dark:hover:border-indigo-400"
				onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
			>
				{theme !== 'light' ? (
					<SunIcon className="w-5 h-5" />
				) : (
					<MoonIcon className="w-5 h-5" />
				)}
			</button> */}
      <TypeOfProyects />
      <TypeAndSize />
      <EstadosYMunicipios />
      <ProyectPlans />
      <ExtraComponents />
      <TimesOfProyect />
      {/* <div className="flex flex-col items-center justify-center w-full h-full max-w-6xl px-5 mx-auto overflow-y-scroll md:px-20"> */}
      {/* {steps[activeStep].component({ handleNext: handleNext })} */}
      {/* </div> */}
      {/* <div className=" h-[10vh] w-full flex justify-center items-center">
				<ArcStepper
					handleNext={handleNext}
					handlePrev={handlePrev}
					activeStep={activeStep}
				/>
			</div> */}
    </div>
  );
}

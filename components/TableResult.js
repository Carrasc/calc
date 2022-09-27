import React, { useEffect, useState } from "react";
import { formatter } from "../libs/calculator/utils";

import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { GeneralContext } from "../Context/GeneralContext";
import ReactToPrint from "react-to-print";
import logo from "../Images/logo-2022-negro-small.png";
import Image from "next/image";
import Notes from "./Notes";
import calculateCosts from "../libs/calculator";
import { MdOutlineArrowBack } from "react-icons/md";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({}) => ({
  border: `0px solid white`,
  backgroundColor: "transparent",
  color: "white",

  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
  "& .MuiSvgIcon-root": {
    color: "white",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "transparent",
  fontFamily: "Montserrat",
  fontSize: "14px",
  border: "1px solid #C3C3C3",
  borderRadius: "6px",
  flexDirection: "row",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(0),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
  fontFamily: "Montserrat",
  margin: "0 0 0 0px",
  padding: "0 0rem 0 0rem",
}));

export default function TableResult({
  resetTable,
  calculateVariables,
  // surface_,
  // gender_,
  // typeOfProject_,
  // lag_margin_,
  // plan_,
  // scopes_,
  // bim_selection_,
  // times_,
  // peopleSelected_,
  value,
}) {
  const {
    times,
    resetValues,
    gender,
    typeOfProject,
    surface,
    lag_margin,
    plan,
    bim_selection,
    scopes,
    peopleSelected,
    // value,
  } = React.useContext(GeneralContext);

  const handleReset = () => {
    resetTable();
    resetValues();
  };
  const renderMenu = (menu, expand) => {
    return menu.map((item, index) => {
      return (
        <div key={index}>
          <div className={"w-full my-2"}>
            {item.children ? (
              <Accordion expanded={expand}>
                <AccordionSummary
                  aria-controls="panel1a-content"
                  className="print:bg-white"
                  id="panel1a-header"
                >
                  <div className="flex justify-between w-full print:text-black">
                    <p className="pr-4 text-xs md:pr-6 md:text-sm ">
                      {item.name}
                    </p>
                    <p className="pr-2 text-xs md:pr-4 md:text-sm font-montserrat-bold">
                      {formatter.format(item.value)}
                    </p>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="px-2 md:px-12 print:px-12">
                    {item.children && renderMenu(item.children, expand)}
                  </div>
                </AccordionDetails>
              </Accordion>
            ) : (
              <div className="py-[2px] flex justify-between w-full">
                <p className="pr-2 text-xs md:pr-8 print:pr-8 font-montserrat md:text-sm print:text-black text-miluno-white ">
                  {item.name}
                </p>
                <p className="pr-2 text-xs md:pr-8 print:pr-8 font-montserrat-bold md:text-sm print:text-black text-miluno-white ">
                  {formatter.format(item.value)}
                </p>
              </div>
            )}
          </div>
        </div>
      );
    });
  };

  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  const componentRef = React.useRef(null);

  const onBeforeGetContentResolve = React.useRef(null);

  const [loading, setLoading] = React.useState(false);
  const [text, setText] = React.useState("old boring text");

  const handleAfterPrint = React.useCallback(() => {
    console.log("`onAfterPrint` called");
  }, []);

  const handleBeforePrint = React.useCallback(() => {
    console.log("`onBeforePrint` called");
  }, []);

  const handleOnBeforeGetContent = React.useCallback(() => {
    console.log("`onBeforeGetContent` called");
    setLoading(true);

    setText("Loading new text...");

    return new Promise((resolve) => {
      onBeforeGetContentResolve.current = resolve;

      setTimeout(() => {
        setLoading(false);
        setText("New, Updated Text!");
        resolve();
      }, 2000);
    });
  }, [setLoading, setText]);

  React.useEffect(() => {
    if (
      text === "New, Updated Text!" &&
      typeof onBeforeGetContentResolve.current === "function"
    ) {
      onBeforeGetContentResolve.current();
    }
  }, [onBeforeGetContentResolve.current, text]);

  const reactToPrintContent = React.useCallback(() => {
    return componentRef.current;
  }, [componentRef.current]);

  const reactToPrintTrigger = React.useCallback(() => {
    // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
    // to the root node of the returned component as it will be overwritten.

    // Bad: the `onClick` here will be overwritten by `react-to-print`
    // return <button onClick={() => alert('This will not work')}>Print this out!</button>;

    // Good
    return (
      <div className="relative print:hidden">
        <button title="Imprimir Nota">
          <svg
            title="Hello World!"
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7 text-miluno-white cursor-pointer stroke-1 hover:text-miluno-green"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
            />
          </svg>
        </button>
      </div>
    );
  }, []);

  if (value === undefined) {
    return <></>;
  }
  return (
    <div>
      <div
        ref={componentRef}
        className="flex flex-col print:w-full print:bg-white max-w-4xl print:px-8 mx-auto w-full min-h-[80vh] my-20 px-6 print:mt-0 print:pt-8"
      >
        <div className="flex justify-between w-full mb-16 print:hidden">
          <button
            className={`flex items-center h-10 justify-start w-44 px-4 py-2 rounded-md border-2 border-miluno-white transition duration-200 ease-in-out font-montserrat text-sm text-miluno-white tracking-wide hover:border-[#D9826F] hover:border-2 `}
            onClick={handleReset}
          >
            <MdOutlineArrowBack size={25} className=" text-miluno-white mr-4" />
            Regresar
          </button>

          {loading ? (
            <div className="relative ">
              <p className="text-xs text-white font-montserrat top-8">
                Imprimendo...
              </p>
            </div>
          ) : (
            <ReactToPrint
              content={reactToPrintContent}
              documentTitle="AwesomeFileName"
              onAfterPrint={handleAfterPrint}
              onBeforeGetContent={handleOnBeforeGetContent}
              onBeforePrint={handleBeforePrint}
              removeAfterPrint
              trigger={reactToPrintTrigger}
            />
          )}
        </div>

        <div className="justify-center hidden print:flex">
          <div className="inline-block w-full mb-12 text-center align-middle border border-solid rounded-md border-miluno-gray">
            <p className="mt-4 text-xs tracking-wider text-center font-montserrat print:text-black">
              Calculadora de aranceles de honorarios profesionales por el
            </p>
            <div className="relative ">
              <Image
                className="print:text-black"
                src={logo}
                alt="Logo-CAMSAM"
                width={150}
                height={40}
                objectFit="contain"
                layout="fixed"
                priority
              />
            </div>
            <p className="my-2 text-xs tracking-wider text-center font-montserrat print:text-black">
              {date}
            </p>
          </div>
        </div>

        <p className="text-sm tracking-wide font-montserrat-bold print:text-black text-miluno-white">
          Datos del proyecto
        </p>
        <div className="pl-0 mb-6">
          <p className="my-2 text-sm tracking-wide font-montserrat print:text-black text-miluno-white ">
            Género del Proyecto :{" "}
            <span className=" font-montserrat-bold ">
              {gender.type} - {gender.son}
            </span>
          </p>
          <p className="my-2 tracking-wide font-[Montserrat] print:text-black text-sm text-miluno-white ">
            Superficie :{" "}
            <span className=" font-montserrat-bold">{surface.value}m2</span>
          </p>
          <p className="my-2 tracking-wide font-[Montserrat] print:text-black text-sm text-miluno-white ">
            Modalidad :{" "}
            <span className=" font-montserrat-bold">{typeOfProject.title}</span>
          </p>
          <p className="my-2 tracking-wide font-[Montserrat] print:text-black text-sm text-miluno-white ">
            Lugar :{" "}
            <span className=" font-montserrat-bold">
              {lag_margin.estado} - {lag_margin.municipio}
            </span>
          </p>
        </div>
        <p className="text-sm tracking-wide font-montserrat-bold print:text-black text-miluno-white">
          Costos totales
        </p>
        <p className="my-2 tracking-wide font-[Montserrat] print:text-black text-sm text-miluno-white ">
          Costo total por honorarios:{" "}
          <span className=" font-montserrat-bold">
            {formatter.format(value.final_cost)} MXN
          </span>
        </p>
        <p className="tracking-wide font-[Montserrat] print:text-black text-sm text-miluno-white ">
          Costo de obra:{" "}
          <span className=" font-montserrat-bold">
            {formatter.format(value.work_cost)} MXN
          </span>
        </p>
        <div>
          <p className="mt-8 text-sm tracking-wide font-montserrat-bold print:text-black text-miluno-white ">
            Proyecto ejecutivo básico
          </p>

          <div className="block print:hidden">
            {value !== "" && renderMenu(value.components_table)}
          </div>

          {/* For print version*/}
          <div className="hidden print:block">
            {value !== "" && renderMenu(value.components_table, true)}
          </div>

          {value.extras_table.length !== 0 && (
            <p className="mt-24 mb-4 text-sm tracking-wide font-montserrat-bold print:text-black text-miluno-white">
              Instalaciones complementarias
            </p>
          )}

          <div className="block print:hidden">
            {value !== "" && renderMenu(value.extras_table)}
          </div>

          {/* For print version*/}
          <div className="hidden print:block">
            {value !== "" && renderMenu(value.extras_table, true)}
          </div>

          <p className="pt-6 my-2 font-[Montserrat] tracking-wide  print:text-black text-sm text-miluno-white ">
            Costo por BIM:{" "}
            <span className=" font-montserrat-bold">
              {formatter.format(value.bim_cost)} MXN
            </span>
          </p>
          <p className="my-2 font-[Montserrat] tracking-wide text-sm  print:text-black text-miluno-white ">
            {`Costo por ${times.value} repeticiones`}:{" "}
            <span className=" font-montserrat-bold">
              {formatter.format(value.reps_cost)} MXN
            </span>
          </p>
          {value.dro_table.length !== 0 && (
            <p className=" my-2 font-[Montserrat] tracking-wide text-sm  print:text-black text-miluno-white ">
              {`Costo por contrataciones`}:{" "}
            </p>
          )}
          {value !== "" && renderMenu(value.dro_table)}
        </div>
        <Notes />
      </div>
    </div>
  );
}

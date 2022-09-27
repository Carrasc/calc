import React, { useEffect, useState } from "react";
import { formatter } from "../libs/calculator/utils";

import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
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
  backgroundColor: "#1e1e1e",
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

export default function TableResult({ value = "", resetTable }) {
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
    resetValues,
  } = React.useContext(GeneralContext);
  const [expanded_, setExpanded] = useState(false);
  const handleChange = (event, isExpanded) => {
    // console.log(isExpanded);
    setExpanded(isExpanded);
  };
  const handleReset = () => {
    resetTable();
    resetValues();
  };
  const renderMenu = (menu, expand) => {
    const otherProps = {
      ...(expanded_ && { expanded: true }),
    };
    return menu.map((item, index) => {
      return (
        <div>
          <div className={"w-full my-2"} key={index}>
            {item.children ? (
              <Accordion
                // {...otherProps}
                expanded={expand}
                // expanded={expanded_ ? true : undefined}
                // {...expanded_ && expanded = {true} }
                // expanded={(prev) => console.log(prev)}
                // (expanded ? true : prev)}
                // onChange={handleChange}
              >
                <AccordionSummary
                  //expandIcon={true}
                  aria-controls="panel1a-content"
                  className="print:bg-white"
                  id="panel1a-header"
                >
                  <div className="flex justify-between w-full print:text-black">
                    <p className="pr-4 md:pr-6 text-xs md:text-sm ">
                      {item.name}
                    </p>
                    <p className="pr-2 md:pr-4 text-xs md:text-sm font-montserrat-bold">
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
                <p className="pr-2 md:pr-8 print:pr-8 font-montserrat text-xs md:text-sm  print:text-black text-miluno-white ">
                  {item.name}
                </p>
                <p className="pr-2 md:pr-8 print:pr-8 font-montserrat-bold text-xs md:text-sm  print:text-black text-miluno-white ">
                  {formatter.format(item.value)}
                </p>
              </div>
            )}
          </div>
        </div>
      );
    });
  };
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
    setExpanded(true);
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
        <button className="mb-8" title="Imprimir Nota">
          <svg
            title="Hello World!"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-gray-300 cursor-pointer stroke-1"
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
  return (
    <div>
      <div
        ref={componentRef}
        className="flex flex-col print:w-full print:bg-white max-w-4xl print:px-8 mx-auto w-full min-h-[80vh] mt-64 print:mt-0 print:pt-8"
      >
        <ReactToPrint
          content={reactToPrintContent}
          documentTitle="AwesomeFileName"
          onAfterPrint={handleAfterPrint}
          onBeforeGetContent={handleOnBeforeGetContent}
          onBeforePrint={handleBeforePrint}
          removeAfterPrint
          trigger={reactToPrintTrigger}
        />
        {loading && (
          <div className="relative ">
            <p className=" text-white font-montserrat top-8 text-xs">
              Imprimendo...
            </p>
          </div>
        )}
        <div className="print:flex hidden justify-center">
          <div className="w-full inline-block align-middle text-center mb-12 border-solid border rounded-md border-miluno-gray">
            <p className="text-center mt-4 font-montserrat text-xs tracking-wider print:text-black">
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
                // layout="responsive"
                layout="fixed"
                priority
              />
            </div>
          </div>
        </div>

        <p className=" font-montserrat-bold print:text-black text-sm text-miluno-white ">
          Datos del proyecto
        </p>
        <div className="mb-6 pl-0">
          <p className="my-2 font-montserrat print:text-black text-sm text-miluno-white ">
            Género del Proyecto :{" "}
            <span className=" font-montserrat-bold">
              {gender.type} - {gender.son}
            </span>
          </p>
          <p className="my-2 font-[Montserrat] print:text-black text-sm text-miluno-white ">
            Superficie :{" "}
            <span className=" font-montserrat-bold">{surface.value}m2</span>
          </p>
          <p className="my-2 font-[Montserrat] print:text-black text-sm text-miluno-white ">
            Modalidad :{" "}
            <span className=" font-montserrat-bold">{typeOfProject.title}</span>
          </p>
          <p className="my-2 font-[Montserrat] print:text-black text-sm text-miluno-white ">
            Lugar :{" "}
            <span className=" font-montserrat-bold">
              {lag_margin.estado} - {lag_margin.municipio}
            </span>
          </p>
        </div>
        <p className=" font-montserrat-bold print:text-black text-sm text-miluno-white ">
          Costos totales
        </p>
        <p className="my-2 font-[Montserrat] print:text-black text-sm text-miluno-white ">
          Costo total por honorarios:{" "}
          <span className=" font-montserrat-bold">
            {formatter.format(value.final_cost)} MXN
          </span>
        </p>
        <p className="font-[Montserrat]  print:text-black text-sm text-miluno-white ">
          Costo de obra:{" "}
          <span className=" font-montserrat-bold">
            {formatter.format(value.work_cost)} MXN
          </span>
        </p>
        <div>
          {/* {traverse(obj, function (k, v) {
					setState(k);
				})} */}
          <p className="mt-8 font-montserrat-bold  print:text-black text-sm text-miluno-white ">
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
            <p className=" mt-24 mb-4 font-montserrat-bold  print:text-black text-sm text-miluno-white ">
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

          <p className="pt-6 my-2 font-[Montserrat]  print:text-black text-sm text-miluno-white ">
            Costo por BIM:{" "}
            <span className=" font-montserrat-bold">
              {formatter.format(value.bim_cost)} MXN
            </span>
          </p>
          <p className="my-2 font-[Montserrat] text-sm  print:text-black text-miluno-white ">
            {`Costo por ${times.value} repeticiones`}:{" "}
            <span className=" font-montserrat-bold">
              {formatter.format(value.reps_cost)} MXN
            </span>
          </p>
          {value.dro_table.length !== 0 && (
            <p className=" my-2 font-[Montserrat] text-sm  print:text-black text-miluno-white ">
              {`Costo por contrataciones`}:{" "}
            </p>
          )}
          {value !== "" && renderMenu(value.dro_table)}

          {/* {value.components_table.map((item, index) => {
					{
						Object.keys(item).forEach(function (key, index) {
							console.log('value', item[key]);
							return <p>{key};</p>;
						});
					}
				})} */}
        </div>
        <Notes />
        <div className="flex justify-center w-full mt-20 print:hidden">
          <button
            className={`flex items-center  border-[#D9826F] justify-center px-4 py-2 transition duration-300 ease-in-out border-2 rounded-md w-44  font-montserrat text-sm `}
            onClick={handleReset}
          >
            Resetear valores
          </button>
        </div>
      </div>
    </div>
  );
}

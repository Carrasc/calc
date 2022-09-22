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
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
  fontFamily: "Montserrat",
}));

export default function TableResult({ value = "" }) {
  const { times } = React.useContext(GeneralContext);

  const renderMenu = (menu) => {
    return menu.map((item, index) => {
      return (
        <div className={"w-full my-3"} key={index}>
          {item.children ? (
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <div className="flex justify-between w-full">
                  <p>{item.name}</p>
                  <p className="pr-4">{formatter.format(item.value)}</p>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <div>{item.children && renderMenu(item.children)}</div>
              </AccordionDetails>
            </Accordion>
          ) : (
            <div className="py-[1px] flex justify-between w-full">
              <p className="pl-6 font-[Montserrat] text-sm text-miluno-white ">
                {item.name}
              </p>
              <p className="pr-14 font-[Montserrat] text-sm text-miluno-white ">
                {formatter.format(item.value)}
              </p>
            </div>
          )}
        </div>
      );
    });
  };

  return (
    <div className="flex flex-col  max-w-2xl mx-auto  w-full min-h-[80vh] mt-64">
      <p className="my-2 font-[Montserrat] text-sm text-miluno-white ">
        Costo total por honorarios:{" "}
        <span className=" font-montserrat-bold">
          {formatter.format(value.final_cost)} MXN
        </span>
      </p>
      <p className="font-[Montserrat] text-sm text-miluno-white ">
        Costo de obra:{" "}
        <span className=" font-montserrat-bold">
          {formatter.format(value.work_cost)} MXN
        </span>
      </p>
      <div>
        {/* {traverse(obj, function (k, v) {
					setState(k);
				})} */}
        <p className="mt-8 font-[Montserrat] text-sm text-miluno-white ">
          Proyecto ejecutivo básico:
        </p>

        {value !== "" && renderMenu(value.components_table)}
        <p className=" mt-10 mb-4 font-[Montserrat] text-sm text-miluno-white ">
          Instalaciones complementarias:
        </p>
        {value !== "" && renderMenu(value.extras_table)}

        <p className="pt-6 my-2 font-[Montserrat] text-sm text-miluno-white ">
          Costo por BIM:{" "}
          <span className=" font-montserrat-bold">
            {formatter.format(value.bim_cost)} MXN
          </span>
        </p>
        <p className="my-2 font-[Montserrat] text-sm text-miluno-white ">
          {`Costo por ${times.value} repeticiones`}:{" "}
          <span className=" font-montserrat-bold">
            {formatter.format(value.reps_cost)} MXN
          </span>
        </p>
        <p className=" my-2 font-[Montserrat] text-sm text-miluno-white ">
          {`Costo por contrataciones de DRO`}:{" "}
          <span className=" font-montserrat-bold">
            {formatter.format(value.reps_cost)} MXN
          </span>
        </p>
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
    </div>
  );
}

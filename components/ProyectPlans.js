import React, { useContext, useState } from "react";
import { GeneralContext } from "../Context/GeneralContext";
import { plans } from "../Data/Plans";

export default function ProyectPlans() {
  const [selected, setSelected] = useState();
  const { setPlan, plan } = useContext(GeneralContext);
  return (
    <div className="flex flex-col text-center items-center justify-center w-full my-10 min-h-[60vh]">
      <p className="text-center font-[Montserrat-bold] text-sm text-miluno-white tracking-wide">
        ¿Qué componentes del proyecto se llevarán a cabo?
      </p>

      <div className="grid grid-cols-2 gap-5 mt-10 md:grid-cols-4 ">
        {plans.map((plan_, index) => (
          <div
            onClick={() => {
              if (plan.index === index) {
                // setSelected('');
                setPlan((prevState) => ({
                  ...prevState,
                  item: {
                    titles: [],
                  },
                  id: "",
                  value: 0,
                  index: "",
                }));
              } else {
                // setSelected(index);
                setPlan((prevState) => ({
                  ...prevState,
                  id: plan_.id,
                  item: plan_,
                  value: plan_.value,
                  index: index,
                }));
              }
            }}
            key={index}
            className={`flex cursor-pointer flex-col items-center justify-center w-full p-2  aspect-square rounded-xl ${
              plan.index === index
                ? " border-miluno-green border-2"
                : "border-2 border-miluno-gray"
            } `}
          >
            {plan_.titles.map((title, index) => (
              <p
                className="text-sm text-center font-montserrat text-miluno-white tracking-wide"
                key={index}
              >
                {title}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

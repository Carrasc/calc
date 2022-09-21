import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import extraInstalation from "../Data/IC.json";

export default function ExtraPeople() {
  return (
    <div>
      <p className="text-center mb-6 font-[Montserrat-bold] text-sm ">
        ¿El proyecto requiere de contrataciones extra para su supervision?
      </p>
      <div className="grid grid-cols-4">
        {extraInstalation.map((item, index) => (
          <div className="flex justify-items-end">
            <FormControlLabel
              label={item.label}
              control={
                <Checkbox
                  sx={{
                    color: "#707070",
                    "&.Mui-checked": {
                      color: "#7AC279",
                    },
                  }}
                />
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}

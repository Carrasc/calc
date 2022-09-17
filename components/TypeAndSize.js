import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const typeOfProyects = [
  {
    value: "Obra nueva",
    label: "Obra nueva",
  },
  {
    value: "Ampliación",
    label: "Ampliación",
  },
  {
    value: "Reacondicionamiento",
    label: "Reacondicionamiento",
  },
  {
    value: "Rehabilitación",
    label: "Rehabilitación",
  },
  {
    value: "Remodelación",
    label: "Remodelación",
  },
];

export default function TypeAndSize() {
  const [typeOfProyect, setCurrency] = React.useState("EUR");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <div className="my-6">
          <p className="text-center">¿Cual es la modalidad del proyecto?</p>
          <TextField
            id="outlined-select-currency"
            select
            label=""
            value={typeOfProyect}
            onChange={handleChange}
          >
            {typeOfProyects.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>

        <div>
          <p className="text-center">¿Cuantos metros cuadrados?</p>
          <TextField id="outlined-number" label="" type="number" />
        </div>
      </div>
    </Box>
  );
}

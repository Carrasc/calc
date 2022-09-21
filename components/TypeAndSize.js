import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Select } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

const typeOfProyects = [
  {
    value: 1,
    label: "Obra nueva",
  },
  {
    value: 1.2,
    label: "Ampliación",
  },
  {
    value: 1.25,
    label: "Reacondicionamiento",
  },
  {
    value: 1.3,
    label: "Rehabilitación",
  },
  {
    value: 1.5,
    label: "Remodelación",
  },
];

const CustomTextField = styled(TextField)({
  "& .MuiInputBase-input": {
    fontFamily: "Montserrat",
    textAlign: "center",
    color: "white",
  },
  "& label.Mui-hover": {
    borderColor: "white",
    borderRadius: "6px",
    borderWidth: "1px",
  },

  "& label.Mui-focused": {
    color: "green",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#7AC279",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "white",
      borderRadius: "6px",
      borderWidth: "1px",
      color: "green",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#7AC279",
    },
    "&:hover fieldset": {
      borderColor: "white",
    },
    "& .MuiSvgIcon-root": {
      color: "white",
    },
  },
});

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: 50 * 4.5 + 8,
      width: 250,
    },
  },
};

const MilUnoInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    textAlign: "center",
    borderRadius: 6,
    position: "relative",
    border: "1px solid white",
    fontSize: 16,
    color: "white",
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: ["Montserrat"].join(","),
    "&:focus": {
      borderColor: "#7AC279",
    },
  },
  "& .MuiSvgIcon-root": {
    color: "white",
  },
}));

export default function TypeAndSize() {
  const [typeOfProyect, setCurrency] = React.useState("EUR");

  const handleChangeType = (event) => {
    setCurrency(event.target.value);
    console.log(event.target.value);
  };

  const handleChangeSize = (event) => {
    console.log(event.target.value);
  };

  return (
    <Box component="form" noValidate autoComplete="off">
      <div className="grid grid-cols-1 gap-8">
        <div className="grid justify-items-center mb-8">
          <p className="text-center mb-6 font-[Montserrat-bold] text-sm ">
            ¿Cual es la modalidad del proyecto?
          </p>
          <Select
            id="typeProject"
            label=""
            value={typeOfProyect}
            onChange={handleChangeType}
            sx={{ width: 250, minWidth: 100 }}
            MenuProps={MenuProps}
            size="small"
            input={<MilUnoInput />}
          >
            {typeOfProyects.map((option) => (
              <MenuItem
                key={option.value}
                value={option.value}
                style={{
                  fontSize: 14,
                  fontFamily: "Montserrat",
                }}
              >
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </div>

        <div className="grid justify-items-center">
          <p className="text-center mb-6 font-[Montserrat-bold] text-sm">
            ¿Cuantos metros cuadrados?
          </p>
          <CustomTextField
            onChange={handleChangeSize}
            id="sizeOfProject"
            label=""
            type="number"
            sx={{ width: 150, minWidth: 100 }}
            size="small"
          />
        </div>
      </div>
    </Box>
  );
}

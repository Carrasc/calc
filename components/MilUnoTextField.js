import React from "react";
import InputBase from "@mui/material/InputBase";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

const CustomTextField = styled(TextField)({
  "& .MuiInputBase-input": {
    fontFamily: "Montserrat",
    textAlign: "center",
    color: "white",
  },
  "& label.Mui-hover": {
    borderColor: "white",
    borderRadius: "6px",
    borderWidth: "2px",
  },

  "& label.Mui-focused": {
    color: "green",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#7AC279",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#c3c3c3",
      borderRadius: "6px",
      borderWidth: "2px",
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
export default function MilUnoTextField({ handleChange = () => {} }) {
  return (
    <CustomTextField
      onChange={handleChange}
      id="sizeOfProject"
      label=""
      type="number"
      sx={{ width: 150, minWidth: 100 }}
      size="small"
    />
  );
}

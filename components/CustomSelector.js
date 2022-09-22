import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { alpha, styled } from "@mui/material/styles";
import { Controller } from "react-hook-form";
import { InputBase, NativeSelect, Select } from "@mui/material";
import { useForm } from "react-hook-form";

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

const MilUnoInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    textAlign: "center",
    borderRadius: 6,
    position: "relative",
    border: "2px solid #c3c3c3",
    fontSize: 16,
    color: "white",
    padding: "10px 26px 10px 12px",
    // transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: ["Montserrat"].join(","),
    "&:focus": {
      borderColor: "#7AC279",
      borderWidth: "2px",
    },
  },
  "& .MuiSvgIcon-root": {
    color: "white",
  },
  "& .Mui-disabled": {
    borderColor: "#6b6b6b",
    color: "#6b6b6b !important",
  },
}));

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: 50 * 4.5 + 8,
      width: 500,
    },
  },
};

export default function CustomSelector({
  items = [],
  disabled,
  required,
  name,
  setIndex = () => {},
  setSelectedValue = () => {},
}) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm();
  const [selected, setSelected] = React.useState("");

  const handleChangeType = (event) => {
    setSelected(event.target.value);
  };

  return (
    <Controller
      control={control}
      rules={{ required: required ? "Campo requerido" : false }}
      name={name}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        return (
          <>
            <Select
              id="typeProject"
              disabled={disabled}
              label=""
              MenuProps={MenuProps}
              value={selected}
              onChange={(e) => {
                handleChangeType(e);
                onChange(e.target.value);
              }}
              sx={{ maxWidth: "100%", minWidth: 300 }}
              autoWidth
              size="small"
              input={<MilUnoInput />}
            >
              {items.map((option, index) => (
                <MenuItem
                  key={index}
                  onClick={() => {
                    setIndex(index);
                    setSelectedValue(option);
                  }}
                  value={option.title}
                  style={{
                    fontSize: 14,
                    fontFamily: "Montserrat",
                  }}
                >
                  {option.title}
                </MenuItem>
              ))}
            </Select>
            <p className="p-0 m-0 text-xs text-red-500 ">
              {error ? error.message : null}
            </p>
          </>
        );
      }}
    />
  );
}

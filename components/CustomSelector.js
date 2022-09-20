import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { alpha, styled } from '@mui/material/styles';
import { Controller } from 'react-hook-form';
const typeOfProyects = [
	{
		value: 1,
		label: 'Obra nueva',
	},
	{
		value: 1.2,
		label: 'Ampliación',
	},
	{
		value: 1.25,
		label: 'Reacondicionamiento',
	},
	{
		value: 1.3,
		label: 'Rehabilitación',
	},
	{
		value: 1.5,
		label: 'Remodelación',
	},
];

const CustomTextField = styled(TextField)({
	'& .MuiInputBase-input': {
		fontFamily: 'Montserrat',
		textAlign: 'center',
		color: 'white',
	},
	'& label.Mui-hover': {
		borderColor: 'white',
		borderRadius: '6px',
		borderWidth: '1px',
	},

	'& label.Mui-focused': {
		color: 'green',
	},
	'& .MuiInput-underline:after': {
		borderBottomColor: '#7AC279',
	},
	'& .MuiOutlinedInput-root': {
		'& fieldset': {
			borderColor: 'white',
			borderRadius: '6px',
			borderWidth: '1px',
			color: 'green',
		},
		'&.Mui-focused fieldset': {
			borderColor: '#7AC279',
		},
	},
});

export default function CustomSelector({
	items = [],
	disabled,
	control,
	required,
	name,
}) {
	const [selected, setSelected] = React.useState();

	const handleChangeType = (event) => {
		setSelected(event.target.value);
		console.log(event.target.value);
	};

	const handleChangeSize = (event) => {
		console.log(event.target.value);
	};
	return (
		<Controller
			control={control}
			rules={{ required: required ? 'Campo requerido' : false }}
			name={name}
			render={({ field: { onChange, value }, fieldState: { error } }) => {
				return (
					<>
						<CustomTextField
							id="typeProject"
							select
							disabled={disabled}
							label=""
							value={selected}
							onChange={(e) => {
								console.log(e.target.value);

								handleChangeType(e);
								onChange(e.target.value);
							}}
							sx={{ width: 200, minWidth: 100 }}
							size="small"
						>
							{items.map((option, index) => (
								<MenuItem
									key={index}
									value={option}
									style={{
										fontSize: 14,
										fontFamily: 'Montserrat',
									}}
								>
									{option.title}
								</MenuItem>
							))}
						</CustomTextField>
						<p className="p-0 m-0 text-xs text-red-500 ">
							{error ? error.message : null}
						</p>
					</>
				);
			}}
		/>
	);
}

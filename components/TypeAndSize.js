import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Select } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import CustomSelector from './CustomSelector';
import { GeneralContext } from '../Context/GeneralContext';

const typeOfProyects = [
	{
		value: 1,
		title: 'Obra nueva',
	},
	{
		value: 1.2,
		title: 'Ampliación',
	},
	{
		value: 1.25,
		title: 'Reacondicionamiento',
	},
	{
		value: 1.3,
		title: 'Rehabilitación',
	},
	{
		value: 1.5,
		title: 'Remodelación',
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
		'&:hover fieldset': {
			borderColor: 'white',
		},
		'& .MuiSvgIcon-root': {
			color: 'white',
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
	'label + &': {
		marginTop: theme.spacing(3),
	},
	'& .MuiInputBase-input': {
		textAlign: 'center',
		borderRadius: 6,
		position: 'relative',
		border: '1px solid white',
		fontSize: 16,
		color: 'white',
		padding: '10px 26px 10px 12px',
		transition: theme.transitions.create(['border-color', 'box-shadow']),
		// Use the system font instead of the default Roboto font.
		fontFamily: ['Montserrat'].join(','),
		'&:focus': {
			borderColor: '#7AC279',
		},
	},
	'& .MuiSvgIcon-root': {
		color: 'white',
	},
}));

export default function TypeAndSize() {
	const [typeOfProyect, setCurrency] = React.useState('');
	const { typeOfProject, setTypeOfProject, setSurface, surface } =
		React.useContext(GeneralContext);

	const handleChangeSize = (event) => {
		setSurface({ value: parseInt(event.target.value) });
	};

	const handleSelectedValue = (item) => {
		setTypeOfProject((prevState) => ({
			...prevState,
			title: item.title,
			value: item.value,
		}));
	};
	return (
		<Box component="form" noValidate autoComplete="off">
			<div className=" flex justify-center items-center flex-col my-20 min-h-[60vh]">
				<div className="mb-8 ">
					<p className="text-center mb-6 font-[Montserrat-bold] text-sm ">
						¿Cuál es la modalidad del proyecto?
					</p>
					<CustomSelector
						name="gender_son"
						setSelectedValue={handleSelectedValue}
						// control={control}
						required={true}
						// disabled={selected === ''}
						items={typeOfProyects}
					/>
				</div>

				<p className="text-center mt-20 mb-6 font-[Montserrat-bold] text-sm">
					¿Cuántos metros cuadrados?
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
		</Box>
	);
}

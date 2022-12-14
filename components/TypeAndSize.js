import * as React from 'react';
import Box from '@mui/material/Box';
import CustomSelector from './CustomSelector';
import { GeneralContext } from '../Context/GeneralContext';
import MilUnoTextField from './MilUnoTextField';

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

export default function TypeAndSize() {
	const { typeOfProject, setTypeOfProject, setSurface, surface } =
		React.useContext(GeneralContext);

	const handleChangeSize = (event) => {
		event.target.value < 0
			? setSurface({ value: 0 })
			: setSurface({ value: parseInt(event.target.value) });
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
			<div className=" flex justify-center items-center flex-col my-10 min-h-[60vh]">
				<div className="mb-16 ">
					<p className="text-center mb-6 font-[Montserrat-bold] text-sm text-miluno-white tracking-wide">
						¿Cuál es la modalidad del proyecto?
					</p>
					<CustomSelector
						name="gender_son"
						setSelectedValue={handleSelectedValue}
						selectedValue={typeOfProject.title}
						required={true}
						items={typeOfProyects}
					/>
				</div>

				<p className="text-center mb-6 font-[Montserrat-bold] text-sm text-miluno-white tracking-wide">
					¿Cuántos metros cuadrados?
				</p>
				<MilUnoTextField
					handleChange={handleChangeSize}
					value={surface.value}
				/>
			</div>
		</Box>
	);
}

import React from 'react';
import { GeneralContext } from '../Context/GeneralContext';
import MilUnoTextField from './MilUnoTextField';

export default function TimesOfProyect() {
	const { setTimes } = React.useContext(GeneralContext);
	const handleChange = (event) => {
		console.log(event.target.value);
		setTimes({ value: parseInt(event.target.value) });
	};
	return (
		<div className="flex flex-col items-center justify-center w-full min-h-[60vh]">
			<p className="mb-5 text-center ">
				¿Cuántas veces será replicado el proyecto?
			</p>
			<MilUnoTextField handleChange={handleChange} />
		</div>
	);
}

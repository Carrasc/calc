import React from 'react';
import { GeneralContext } from '../Context/GeneralContext';
import MilUnoTextField from './MilUnoTextField';

export default function TimesOfProyect() {
	const { setTimes } = React.useContext(GeneralContext);
	const handleChange = (event) => {
		setTimes({ value: parseInt(event.target.value) });
	};
	return (
		<div className="flex flex-col items-center justify-center w-full my-16">
			<p className="text-center mb-6 font-[Montserrat-bold] text-sm text-miluno-white ">
				¿Cuántas veces será replicado el proyecto?
			</p>
			<MilUnoTextField handleChange={handleChange} />
		</div>
	);
}

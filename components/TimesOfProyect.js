import React from 'react';
import MilUnoTextField from './MilUnoTextField';

export default function TimesOfProyect() {
	return (
		<div className="flex flex-col items-center justify-center w-full">
			<p className="mb-3 ">¿Cuantas veces sera replicado el proyecto?</p>
			<MilUnoTextField />
		</div>
	);
}

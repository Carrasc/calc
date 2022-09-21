import React from 'react';
import MilUnoTextField from './MilUnoTextField';

export default function TimesOfProyect() {
	return (
		<div className="flex flex-col items-center justify-center w-full min-h-[60vh]">
			<p className="mb-5 text-center ">
				¿Cuántas veces será replicado el proyecto?
			</p>
			<MilUnoTextField />
		</div>
	);
}

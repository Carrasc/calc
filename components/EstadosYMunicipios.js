import React, { useState } from 'react';
import CustomSelector from './CustomSelector';
import { useForm } from 'react-hook-form';
import { irs } from '../Data/IRS';

export default function EstadosYMunicipios() {
	const [estado_index, set_estado_index] = useState(0);
	const [municipio_index, set_municipio_index] = useState(0);

	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
		reset,
	} = useForm();
	return (
		<div className="flex flex-col items-center justify-center w-full my-20">
			<p className="text-center mb-5 font-[Montserrat-bold] text-sm ">
				¿En qué estado de la república se llevará a cabo el proyecto?
			</p>
			<CustomSelector
				name="estado"
				control={control}
				required={true}
				setIndex={set_estado_index}
				// disabled={selected === undefined}
				items={irs}
			/>

			<p className="text-center mt-20 mb-5 font-[Montserrat-bold] text-sm ">
				¿En qué municipio?
			</p>
			<CustomSelector
				name="municipio"
				control={control}
				required={true}
				setIndex={set_municipio_index}
				// disabled={selected === undefined}
				items={irs[estado_index].municipios}
			/>
			<p className="mt-3 text-xs font-montserrat text-neutral-400">
				Margen de rezago:
				<span className="text-white font-montserrat-bold">
					{municipio_index > irs[estado_index].municipios.length
						? irs[estado_index].municipios[0].value
						: irs[estado_index].municipios[municipio_index].value}
				</span>
			</p>
		</div>
	);
}

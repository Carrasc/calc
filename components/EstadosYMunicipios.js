import React from 'react';
import CustomSelector from './CustomSelector';
import { useForm } from 'react-hook-form';

export default function EstadosYMunicipios() {
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
				name="gender_son"
				control={control}
				required={true}
				// disabled={selected === undefined}
				items={[]}
			/>
			<p className="text-center mt-20 mb-5 font-[Montserrat-bold] text-sm ">
				¿En qué municipio?
			</p>
			<CustomSelector
				name="gender_son"
				control={control}
				required={true}
				// disabled={selected === undefined}
				items={[]}
			/>
			<p className="mt-3 text-xs font-montserrat text-neutral-400">
				Margen de rezago:
				<span className="text-white font-montserrat-bold">
					{' Muy Bajo'}
				</span>
			</p>
		</div>
	);
}

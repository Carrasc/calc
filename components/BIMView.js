import React from 'react';
import CustomSelector from './CustomSelector';
import { useForm } from 'react-hook-form';
import { BIM_values } from '../Data/BIM';

export default function BIMView() {
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
		reset,
	} = useForm();
	return (
		<div className="flex flex-col items-center justify-center w-full my-20">
			<p className="mb-5 ">
				Nivel de BIM a desarrollar para el proyecto:
			</p>
			<CustomSelector
				name="gender_son"
				control={control}
				required={true}
				// disabled={selected === undefined}
				items={BIM_values}
			/>
		</div>
	);
}

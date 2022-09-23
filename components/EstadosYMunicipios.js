import React, { useContext, useState } from 'react';
import CustomSelector from './CustomSelector';
import { useForm } from 'react-hook-form';
import { irs } from '../Data/IRS';
import { GeneralContext } from '../Context/GeneralContext';
import rezago from '../Data/Rezago.json';
export default function EstadosYMunicipios() {
	const [estado_index, set_estado_index] = useState(-1);
	const [municipio_index, set_municipio_index] = useState(0);
	const { set_lag_margin, lag_margin } = useContext(GeneralContext);
	// console.log({ rezago });
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
		reset,
	} = useForm();

	const handleEstado = (item) => {
		set_lag_margin((prevState) => ({
			...prevState,
			estado: item.title,
			municipio: '',
		}));
	};
	const handleMunicipio = (item) => {
		set_lag_margin((prevState) => ({
			...prevState,
			municipio: item.title,
			title: item.value,
			value: rezago[item.value],
		}));
	};
	return (
		<div className="flex flex-col items-center justify-center w-full my-10 min-h-[40vh]">
			<p className="text-center mb-6 font-[Montserrat-bold] text-sm text-miluno-white">
				¿En qué estado de la república se llevará a cabo el proyecto?
			</p>
			<CustomSelector
				name="estado"
				control={control}
				required={true}
				setSelectedValue={handleEstado}
				setIndex={set_estado_index}
				selectedValue={lag_margin.estado}
				// disabled={selected === undefined}
				items={irs}
			/>

			<p className="text-center mt-16 mb-6 font-[Montserrat-bold] text-sm text-miluno-white ">
				¿En qué municipio?
			</p>
			<CustomSelector
				name="municipio"
				control={control}
				selectedValue={lag_margin.municipio}
				required={true}
				setIndex={set_municipio_index}
				setSelectedValue={handleMunicipio}
				disabled={estado_index === -1}
				items={estado_index !== -1 ? irs[estado_index].municipios : []}
			/>
			<p className="mt-4 text-xs font-montserrat text-neutral-400">
				Margen de rezago{' '}
				{estado_index !== -1 ? (
					<span className="text-miluno-white font-montserrat-bold">
						{municipio_index > irs[estado_index].municipios.length
							? irs[estado_index].municipios[0].value
							: irs[estado_index].municipios[municipio_index]
									.value}
					</span>
				) : (
					<span></span>
				)}
			</p>
		</div>
	);
}

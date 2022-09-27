import React from 'react';
import CustomSelector from './CustomSelector';
import { useForm } from 'react-hook-form';
import { BIM_values } from '../Data/BIM';
import { GeneralContext } from '../Context/GeneralContext';

export default function BIMView() {
	const { control } = useForm();
	const { set_bim_selection, bim_selection } =
		React.useContext(GeneralContext);
	const handleSelectedValue = (item) => {
		set_bim_selection((prevState) => ({
			...prevState,
			title: item.title,
			value: item.value,
		}));
	};
	return (
		<div className="flex flex-col items-center justify-center w-full my-10 min-h-[40vh]">
			<p className="text-center mb-6 font-[Montserrat-bold] text-sm text-miluno-white tracking-wide">
				Nivel de BIM a desarrollar para el proyecto:
			</p>
			<CustomSelector
				name="bim"
				control={control}
				required={true}
				selectedValue={bim_selection.title}
				setSelectedValue={handleSelectedValue}
				items={BIM_values}
			/>
		</div>
	);
}

import { ChevronRightIcon } from '@heroicons/react/24/outline';
import React, { useContext, useState } from 'react';
import { genders } from '../Data/FGC';
import CustomSelector from './CustomSelector';
import { useForm } from 'react-hook-form';
import { GeneralContext } from '../Context/GeneralContext';
import img from '../Images/home.png';
import Image from 'next/image';
export default function TypeOfProyects({ handleNext }) {
	const [selected, setSelected] = useState('');
	const { setGeneralValue } = useContext(GeneralContext);
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
		reset,
	} = useForm();
	const handleClick = (index) => {
		setSelected(index);
	};
	const onSubmit = async (data) => {
		const obj = { step1: data };

		setGeneralValue((prevState) => ({
			// object that we want to update
			...prevState, // keep all other key-value pairs
			step1: data, // update the value of specific key
		}));

		handleNext();
	};
	return (
		<div className="flex flex-col justify-center w-full min-h-[80vh]">
			<p className="text-center font-[Montserrat-bold] text-sm ">
				Empecemos por el tipo de proyecto
			</p>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="grid grid-cols-3 gap-4 my-12 md:gap-10 md:grid-cols-6 ">
					{genders.map((gender, index) => {
						return (
							<div
								onClick={() => handleClick(index)}
								// selected={selected && index}
								key={index}
								className={`w-full p-2 text-[10px] md:text-xs  justify-around font-montserrat text-center flex-col  flex items-center   hover:cursor-pointer border border-transparent hover:border-white hover:border text-white rounded-xl h-full  aspect-square ${
									selected === index
										? '  border-miluno-green border hover:border-miluno-green'
										: 'bg-[#1E1E1E]'
								}`}
							>
								<Image
									src={img}
									height={50}
									width={50}
									alt="icon"
									className="m-5 text-white brightness-200 filter "
								/>
								<p>{gender.gender}</p>
							</div>
						);
					})}
				</div>
				<div className="flex flex-col items-center justify-center ">
					<CustomSelector
						name="gender_son"
						control={control}
						required={true}
						disabled={selected === ''}
						items={
							selected !== '' ? genders[selected].children : []
						}
					/>
				</div>
			</form>
		</div>
	);
}

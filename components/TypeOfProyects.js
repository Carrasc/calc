import { ChevronRightIcon } from '@heroicons/react/24/outline';
import React, { useContext, useState } from 'react';
import { genders } from '../Data/FGC';
import CustomSelector from './CustomSelector';
import { useForm } from 'react-hook-form';
import { GeneralContext } from '../Context/GeneralContext';
import img from '../Images/home.png';
import Image from 'next/image';
import { MdOutlineSocialDistance } from 'react-icons/md';

export default function TypeOfProyects({ handleNext }) {
	const [selected, setSelected] = useState('');
	const { setGeneralValue, gender, setGender } = useContext(GeneralContext);
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
		reset,
	} = useForm();
	const handleClick = (index, gen) => {
		if (gender.index === index) {
			// setSelected('');
			setGender((prevState) => ({
				...prevState,
				type: '',
				son: '',
				value: 0,
				index: '',
			}));
		} else {
			// setSelected(index);
			setGender((prevState) => ({
				...prevState,
				type: gen.gender,
				son: '',
				value: 0,
				index: index,
			}));
		}
	};

	const handleSelectedValue = (item) => {
		setGender((prevState) => ({
			...prevState,
			son: item.title,
			value: item.factor,
		}));
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
			<p className="text-center font-[Montserrat-bold] text-sm text-miluno-white">
				Empecemos por el tipo de proyecto
			</p>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="grid grid-cols-3 gap-4 my-12 md:gap-10 md:grid-cols-6 ">
					{genders.map((gender_, index) => {
						return (
							<div
								onClick={() => handleClick(index, gender_)}
								// selected={selected && index}
								key={index}
								className={`w-full p-2 text-[10px] md:text-xs  justify-around font-montserrat text-center flex-col  flex items-center hover:cursor-pointer border-2 text-miluno-white rounded-xl h-full  aspect-square ${
									gender.index === index
										? '  border-miluno-green border-2 hover:border-miluno-green'
										: 'bg-[#1E1E1E] border-transparent hover:border-miluno-gray hover:border-2'
								}`}
							>
								{/* <MdOutlineSocialDistance
									// width={50}
									// height={50}
									className="w-10 h-10 text-red-500"
								/> */}
								{gender_.icon}
								<p>{gender_.gender}</p>
							</div>
						);
					})}
				</div>
				<div className="flex flex-col items-center justify-center ">
					<CustomSelector
						name="gender_son"
						setSelectedValue={handleSelectedValue}
						// control={control}
						required={true}
						disabled={gender.index === ''}
						items={
							gender.index !== ''
								? genders[gender.index].children
								: []
						}
					/>
				</div>
			</form>
		</div>
	);
}

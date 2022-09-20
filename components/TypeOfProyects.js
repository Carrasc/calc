import { ChevronRightIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';
import { genders } from '../Data/FGC';
import CustomSelector from './CustomSelector';
import { useForm } from 'react-hook-form';

export default function TypeOfProyects({ handleNext }) {
	const [selected, setSelected] = useState(undefined);
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
		handleNext();
	};
	return (
		<div className="flex flex-col justify-center ">
			<p className="text-center ">Empecemos por el tipo de proyecto</p>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="grid grid-cols-6 gap-10 my-20 appearance-none ">
					{genders.map((gender, index) => {
						return (
							<div
								onClick={() => handleClick(index)}
								// selected={selected && index}
								key={index}
								className={`w-full text-sm p-5 font-montserrat text-center  flex items-center  justify-center hover:cursor-pointer hover:border-white hover:border text-white rounded-xl h-full  aspect-video ${
									selected === index
										? ' bg-red-400'
										: 'bg-[#1E1E1E]'
								}`}
							>
								{gender.gender}
							</div>
						);
					})}
				</div>
				<div className="flex justify-center ">
					<CustomSelector
						disabled={selected === undefined}
						items={
							selected !== undefined
								? genders[selected].children
								: []
						}
					/>
				</div>
				<div className="absolute top-0 right-0 flex items-center justify-center h-full ">
					<button
						type="button"
						// disabled={activeStep === steps.length - 1}
						className="relative disabled:text-neutral-300 disabled:hover:cursor-not-allowed"
						onClick={handleNext}
					>
						<ChevronRightIcon className="w-10 h-10 " />
					</button>
				</div>
			</form>
		</div>
	);
}

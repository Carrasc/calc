import React, { useState } from 'react';
import { genders } from '../constants/genders';

export default function TypeOfProyects() {
	const [selected, setSelected] = useState(undefined);
	const handleClick = (index) => {
		setSelected(index);
	};
	return (
		<div className="flex flex-col justify-center ">
			<p className="text-center ">Empecemos por el tipo de proyecto</p>
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
			<select></select>
		</div>
	);
}

import React, { useState } from 'react';
import { plans } from '../Data/Plans';

export default function ProyectPlans() {
	const [selected, setSelected] = useState();
	return (
		<div className="flex flex-col items-center justify-center w-full my-20">
			¿Que componentes del proyecto se llevaran a cabo?
			<div className="grid grid-cols-4 gap-5 mt-10 ">
				{plans.map((plan, index) => (
					<div
						onClick={() => setSelected(index)}
						key={index}
						className={`flex cursor-pointer flex-col items-center justify-center w-full p-2 border border-white aspect-square rounded-xl ${
							selected === index ? ' border-green-400' : ''
						} `}
					>
						{plan.titles.map((title, index) => (
							<p className="text-sm font-montserrat" key={index}>
								{title}
							</p>
						))}
					</div>
				))}
			</div>
		</div>
	);
}

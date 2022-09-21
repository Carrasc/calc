import React, { useState } from 'react';
import { plans } from '../Data/Plans';

export default function ProyectPlans() {
	const [selected, setSelected] = useState();
	return (
		<div className="flex flex-col items-center justify-center w-full my-20 min-h-[60vh]">
			¿Qué componentes del proyecto se llevarán a cabo?
			<div className="grid grid-cols-2 gap-5 mt-10 md:grid-cols-4 ">
				{plans.map((plan, index) => (
					<div
						onClick={() => setSelected(index)}
						key={index}
						className={`flex cursor-pointer flex-col items-center justify-center w-full p-2 border border-white aspect-square rounded-xl ${
							selected === index ? ' border-miluno-green' : ''
						} `}
					>
						{plan.titles.map((title, index) => (
							<p
								className="text-sm text-center font-montserrat"
								key={index}
							>
								{title}
							</p>
						))}
					</div>
				))}
			</div>
		</div>
	);
}

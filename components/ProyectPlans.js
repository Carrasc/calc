import React, { useContext, useState } from 'react';
import { GeneralContext } from '../Context/GeneralContext';
import { plans } from '../Data/Plans';

export default function ProyectPlans() {
	const [selected, setSelected] = useState();
	const { setPlan, plan } = useContext(GeneralContext);
	return (
		<div className="flex flex-col text-center items-center justify-center w-full my-10 min-h-[60vh]">
			<p className="text-center font-[Montserrat-bold] text-sm text-miluno-white">
				¿Qué componentes del proyecto se llevarán a cabo?
			</p>

			<div className="grid grid-cols-2 gap-5 mt-10 md:grid-cols-4 ">
				{plans.map((plan, index) => (
					<div
						onClick={() => {
							if (selected === index) {
								setSelected('');
								setPlan((prevState) => ({
									...prevState,
									item: {
										titles: [],
									},
									id: '',
									value: 0,
								}));
							} else {
								setSelected(index);
								setPlan((prevState) => ({
									...prevState,
									id: plan.id,
									item: plan,
									value: plan.value,
								}));
							}
						}}
						key={index}
						className={`flex cursor-pointer flex-col items-center justify-center w-full p-2  aspect-square rounded-xl ${
							selected === index
								? ' border-miluno-green border-2'
								: 'border-2 border-miluno-gray'
						} `}
					>
						{plan.titles.map((title, index) => (
							<p
								className="text-sm text-center font-montserrat text-miluno-white"
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

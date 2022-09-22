import React, { useEffect, useState } from 'react';
import { formatter } from '../libs/calculator/utils';

export default function TableResult({ value = '' }) {
	// usage
	const [state, setState] = useState('second');

	// const renderMenu = (menu) => {
	// 	return menu.map((item) => (
	// 		<>
	// 			{item.children ? (
	// 				<div className="menu-item sub-nav">
	// 					{item.name}
	// 					<div className="menu-container">
	// 						{renderMenu(item.children)}
	// 					</div>
	// 				</div>
	// 			) : (
	// 				<div className="menu-item">
	// 					<a href={item.url}>{item.name}</a>
	// 				</div>
	// 			)}
	// 		</>
	// 	));
	// };
	const renderMenu = (menu) => {
		return menu.map((item, index) => {
			// console.log(index, item.name);
			return (
				<div
					className="w-full ml-10 "
					key={index}
					// style={{ marginLeft: '50px' }}
				>
					<div className="flex justify-between w-full">
						<p>{item.name}</p>
						<p>{formatter.format(item.value)}</p>
					</div>
					{item.children && renderMenu(item.children)}
				</div>
			);
		});
	};

	return (
		<div className="flex flex-col  max-w-2xl mx-auto  w-full min-h-[80vh] mt-64">
			<p className=" font-montserrat">
				Costo total por honorarios:{' '}
				<span className=" font-montserrat-bold">
					{formatter.format(value.final_cost)} MXN
				</span>
			</p>
			<p className="mb-10 font-montserrat">
				Costo de obra:{' '}
				<span className=" font-montserrat-bold">
					{formatter.format(value.work_cost)} MXN
				</span>
			</p>
			<div>
				{/* {traverse(obj, function (k, v) {
					setState(k);
				})} */}
				{value !== '' && renderMenu(value.components_table)}
				{/* {value.components_table.map((item, index) => {
					{
						Object.keys(item).forEach(function (key, index) {
							console.log('value', item[key]);
							return <p>{key};</p>;
						});
					}
				})} */}
			</div>
		</div>
	);
}

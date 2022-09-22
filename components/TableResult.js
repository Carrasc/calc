import React, { useEffect, useState } from 'react';
import { formatter } from '../libs/calculator/utils';

import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { GeneralContext } from '../Context/GeneralContext';

const Accordion = styled((props) => (
	<MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
	border: `0px solid white`,
	backgroundColor: 'transparent',
	color: 'white',

	'&:not(:last-child)': {
		borderBottom: 0,
	},
	'&:before': {
		display: 'none',
	},
	'& .MuiSvgIcon-root': {
		color: 'white',
	},
}));

const AccordionSummary = styled((props) => (
	<MuiAccordionSummary
		expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
		{...props}
	/>
))(({ theme }) => ({
	backgroundColor: '#1e1e1e',
	fontFamily: 'Montserrat',
	border: '1px solid #C3C3C3',
	borderRadius: '6px',
	flexDirection: 'row-reverse',
	'& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
		transform: 'rotate(90deg)',
	},
	'& .MuiAccordionSummary-content': {
		marginLeft: theme.spacing(1),
	},
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
	padding: theme.spacing(2),
	borderTop: '1px solid rgba(0, 0, 0, .125)',
	fontFamily: 'Montserrat',
}));

export default function TableResult({ value = '' }) {
	const { times } = React.useContext(GeneralContext);
	// usage
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
			return (
				<div
					className={'w-full my-2'}
					key={index}
					// style={{ marginLeft: '50px' }}
				>
					{item.children ? (
						<Accordion>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls="panel1a-content"
								id="panel1a-header"
							>
								<div className="flex justify-between w-full">
									<p>{item.name}</p>
									<p>{formatter.format(item.value)}</p>
								</div>
							</AccordionSummary>
							<AccordionDetails>
								<div>
									{item.children && renderMenu(item.children)}
								</div>
							</AccordionDetails>
						</Accordion>
					) : (
						<p>
							{item.name} - {formatter.format(item.value)}
						</p>
					)}
					{/*<div className="flex justify-between w-full">
            <p>{item.name}</p>
            <p>{formatter.format(item.value)}</p>
			</div>
          {item.children && renderMenu(item.children)}*/}
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
				<p>Proyecto ejecutivo básico:</p>

				{value !== '' && renderMenu(value.components_table)}
				<p className="mt-10 ">Instalaciones complementarias:</p>
				{value !== '' && renderMenu(value.extras_table)}

				<p className="mt-10 font-montserrat">
					Costo por BIM:{' '}
					<span className=" font-montserrat-bold">
						{formatter.format(value.bim_cost)} MXN
					</span>
				</p>
				<p className=" font-montserrat">
					{`Costo por ${times.value} repeticiones`}:{' '}
					<span className=" font-montserrat-bold">
						{formatter.format(value.reps_cost)} MXN
					</span>
				</p>
				<p className=" font-montserrat">
					{`Costo por contrataciones de DRO`}:{' '}
					<span className=" font-montserrat-bold">
						{formatter.format(value.reps_cost)} MXN
					</span>
				</p>
				{value !== '' && renderMenu(value.dro_table)}

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

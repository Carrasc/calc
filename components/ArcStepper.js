import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Check from '@mui/icons-material/Check';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import VideoLabelIcon from '@mui/icons-material/VideoLabel';
import StepConnector, {
	stepConnectorClasses,
} from '@mui/material/StepConnector';
import { steps } from '../Data/Steps';

const arcGreen = '#7AC279';
const QontoConnector = styled(StepConnector)(({ theme }) => ({
	[`&.${stepConnectorClasses.alternativeLabel}`]: {
		top: 10,
		left: 'calc(-50% + 16px)',
		right: 'calc(50% + 16px)',
	},
	[`&.${stepConnectorClasses.active}`]: {
		[`& .${stepConnectorClasses.line}`]: {
			borderColor: arcGreen,
		},
	},
	[`&.${stepConnectorClasses.completed}`]: {
		[`& .${stepConnectorClasses.line}`]: {
			borderColor: arcGreen,
		},
	},
	[`& .${stepConnectorClasses.line}`]: {
		borderColor:
			theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
		borderTopWidth: 3,
		borderRadius: 1,
	},
}));

const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
	color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
	display: 'flex',
	height: 22,
	alignItems: 'center',
	...(ownerState.active && {
		color: arcGreen,
	}),
	'& .QontoStepIcon-completedIcon': {
		color: arcGreen,
		zIndex: 1,
		fontSize: 18,
	},
	'& .QontoStepIcon-circle': {
		width: 8,
		height: 8,
		borderRadius: '50%',
		backgroundColor: 'currentColor',
	},
}));

function QontoStepIcon(props) {
	const { active, completed, className } = props;

	return (
		<QontoStepIconRoot ownerState={{ active }} className={className}>
			{completed ? (
				<Check className="QontoStepIcon-completedIcon" />
			) : (
				<div className="QontoStepIcon-circle" />
			)}
		</QontoStepIconRoot>
	);
}

QontoStepIcon.propTypes = {
	/**
	 * Whether this step is active.
	 * @default false
	 */
	active: PropTypes.bool,
	className: PropTypes.string,
	/**
	 * Mark the step as completed. Is passed to child components.
	 * @default false
	 */
	completed: PropTypes.bool,
};

export default function ArcStepper({ activeStep, handleNext, handlePrev }) {
	return (
		<div className="fixed flex items-center justify-center w-full max-w-5xl mx-auto bottom-20">
			{/* <button
				disabled={activeStep === 0}
				className="relative disabled:text-neutral-300 disabled:hover:cursor-not-allowed "
				onClick={handlePrev}
			>
				<ChevronLeftIcon className="w-5 h-5 " />
			</button> */}

			<Stepper
				className="w-full"
				alternativeLabel
				activeStep={activeStep}
				connector={<QontoConnector />}
			>
				{steps.map((step) => (
					<Step key={step.label}>
						<StepLabel StepIconComponent={QontoStepIcon}>
							{/* {step.label} */}
						</StepLabel>
					</Step>
				))}
			</Stepper>
			{/* <button
				disabled={activeStep === steps.length - 1}
				className="relative disabled:text-neutral-300 disabled:hover:cursor-not-allowed"
				onClick={handleNext}
			>
				<ChevronRightIcon className="w-5 h-5 " />
			</button> */}
		</div>
	);
}

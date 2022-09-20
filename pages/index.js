import { useTheme } from 'next-themes';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import ArcStepper from '../components/ArcStepper';
import TypeAndSize from '../components/TypeAndSize';
import TypeOfProyects from '../components/TypeOfProyects';
import { steps } from '../Data/Steps';
import { useState } from 'react';
export default function Home() {
	const { theme, setTheme } = useTheme();
	const [activeStep, setActiveStep] = useState(0);
	const [selected, setSelected] = useState(undefined);
	const handleNext = () => {
		setActiveStep((index) => index + 1);
	};
	const handlePrev = () => {
		setActiveStep((index) => index - 1);
	};

	return (
		<div className="flex flex-col items-center justify-center w-screen h-screen font-[Montserrat-bold]">
			<button
				className="absolute p-2 border-2 rounded-xl top-10 border-neutral-200 dark:border-neutral-600 right-10 dark:bg-neutral-600 bg-neutral-200 hover:border-2 hover:border-indigo-400 dark:hover:border-indigo-400"
				onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
			>
				{theme !== 'light' ? (
					<SunIcon className="w-5 h-5" />
				) : (
					<MoonIcon className="w-5 h-5" />
				)}
			</button>
			{/* <TypeOfProyects /> */}
			<div className="w-full max-w-6xl px-20 mx-auto ">
				{steps[activeStep].component({ handleNext: handleNext })}
			</div>
			<ArcStepper
				handleNext={handleNext}
				handlePrev={handlePrev}
				activeStep={activeStep}
			/>
		</div>
	);
}

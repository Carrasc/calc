import TypeAndSize from '../components/TypeAndSize';
import TypeOfProyects from '../components/TypeOfProyects';
import { useContext, useState } from 'react';
import { GeneralContext } from '../Context/GeneralContext';
import EstadosYMunicipios from '../components/EstadosYMunicipios';
import ProyectPlans from '../components/ProyectPlans';
import TimesOfProyect from '../components/TimesOfProyect';
import BIMView from '../components/BIMView';
import Brief from '../components/Brief';
export default function Home() {
	const [activeStep, setActiveStep] = useState(0);
	const [selected, setSelected] = useState(undefined);
	const { generalValue } = useContext(GeneralContext);

	const handleNext = () => {
		setActiveStep((index) => index + 1);
	};
	const handlePrev = () => {
		setActiveStep((index) => index - 1);
	};

	return (
		<div className=" w-full py-20 max-w-6xl mx-auto px-10  font-[Montserrat-bold]">
			<TypeOfProyects />
			<TypeAndSize />
			<EstadosYMunicipios />
			<ProyectPlans />
			<TimesOfProyect />
			<BIMView />
			<Brief />
		</div>
	);
}

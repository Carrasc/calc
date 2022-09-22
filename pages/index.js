import TypeAndSize from '../components/TypeAndSize';
import TypeOfProyects from '../components/TypeOfProyects';
import { useContext, useState } from 'react';
import { GeneralContext } from '../Context/GeneralContext';
import EstadosYMunicipios from '../components/EstadosYMunicipios';
import ProyectPlans from '../components/ProyectPlans';
import TimesOfProyect from '../components/TimesOfProyect';
import BIMView from '../components/BIMView';
import Brief from '../components/Brief';
import ExtraComponents from '../components/ExtraComponents';
import PrintComponent from '../components/PrintComponent';
import Testing from '../components/Test';
import ExtraPeople from '../components/ExtraPeople';
import TableResult from '../components/TableResult';
import ScrollBar from '../components/ScrollBar';
export default function Home() {
	const [value, setValue] = useState(undefined);
	return (
		<div className=" w-full py-20 max-w-6xl mx-auto px-10  font-[Montserrat-bold]">
			<ScrollBar />
			<TypeOfProyects />
			<TypeAndSize />
			<EstadosYMunicipios />
			<ProyectPlans />
			<ExtraComponents />
			<BIMView />
			<ExtraPeople />
			<TimesOfProyect />
			<Testing value={value} setValue={setValue} />
			<PrintComponent>
				{value && <TableResult value={value} />}
			</PrintComponent>
			<Brief />
			<div className="flex items-center justify-center w-full ">
				<button
					className="flex items-center justify-center px-4 py-2 transition duration-300 ease-in-out border rounded-md w-44 hover:scale-110 border-miluno-green font-montserrat"
					onClick={() => console.log('jeje')}
				>
					Calcular
				</button>
			</div>
			{value && <TableResult value={value} />}
		</div>
	);
}

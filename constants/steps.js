import TypeAndSize from '../components/TypeAndSize';
import TypeOfProyects from '../components/TypeOfProyects';

export const steps = [
	{
		label: 'Tipo de proyectoso',
		component: (props) => <TypeOfProyects {...props} />,
	},
	{
		label: 'Tipo de caca',
		component: (props) => <TypeAndSize {...props} />,
	},
	// { label: 'Tipo de proyectoso', component: <TypeAndSize /> },
	// { label: 'Tipo de proyectoso', component: <TypeOfProyects /> },
	// { label: 'Tipo de proyectoso', component: <TypeOfProyects /> },
	// { label: 'Tipo de proyectoso', component: <TypeAndSize /> },
	// { label: 'Tipo de proyectoso', component: <TypeOfProyects /> },
	// { label: 'Tipo de proyectoso', component: <TypeOfProyects /> },
	// { label: 'Tipo de proyectoso', component: <TypeAndSize /> },
	// { label: 'Tipo de proyectoso', component: <TypeOfProyects /> },
	// { label: 'Tipo de proyectoso', component: <TypeOfProyects /> },
	// { label: 'Tipo de proyectoso', component: <TypeAndSize /> },
	// { label: 'Tipo de proyectoso', component: <TypeOfProyects /> },
];

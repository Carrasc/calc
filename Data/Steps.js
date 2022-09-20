import TypeAndSize from '../components/TypeAndSize';
import TypeOfProyects from '../components/TypeOfProyects';

export const steps = [
	{
		label: 'Tipo de proyectoso',
		component: (props) => <TypeOfProyects {...props} />,
	},
	{
		label: 'Tipo de proyectoso',
		component: (props) => <TypeAndSize {...props} />,
	},
	{
		label: 'Tipo de proyectoso',
		component: (props) => <TypeOfProyects {...props} />,
	},
];

import * as React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import extraPeople from '../Data/People.json';
import { GeneralContext } from '../Context/GeneralContext';

export default function ExtraPeople() {
	const { setPeopleSelected, setPeople, people } =
		React.useContext(GeneralContext);

	const firstState = [
		{ checked: false },
		{ checked: false },
		{ checked: false },
		{ checked: false },
	];
	const addPeople = (pips) => {
		var temp_array = [];
		var index = 0;
		for (var person of pips) {
			if (person.checked) {
				temp_array.push(extraPeople[index].value);
			}
			index += 1;
		}
		setPeopleSelected(temp_array);
	};
	const handleChange = (event, index) => {
		const temp_array = [...people];
		temp_array[index].checked = event.target.checked;
		if (event.target.checked && index !== 0) {
			temp_array[0].checked = event.target.checked;
		}
		if (!event.target.checked && index === 0) {
			temp_array = firstState;
		}
		addPeople(temp_array);
		setPeople(temp_array);
	};

	return (
		<div className="py-20 min-h-[50vh]">
			<p className="text-center mb-2 font-[Montserrat-bold] text-sm text-miluno-white tracking-wide">
				¿El proyecto requiere de figuras auxiliares de la administración
				pública?
			</p>
			<p className="text-center mb-6 font-[Montserrat] text-xs text-miluno-white tracking-wide">
				(Puede no seleccionar ninguno o varios)
			</p>
			<div className="grid grid-cols-1 gap-5 mt-10 md:grid-cols-2">
				{extraPeople.map((item, index) => (
					<div key={index} className="flex justify-center">
						<FormControlLabel
							label={
								<span
									style={{
										fontSize: '14px',
										fontFamily: 'Montserrat',
										color: '#f3f3f3',
									}}
								>
									{item.label}
								</span>
							}
							control={
								<Checkbox
									//   id={item.order}
									checked={people[index].checked}
									onChange={(e) => handleChange(e, index)}
									inputProps={{ 'aria-label': 'controlled' }}
									sx={{
										color: '#707070',
										'&.Mui-checked': {
											color: '#7AC279',
										},
									}}
								/>
							}
						/>
					</div>
				))}
			</div>
		</div>
	);
}

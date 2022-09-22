import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import extraPeople from '../Data/People.json';

export default function ExtraPeople() {
	const [people, setPeople] = React.useState([
		{ checked: 0 },
		{ checked: 0 },
		{ checked: 0 },
		{ checked: 0 },
	]);
	const handleChange = (event) => {
		setPeople(event.target.checked);
	};
	return (
		<div className="py-20">
			<p className="text-center mb-6 font-[Montserrat-bold] text-sm text-miluno-white ">
				¿El proyecto requiere de figuras auxiliares de la administración
				pública?
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
									id={item.order}
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

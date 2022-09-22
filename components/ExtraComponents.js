import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import extraInstalation from '../Data/IC.json';

export default function ExtraComponents() {
	const { scopes, set_scopes } = React.useContext(GeneralContext);
	const handleChange = (event, item) => {
		const temp_array = [...scopes];
		if (event.target.checked) {
			temp_array.push(item.label);
			set_scopes(temp_array);
		} else {
			const index = temp_array.indexOf(item.label);
			if (index > -1) {
				// only splice array when item is found
				temp_array.splice(index, 1); // 2nd parameter means remove one item only
				set_scopes(temp_array);
			}
		}
	};
	return (
		<div className="py-10">
			<p className="text-center mb-6 font-[Montserrat-bold] text-sm text-miluno-white ">
				¿Que alcances extras se tienen en consideracion?
			</p>
			<div className="grid grid-cols-1 gap-5 mt-10 md:grid-cols-3">
				{extraInstalation.map((item, index) => (
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
									onChange={(e) => handleChange(e, item)}
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

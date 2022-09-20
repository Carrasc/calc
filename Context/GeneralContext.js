import React, { createContext, useEffect, useState } from 'react';

export const GeneralContext = createContext();

export default function GeneralProvider({ children }) {
	const [generalValue, setGeneralValue] = useState({});

	return (
		<GeneralContext.Provider
			value={{
				generalValue,
				setGeneralValue,
			}}
		>
			{children}
		</GeneralContext.Provider>
	);
}

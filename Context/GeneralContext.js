import React, { createContext, useEffect, useState } from 'react';

export const GeneralContext = createContext();

export default function GeneralProvider({ children }) {
	const [first, setfirst] = useState();

	return (
		<GeneralContext.Provider
			value={{
				first,
			}}
		>
			{children}
		</GeneralContext.Provider>
	);
}

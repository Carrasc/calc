import React, { useCallback, useEffect, useState } from 'react';

import { useBrowserPrint } from '../hooks/useBrowserPrint';
export default function PrintComponent({ children }) {
	const componentRef = React.useRef(null);
	const onBeforeGetContentResolve = React.useRef(null);
	const [printableKey, updatePrintableKey] = useState(0);

	const forcePrintableKeyUpdate = useCallback(
		() => updatePrintableKey(Math.random()),
		[]
	);

	const { print } = useBrowserPrint();

	const handlePrint = () =>
		print(componentRef.current, forcePrintableKeyUpdate);

	return (
		<div key={printableKey}>
			<button onClick={handlePrint} title="Imprimir Nota">
				<svg
					title="Hello World!"
					xmlns="http://www.w3.org/2000/svg"
					className="w-6 h-6 text-gray-300 cursor-pointer stroke-1 "
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					strokeWidth={1}
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
					/>
				</svg>
			</button>
			<div className="hidden print:block">
				<div
					ref={componentRef}
					className="box-border flex flex-col justify-between w-full h-full min-h-screen bg-white flex-nowrap"
				>
					{children}
					{/* <div className="p-10 box-border min-h-[10vh] border-b border-neutral-400">
						<h1 className="my-0 text-2xl text-black font-helvetica-bold">
							Título:{' '}
						</h1>
					</div> */}
				</div>
			</div>
		</div>
	);
}

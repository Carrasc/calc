import React, { useCallback, useEffect, useState } from 'react';
import ReactToPrint from 'react-to-print';

import { useBrowserPrint } from '../hooks/useBrowserPrint';
import TableResult from './TableResult';
export default function PrintComponentCool({ value }) {
	const componentRef = React.useRef(null);

	const onBeforeGetContentResolve = React.useRef(null);

	const [loading, setLoading] = React.useState(false);
	const [text, setText] = React.useState('old boring text');

	const handleAfterPrint = React.useCallback(() => {
		console.log('`onAfterPrint` called');
	}, []);

	const handleBeforePrint = React.useCallback(() => {
		console.log('`onBeforePrint` called');
	}, []);

	const handleOnBeforeGetContent = React.useCallback(() => {
		console.log('`onBeforeGetContent` called');
		setLoading(true);
		setText('Loading new text...');

		return new Promise((resolve) => {
			onBeforeGetContentResolve.current = resolve;

			setTimeout(() => {
				setLoading(false);
				setText('New, Updated Text!');
				resolve();
			}, 2000);
		});
	}, [setLoading, setText]);

	React.useEffect(() => {
		if (
			text === 'New, Updated Text!' &&
			typeof onBeforeGetContentResolve.current === 'function'
		) {
			onBeforeGetContentResolve.current();
		}
	}, [onBeforeGetContentResolve.current, text]);

	const reactToPrintContent = React.useCallback(() => {
		return componentRef.current;
	}, [componentRef.current]);

	const reactToPrintTrigger = React.useCallback(() => {
		// NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
		// to the root node of the returned component as it will be overwritten.

		// Bad: the `onClick` here will be overwritten by `react-to-print`
		// return <button onClick={() => alert('This will not work')}>Print this out!</button>;

		// Good
		return (
			<button title="Imprimir Nota">
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
		);
	}, []);

	return (
		<div>
			<ReactToPrint
				content={reactToPrintContent}
				documentTitle="AwesomeFileName"
				onAfterPrint={handleAfterPrint}
				onBeforeGetContent={handleOnBeforeGetContent}
				onBeforePrint={handleBeforePrint}
				removeAfterPrint
				trigger={reactToPrintTrigger}
			/>
			{loading && (
				<p className="indicator">onBeforeGetContent: Loading...</p>
			)}
			<div className="" ref={componentRef}>
				<div className="">
					<TableResult value={value} />
				</div>
			</div>
			{/* <ComponentToPrint ref={componentRef} text={text} /> */}
		</div>
	);
}

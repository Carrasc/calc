export const useBrowserPrint = () => {
	const print = (element, updateCallerKeyCallback) => {
		const newWindow = window.open();

		newWindow.document.write('<!DOCTYPE html');
		newWindow.document.write('<html>');
		newWindow.document.write('<head>');
		newWindow.document.write('</head>');
		newWindow.document.write('<body>');
		newWindow.document.write('</body>');
		newWindow.document.write('</html>');

		newWindow.document.body.appendChild(element);

		const parentHead = window.document.querySelector('head').childNodes;
		parentHead.forEach((item) => {
			newWindow.document.head.appendChild(item.cloneNode(true));
		});

		setTimeout(() => {
			newWindow.document.close();
			newWindow.focus();
			newWindow.print();
			newWindow.close();
		}, 250);
		updateCallerKeyCallback();
	};

	return { print };
};

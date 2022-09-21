import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import GeneralProvider from '../Context/GeneralContext';
function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider attribute="class">
			<GeneralProvider>
				<Component {...pageProps} />
			</GeneralProvider>
		</ThemeProvider>
	);
}

export default MyApp;

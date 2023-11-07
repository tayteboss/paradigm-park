import { useEffect, useState } from 'react';
import '../styles/fonts.css';
import { ThemeProvider } from 'styled-components';
import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';
import Cookies from 'js-cookie';
import Layout from '../components/layout';
import { theme } from '../styles/theme';
import { GlobalStyles } from '../styles/global';
import use1vh from '../hooks/use1vh';
import { FrameItemType, TransitionsType } from '../shared/types/types';
import useHeaderHeight from '../hooks/useHeaderHeight';
import ContentModal from '../components/blocks/ContentModal';
import Cursor from '../components/elements/Cursor';
import WorkContentModal from '../components/blocks/WorkContentModal';

const pageTransitionVariants: TransitionsType = {
	hidden: { opacity: 0, transition: { duration: 0.3 } },
	visible: { opacity: 1, transition: { duration: 0.5, delay: 1 } },
};

type Props = {
	Component: any; // TO BE UPDATED
	pageProps: {};
};

const App = (props: Props) => {
	const {
		Component,
		pageProps
	} = props;

	const [hasVisited, setHasVisited] = useState<boolean>(false);
	const [content, setContent] = useState<FrameItemType | false>(false);
	const [workModalContent, setWorkModalContent] = useState<FrameItemType | false>(false);
	const [appCursorRefresh, setAppCursorRefresh] = useState(0);

	const router= useRouter();
	const routerEvents = router.events;

	const handleExitComplete = (): void => {
		window.scrollTo(0, 0);
		setTimeout(() => {
			setAppCursorRefresh(appCursorRefresh + 1);
		}, 300);
	};

	use1vh();
	useHeaderHeight();

	useEffect(() => {
		window.history.scrollRestoration = 'manual'

		handleExitComplete();

		const hasCookies = Cookies.get('visited');

		if (hasCookies) {
			setHasVisited(true);
		}

		const timer = setTimeout(() => {
			Cookies.set('visited', 'true', { expires: 1, path: '' });
		}, 5000);

		return () => {
			clearTimeout(timer);
		}
	}, []);

	useEffect(() => {
		const timer = setTimeout(() => {
			setAppCursorRefresh(appCursorRefresh + 1);
		}, 1000);

		return () => {
			clearTimeout(timer);
		}
	}, [router.pathname]);

	return (
		<>
			<GlobalStyles />
			<ThemeProvider theme={theme}>
				<Layout>
					<AnimatePresence
						mode="wait"
						onExitComplete={() => handleExitComplete()}
					>
						<Component
							{...pageProps}
							key={router.asPath}
							pageTransitionVariants={pageTransitionVariants}
							setContent={setContent}
							setWorkModalContent={setWorkModalContent}
						/>
					</AnimatePresence>
				</Layout>
				<ContentModal
					content={content}
					setContent={setContent}
				/>
				<WorkContentModal
					workModalContent={workModalContent}
					setWorkModalContent={setWorkModalContent}
				/>
				<Cursor
					cursorRefresh={() => setAppCursorRefresh(appCursorRefresh + 1)}
				/>
			</ThemeProvider>
		</>
	);
}

export default App;

import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import { ReactNode } from 'react';
import NewsletterForm from './NewsletterForm';

const Main = styled.main`
	position: relative;
	z-index: 2;
	background: var(--colour-white);
	padding-top: calc(var(--header-h) + 2px);
`;

type Props = {
	children: ReactNode;
};

const Layout = (props: Props) => {
	const {
		children
	} = props;

	return (
		<>
			<Header />
			<Main>{children}</Main>
			<NewsletterForm />
			<Footer />
		</>
	);
};

export default Layout;

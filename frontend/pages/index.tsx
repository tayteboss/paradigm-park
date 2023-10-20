import styled from 'styled-components';
import { NextSeo } from 'next-seo';

const PageWrapper = styled.div``;

type Props = {
	data: {}
};

const Page = (props: Props) => {
	const {
		data
	} = props;

	return (
	<PageWrapper>
		<NextSeo
			title="Boiler"
			description="Boiler Plate"
		/>
		Home
	</PageWrapper>
	);
};

export async function getStaticProps() {
	// const data = await getPage('home');
	const data = false;

	return {
		props: {
			data,
		},
	};
}

export default Page;

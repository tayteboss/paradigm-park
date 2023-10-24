import styled from 'styled-components';
import { NextSeo } from 'next-seo';
import client from '../client';
import { siteSettingsQueryString } from '../queries';

const PageWrapper = styled.div``;

type Props = {
	data: {}
};

const Page = (props: Props) => {
	const {
		siteSettings
	} = props;

	console.log('siteSettings', siteSettings);

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
	const siteSettings = await client.fetch(siteSettingsQueryString);

	return {
		props: {
			siteSettings,
		},
	};
}

export default Page;

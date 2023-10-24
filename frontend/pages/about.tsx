import styled from 'styled-components';
import { NextSeo } from 'next-seo';
import client from '../client';
import { aboutPageQueryString, siteSettingsQueryString } from '../queries';
import { TransitionsType } from '../shared/types/types';
import { motion } from 'framer-motion';

const PageWrapper = styled(motion.div)``;

type Props = {
	data: {};
	pageTransitionVariants: TransitionsType;
};

const Page = (props: Props) => {
	const {
		data,
		pageTransitionVariants
	} = props;

	return (
	<PageWrapper
		variants={pageTransitionVariants}
		initial='hidden'
		animate='visible'
		exit='hidden'
	>
		<NextSeo
			title={data.seoTitle || "Paradigm Park | About"}
			description={data.seoDescription || ""}
		/>
		About
	</PageWrapper>
	);
};

export async function getStaticProps() {
	const siteSettings = await client.fetch(siteSettingsQueryString);
	const data = await client.fetch(aboutPageQueryString);

	return {
		props: {
			siteSettings,
			data
		},
	};
}

export default Page;

import styled from 'styled-components';
import { NextSeo } from 'next-seo';
import client from '../client';
import { homePageQueryString, siteSettingsQueryString } from '../queries';
import { HomePageType, TransitionsType } from '../shared/types/types';
import { motion } from 'framer-motion';
import HomeHero from '../components/blocks/HomeHero';
import HomeTitleBlocks from '../components/blocks/HomeTitleBlocks';
import CaseStudies from '../components/blocks/CaseStudies';
import HomeExploreBlocks from '../components/blocks/HomeExploreBlocks';

const PageWrapper = styled(motion.div)``;

type Props = {
	data: HomePageType;
	pageTransitionVariants: TransitionsType;
};

const Page = (props: Props) => {
	const {
		data,
		pageTransitionVariants
	} = props;

	// console.log('data', data);

	return (
		<PageWrapper
			variants={pageTransitionVariants}
			initial='hidden'
			animate='visible'
			exit='hidden'
		>
			<NextSeo
				title={data.seoTitle || "Paradigm Park | Home"}
				description={data.seoDescription || ""}
			/>
			<HomeHero data={data?.heroMedia} />
			<HomeTitleBlocks data={data?.titleBlocks} />
			<CaseStudies data={data?.caseStudies} />
			<HomeExploreBlocks />
		</PageWrapper>
	);
};

export async function getStaticProps() {
	const siteSettings = await client.fetch(siteSettingsQueryString);
	const data = await client.fetch(homePageQueryString);

	return {
		props: {
			siteSettings,
			data
		},
	};
}

export default Page;

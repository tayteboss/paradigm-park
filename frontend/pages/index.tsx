import styled from 'styled-components';
import { NextSeo } from 'next-seo';
import client from '../client';
import { homePageQueryString, siteSettingsQueryString } from '../queries';
import { HomePageType, TransitionsType } from '../shared/types/types';
import { motion } from 'framer-motion';
import HomeHero from '../components/blocks/HomeHero';
import HomeTitleBlocks from '../components/blocks/HomeTitleBlocks';
import CaseStudies from '../components/blocks/CaseStudies';
import muxBlurHash from '@mux/blurhash';
import { useEffect } from 'react';

const PageWrapper = styled(motion.div)``;

type Props = {
	data: HomePageType;
	heroMediaPlaceholderData: any;
	mobileHeroMediaPlaceholderData: any;
	pageTransitionVariants: TransitionsType;
};

const Page = (props: Props) => {
	const {
		data,
		heroMediaPlaceholderData,
		mobileHeroMediaPlaceholderData,
		pageTransitionVariants
	} = props;

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<PageWrapper
			variants={pageTransitionVariants}
			initial="hidden"
			animate="visible"
			exit="hidden"
		>
			<NextSeo
				title={data.seoTitle || 'Paradigm Park | Home'}
				description={data.seoDescription || ''}
			/>
			<HomeHero
				data={data?.heroMedia}
				mobileData={data?.mobileHeroMedia}
				image={data?.heroImage}
				mobileImage={data?.mobileHeroImage}
				heroMediaPlaceholderData={heroMediaPlaceholderData}
				mobileHeroMediaPlaceholderData={mobileHeroMediaPlaceholderData}
				placement={data?.logoPlacement}
			/>
			{/* <HomeTitleBlocks data={data?.titleBlocks} />
			<CaseStudies data={data?.caseStudies} /> */}
			{/* <HomeExploreBlocks
				learnBackgroundColor={data?.exploreLearnBackgroundColor}
				learnBackgroundShape={data?.exploreLearnBackgroundShape}
				learnTitle={data?.exploreLearnTitle}
				learnDescription={data?.exploreLearnDescription}
				learnButtonTitle={data?.exploreLearnButtonTitle}
				projectsTitle={data?.exploreProjectsTitle}
				projectsDescription={data?.exploreProjectsDescription}
				projectsButtonTitle={data?.exploreProjectsButtonTitle}
				projectsBackgroundImage={data?.exploreProjectsBackgroundImage}
				projectsBackgroundShape={data?.exploreProjectsBackgroundShape}
			/> */}
		</PageWrapper>
	);
};

export async function getStaticProps() {
	const siteSettings = await client.fetch(siteSettingsQueryString);
	const data = await client.fetch(homePageQueryString);

	const desktopHeroPlaybackId = data?.heroMedia?.asset?.playbackId;
	const mobileHeroPlaybackId = data?.mobileHeroMedia?.asset?.playbackId;

	let desktopBlurHashBase64 = '';
	let mobileBlurHashBase64 = '';

	if (desktopHeroPlaybackId) {
		const { blurHashBase64 } = await muxBlurHash(desktopHeroPlaybackId);
		desktopBlurHashBase64 = blurHashBase64;
	}

	if (mobileHeroPlaybackId) {
		const { blurHashBase64 } = await muxBlurHash(mobileHeroPlaybackId);
		mobileBlurHashBase64 = blurHashBase64;
	}

	return {
		props: {
			siteSettings,
			data,
			desktopBlurHashBase64,
			mobileBlurHashBase64
		}
	};
}

export default Page;

import styled from 'styled-components';
import { NextSeo } from 'next-seo';
import client from '../client';
import { learnPageQueryString, siteSettingsQueryString } from '../queries';
import { AboutPageType, LearnPageType, TransitionsType } from '../shared/types/types';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import CaseStudyTicker from '../components/pageBuilder/CaseStudyTicker';

const PageWrapper = styled(motion.div)`
	background: var(--colour-white);
`;

type Props = {
	data: LearnPageType;
	pageTransitionVariants: TransitionsType;
	setContent: any;
};

const Page = (props: Props) => {
	const {
		data,
		pageTransitionVariants
	} = props;

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
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
				<CaseStudyTicker
					tickerContent={data?.tickerContent}
					tickerLinkTitle={data?.tickerLinkTitle}
					tickerButtonExternalLink={data?.tickerButtonExternalLink}
					tickerInternalLink={data?.tickerInternalLink}
				/>
			</PageWrapper>
		</>
	);
};

export async function getStaticProps() {
	const siteSettings = await client.fetch(siteSettingsQueryString);
	const data = await client.fetch(learnPageQueryString);

	return {
		props: {
			siteSettings,
			data
		},
	};
}

export default Page;

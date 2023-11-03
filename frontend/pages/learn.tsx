import styled from 'styled-components';
import { NextSeo } from 'next-seo';
import client from '../client';
import { learnPageQueryString, siteSettingsQueryString } from '../queries';
import { LearnPageType, TransitionsType } from '../shared/types/types';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import CaseStudyTicker from '../components/pageBuilder/CaseStudyTicker';
import Issues from '../components/blocks/Issues';

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

	console.log('data', data);

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
				<Issues data={data?.issueArticles} />
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

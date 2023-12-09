import styled from 'styled-components';
import { NextSeo } from 'next-seo';
import client from '../../client';
import { learnPageQueryString, siteSettingsQueryString } from '../../queries';
import { LearnPageType, TransitionsType } from '../../shared/types/types';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import CaseStudyTicker from '../../components/pageBuilder/CaseStudyTicker';
import Issues from '../../components/blocks/Issues';
import { useRouter } from 'next/router';

const PageWrapper = styled(motion.div)`
	/* background: var(--colour-white); */

	.case-study-ticker {
		margin-left: 0;

		&__button {
			left: 50%;
		}
	}
`;

type Props = {
	data: LearnPageType;
	pageTransitionVariants: TransitionsType;
	setContent: any;
};

const Page = (props: Props) => {
	const { data, pageTransitionVariants } = props;

	const router = useRouter();

	useEffect(() => {
		router.push('/404');
		window.scrollTo(0, 0);
	}, []);

	return <></>;

	return (
		<>
			<PageWrapper
				variants={pageTransitionVariants}
				initial="hidden"
				animate="visible"
				exit="hidden"
			>
				<NextSeo
					title={data.seoTitle || 'Paradigm Park | About'}
					description={data.seoDescription || ''}
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
		}
	};
}

export default Page;

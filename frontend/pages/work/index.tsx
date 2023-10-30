import styled from 'styled-components';
import client from '../../client';
import { siteSettingsQueryString, workPageQueryString } from '../../queries';
import { motion } from 'framer-motion';
import { SiteSettingsType, TransitionsType, WorkPageType } from '../../shared/types/types';
import { NextSeo } from 'next-seo';
import WorkHeroBlock from '../../components/blocks/WorkHeroBlock';
import CaseStudies from '../../components/blocks/CaseStudies';
import WorkInProgress from '../../components/blocks/WorkInProgress';

const PageWrapper = styled(motion.div)`
	background: var(--colour-white);
`;

type Props = {
	data: WorkPageType;
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
				title={data?.seoTitle || "Paradigm Park | Work"}
				description={data?.seoDescription || ""}
			/>
			<WorkHeroBlock
				heroTitle={data?.heroTitle}
				heroColor={data?.heroColor?.hex}
			/>
			<CaseStudies data={data?.activeCaseStudies} />
			<WorkInProgress
				title={data?.inProgressTitle}
				data={data?.inProgressCaseStudies}
			/>
		</PageWrapper>
	);
};

export async function getStaticProps() {
	const data = await client.fetch(workPageQueryString);

	return {
		props: {
			data
		},
	};
}

export default Page;

import styled from 'styled-components';
import client from '../../client';
import { CaseStudyType, TransitionsType } from '../../shared/types/types';
import { motion } from 'framer-motion';
import { NextSeo } from 'next-seo';
import CaseStudyHero from '../../components/blocks/CaseStudyHero';
import PageBuilder from '../../components/common/PageBuilder';

type Props = {
	data: CaseStudyType;
	pageTransitionVariants: TransitionsType;
};

const PageWrapper = styled(motion.div)``;

const Page = (props: Props) => {
	const {
		data,
		pageTransitionVariants
	} = props;

	console.log('data', data);
	

	return (
		<PageWrapper
			variants={pageTransitionVariants}
			initial='hidden'
			animate='visible'
			exit='hidden'
		>
			<NextSeo
				title={`Paradigm Park | ${data?.title}`}
				description={data?.excerpt || ""}
			/>
			<CaseStudyHero />
			<PageBuilder sections={data?.pageBuilder} />
		</PageWrapper>
	);
};

export async function getStaticPaths() {
	const allCaseStudiesQuery = `
		*[_type == 'caseStudy'] [0...100] {
			slug
		}
	`;

	const allCaseStudies = await client.fetch(allCaseStudiesQuery);

	return {
		paths: allCaseStudies.map((item: any) => {
			return `/work/${item?.slug?.current}`;
		}),
		fallback: true
	};
};

export async function getStaticProps({ params }: any) {
	const caseStudyQuery = `
		*[_type == 'caseStudy' && slug.current == "${params.slug[0]}"][0] {
			...,
			"desktopHeroMask": desktopHeroMask.asset->url,
			"heroImage": heroImage.asset->url,
			"mobileHeroMask": mobileHeroMask.asset->url,
			"thumbnailImage": thumbnailImage.asset->url,
		}
	`;

	const data = await client.fetch(caseStudyQuery);

	return {
		props: {
			data,
		},
	};
}

export default Page;

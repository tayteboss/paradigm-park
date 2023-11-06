import styled from 'styled-components';
import client from '../../client';
import { motion } from 'framer-motion';
import { IssueType, TransitionsType } from '../../shared/types/types';
import { useEffect } from 'react';
import { NextSeo } from 'next-seo';
import RelatedIssues from '../../components/blocks/RelatedIssues';
import InsideTheIssue from '../../components/blocks/InsideTheIssue';
import IssueImageGallery from '../../components/blocks/IssueImageGallery';
import IssueIntroduction from '../../components/blocks/IssueIntroduction';
import IssueHero from '../../components/blocks/IssueHero';

type Props = {
	data: IssueType;
	pageTransitionVariants: TransitionsType;
	setWorkModalContent: any;
};

const PageWrapper = styled(motion.div)``;

const Page = (props: Props) => {
	const {
		data,
		pageTransitionVariants,
	} = props;

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

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
			<IssueHero
				title={data?.title}
				heroImage={data?.heroImage}
				ctaLinkTitle={data?.ctaLinkTitle}
				externalLink={data?.external}
				issueNumber={data?.issueNumber}
				projectColor={data?.projectColor}
			/>
			<IssueIntroduction />
			<IssueImageGallery />
			<InsideTheIssue />
			<RelatedIssues />
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
			return `/learn/${item?.slug?.current}`;
		}),
		fallback: true
	};
};

export async function getStaticProps({ params }: any) {
	const issueQuery = `
		*[_type == 'issue' && slug.current == "${params.slug[0]}"][0] {
			...,
			'heroImage': heroImage.asset->url,
		}
	`;

	const data = await client.fetch(issueQuery);

	return {
		props: {
			data,
		},
	};
}

export default Page;

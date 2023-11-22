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
	relatedIssueHeading: {
		relatedIssueHeading: string;
	};
};

const PageWrapper = styled(motion.div)``;

const Page = (props: Props) => {
	const {
		data,
		pageTransitionVariants,
		relatedIssueHeading
	} = props;

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

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
				issuePrefix={data?.issuePrefix}
				projectColor={data?.projectColor}
			/>
			<IssueIntroduction
				introductionHeading={data?.introductionHeading}
				introductionSubHeading={data?.introductionSubHeading}
				introductionContent={data?.introductionContent}
				ctaLinkTitle={data?.ctaLinkTitle}
				externalLink={data?.external}
			/>
			<IssueImageGallery data={data?.imageGallery} />
			<InsideTheIssue
				bgColour={data?.insideTheIssueBlockColour}
				heading={data?.insideTheIssueHeading}
				content={data?.insideTheIssueContent}
				ctaLinkTitle={data?.ctaLinkTitle}
				externalLink={data?.external}
			/>
			<RelatedIssues
				title={relatedIssueHeading?.relatedIssueHeading}
				data={data?.relatedIssue}
			/>
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
			'imageGallery': imageGallery[] {
				_key,
				imageType,
				'singleImageUrl': singleImage.asset->url,
				'twoImagesUrls': twoImages[].asset->url,
			},
			'relatedIssue': relatedIssue[]-> {
				...,
				"heroImage": heroImage.asset->url,
			}
		}
	`;

	const relatedIssueHeadingQuery = `
		*[_type == 'learnPage'][0] {
			relatedIssueHeading
		}
	`;

	const data = await client.fetch(issueQuery);
	const relatedIssueHeading = await client.fetch(relatedIssueHeadingQuery);

	return {
		props: {
			data,
			relatedIssueHeading
		},
	};
}

export default Page;

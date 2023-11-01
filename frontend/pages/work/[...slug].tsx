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
	setWorkModalContent: any;
};

const PageWrapper = styled(motion.div)``;

const Page = (props: Props) => {
	const {
		data,
		pageTransitionVariants,
		setWorkModalContent
	} = props;

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
			<CaseStudyHero
				desktopHeroMask={data?.desktopHeroMask}
				heroImage={data?.heroImage}
				mobileHeroMask={data?.mobileHeroMask}
				projectColor={data?.projectColor}
				title={data?.title}
			/>
			<PageBuilder
				sections={data?.pageBuilder}
				setWorkModalContent={setWorkModalContent}
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
			pageBuilder[] {
				...,
				"leftColImage": leftColImage.asset->url,
				"rightColImage": rightColImage.asset->url,
				"image": image.asset->url,
				"modal": modal->,
				"imageGallery": imageGallery[] {
					asset->
				}
			}
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

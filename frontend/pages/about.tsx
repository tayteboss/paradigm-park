import styled from 'styled-components';
import { NextSeo } from 'next-seo';
import client from '../client';
import { aboutPageQueryString, siteSettingsQueryString } from '../queries';
import { AboutPageType, TransitionsType } from '../shared/types/types';
import { motion } from 'framer-motion';
import FramesScroller from '../components/blocks/FramesScroller';
import { useEffect } from 'react';

const PageWrapper = styled(motion.div)`
	background: var(--colour-white);
`;

type Props = {
	data: AboutPageType;
	pageTransitionVariants: TransitionsType;
	setContent: any;
};

const Page = (props: Props) => {
	const { data, pageTransitionVariants, setContent } = props;

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

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
				<FramesScroller
					frames={data?.frameItems}
					image={data?.heroImage}
					title={data?.heroTitle}
					setContent={setContent}
				/>
			</PageWrapper>
		</>
	);
};

export async function getStaticProps() {
	const siteSettings = await client.fetch(siteSettingsQueryString);
	const data = await client.fetch(aboutPageQueryString);

	return {
		props: {
			siteSettings,
			data
		}
	};
}

export default Page;

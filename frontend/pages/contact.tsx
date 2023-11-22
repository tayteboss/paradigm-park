import styled from 'styled-components';
import { NextSeo } from 'next-seo';
import client from '../client';
import { contactPageQueryString, siteSettingsQueryString } from '../queries';
import { ContactPageType, SiteSettingsType, TransitionsType } from '../shared/types/types';
import { motion } from 'framer-motion';
import LayoutWrapper from '../components/common/LayoutWrapper';
import EmailCard from '../components/elements/EmailCard';
import pxToRem from '../utils/pxToRem';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

type StyledProps = {
	$bg?: string;
	$inView?: boolean;
}

type Props = {
	data: ContactPageType;
	pageTransitionVariants: TransitionsType;
	siteSettings: SiteSettingsType;
};

const PageWrapper = styled(motion.div)`
	background: var(--colour-white);
	padding-bottom: ${pxToRem(30)};
`;

const Inner = styled.div<StyledProps>`
	background: ${props => props.$bg};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: calc(100vh - var(--header-h) - 30px);
	border-radius: var(--block-border-radius);
	padding: 0 ${pxToRem(60)};

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		padding: 0 ${pxToRem(15)};
	}
`;

const Title = styled.h1`
	margin-bottom: ${pxToRem(40)};
	text-align: center;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		margin-bottom: ${pxToRem(20)};
	}
`;

const Cta = styled.h2`
	margin-bottom: ${pxToRem(120)};
	max-width: ${pxToRem(700)};
	text-align: center;

	&.view-element-fade-in {
		transition-delay: 150ms;
	}

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		margin-bottom: ${pxToRem(40)};
		font-size: ${pxToRem(45)};
		line-height: normal;
	}
`;

const EmailWrapper = styled.div`
	display: flex;

	&.view-element-fade-in {
		transition-delay: 300ms;
	}

	@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
		flex-direction: column;
		align-items: center;
		justify-content: center;
		row-gap: ${pxToRem(30)};
	}
`;

const Pipe = styled.div<StyledProps>`
	background: rgba(0, 0, 0, 0.3);
	margin: 0 ${pxToRem(120)};
	width: ${pxToRem(1)};
	height: ${(props) => props.$inView ? '100%' : 0};

	transition: all var(--transition-speed-default) var(--transition-ease);
	transition-delay: 400ms;

	@media ${(props) => props.theme.mediaBreakpoints.tabletLandscape} {
		margin: 0 ${pxToRem(60)};
	}

	@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
		display: none;
	}
`;

const Page = (props: Props) => {
	const {
		data,
		siteSettings,
		pageTransitionVariants
	} = props;

	const {
		title,
		cta,
		heroColor
	} = data;

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
		rootMargin: '-50px'
	});

	return (
		<PageWrapper
			variants={pageTransitionVariants}
			initial='hidden'
			animate='visible'
			exit='hidden'
		>
			<NextSeo
				title={data.seoTitle || "Paradigm Park | Contact"}
				description={data.seoDescription || ""}
			/>
			<LayoutWrapper>
				<Inner
					$bg={heroColor ? heroColor?.hex : 'var(--colour-yellow)'}
					ref={ref}
				>
					{title && (
						<Title
							className={`type-h5 view-element-fade-in ${
								inView ? 'view-element-fade-in--in-view' : ''
							}`}
						>
							{title}
						</Title>
					)}
					{cta && (
						<Cta
							className={`view-element-fade-in ${
								inView ? 'view-element-fade-in--in-view' : ''
							}`}
						>
							{cta}
						</Cta>
					)}
					<EmailWrapper
						className={`view-element-fade-in ${
							inView ? 'view-element-fade-in--in-view' : ''
						}`}
					>
						<EmailCard
							title="New Business and General Enquiries"
							buttonTitle={siteSettings?.generalEmailButtonTitle}
							email={siteSettings?.generalEmail}
						/>
						<Pipe $inView={inView} />
						<EmailCard
							title="Collaborations and Writing Submissions"
							buttonTitle={siteSettings?.collaborationsEmailButtonTitle}
							email={siteSettings?.collaborationsEmail}
						/>
					</EmailWrapper>
				</Inner>
			</LayoutWrapper>
		</PageWrapper>
	);
};

export async function getStaticProps() {
	const siteSettings = await client.fetch(siteSettingsQueryString);
	const data = await client.fetch(contactPageQueryString);

	return {
		props: {
			siteSettings,
			data
		},
	};
}

export default Page;

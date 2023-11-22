import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';
import LayoutWrapper from '../../common/LayoutWrapper';
import Image from 'next/image';
import PrimaryLink from '../../elements/PrimaryLink';
import { ColorType } from '../../../shared/types/types';
import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type StyledProps = {
	$bg: string;
};

type Props = {
	title?: string;
	heroImage?: string;
	ctaLinkTitle?: string;
	externalLink?: string;
	issueNumber?: string;
	projectColor?: ColorType;
};

const IssueHeroWrapper = styled.section`
	position: relative;
	margin-bottom: ${pxToRem(30)};

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		margin-bottom: ${pxToRem(15)};
	}
`;

const Inner = styled.div<StyledProps>`
	position: relative;
	height: calc(100vh - var(--header-h) - 30px);
	background: ${(props) => props.$bg};
	overflow: hidden;
	border-radius: var(--block-border-radius);
`;

const ImageWrapper = styled.div`
	position: relative;
	height: 100%;
	width: 100%;
	overflow: hidden;

	&.view-element-fade-in {
		transition-delay: 50ms;
		transition-duration: 700ms;
	}
`;

const ImageInner = styled(motion.div)`
	position: relative;
	height: 100%;
	width: 100%;
`;

const SolidBlock = styled.div<StyledProps>`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background: ${(props) => props.$bg};
	height: 80%;
	width: 30%;
	max-width: 500px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	padding: ${pxToRem(30)};

	@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
		width: 50%;
	}

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		width: 60%;
		height: 60%;
	}

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		height: 50%;
	}

	&.view-element-fade-in {
		transition-delay: 500ms;
	}
`;

const Issue = styled.p`
	text-align: center;

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		position: relative;
		bottom: ${pxToRem(100)};
	}
`;

const PrimaryLinkWrapper = styled.div`
	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		position: relative;
		top: ${pxToRem(110)};
	}
`;

const Title = styled.h1`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	text-align: center;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		font-size: ${pxToRem(45)};
	}
`;

const IssueHero = (props: Props) => {
	const {
		title,
		heroImage,
		ctaLinkTitle,
		externalLink,
		issueNumber,
		projectColor,
		issuePrefix
	} = props;

	const [windowHeight, setWindowHeight] = useState(0);
	const [distanceToTop, setDistanceToTop] = useState(0);

	const ref = useRef<HTMLDivElement>(null);

	const { ref: wrapperRef, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
		rootMargin: '-50px'
	});

	const { scrollY } = useScroll();

	const transform = useTransform(
		scrollY,
		[0, windowHeight * 2.5],
		['scale(1)', 'scale(1.2',]
	);

	useEffect(() => {
		if (ref?.current) {
			setDistanceToTop(window.pageYOffset + ref.current.getBoundingClientRect().top);
		}

		setWindowHeight(window.innerHeight);
	}, [distanceToTop]);

	return (
		<IssueHeroWrapper ref={wrapperRef}>
			<LayoutWrapper>
				<Inner
					ref={ref}
					$bg={projectColor ? projectColor.hex : 'var(--colour-cream)'}
				>
					<ImageWrapper
						className={`view-element-fade-in ${
							inView ? 'view-element-fade-in--in-view' : ''
						}`}
					>
						{heroImage && (
							<ImageInner
								style={{ transform }}
							>
								<Image
									src={heroImage}
									alt={title}
									layout='fill'
									objectFit='cover'
									priority
								/>
							</ImageInner>
						)}
					</ImageWrapper>
					<SolidBlock
						$bg={projectColor ? projectColor.hex : 'var(--colour-cream)'}
						className={`view-element-fade-in ${
							inView ? 'view-element-fade-in--in-view' : ''
						}`}
					>
						<Issue>{issuePrefix ? issuePrefix : 'Issue'} {issueNumber || ''}</Issue>
						{ctaLinkTitle && externalLink && (
							<PrimaryLinkWrapper>
								<PrimaryLink
									title={ctaLinkTitle}
									url={externalLink}
									target="_blank"
								/>
							</PrimaryLinkWrapper>
						)}
					</SolidBlock>
					{title && (
						<Title>{title}</Title>
					)}
				</Inner>
			</LayoutWrapper>
		</IssueHeroWrapper>
	);
};

export default IssueHero;

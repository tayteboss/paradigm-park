import styled from 'styled-components';
import { IssueType } from '../../../shared/types/types';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import throttle from 'lodash.throttle';
import pxToRem from '../../../utils/pxToRem';
import Image from 'next/image';
import PrimaryLink from '../PrimaryLink';

type StyledProps = {
	$isSticky?: boolean;
	$bg?: string;
};

const IssueCardWrapper = styled(motion.div)<StyledProps>`
	height: calc(100vh - 60px);
	height: calc(100dvh - 60px);
	margin-bottom: 100vh;
	margin-bottom: 100dvh;
	position: sticky;
	top: 30px;
	border-radius: var(--block-border-radius);
	padding: ${pxToRem(60)} ${pxToRem(30)} ${pxToRem(30)};
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	pointer-events: ${(props) => props.$isSticky ? 'all' : 'none'};
	background: ${(props) => props.$bg};

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		top: 15px;
		height: calc(100vh - 30px);
		height: calc(100dvh - 30px);
		padding: ${pxToRem(115)} ${pxToRem(30)};
	}
	
	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		padding: ${pxToRem(115)} ${pxToRem(15)};
	}
`;

const IssueIndexContainer = styled.div``;

const IssueNumber = styled.p``;

const TitleWrapper = styled.div`
	position: relative;
	flex: 1;
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: ${pxToRem(50)} 0;
`;

const ImageWrapper = styled(motion.div)`
	position: relative;
	height: 100%;
	width: 30%;
	overflow: hidden;
	z-index: 1;

	@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
		width: 50%;
	}

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		width: 75%;
	}
`;

const ImageInner = styled(motion.div)`
	height: 100%;
	width: 100%;
`;

const Title = styled.h1`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 3;
`;

const ContentWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	width: 100%;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		flex-direction: column;
		align-items: center;
		justify-content: center;
		row-gap: ${pxToRem(15)};
	}

	.primary-link {
		margin-bottom: ${pxToRem(10)};
	}
`;

const Excerpt = styled.h4`
	padding-right: ${pxToRem(60)};

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		text-align: center;
		padding-right: 0;
	}
`;

const PrimaryLinkWrapper = styled.div``;

const IssueCard = (props: IssueType) => {
	const {
		title,
		excerpt,
		heroImage,
		inProgress,
		projectColor,
		slug,
		isFirstBlock,
		isLastBlock,
		index,
		issueNumber
	} = props;

	const router = useRouter();

	const [isSticky, setIsSticky] = useState(isFirstBlock ? true : false);
	const [windowHeight, setWindowHeight] = useState(0);
	const [distanceToTop, setDistanceToTop] = useState(0);

	const { scrollY } = useScroll();
	const ref = useRef<HTMLDivElement>(null);

	const transform = useTransform(
		scrollY,
		[distanceToTop, distanceToTop + (windowHeight * 3)],
		['scale(1)', 'scale(1.1)']
	);

	const opacity = useTransform(
		scrollY,
		[distanceToTop, distanceToTop + 500, distanceToTop + windowHeight, distanceToTop + (windowHeight * 3)],
		[isFirstBlock ? 1 : 0, 1, 1, isLastBlock ? 1 : 0]
	);

	useEffect(() => {
		if (!ref.current) return;

		const windowHeight = window.innerHeight;
		const distanceToTop = ref.current.offsetTop;

		setDistanceToTop(distanceToTop);
		setWindowHeight(windowHeight);

		const handleScroll = () => {
			if (!ref.current) return;

			if (ref.current.getBoundingClientRect().top <= 30) {
				setIsSticky(true);
			} else {
				setIsSticky(false);
			}
		};

		const throttledHandleScroll = throttle(handleScroll, 50);
		window.addEventListener('scroll', throttledHandleScroll);
	}, [ref, router]);

	return (
		<IssueCardWrapper
			key={index}
			ref={ref}
			className="case-study-card"
			$isSticky={isSticky}
			$bg={projectColor ? projectColor.hex : 'var(--colour-white)'}
			style={{ opacity }}
		>
			<IssueIndexContainer>
				<IssueNumber>Issue {issueNumber ? issueNumber : ''}</IssueNumber>
			</IssueIndexContainer>
			<TitleWrapper>
				{heroImage && (
					<ImageWrapper>
						<ImageInner style={{ transform }}>
							<Image
								src={heroImage}
								layout="fill"
								objectFit="cover"
							/>
						</ImageInner>
					</ImageWrapper>
				)}
				{title && (
					<Title>
						{title}
					</Title>
				)}
			</TitleWrapper>
			<ContentWrapper>
				{excerpt && (
					<Excerpt>{excerpt}</Excerpt>
				)}
				<PrimaryLinkWrapper>
					<PrimaryLink
						url={`/learn/${slug?.current}`}
						title={inProgress ? 'In Progress' : 'View Issue'}
						isOutline={inProgress}
					/>
				</PrimaryLinkWrapper>
			</ContentWrapper>
		</IssueCardWrapper>
	);
};

export default IssueCard;

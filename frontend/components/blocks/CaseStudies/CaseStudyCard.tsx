import styled from 'styled-components';
import { CaseStudyType } from '../../../shared/types/types';
import PrimaryLink from '../../elements/PrimaryLink';
import pxToRem from '../../../utils/pxToRem';
import { motion, useAnimation, useInView, useScroll, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import throttle from 'lodash.throttle';

const CaseStudyCardWrapper = styled(motion.div)`
	height: 100vh;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	padding-bottom: ${pxToRem(46)};
	margin-bottom: 100vh;
	position: sticky;
	top: 0;
	left: 0;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		padding-bottom: ${pxToRem(30)};
	}
`;

const ThumbnailWrapper = styled.div`
	flex: 1;
	position: relative;
`;

const ImageWrapper = styled(motion.div)`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 2;
`;

const ImageInner = styled(motion.div)``;

const Image = styled.img`
	max-height: 50vh;
	max-width: 50vw;

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		max-height: 60vh;
		max-width: 60vw;
	}
`;

const Title = styled(motion.h1)`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 3;
	white-space: nowrap;

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		font-size: ${pxToRem(45)};
	}
`;

const InformationBar = styled(motion.div)`
	display: flex;
	justify-content: space-between;
	align-items: flex-end;

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		flex-direction: column;
		align-items: flex-start;
	}
`;

const LHS = styled.div`
	padding-right: ${pxToRem(60)};

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		padding-right: 0;
		margin-bottom: ${pxToRem(30)};
	}
`;

const RHS = styled.div``;

const TagsWrapper = styled.div`
	margin-bottom: ${pxToRem(20)};

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		margin-bottom: ${pxToRem(15)};
	}
`;

const Tag = styled.span``;

const Excerpt = styled.h4`
	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		font-size: ${pxToRem(25)};
		line-height: normal;
	}
`;

const CaseStudyCard = (props: CaseStudyType) => {
	const {
		excerpt,
		title,
		tags,
		thumbnailImageUrl,
		slug,
		index,
		isLastBlock,
		isFirstBlock
	} = props;

	const [isSticky, setIsSticky] = useState(false);
	const [windowHeight, setWindowHeight] = useState(0);
	const [distanceToTop, setDistanceToTop] = useState(0);

	const { scrollY } = useScroll();
	const controls = useAnimation();
	const imageControls = useAnimation();
	const ref = useRef<HTMLDivElement>(null);
	const inView = useInView(ref);

	const transform = useTransform(
		scrollY,
		[distanceToTop, distanceToTop + (windowHeight * 3)],
		['scale(0.95)', 'scale(1.05)']
	);

	const fadeIn = {
		opacity: 1,
	};

	const fadeOut = {
		opacity: 0,
	};

	const imageInitial = {
		scale: 0.92,
	};

	const imageAnimate = {
		scale: 1,
	};

	useEffect(() => {
		if (!ref.current) return;

		const windowHeight = window.innerHeight;
		const distanceToTop = ref.current.offsetTop;

		setDistanceToTop(distanceToTop);
		setWindowHeight(windowHeight);

		const handleScroll = () => {
			if (!ref.current) return;

			if (window.scrollY >= distanceToTop + (windowHeight * 1.8)) {
				if (isLastBlock) return;
				setIsSticky(false); return;
			}

			if (window.scrollY >= ref.current.offsetTop) {
				setIsSticky(true);
			} else {
				if (isFirstBlock) {
					setIsSticky(true); return;
				}
				setIsSticky(false);
			}
		};

		const throttledHandleScroll = throttle(handleScroll, 100);
		window.addEventListener('scroll', throttledHandleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [ref]);

	useEffect(() => {
		if (inView && isSticky) {
			controls.start(fadeIn);
			imageControls.start(imageAnimate);
		} else {
			controls.start(fadeOut);
			imageControls.start(imageInitial);
		}
	}, [controls, inView, isSticky]);

	return (
		<CaseStudyCardWrapper
			key={index}
			ref={ref}
			className="case-study-card"
		>
			<ThumbnailWrapper>
				{thumbnailImageUrl && (
					<ImageWrapper
						initial={fadeOut}
						animate={controls}
						transition={{ duration: 0.7 }}
					>
						<ImageInner
							style={{ transform }}
							className="case-study-card__image-inner"
						>
							<Image
								src={thumbnailImageUrl}
							/>
						</ImageInner>
					</ImageWrapper>
				)}
				{title && (
					<Title
						initial={fadeOut}
						animate={controls}
						transition={{ duration: 0.7, delay: 0.1 }}
					>
						{title}
					</Title>
				)}
				</ThumbnailWrapper>
			<InformationBar
				initial={fadeOut}
				animate={controls}
				transition={{ duration: 0.5, delay: 0.2 }}
			>
				<LHS>
					<TagsWrapper>
						{tags && tags.map((tag, i) => (
							<Tag className="type-b2" key={i}>
								{tag}{i < tags.length - 1 && ', '}
							</Tag>
						))}
					</TagsWrapper>
					{excerpt && (
						<Excerpt>{excerpt}</Excerpt>
					)}
				</LHS>
				<RHS>
					<PrimaryLink
						title="Explore Project"
						url={`/work/${slug?.current}`}
					/>
				</RHS>
			</InformationBar>
		</CaseStudyCardWrapper>
	);
};

export default CaseStudyCard;

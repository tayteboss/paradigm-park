import styled from 'styled-components';
import { CaseStudyType } from '../../../shared/types/types';
import pxToRem from '../../../utils/pxToRem';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import throttle from 'lodash.throttle';

type StyledProps = {
	$isSticky?: boolean;
};

const CaseStudyCardWrapper = styled(motion.a)<StyledProps>`
	height: 100vh;
	height: 100dvh;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	padding-bottom: ${pxToRem(46)};
	margin-bottom: 50vh;
	margin-bottom: 50dvh;
	position: sticky;
	top: 0;
	left: 0;
	pointer-events: ${(props) => props.$isSticky ? 'all' : 'none'};

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		padding-bottom: ${pxToRem(30)};
	}
`;

const ThumbnailWrapper = styled.div`
	flex: 1;
	position: relative;
`;

const ImageWrapper = styled.div`
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

const Title = styled.h1`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 3;
	white-space: wrap;
	width: 100%;
	text-align: center;
	pointer-events: none;

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		font-size: ${pxToRem(45)};
	}
`;

const InformationBar = styled.div`
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

const PseudoButton = styled.div``;

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

	const router = useRouter();

	const [isSticky, setIsSticky] = useState(false);
	const [windowHeight, setWindowHeight] = useState(0);
	const [distanceToTop, setDistanceToTop] = useState(0);

	const { scrollY } = useScroll();
	const ref = useRef<HTMLAnchorElement>(null);

	const imageTransform = useTransform(
		scrollY,
		[distanceToTop, distanceToTop + (windowHeight * 3)],
		['scale(0.95)', 'scale(1.05)']
	);

	const opacity = useTransform(
		scrollY,
		[distanceToTop, distanceToTop + (windowHeight * 0.5), distanceToTop + (windowHeight * 0.5), distanceToTop + (windowHeight * 1.5)],
		[isFirstBlock ? 1 : 0, 1, 1, isLastBlock ? 1 : 0]
	);

	useEffect(() => {
		const timer = setTimeout(() => {
			if (!ref.current) return;
			const windowHeight = window.innerHeight;
			const distanceToTop = ref.current.offsetTop;

			setDistanceToTop(distanceToTop);
			setWindowHeight(windowHeight);
		}, 1000);

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

		return () => {
			clearTimeout(timer);
			window.removeEventListener('scroll', throttledHandleScroll);
		};
	}, [ref, router]);

	return (
		<Link href={`/work/${slug?.current}`} passHref scroll={false}>
			<CaseStudyCardWrapper
				key={index}
				ref={ref}
				className="case-study-card"
				$isSticky={isSticky}
				style={{ opacity }}
			>
				<ThumbnailWrapper>
					{thumbnailImageUrl && (
						<ImageWrapper>
							<ImageInner
								style={{ transform: imageTransform }}
								className="case-study-card__image-inner"
							>
								<Image
									src={thumbnailImageUrl}
								/>
							</ImageInner>
						</ImageWrapper>
					)}
					{title && (
						<Title>{title}</Title>
					)}
					</ThumbnailWrapper>
				<InformationBar>
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
						<PseudoButton className="primary-link-style">
							Explore Projects
						</PseudoButton>
					</RHS>
				</InformationBar>
			</CaseStudyCardWrapper>
		</Link>
	);
};

export default CaseStudyCard;

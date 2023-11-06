import styled from 'styled-components';
import { TitleBlockType } from '../../../shared/types/types';
import PrimaryLink from '../../elements/PrimaryLink';
import pxToRem from '../../../utils/pxToRem';
import { useInView } from 'react-intersection-observer';
import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const TitleBlockWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: calc(100vh - 60px);
	position: sticky;
	top: 30px;
	border-radius: var(--block-border-radius);
	margin-bottom: 100vh;

	&:first-child {
		background: var(--colour-cream);
	}

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		top: 15px;
		height: calc(100vh - 30px);
		padding: 0 ${pxToRem(16)};
	}
`;

const Title = styled(motion.h2)`
	text-align: center;
	max-width: ${pxToRem(950)};
	margin: 0 auto ${pxToRem(60)};

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		font-size: ${pxToRem(35)};
		line-height: normal;
		margin: 0 auto ${pxToRem(30)};
		max-width: ${pxToRem(600)};
	}
`;

const PrimaryLinkWrapper = styled(motion.div)``;

const TitleBlock = (props: TitleBlockType) => {
	const {
		internal,
		linkTitle,
		title,
		isFirstBlock,
		isLastBlock
	} = props;

	const [windowHeight, setWindowHeight] = useState(0);
	const [distanceToTop, setDistanceToTop] = useState(0);

	const wrapperRef = useRef<HTMLDivElement>(null);

	const { scrollY } = useScroll();

	const opacity = useTransform(
		scrollY,
		[distanceToTop, distanceToTop + ((windowHeight - 60) / 2), distanceToTop + ((windowHeight - 60) * 1.5)],
		[isFirstBlock ? 1 : 0, 1, isLastBlock ? 1 : 0]
	);

	const transform = useTransform(
		scrollY,
		[distanceToTop, distanceToTop + ((windowHeight - 60) / 2), distanceToTop + ((windowHeight - 60) * 1.5)],
		['translateY(10px)', 'translateY(0px)', 'translateY(-10px)']
	);

	useEffect(() => {
		if (wrapperRef?.current) {
			setDistanceToTop(window.pageYOffset + wrapperRef.current.getBoundingClientRect().top);
		}

		setWindowHeight(window.innerHeight);
	}, [distanceToTop]);

	const slug = internal?.slug?.current || '';

	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
		rootMargin: '-50px'
	});

	return (
		<TitleBlockWrapper ref={wrapperRef}>
			{title && (
				<Title
					style={{ opacity, transform }}
				>
					{title}
				</Title>
			)}
			{slug && linkTitle && (
				<PrimaryLinkWrapper
					ref={ref}
					style={{ opacity, transform }}
				>
					<PrimaryLink title={linkTitle} url={`/${slug}`}  />
				</PrimaryLinkWrapper>
			)}
		</TitleBlockWrapper>
	);
};

export default TitleBlock;

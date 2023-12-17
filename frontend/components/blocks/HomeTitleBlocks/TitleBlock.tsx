import styled from 'styled-components';
import { TitleBlockType } from '../../../shared/types/types';
import PrimaryLink from '../../elements/PrimaryLink';
import pxToRem from '../../../utils/pxToRem';
import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRouter } from 'next/router';

const TitleBlockWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: calc(100vh - 60px);
	position: sticky;
	top: 30px;
	border-radius: var(--block-border-radius);
	margin-bottom: 50vh;

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
	const { internal, linkTitle, title, isFirstBlock, isLastBlock } = props;

	const router = useRouter();

	const [windowHeight, setWindowHeight] = useState(0);
	const [distanceToTop, setDistanceToTop] = useState(0);

	const wrapperRef = useRef<HTMLDivElement>(null);

	const { scrollY } = useScroll();

	const opacity = useTransform(
		scrollY,
		[
			distanceToTop,
			distanceToTop + windowHeight * 0.5,
			distanceToTop + windowHeight * 1
		],
		[isFirstBlock ? 1 : 0, 1, isLastBlock ? 1 : 0]
	);

	const transform = useTransform(
		scrollY,
		[
			distanceToTop,
			distanceToTop + windowHeight * 0.5,
			distanceToTop + windowHeight * 1
		],
		['translateY(10px)', 'translateY(0px)', 'translateY(-10px)']
	);

	useEffect(() => {
		const timer = setTimeout(() => {
			if (wrapperRef?.current) {
				setDistanceToTop(
					window.pageYOffset +
						wrapperRef.current.getBoundingClientRect().top
				);
			}

			setWindowHeight(window.innerHeight);
		}, 1000);

		return () => clearTimeout(timer);
	}, [distanceToTop, router]);

	const slug = internal?.slug?.current || '';

	return (
		<TitleBlockWrapper ref={wrapperRef}>
			{title && <Title style={{ opacity, transform }}>{title}</Title>}
			{slug && linkTitle && (
				<PrimaryLinkWrapper style={{ opacity, transform }}>
					<PrimaryLink title={linkTitle} url={`/${slug}`} />
				</PrimaryLinkWrapper>
			)}
		</TitleBlockWrapper>
	);
};

export default TitleBlock;

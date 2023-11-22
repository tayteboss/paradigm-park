import styled from 'styled-components';
import { FrameItemType } from '../../../shared/types/types';
import LayoutWrapper from '../../common/LayoutWrapper';
import pxToRem from '../../../utils/pxToRem';
import Frame from './Frame';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

type Props = {
	frames: FrameItemType[];
	title: string;
	image: string;
	setContent: any;
};

const FramesScrollerWrapper = styled.section`
	margin-bottom: 100vh;
	padding-bottom: ${pxToRem(60)};
	position: relative;
	z-index: 1;
	background: var(--colour-white);
	pointer-events: none;

	.frame:nth-child(even) {
		flex-direction: row-reverse;

		.frame__button {
			text-align: right;
		}
	}
`;

const Inner = styled.div`
	padding-top: 40vh;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		padding-top: 30vh;
	}
`;

const ImageWrapper = styled(motion.div)`
	position: fixed;
	top: 30px;
	left: 0;
	height: calc(100vh - 60px);
	width: 100%;
	z-index: 1;
	padding: 0 ${pxToRem(30)};
	background: var(--colour-white);

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		padding: 0 ${pxToRem(15)};
	}
`;

const ImageInner = styled.div`
	height: 100%;
	width: 100%;
	position: relative;
	border-radius: var(--block-border-radius);
	overflow: hidden;
`;

const TitleWrapper = styled.div`
	position: absolute;
	z-index: 5;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	max-width: ${pxToRem(950)};
	width: 80%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Title = styled(motion.h2)`
	font-size: ${pxToRem(82)};
	line-height: ${pxToRem(86)};
	text-align: center;
	max-width: ${pxToRem(950)};
	width: 100%;
	pointer-events: none;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		font-size: ${pxToRem(35)};
		line-height: normal;
	}
`;

const TopHideBlock = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	height: 30px;
	width: 100%;
	background: var(--colour-white);
	z-index: 10;
`;

const BottomHideBlock = styled(motion.div)`
	position: fixed;
	bottom: 0;
	left: 0;
	height: 30px;
	width: 100%;
	background: var(--colour-white);
	z-index: 10;
`;

const FramesScroller = (props: Props) => {
	const {
		frames,
		title,
		image,
		setContent
	} = props;

	const hasFrames = frames && frames.length > 0;
	const numberOfFrames = frames.length;

	const [windowHeight, setWindowHeight] = useState(0);
	const [distanceToTop, setDistanceToTop] = useState(0);

	const wrapperRef = useRef<HTMLDivElement>(null);

	const { scrollY } = useScroll();

	const titleOpacity = useTransform(
		scrollY,
		[0, windowHeight * (numberOfFrames + 0.5), windowHeight * (numberOfFrames + 1)],
		[1, 1, 0]
	);

	const titleTransform = useTransform(
		scrollY,
		[0, windowHeight * (numberOfFrames + 0.5), windowHeight * (numberOfFrames + 1)],
		['translateY(0)', 'translateY(0)', 'translateY(-20px)']
	);

	const imageOpacity = useTransform(
		scrollY,
		[0, windowHeight * ((numberOfFrames + 1)), windowHeight * ((numberOfFrames + 1) + 0.5)],
		[1, 1, 0]
	);

	useEffect(() => {
		if (wrapperRef?.current) {
			setDistanceToTop(window.pageYOffset + wrapperRef.current.getBoundingClientRect().top);
		}

		setWindowHeight(window.innerHeight);
	}, [distanceToTop]);

	return (
		<FramesScrollerWrapper>
			<LayoutWrapper>
				<Inner className="frame-scroller">
					{hasFrames && frames.map((item, i) => (
						<Frame
							key={i}
							title={item.title}
							subTitle={item.subTitle}
							image={item.image}
							contentBlock={item.contentBlock}
							setContent={setContent}
							index={i}
						/>
					))}
					<TopHideBlock />
					<BottomHideBlock style={{ opacity: imageOpacity }} />
					<ImageWrapper style={{ opacity: imageOpacity }}>
						<ImageInner>
							{title && (
								<TitleWrapper>
									<Title
										style={{ opacity: titleOpacity, transform: titleTransform }}
									>
										{title}
									</Title>
								</TitleWrapper>
							)}
							<Image
								src={image}
								objectFit="cover"
								layout="fill"
							/>
						</ImageInner>
					</ImageWrapper>
				</Inner>
			</LayoutWrapper>
		</FramesScrollerWrapper>
	);
};

export default FramesScroller;

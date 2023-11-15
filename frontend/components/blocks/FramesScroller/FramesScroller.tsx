import styled from 'styled-components';
import { FrameItemType } from '../../../shared/types/types';
import LayoutWrapper from '../../common/LayoutWrapper';
import pxToRem from '../../../utils/pxToRem';
import Frame from './Frame';
import Image from 'next/image';

type Props = {
	frames: FrameItemType[];
	title: string;
	image: string;
	setContent: any;
};

const FramesScrollerWrapper = styled.section`
	padding-bottom: ${pxToRem(60)};

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

const ImageWrapper = styled.div`
	position: absolute;
	top: 30px;
	left: 0;
	width: 100%;
	height: calc(440vh + 30px);
	padding: 0 ${pxToRem(30)};
	
	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		height: calc(430vh + 30px);
		padding: 0 ${pxToRem(15)};
	}
`;

const ImageInner = styled.div`
	position: sticky;
	top: 30px;
	left: 0;
	height: calc(100vh - 60px);
	width: 100%;
	border-radius: var(--block-border-radius);
	overflow: hidden;
`;

const Title = styled.h2`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-size: ${pxToRem(82)};
	line-height: ${pxToRem(86)};
	z-index: 3;
	text-align: center;
	max-width: ${pxToRem(950)};
	width: 80%;
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

const BottomHideBlock = styled.div`
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
					<BottomHideBlock />
					{/* <BlankBlock /> */}
					<ImageWrapper>
						<ImageInner>
							{title && (
								<Title>{title}</Title>
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

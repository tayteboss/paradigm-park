import styled from 'styled-components';
import { FrameItemType } from '../../../shared/types/types';
import LayoutWrapper from '../../common/LayoutWrapper';
import pxToRem from '../../../utils/pxToRem';
import Frame from './Frame';

type StyledProps = {
	$bg: string;
};

type Props = {
	frames: FrameItemType[];
	title: string;
	image: string;
	setContent: any;
};

const FramesScrollerWrapper = styled.section`
	padding-bottom: ${pxToRem(30)};
	background: var(--colour-white);
`;

const Outside = styled.div<StyledProps>`
	background-image: url(${(props) => props.$bg});
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	border-radius: var(--block-border-radius);
	overflow: hidden;
	position: relative;

	.frame:nth-child(even) {
		flex-direction: row-reverse;
	}
`;

const Inner = styled.div`
	height: calc(100vh - var(--header-h) - 30px);
	height: calc(100dvh - var(--header-h) - 30px);
	overflow: scroll;
	-ms-overflow-style: none;
	scrollbar-width: none;
	position: sticky;
	top: ${pxToRem(30)};
	padding-top: 50vh;
	z-index: 5;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		padding-top: 30vh;
	}

	&::-webkit-scrollbar {
		display: none;
	}
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
				<Outside $bg={image ? image : ''}>
					{title && (
						<Title>{title}</Title>
					)}
					<Inner>
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
					</Inner>
				</Outside>
			</LayoutWrapper>
		</FramesScrollerWrapper>
	);
};

export default FramesScroller;

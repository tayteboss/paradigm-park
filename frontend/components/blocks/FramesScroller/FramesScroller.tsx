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

const FramesScrollerWrapper = styled.section<StyledProps>`
	height: calc(100vh - var(--header-h) - 30px);
	height: calc(100dvh - var(--header-h) - 30px);
	margin-bottom: ${pxToRem(30)};
	overflow: scroll;
	-ms-overflow-style: none;
	scrollbar-width: none;
	background-image: url(${(props) => props.$bg});
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	position: sticky;
	top: ${pxToRem(30)};
	border-radius: var(--block-border-radius);
	z-index: 3;

	&::-webkit-scrollbar {
		display: none;
	}

	.frame:nth-child(even) {
		flex-direction: row-reverse;
	}
`;

const Title = styled.h2`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-size: ${pxToRem(82)};
	line-height: ${pxToRem(86)};
	z-index: 2;
	text-align: center;
	max-width: ${pxToRem(950)};
	width: 80%;
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
		<>
			<LayoutWrapper>
				{title && (
					<Title>{title}</Title>
				)}
				<FramesScrollerWrapper $bg={image ? image : ''}>
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
				</FramesScrollerWrapper>
			</LayoutWrapper>
		</>
	);
};

export default FramesScroller;

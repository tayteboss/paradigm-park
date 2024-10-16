import styled from 'styled-components';
import { FrameItemType } from '../../../shared/types/types';
import pxToRem from '../../../utils/pxToRem';
import MuxPlayer from '@mux/mux-player-react/lazy';

type StyledProps = {
	$maskType: string;
};

const FrameWrapper = styled.div`
	height: 100vh;
	padding: 0 8vw;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	width: 100%;
	position: relative;
	z-index: 5;
	pointer-events: all;
`;

const ImageWrapper = styled.button<StyledProps>`
	height: ${pxToRem(486)};
	width: ${pxToRem(350)};
	position: relative;
	display: inline-block;
	mask: ${(props) => `url('/icons/${props.$maskType}-mask.svg')`};
	mask-repeat: no-repeat;
	mask-position: center;
	mask-size: contain;
	background: var(--colour-white);

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		height: ${pxToRem(350)};
	}

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		height: ${pxToRem(200)};
		width: ${pxToRem(150)};
	}

	&.view-element-bottom-top {
		transition: opacity 500ms ease;
	}

	mux-player {
		object-fit: cover;
		height: 100%;
		width: 100%;
	}
`;

const Image = styled.img`
	object-fit: contain;
	height: 100%;
	width: 100%;
`;

const MobileButtonWrapper = styled.div`
	display: none;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	text-align: left;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		display: block;
	}
`;

const DesktopButtonWrapper = styled.div`
	position: absolute;
	top: 75%;
	left: 50%;
	transform: translate(-50%, -50%);
	text-align: left;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		display: none;
	}
`;

const Button = styled.div`
	padding: ${pxToRem(9)} ${pxToRem(30)} ${pxToRem(10)};
	display: inline-block;
	font-size: ${pxToRem(16)};
	line-height: ${pxToRem(11.5)};
	background: var(--colour-yellow);
	color: var(--colour-black);
	border-radius: 100px;
	white-space: nowrap;
	text-transform: capitalize;
`;

const Frame = (props: FrameItemType) => {
	const {
		title,
		subTitle,
		image,
		contentBlock,
		setContent,
		index,
		video,
		blurHashBase64
	} = props;

	const handleClick = () => {
		setContent({
			title: title,
			subTitle: subTitle,
			contentBlock: contentBlock,
			isRHS: index % 2 === 0 ? true : false
		});
	};

	let maskType: string;

	switch (index) {
		case 0:
			maskType = 'arch';
			break;
		case 1:
			maskType = 'ellipse';
			break;
		case 2:
			maskType = 'trapezoid';
			break;
		default:
			maskType = 'rectangle';
	}

	return (
		<FrameWrapper className="frame">
			<ImageWrapper onClick={() => handleClick()} $maskType={maskType}>
				{video?.playbackId && (
					<MuxPlayer
						streamType="on-demand"
						playbackId={video.playbackId}
						autoPlay="muted"
						loop={true}
						thumbnailTime={0}
						preload="auto"
						muted
						playsInline={true}
						placeholder={blurHashBase64.blurHashBase64}
					/>
				)}
				{image && <Image src={image} />}
				{title && (
					<DesktopButtonWrapper
						className="frame__button"
						onClick={() => handleClick()}
					>
						<Button>{title}</Button>
					</DesktopButtonWrapper>
				)}
			</ImageWrapper>
			{title && (
				<MobileButtonWrapper
					className="frame__button"
					onClick={() => handleClick()}
				>
					<Button>{title}</Button>
				</MobileButtonWrapper>
			)}
		</FrameWrapper>
	);
};

export default Frame;

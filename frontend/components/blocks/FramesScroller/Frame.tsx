import styled from 'styled-components';
import { FrameItemType } from '../../../shared/types/types';
import pxToRem from '../../../utils/pxToRem';

const FrameWrapper = styled.div`
	height: calc(100vh - var(--header-h) - 30px);
	height: calc(100dvh - var(--header-h) - 30px);
	padding: 0 8vw;
	display: flex;
	flex-direction: row;
	align-items: center;
	width: 100%;
	position: relative;
	z-index: 5;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		height: calc(70vh - var(--header-h) - 30px);
		height: calc(70dvh - var(--header-h) - 30px);
	}
`;

const ImageWrapper = styled.button`
	height: ${pxToRem(486)};
	position: relative;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		height: ${pxToRem(350)};
	}

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		height: ${pxToRem(200)};
	}
`;

const Image = styled.img`
	object-fit: contain;
	height: 100%;
	width: 100%;
`;

const ButtonWrapper = styled.div`
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
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
		index
	} = props;

	const handleClick = () => {
		setContent({
			title: title,
			subTitle: subTitle,
			contentBlock: contentBlock,
			isRHS: index % 2 === 0 ? true : false
		});
	};

	return (
		<FrameWrapper className="frame">
			<ImageWrapper
				onClick={() => handleClick()}
				className="frame-link"
				data-title={title}
			>
				<Image src={image} />
				{title && (
					<ButtonWrapper className="frame__button">
						<Button>{title}</Button>
					</ButtonWrapper>
				)}
			</ImageWrapper>
		</FrameWrapper>
	);
};

export default Frame;

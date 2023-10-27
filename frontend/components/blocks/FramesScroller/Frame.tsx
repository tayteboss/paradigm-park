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
`;

const ImageWrapper = styled.button`
	height: ${pxToRem(486)};

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
			<ImageWrapper onClick={() => handleClick()}>
				<Image src={image} />
			</ImageWrapper>
		</FrameWrapper>
	);
};

export default Frame;

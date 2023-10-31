import styled from 'styled-components';
import LayoutGrid from '../../common/LayoutGrid';
import Image from 'next/image';
import pxToRem from '../../../utils/pxToRem';
import { useInView } from 'react-intersection-observer';

type StyledProps = {
	$useTallImageStyle: boolean;
}

type Props = {
	leftColImage: string;
	rightColImage: string;
	leftColImageAltText: string;
	rightColImageAltText: string;
	useTallImageStyle?: boolean;
};

const CaseStudy2ColImageWrapper = styled.section`
	padding: ${pxToRem(30)} 0;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		padding: ${pxToRem(15)} 0;

		.layout-grid {
			row-gap: ${pxToRem(15)};
		}
	}
`;

const ImageWrapper = styled.div<StyledProps>`
	position: relative;
	grid-column: span 6;
	width: 100%;
	overflow: hidden;
	padding-top: ${(props) => props.$useTallImageStyle ? '118.52%' : '88.89%'};

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		grid-column: 1 / -1;
	}
`;

const ImageInner = styled.div`
	position: absolute;
	inset: 0;
`;

const CaseStudy2ColImage = (props: Props) => {
	const {
		leftColImage,
		rightColImage,
		leftColImageAltText,
		rightColImageAltText,
		useTallImageStyle = false
	} = props;

	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
		rootMargin: '-50px'
	});

	return (
		<CaseStudy2ColImageWrapper
			ref={ref}
			className={`view-element-image-scale-up ${
				inView ? 'view-element-image-scale-up--in-view' : ''
			}`}
		>
			<LayoutGrid>
				{leftColImage && (
					<ImageWrapper $useTallImageStyle={useTallImageStyle}>
						<ImageInner>
							<Image
								src={leftColImage}
								layout="fill"
								objectFit="cover"
								alt={leftColImageAltText ? leftColImageAltText : ''}
							/>
						</ImageInner>
					</ImageWrapper>
				)}
				{rightColImage && (
					<ImageWrapper $useTallImageStyle={useTallImageStyle}>
						<Image
							src={rightColImage}
							layout="fill"
							objectFit="cover"
							alt={rightColImageAltText ? rightColImageAltText : ''}
						/>
					</ImageWrapper>
				)}
			</LayoutGrid>
		</CaseStudy2ColImageWrapper>
	);
};

export default CaseStudy2ColImage;

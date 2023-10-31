import Image from 'next/image';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';

type StyledProps = {
	$useTallImageStyle: boolean;
}

type Props = {
	image: string;
	imageAltText: string;
	useTallImageStyle?: boolean;
};

const CaseStudy1ColImageWrapper = styled.section``;

const ImageWrapper = styled.div<StyledProps>`
	position: relative;
	width: 100%;
	overflow: hidden;
	padding-top: ${(props) => props.$useTallImageStyle ? '100vh' : '43.22%'};

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		grid-column: 1 / -1;
	}
`;

const ImageInner = styled.div`
	position: absolute;
	inset: 0;
`;

const CaseStudy1ColImage = (props: Props) => {
	const {
		image,
		imageAltText,
		useTallImageStyle = false
	} = props;

	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
		rootMargin: '-50px'
	});

	return (
		<CaseStudy1ColImageWrapper
			ref={ref}
			className={`view-element-image-scale-up ${
				inView ? 'view-element-image-scale-up--in-view' : ''
			}`}
		>
			{image && (
				<ImageWrapper $useTallImageStyle={useTallImageStyle}>
					<ImageInner>
						<Image
							src={image}
							layout="fill"
							objectFit="cover"
							alt={imageAltText ? imageAltText : ''}
						/>
					</ImageInner>
				</ImageWrapper>
			)}
		</CaseStudy1ColImageWrapper>
	);
};

export default CaseStudy1ColImage;

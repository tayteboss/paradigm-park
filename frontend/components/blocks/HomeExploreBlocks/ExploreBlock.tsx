import styled from 'styled-components';
import { ColorType, ImageType } from '../../../shared/types/types';
import pxToRem from '../../../utils/pxToRem';
import Image from 'next/image';
import PrimaryLink from '../../elements/PrimaryLink';
import { useInView } from 'react-intersection-observer';

type StyledProps = {
	$hex: string;
}

type Props = {
	title: string;
	description: string;
	buttonTitle: string;
	backgroundColor?: ColorType;
	backgroundImage?: string;
	backgroundShape: string;
	buttonLink: string;
}

const ExploreBlockWrapper = styled.div`
	height: calc(100vh - 60px);
	height: calc(100dvh - 60px);
	flex: 1;
	padding: ${pxToRem(60)};
	position: relative;
	border-radius: var(--block-border-radius);
	overflow: hidden;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		flex: unset;
		padding: ${pxToRem(60)} ${pxToRem(30)};
	}
`;

const ImageWrapper = styled.div<StyledProps>`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	height: 100%;
	width: 100%;
	background: ${(props) => props.$hex};
	overflow: hidden;
`;

const ImageInner = styled.div`
	height: 100%;
	width: 100%;
	position: relative;
`;

const BackgroundShape = styled.img`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 2;
	max-height: 50%;
	max-width: 50%;

	&.view-element-fade-in {
		transition-delay: 150ms;
	}
`;

const ContentWrapper = styled.div`
	position: relative;
	z-index: 2;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	height: 100%;
`;

const Title = styled.h5`
	text-align: center;
`;

const Description = styled.p`
	text-align: center;
	max-width: ${pxToRem(430)};
	margin: 0 auto;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		&.type-h4 {
			font-size: ${pxToRem(35)};
		}
	}

	&.view-element-fade-in {
		transition-delay: 150ms;
	}
`;

const PrimaryLinkWrapper = styled.div`
	text-align: center;

	&.view-element-fade-in {
		transition-delay: 300ms;
	}
`;

const ExploreBlock = (props: Props) => {
	const {
		title,
		description,
		buttonTitle,
		backgroundColor,
		backgroundImage,
		backgroundShape,
		buttonLink
	} = props;

	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
		rootMargin: '-50px'
	});

	return (
		<ExploreBlockWrapper
			className={`view-element-bottom-top ${
				inView ? 'view-element-bottom-top--in-view' : ''
			}`}
		>
			<ImageWrapper
				$hex={backgroundColor?.hex ? backgroundColor?.hex : 'var(--colour-white)'}
				ref={ref}
			>
				{backgroundImage && (
					<ImageInner>
						<Image
							src={backgroundImage}
							layout="fill"
							objectFit="cover"
						/>
					</ImageInner>
				)}
				{backgroundShape && (
					<BackgroundShape
						src={backgroundShape}
						className={`view-element-fade-in ${
							inView ? 'view-element-fade-in--in-view' : ''
						}`}
					/>
				)}
			</ImageWrapper>
			<ContentWrapper>
				{title && (
					<Title
						className={`view-element-fade-in ${
							inView ? 'view-element-fade-in--in-view' : ''
						}`}
					>
						{title}
					</Title>
				)}
				{description && (
					<Description
						className={`type-h4 view-element-fade-in ${
							inView ? 'view-element-fade-in--in-view' : ''
						}`}
					>
						{description}
					</Description>
				)}
				{buttonTitle && (
					<PrimaryLinkWrapper
						className={`view-element-fade-in ${
							inView ? 'view-element-fade-in--in-view' : ''
						}`}
					>
						<PrimaryLink title={buttonTitle} url={buttonLink} />
					</PrimaryLinkWrapper>
				)}
			</ContentWrapper>
		</ExploreBlockWrapper>
	);
};

export default ExploreBlock;

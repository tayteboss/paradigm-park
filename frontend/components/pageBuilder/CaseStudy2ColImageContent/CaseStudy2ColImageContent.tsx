import styled from 'styled-components';
import LayoutGrid from '../../common/LayoutGrid';
import Image from 'next/image';
import pxToRem from '../../../utils/pxToRem';
import { PortableText } from '@portabletext/react';
import { useInView } from 'react-intersection-observer';

type Props = {
	centerTitle?: boolean;
	content?: [];
	image?: any;
	topTitle?: string;
}

const CaseStudy2ColImageContentWrapper = styled.section`
	padding: ${pxToRem(30)} 0;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		padding: ${pxToRem(60)} 0;
	}

	.layout-grid {
		row-gap: ${pxToRem(60)};
	}
`;

const ImageWrapper = styled.div`
	position: relative;
	grid-column: span 6;
	min-height: calc(100vh - 60px);
	height: 100%;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		grid-column: 1 / -1;
		min-height: ${pxToRem(600)};
	}
`;

const ContentWrapper = styled.div`
	grid-column: span 6;
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100%;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		grid-column: 1 / -1;
	}
`;

const Title = styled.p`
	text-align: center;
	margin-bottom: ${pxToRem(120)};

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		margin-bottom: ${pxToRem(30)};
	}
`;

const CenterTitle = styled.h2`
	text-align: center;
	padding: 0 ${pxToRem(30)};
	margin-bottom: ${pxToRem(60)};

	@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
		padding: 0;
	}
`;

const PortableTextWrapper = styled.div`
	align-self: flex-end;
	margin-top: auto;
`;

const CaseStudy2ColImageContent = (props: Props) => {
	const {
		centerTitle,
		content,
		image,
		topTitle
	} = props;

	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
		rootMargin: '-50px'
	});

	return (
		<CaseStudy2ColImageContentWrapper ref={ref}>
			<LayoutGrid>
				{image && (
					<ImageWrapper
						className={`view-element-image-scale-up ${
							inView ? 'view-element-image-scale-up--in-view' : ''
						}`}
					>
						<Image
							src={image}
							layout="fill"
							objectFit="cover"
						/>
					</ImageWrapper>
				)}
				<ContentWrapper
					className={`view-element-fade-in ${
						inView ? 'view-element-fade-in--in-view' : ''
					}`}
				>
					{topTitle && (
						<Title>{topTitle}</Title>
					)}
					{centerTitle && (
						<CenterTitle>{centerTitle}</CenterTitle>
					)}
					{content && (
						<PortableTextWrapper className="content">
							<PortableText value={content} />
						</PortableTextWrapper>
					)}
				</ContentWrapper>
			</LayoutGrid>
		</CaseStudy2ColImageContentWrapper>
	);
};

export default CaseStudy2ColImageContent;

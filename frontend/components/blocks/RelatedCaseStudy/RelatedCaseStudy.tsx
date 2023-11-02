import styled from 'styled-components';
import LayoutWrapper from '../../common/LayoutWrapper';
import CaseStudyCard from '../CaseStudies/CaseStudyCard';
import { ColorType } from '../../../shared/types/types';
import pxToRem from '../../../utils/pxToRem';
import { useInView } from 'react-intersection-observer';

type StyledProps = {
	$bg: string;
};

type Props = {
	data: {
		excerpt: string;
		title: string;
		tags: string[];
		thumbnailImage: string;
		slug: {
			current: string;
		};
		projectColor: ColorType;
	};
};

const RelatedCaseStudyWrapper = styled.section`
	position: relative;
	z-index: 2;
	background: var(--colour-white);
	padding: ${pxToRem(30)} 0 ${pxToRem(60)};

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		padding: ${pxToRem(30)} 0;
	}

	.case-study-card {
		position: relative;
		margin-bottom: 0;
		padding: 0;

		&__image-inner {
			transform: scale(1.2) !important;
		}

		* {
			opacity: 1 !important;
		}
	}
`;

const Inner = styled.div<StyledProps>`
	background: ${(props) => props.$bg};
	border-radius: var(--block-border-radius);
	padding: ${pxToRem(20)} ${pxToRem(30)};

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		padding: ${pxToRem(20)} ${pxToRem(15)};
	}
`;

const RelatedCaseStudy = (props: Props) => {
	const {
		data
	} = props;

	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
		rootMargin: '-50px'
	});

	return (
		<RelatedCaseStudyWrapper
			ref={ref}
		>
			<LayoutWrapper>
				<Inner
					$bg={data?.projectColor ? data.projectColor?.hex : 'var(--colour-white)'}
					className={`view-element-fade-in ${
						inView ? 'view-element-fade-in--in-view' : ''
					}`}
				>
					<CaseStudyCard
						excerpt={data?.excerpt}
						title={data?.title}
						tags={data?.tags}
						thumbnailImageUrl={data?.thumbnailImage}
						slug={data?.slug}
						isLastBlock
						isFirstBlock
					/>
				</Inner>
			</LayoutWrapper>
		</RelatedCaseStudyWrapper>
	);
};

export default RelatedCaseStudy;

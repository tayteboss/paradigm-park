import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';
import { ColorType } from '../../../shared/types/types';
import { PortableText } from '@portabletext/react';
import { useInView } from 'react-intersection-observer';

type StyledProps = {
	$bg: string;
};

type Props = {
	backgroundColor: ColorType;
	mainContent: [];
	topContent: [];
	bottomContent: [];
};

const CaseStudyTitleBlockWrapper = styled.section`
	padding: ${pxToRem(30)} 0;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		padding: ${pxToRem(15)} 0;
	}

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		padding: 0;
	}
`;

const Inner = styled.div<StyledProps>`
	background: ${(props) => props.$bg};
	min-height: ${pxToRem(500)};
	padding: ${pxToRem(90)} ${pxToRem(60)};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	border-radius: var(--block-border-radius);
	row-gap: ${pxToRem(90)};
	column-gap: ${pxToRem(90)};

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		padding: ${pxToRem(60)} ${pxToRem(30)};
		row-gap: ${pxToRem(30)};
		column-gap: ${pxToRem(30)};
		min-height: ${pxToRem(600)};
	}

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		padding: ${pxToRem(60)} ${pxToRem(15)};
		min-height: unset;
	}
`;

const ContentWrapper = styled.div`
	max-width: ${pxToRem(950)};
	margin: auto;

	* {
		text-align: center;
	}
`;

const CaseStudyTitleBlock = (props: Props) => {
	const {
		backgroundColor,
		mainContent,
		topContent,
		bottomContent
	} = props;

	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
		rootMargin: '-50px'
	});

	return (
		<CaseStudyTitleBlockWrapper>
			<Inner
				$bg={backgroundColor ? backgroundColor?.hex : 'var(--colour-white)'}
				ref={ref}
			>
				{topContent && (
					<ContentWrapper
						className={`content view-element-fade-in ${
							inView ? 'view-element-fade-in--in-view' : ''
						}`}
					>
						<PortableText value={topContent} />
					</ContentWrapper>
				)}
				{mainContent && (
					<ContentWrapper
						className={`content view-element-fade-in ${
							inView ? 'view-element-fade-in--in-view' : ''
						}`}
					>
						<PortableText value={mainContent} />
					</ContentWrapper>
				)}
				{bottomContent && (
					<ContentWrapper
						className={`content view-element-fade-in ${
							inView ? 'view-element-fade-in--in-view' : ''
						}`}
					>
						<PortableText value={bottomContent} />
					</ContentWrapper>
				)}
			</Inner>
		</CaseStudyTitleBlockWrapper>
	);
};

export default CaseStudyTitleBlock;

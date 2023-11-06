import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';
import { useInView } from 'react-intersection-observer';
import { ColorType } from '../../../shared/types/types';
import { PortableText } from '@portabletext/react';
import PrimaryLink from '../../elements/PrimaryLink';
import LayoutWrapper from '../../common/LayoutWrapper';

type StyledProps = {
	$bg: string;
};

type Props = {
	bgColour: ColorType;
	heading: string;
	content: [];
	ctaLinkTitle: string;
	externalLink: string;
};

const InsideTheIssueWrapper = styled.section`
	margin-bottom: ${pxToRem(30)};
`;

const Inner = styled.div<StyledProps>`
	background: ${(props) => props.$bg};
	min-height: calc(100vh - 60px);
	padding: ${pxToRem(90)} 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	border-radius: var(--block-border-radius);
	row-gap: ${pxToRem(90)};
	column-gap: ${pxToRem(90)};

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		padding: ${pxToRem(60)} 0;
		row-gap: ${pxToRem(30)};
		column-gap: ${pxToRem(30)};
		min-height: ${pxToRem(600)};
	}

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		padding: ${pxToRem(30)} 0;
	}
`;

const Heading = styled.p``;

const ContentWrapper = styled.div`
	max-width: ${pxToRem(1360)};
	padding: 0 ${pxToRem(30)};
	margin: auto;

	* {
		text-align: center;
	}
`;

const PrimaryLinkWrapper = styled.div``;

const InsideTheIssue = (props: Props) => {
	const {
		bgColour,
		heading,
		content,
		ctaLinkTitle,
		externalLink
	} = props;

	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
		rootMargin: '-50px'
	});

	return (
		<InsideTheIssueWrapper>
			<LayoutWrapper>
				<Inner
					$bg={bgColour ? bgColour?.hex : 'var(--colour-white)'}
					ref={ref}
					className={`view-element-fade-in ${
						inView ? 'view-element-fade-in--in-view' : ''
					}`}
				>
					{heading && (
						<Heading>
							{heading}</Heading>
					)}
					{content && (
						<ContentWrapper>
							<PortableText value={content} />
						</ContentWrapper>
					)}
					{(ctaLinkTitle && externalLink) && (
						<PrimaryLinkWrapper>
							<PrimaryLink title={ctaLinkTitle} url={externalLink} target="_blank" />
						</PrimaryLinkWrapper>
					)}
				</Inner>
			
			</LayoutWrapper>
		</InsideTheIssueWrapper>
	);
};

export default InsideTheIssue;

import styled from 'styled-components';
import LayoutGrid from '../../common/LayoutGrid';
import pxToRem from '../../../utils/pxToRem';
import { PortableText } from '@portabletext/react';
import PrimaryLink from '../../elements/PrimaryLink';
import LayoutWrapper from '../../common/LayoutWrapper';
import { useInView } from 'react-intersection-observer';

type Props = {
	introductionHeading?: any;
	introductionSubHeading?: any;
	introductionContent?: any;
	ctaLinkTitle?: string;
	externalLink?: string;
}

const IssueIntroductionWrapper = styled.section`
	padding: ${pxToRem(30)} 0;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		padding: ${pxToRem(60)} 0;

		.layout-grid {
			row-gap: ${pxToRem(60)};
		}
	}

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		.layout-grid {
			row-gap: ${pxToRem(50)};
		}
	}
`;

const ContentWrapper = styled.div`
	grid-column: span 6;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
	min-height: ${pxToRem(240)};
	row-gap: ${pxToRem(90)};
	height: 100%;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		grid-column: 1 / -1;
		min-height: unset;
		row-gap: ${pxToRem(60)};
	}

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		row-gap: ${pxToRem(15)};
	}
`;

const Heading = styled.h3`
	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		text-align: center;
	}
`;

const SubHeading = styled.p``;

const TopWrapper = styled.div``;

const DesktopPrimaryLinkWrapper = styled.div`
	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		display: none;
	}
`;

const MobilePrimaryLinkWrapper = styled.div`
	display: none;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		display: block;
		text-align: center;
		width: 100%;
	}
`;

const BottomContent = styled.div`
	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		margin-bottom: ${pxToRem(45)};
	}
`;

const IssueIntroduction = (props: Props) => {
	const {
		introductionHeading: heading,
		introductionSubHeading: subHeading,
		introductionContent: content,
		ctaLinkTitle: ctaTitle,
		externalLink
	} = props;

	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
		rootMargin: '-50px'
	});

	return (
		<IssueIntroductionWrapper
			ref={ref}
			className={`view-element-fade-in ${
				inView ? 'view-element-fade-in--in-view' : ''
			}`}
		>
			<LayoutWrapper>
				<LayoutGrid>
					<ContentWrapper>
						{heading && (
							<TopWrapper>
								<Heading>{heading}</Heading>
							</TopWrapper>
						)}
						{(ctaTitle && externalLink) &&  (
							<DesktopPrimaryLinkWrapper>
								<PrimaryLink
									title={ctaTitle}
									url={externalLink}
									target="_blank"
								/>
							</DesktopPrimaryLinkWrapper>
						)}
					</ContentWrapper>
					<ContentWrapper>
						{subHeading && (
							<SubHeading>{subHeading}</SubHeading>
						)}
						{content && (
							<BottomContent className="content">
								<PortableText value={content} />
							</BottomContent>
						)}
						{(ctaTitle && externalLink) &&  (
							<MobilePrimaryLinkWrapper>
								<PrimaryLink
									title={ctaTitle}
									url={externalLink}
								/>
							</MobilePrimaryLinkWrapper>
						)}
					</ContentWrapper>
				</LayoutGrid>
			</LayoutWrapper>
		</IssueIntroductionWrapper>
	);
};

export default IssueIntroduction;

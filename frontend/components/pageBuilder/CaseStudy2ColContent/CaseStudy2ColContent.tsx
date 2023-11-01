import styled from 'styled-components';
import LayoutGrid from '../../common/LayoutGrid';
import pxToRem from '../../../utils/pxToRem';
import { PortableText } from '@portabletext/react';

type StyledProps = {
	$hasSup?: boolean;
}

type Props = {
	leftColTopContent?: [];
	leftColBottomContent?: [];
	modal?: any;
	rightColBottomContent?: [];
	rightColTopContent?: [];
	setWorkModalContent: any;
}

const CaseStudy2ColContentWrapper = styled.section`
	padding: ${pxToRem(30)} 0;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		padding: ${pxToRem(60)} 0;
	}
`;

const ContentWrapper = styled.div`
	grid-column: span 6;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
	min-height: ${pxToRem(240)};

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		grid-column: 1 / -1;
		margin-bottom: ${pxToRem(60)};
	}

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		margin-bottom: ${pxToRem(50)};
	}
`;

const TopWrapper = styled.div`
	margin-bottom: ${pxToRem(90)};

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		margin-bottom: ${pxToRem(30)};
	}
`;

const BottomContent = styled.div``;

const ModalTrigger = styled.button`
	margin-top: ${pxToRem(60)};
`;

const TriggerInner = styled.div<StyledProps>`
	position: relative;
	padding-left: ${(props) => props.$hasSup ? pxToRem(3) : 0};
`;

const Sup = styled.div`
	position: absolute;
	top: -2px;
	right: 100%;
	font-size: ${pxToRem(10)};
	text-align: right;
`;

const CaseStudy2ColContent = (props: Props) => {
	const {
		leftColTopContent = false,
		leftColBottomContent = false,
		modal,
		rightColBottomContent = false,
		rightColTopContent = false,
		setWorkModalContent
	} = props;

	return (
		<CaseStudy2ColContentWrapper>
			<LayoutGrid>
				<ContentWrapper className="content">
					{leftColTopContent && (
						<TopWrapper>
							<PortableText value={leftColTopContent} />
						</TopWrapper>
					)}
					{leftColBottomContent && (
						<BottomContent>
							<PortableText value={leftColBottomContent} />
						</BottomContent>
					)}
				</ContentWrapper>
				<ContentWrapper className="content">
					{rightColTopContent && (
						<TopWrapper>
							<PortableText value={rightColTopContent} />
						</TopWrapper>
					)}
					{rightColBottomContent && (
						<BottomContent>
							<PortableText value={rightColBottomContent} />
						</BottomContent>
					)}
					{modal && (
						<ModalTrigger
							className="primary-link"
							onClick={() => setWorkModalContent(modal)}
						>
							<TriggerInner $hasSup={modal?.buttonSuperscriptNumber}>
								{modal?.buttonSuperscriptNumber && (
									<Sup>
										{modal?.buttonSuperscriptNumber}
									</Sup>
								)}
								{modal?.buttonTitle}
							</TriggerInner>
						</ModalTrigger>
					)}
				</ContentWrapper>
			</LayoutGrid>
		</CaseStudy2ColContentWrapper>
	);
};

export default CaseStudy2ColContent;

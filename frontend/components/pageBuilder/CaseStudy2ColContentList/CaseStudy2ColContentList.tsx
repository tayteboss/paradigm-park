import styled from 'styled-components';
import LayoutGrid from '../../common/LayoutGrid';
import { PortableText } from '@portabletext/react';
import KeyValueCard from './KeyValueCard';
import pxToRem from '../../../utils/pxToRem';
import { useInView } from 'react-intersection-observer';

interface Props {
	leftColBottomContent: [];
	leftColTopContent: [];
	rightColumnList: [];
};

const CaseStudy2ColContentListWrapper = styled.section`
	min-height: ${pxToRem(300)};
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

const ListWrapper = styled.div`
	grid-column: span 6;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		grid-column: 1 / -1;
	}
`;

const CaseStudy2ColContentList = (props: Props) => {
	const {
		leftColBottomContent,
		leftColTopContent,
		rightColumnList
	} = props;

	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
		rootMargin: '-50px'
	});

	return (
		<CaseStudy2ColContentListWrapper
			ref={ref}
			className={`view-element-fade-in ${
				inView ? 'view-element-fade-in--in-view' : ''
			}`}
		>
			<LayoutGrid>
				<ContentWrapper className="content content--mobile-centered">
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
				<ListWrapper>
					{rightColumnList && rightColumnList.map((item: any, i: number) => (
						<KeyValueCard
							title={item?.key}
							value={item?.value}
							key={i}
						/>
					))}
				</ListWrapper>
			</LayoutGrid>
		</CaseStudy2ColContentListWrapper>
	);
};

export default CaseStudy2ColContentList;

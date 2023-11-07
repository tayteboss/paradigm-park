import styled from 'styled-components';
import LayoutGrid from '../../common/LayoutGrid';
import { PortableText } from '@portabletext/react';
import KeyValueCard from './KeyValueCard';
import pxToRem from '../../../utils/pxToRem';
import { useInView } from 'react-intersection-observer';

type Props = {
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

	.layout-grid {
		row-gap: ${pxToRem(60)};
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

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		grid-column: 1 / -1;
		min-height: unset;
		row-gap: ${pxToRem(60)};
	}

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		row-gap: ${pxToRem(30)};
	}
`;

const TopWrapper = styled.div``;

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
				<ContentWrapper>
					{leftColTopContent && (
						<TopWrapper className="content content--mobile-centered">
							<PortableText value={leftColTopContent} />
						</TopWrapper>
					)}
					{leftColBottomContent && (
						<BottomContent className="content">
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

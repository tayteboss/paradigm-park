import styled from 'styled-components';
import LayoutWrapper from '../../common/LayoutWrapper';
import { IssueType } from '../../../shared/types/types';
import RelatedIssueCard from '../../elements/RelatedIssueCard';
import pxToRem from '../../../utils/pxToRem';
import LayoutGrid from '../../common/LayoutGrid';
import { useInView } from 'react-intersection-observer';

type Props = {
	title: string;
	data: any;
};

const RelatedIssuesWrapper = styled.section`
	padding-bottom: ${pxToRem(60)};
	background: var(--colour-white);

	.layout-grid {
		row-gap: ${pxToRem(30)};
	}
`;

const Title = styled.h4`
	padding: ${pxToRem(80)} 0;
	text-align: center;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		padding: ${pxToRem(60)} 0;
	}
`;

const RelatedIssues = (props: Props) => {
	const {
		title,
		data
	} = props;

	const hasData = data?.length > 0;

	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
		rootMargin: '-50px'
	});

	return (
		<RelatedIssuesWrapper
			className={`view-element-fade-in ${
				inView ? 'view-element-fade-in--in-view' : ''
			}`}
		>
			<LayoutWrapper>
				{title && (
					<Title ref={ref}>{title}</Title>
				)}
				<LayoutGrid>
					{hasData && data.map((item: IssueType, i: number) => {
						return (
							<RelatedIssueCard
								key={i}
								title={item?.title}
								issueNumber={item?.issueNumber}
								excerpt={item?.excerpt}
								heroImage={item?.heroImage}
								slug={item?.slug}
							/>
						);
					})}
				</LayoutGrid>
			</LayoutWrapper>
		</RelatedIssuesWrapper>
	);
};

export default RelatedIssues;

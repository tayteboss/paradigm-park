import styled from 'styled-components';
import { CaseStudyType } from '../../../shared/types/types';
import LayoutWrapper from '../../common/LayoutWrapper';
import { PortableText } from '@portabletext/react';
import pxToRem from '../../../utils/pxToRem';
import InProgressWorkCard from '../InProgressWorkCard';
import LayoutGrid from '../../common/LayoutGrid';
import { useInView } from 'react-intersection-observer';

type Props = {
	title: [];
	data: CaseStudyType[];
};

const WorkInProgressWrapper = styled.section`
	padding-bottom: ${pxToRem(60)};
	background: var(--colour-white);
`;

const Inner = styled.div`
	.layout-grid {
		row-gap: ${pxToRem(30)};
	}
`;

const TitleWrapper = styled.div`
	padding: ${pxToRem(90)} 0;

	* {
		margin-bottom: 0 !important;
		text-align: center;
	}
`;

const WorkInProgress = (props: Props) => {
	const {
		title,
		data
	} = props;

	const hasData = data && data.length > 0;

	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
		rootMargin: '-50px'
	});

	return (
		<WorkInProgressWrapper ref={ref}>
			<LayoutWrapper>
				<Inner
					className={`view-element-fade-in ${
						inView ? 'view-element-fade-in--in-view' : ''
					}`}
				>
					{title && (
						<TitleWrapper className="content">
							<PortableText value={title} />
						</TitleWrapper>
					)}
					{hasData && (
						<LayoutGrid>
							{data.map((item, i) => (
								<InProgressWorkCard
									key={i}
									title={item?.title}
									excerpt={item?.excerpt}
									tags={item?.tags}
									thumbnailImageUrl={item?.thumbnailImageUrl}
									slug={item?.slug}
									projectColor={item?.projectColor}
								/>
							))}
						</LayoutGrid>
					)}
				</Inner>
			</LayoutWrapper>
		</WorkInProgressWrapper>
	);
};

export default WorkInProgress;

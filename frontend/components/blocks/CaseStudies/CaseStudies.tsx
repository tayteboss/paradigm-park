import styled from 'styled-components';
import { CaseStudyType } from '../../../shared/types/types';
import LayoutWrapper from '../../common/LayoutWrapper';
import CaseStudyCard from './CaseStudyCard';

type Props = {
	data: CaseStudyType[];
};

const CaseStudiesWrapper = styled.section`
	margin-bottom: calc(-100vh);
	margin-bottom: calc(-100dvh);
`;

const Inner = styled.div``;

const BlankBlock = styled.div`
	position: sticky;
	top: 30px;
	height: calc(200vh);
	height: calc(200dvh);
`;

const CaseStudies = (props: Props) => {
	const {
		data
	} = props;

	const hasData = data && data.length > 0;

	return (
		<CaseStudiesWrapper>
			<LayoutWrapper>
				<Inner>
					{hasData && data.map((item, i) => (
						<CaseStudyCard
							excerpt={item?.excerpt}
							title={item?.title}
							tags={item?.tags}
							thumbnailImageUrl={item?.thumbnailImageUrl}
							slug={item?.slug}
							key={i}
							index={i}
							isLastBlock={i === data.length - 1}
							isFirstBlock={i === 0}
						/>
					))}
					<BlankBlock />
				</Inner>
			</LayoutWrapper>
		</CaseStudiesWrapper>
	);
};

export default CaseStudies;

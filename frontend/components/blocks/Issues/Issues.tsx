import styled from 'styled-components';
import { IssueType } from '../../../shared/types/types';
import LayoutWrapper from '../../common/LayoutWrapper';
import IssueCard from '../../elements/IssueCard';

type Props = {
	data: IssueType[];
}

const IssuesWrapper = styled.section`
	margin-bottom: calc(-100vh + 60px);
`;

const Inner = styled.div``;

const BlankBlock = styled.div`
	position: sticky;
	top: 30px;
	height: calc(100vh);
	pointer-events: none;
`;

const Issues = (props: Props) => {
	const {
		data
	} = props;

	const hasData = data && data.length > 0;

	return (
		<IssuesWrapper>
			<LayoutWrapper>
				<Inner>
					{hasData && data.map((item, i) => (
						<IssueCard
							key={i}
							title={item.title}
							excerpt={item.excerpt}
							heroImage={item.heroImage}
							inProgress={item.inProgress}
							projectColor={item.projectColor}
							slug={item.slug}
							isFirstBlock={i === 0}
							isLastBlock={i === data.length - 1}
							issueNumber={item.issueNumber}
							index={i}
						/>
					))}
					<BlankBlock />
				</Inner>
			</LayoutWrapper>
		</IssuesWrapper>
	);
};

export default Issues;

import styled from 'styled-components';
import { IssueType } from '../../../shared/types/types';
import LayoutWrapper from '../../common/LayoutWrapper';
import IssueCard from '../../elements/IssueCard';

type Props = {
	data: IssueType[];
}

const IssuesWrapper = styled.section`
	margin-bottom: calc(-100vh + 60px);
	margin-bottom: calc(-100dvh + 60px);
`;

const Inner = styled.div``;

const BlankBlock = styled.div`
	position: sticky;
	top: 30px;
	height: calc(200vh - 60px);
	height: calc(200dvh - 60px);
	pointer-events: none;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		height: calc(200vh - 30px);
		height: calc(200dvh - 30px);
	}
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
							ctaLinkTitle={item.ctaLinkTitle}
							excerpt={item.excerpt}
							external={item.external}
							heroImage={item.heroImage}
							inProgress={item.inProgress}
							insideTheIssueBlockColour={item.insideTheIssueBlockColour}
							insideTheIssueContent={item.insideTheIssueContent}
							insideTheIssueHeading={item.insideTheIssueHeading}
							introductionContent={item.introductionContent}
							introductionHeading={item.introductionHeading}
							introductionSubHeading={item.introductionSubHeading}
							projectColor={item.projectColor}
							slug={item.slug}
							isFirstBlock={i === 0}
							isLastBlock={i === data.length - 1}
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

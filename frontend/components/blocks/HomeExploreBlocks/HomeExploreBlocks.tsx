import styled from 'styled-components';
import { ColorType } from '../../../shared/types/types';
import LayoutWrapper from '../../common/LayoutWrapper';
import ExploreBlock from './ExploreBlock';
import pxToRem from '../../../utils/pxToRem';

type Props = {
	learnBackgroundColor: ColorType;
	learnBackgroundShape: string;
	learnTitle: string;
	learnDescription: string;
	learnButtonTitle: string;
	projectsTitle: string;
	projectsDescription: string;
	projectsButtonTitle: string;
	projectsBackgroundImage: string;
	projectsBackgroundShape: string;
}

const HomeExploreBlocksWrapper = styled.section`
	padding: ${pxToRem(30)} 0;
`;

const Inner = styled.div`
	display: flex;
	column-gap: ${pxToRem(30)};

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		flex-direction: column;
		column-gap: 0;
		row-gap: ${pxToRem(30)};
	}
`;

const HomeExploreBlocks = (props: Props) => {
	const {
		learnBackgroundColor,
		learnBackgroundShape,
		learnTitle,
		learnDescription,
		learnButtonTitle,
		projectsTitle,
		projectsDescription,
		projectsButtonTitle,
		projectsBackgroundImage,
		projectsBackgroundShape
	} = props;

	return (
		<HomeExploreBlocksWrapper>
			<LayoutWrapper>
				<Inner>
					<ExploreBlock
						title={projectsTitle}
						description={projectsDescription}
						buttonTitle={projectsButtonTitle}
						backgroundImage={projectsBackgroundImage}
						backgroundShape={projectsBackgroundShape}
						buttonLink="/work"
					/>
					<ExploreBlock
						title={learnTitle}
						description={learnDescription}
						buttonTitle={learnButtonTitle}
						backgroundColor={learnBackgroundColor}
						backgroundShape={learnBackgroundShape}
						buttonLink="/learn"
					/>
				</Inner>
			</LayoutWrapper>
		</HomeExploreBlocksWrapper>
	);
};

export default HomeExploreBlocks;

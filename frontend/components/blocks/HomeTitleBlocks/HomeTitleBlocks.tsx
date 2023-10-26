import styled from 'styled-components';
import { TitleBlockType } from '../../../shared/types/types';
import LayoutWrapper from '../../common/LayoutWrapper';
import TitleBlock from './TitleBlock';

type Props = {
	data: {
		title: string;
		titleBlock: TitleBlockType[];
	}
};

const HomeTitleBlocksWrapper = styled.section`
	margin-bottom: calc(-100vh);
	margin-bottom: calc(-100dvh);
`;

const Inner = styled.div``;

const BlankBlock = styled.div`
	position: sticky;
	top: 30px;
	height: calc(100vh - 30px);
	height: calc(100dvh - 30px);
`;

const HomeTitleBlocks = (props: Props) => {
	const {
		data
	} = props;

	return (
		<HomeTitleBlocksWrapper>
			<LayoutWrapper>
				<Inner>
					{data.titleBlock.map((item, i) => (
						<TitleBlock
							internal={item?.internal}
							linkTitle={item?.linkTitle}
							title={item?.title}
							key={i}
						/>
					))}
					<BlankBlock />
				</Inner>
			</LayoutWrapper>
		</HomeTitleBlocksWrapper>
	);
};

export default HomeTitleBlocks;

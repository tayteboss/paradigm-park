import styled from 'styled-components';
import Sections from './Sections';
import LayoutWrapper from '../LayoutWrapper';

const PageBuilderWrapper = styled.div`
	position: relative;
	z-index: 2;
	background: var(--colour-white);
	border-radius: var(--block-border-radius);
`;

const PageBuilder = ({ sections = [], setWorkModalContent }) => {
	return (
		<LayoutWrapper>
			<PageBuilderWrapper>
				{sections && (
					<Sections
						sections={sections}
						setWorkModalContent={setWorkModalContent}
					/>
				)}
			</PageBuilderWrapper>
		</LayoutWrapper>
	)
}

export default PageBuilder;
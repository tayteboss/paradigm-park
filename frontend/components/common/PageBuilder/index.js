import styled from 'styled-components';
import Sections from './Sections';
import LayoutWrapper from '../LayoutWrapper';

const PageBuilderWrapper = styled.div`
	position: relative;
	z-index: 2;
	background: var(--colour-white);
	border-top-right-radius: var(--block-border-radius);
	border-top-left-radius: var(--block-border-radius);
`;

const PageBuilder = ({ sections = [], setWorkModalContent }) => {
	return (
		<PageBuilderWrapper>
			<LayoutWrapper>
				{sections && (
					<Sections
						sections={sections}
						setWorkModalContent={setWorkModalContent}
					/>
				)}
			</LayoutWrapper>
		</PageBuilderWrapper>
	)
}

export default PageBuilder;
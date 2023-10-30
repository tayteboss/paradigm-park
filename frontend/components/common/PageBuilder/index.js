import styled from 'styled-components';
import Sections from './Sections';

const PageBuilderWrapper = styled.div`
	position: relative;
	z-index: 2;
	background: var(--colour-white);
`;

const PageBuilder = ({ sections = [] }) => {
	return (
		<PageBuilderWrapper>
			{sections && <Sections sections={sections} /> }
		</PageBuilderWrapper>
	)
}

export default PageBuilder;
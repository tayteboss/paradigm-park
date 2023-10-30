import styled from 'styled-components';
import Sections from './Sections';

const PageBuilderWrapper = styled.div``;

const PageBuilder = ({ sections = [] }) => {

	console.log('sections', sections);

	return (
		<PageBuilderWrapper>
			{sections && <Sections sections={sections} /> }
		</PageBuilderWrapper>
	)
}

export default PageBuilder;
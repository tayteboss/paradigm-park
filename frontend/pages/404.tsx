import { NextSeo } from 'next-seo';
import styled from 'styled-components';
import LayoutWrapper from '../components/common/LayoutWrapper';
import PrimaryLink from '../components/elements/PrimaryLink';
import pxToRem from '../utils/pxToRem';

const PageWrapper = styled.div``;

const Inner = styled.div`
	padding: ${pxToRem(100)} 0;
`;

const Title = styled.h3`
	margin-bottom: ${pxToRem(60)};
`;

const Page = () => {
	return (
		<PageWrapper>
			<NextSeo
				title="Paradigm Park | 404"
			/>
			<LayoutWrapper>
				<Inner>
					<Title>Sorry, we coudn't find that page</Title>
					<PrimaryLink title="Go Home" url="/" />
				</Inner>
			</LayoutWrapper>
		</PageWrapper>
	)
}

export default Page;

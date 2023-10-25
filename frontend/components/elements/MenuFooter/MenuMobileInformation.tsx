import Link from 'next/link';
import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';

const siteOptions = require('../../../json/siteSettings.json');

const MenuMobileInformationWrapper = styled.div`
	display: none;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: ${pxToRem(40)};
	}
`;

const LinkTag = styled.a`
	font-size: ${pxToRem(25)};
	line-height: normal;
	text-align: center;
	font-family: var(--font-reslindale);
`;

const MenuMobileInformation = () => {
	const {
		address,
		addressUrl,
		generalEmail
	} = siteOptions;

	return (
		<MenuMobileInformationWrapper>
			{(address && addressUrl) && (
				<Link href={addressUrl} passHref>
					<LinkTag>
						{address}
					</LinkTag>
				</Link>
			)}
			{generalEmail && (
				<LinkTag href={`mailto: ${generalEmail}`}>
					{generalEmail}
				</LinkTag>
			)}
		</MenuMobileInformationWrapper>
	);
};

export default MenuMobileInformation;

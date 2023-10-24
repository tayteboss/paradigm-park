import styled from 'styled-components';

const MenuFooterCopyrightWrapper = styled.p`
	color: var(--colour-grey);

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		display: none;
	}
`;

const MenuFooterCopyright = () => {
	return (
		<MenuFooterCopyrightWrapper>
			© Paradigm Park {new Date().getFullYear()}
		</MenuFooterCopyrightWrapper>
	);
};

export default MenuFooterCopyright;

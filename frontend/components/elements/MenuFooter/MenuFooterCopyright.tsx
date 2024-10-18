import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';

const MenuFooterCopyrightWrapper = styled.div`
	display: flex;
	gap: ${pxToRem(20)};

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		gap: ${pxToRem(12)};
		flex-direction: column;
	}
`;

const Copy = styled.p`
	color: var(--colour-grey);

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		display: none;
	}
`;

const MobileText = styled.p`
	color: var(--colour-grey);

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		display: none;
	}
`;

const DesktopText = styled.p`
	color: var(--colour-grey);
	display: none;
	margin-bottom: 0;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		display: block;
	}
`;

const Span = styled.span`
	color: var(--colour-grey);
	margin-bottom: 0;
`;

const Link = styled.a`
	color: var(--colour-grey);
	text-decoration: underline;
	margin-bottom: 0;

	transition: all ${(props) => props.theme.transitionSpeed.default} ease;

	&:hover {
		color: var(--colour-black);
	}
`;

const MenuFooterCopyright = () => {
	return (
		<MenuFooterCopyrightWrapper className="mobile-footer-copyright">
			<MobileText>© Paradigm Park {new Date().getFullYear()}</MobileText>
			<DesktopText>
				© Paradigm Park {new Date().getFullYear()}
			</DesktopText>
			<Span>
				Website created in partnership with{' '}
				<Link href="https://blurrbureau.com/" target="_blank">
					Blurr
				</Link>
			</Span>
		</MenuFooterCopyrightWrapper>
	);
};

export default MenuFooterCopyright;

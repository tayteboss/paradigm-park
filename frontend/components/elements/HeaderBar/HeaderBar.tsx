import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';
import Link from 'next/link';
import MenuTrigger from '../MenuTrigger';
import LogoIconSvg from '../../svgs/LogoIconSvg';

type StyledProps = {
	$menuIsActive: boolean;
};

type Props = {
	menuIsActive: boolean;
	setMenuIsActive: (menuIsActive: boolean) => void;
};

const HeaderBarWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	padding: ${pxToRem(12)} 0;

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		padding: ${pxToRem(15)} 0;
	}
`;

const LinkTag = styled.a`
	position: relative;
	z-index: 2;

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		flex: 1;
		text-align: center;
	}
`;

const LHSRoundingElement = styled.div<StyledProps>`
	position: absolute;
	bottom: 0;
	left: 0;
	z-index: 1;

	&::before {
		content: "";
		position: absolute;
		
		background-color: transparent;
		bottom: -50px;
		left: 0;
		height: 50px;
		width: 25px;
		border-top-left-radius: 25px;
		box-shadow: 0 -25px 0 0 ${(props) => props.$menuIsActive ? 'var(--colour-cream)' : 'var(--colour-white)'};

		transition: all var(--transition-speed-default) var(--transition-ease);
	}
`;

const RHSRoundingElement = styled.div<StyledProps>`
	position: absolute;
	bottom: 0;
	right: 0;
	z-index: 1;

	&::before {
		content: "";
		position: absolute;
		
		background-color: transparent;
		bottom: -50px;
		right: 0;
		height: 50px;
		width: 25px;
		border-top-right-radius: 25px;
		box-shadow: 0 -25px 0 0 ${(props) => props.$menuIsActive ? 'var(--colour-cream)' : 'var(--colour-white)'};

		transition: all var(--transition-speed-default) var(--transition-ease);
	}
`;

const HiddenElement = styled.div`
	display: none;

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		display: block;
		flex: 1;
	}
`;

const HeaderBar = (props: Props) => {
	const {
		menuIsActive,
		setMenuIsActive
	} = props;

	return (
		<HeaderBarWrapper>
			<HiddenElement />
			<Link href="/" passHref scroll={false}>
				<LinkTag>
					<LogoIconSvg />
				</LinkTag>
			</Link>
			<MenuTrigger
				menuIsActive={menuIsActive}
				setMenuIsActive={setMenuIsActive}
			/>
			<LHSRoundingElement $menuIsActive={menuIsActive} />
			<RHSRoundingElement $menuIsActive={menuIsActive} />
		</HeaderBarWrapper>
	);
};

export default HeaderBar;

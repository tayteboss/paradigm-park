import styled from 'styled-components';

type Props = {
	menuIsActive: boolean;
	setMenuIsActive: (menuIsActive: boolean) => void;
};

const MenuTriggerWrapper = styled.button`
	position: relative;
	z-index: 2;

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		flex: 1;
		text-align: right;
	}
`;

const MenuTrigger = (props: Props) => {
	const {
		menuIsActive,
		setMenuIsActive
	} = props;

	return (
		<MenuTriggerWrapper
			onClick={() => setMenuIsActive(!menuIsActive)}
		>
			{menuIsActive ? 'Close' : 'Menu'}
		</MenuTriggerWrapper>
	);
};

export default MenuTrigger;

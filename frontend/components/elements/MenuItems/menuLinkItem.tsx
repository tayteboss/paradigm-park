import { motion } from 'framer-motion';
import Link from 'next/link';
import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';
import useActiveLink from '../../../hooks/useActiveLink';

type StyledProps = {
	$itemIsHovered: boolean;
	$isActive: boolean;
};

type Props = {
	link: string;
	title: string;
	itemIsHovered: boolean;
	setItemIsHovered: (itemIsHovered: boolean) => void;
};

const LinkTag = styled(motion.a)``;

const LinkInner = styled.div<StyledProps>`
	font-size: ${pxToRem(90)};
	line-height: 1;
	text-align: center;
	opacity: ${(props) => props.$itemIsHovered ? '0.1' : '1'};
	position: relative;

	transition: all var(--transition-speed-default) var(--transition-ease);

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		font-size: ${pxToRem(65)};
		opacity: 1 !important;
	}

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		font-size: ${pxToRem(45)};
	}

	&:hover {
		opacity: 1 !important;
	}

	&::after {
		content: '';
		position: absolute;
		top: 100%;
		left: 0;
		width: 100%;
		height: ${pxToRem(1)};
		background: var(--colour-black);
		opacity: ${(props) => props.$isActive ? '1' : '0'};
	}
`;

const childVariants = {
	hidden: {
		opacity: 0,
		transition: {
			duration: 0.3,
			ease: 'easeInOut'
		}
	},
	visible: {
		opacity: 1,
		transition: {
			duration: 0.3,
			ease: 'easeInOut',
		}
	}
};

const MenuLinkItem = (props: Props) => {
	const {
		link,
		title,
		itemIsHovered,
		setItemIsHovered,
	} = props;

	const activeLink = useActiveLink();

	return (
		<Link href={link} passHref scroll={false}>
			<LinkTag
				variants={childVariants}
				onMouseOver={() => setItemIsHovered(true)}
				onMouseOut={() => setItemIsHovered(false)}
			>
				<LinkInner
					$itemIsHovered={itemIsHovered}
					$isActive={activeLink === title}
				>
					{title}
				</LinkInner>
			</LinkTag>
		</Link>
	);
};

export default MenuLinkItem;

import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';
import { AnimatePresence, motion } from 'framer-motion';
import MenuLinkItem from './menuLinkItem';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

type Props = {
	menuIsActive: boolean;
};

const MenuItemsWrapper = styled(motion.div)`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 2;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	row-gap: ${pxToRem(8)};

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		transform: translate(-50%, -70%);
	}
`;

const wrapperVariants = {
	hidden: {
		opacity: 0,
		transition: {
			duration: 0.05,
			ease: 'easeInOut',
			when: 'afterChildren',
			staggerChildren: 0.1,
			staggerDirection: -1
		}
	},
	visible: {
		opacity: 1,
		transition: {
			duration: 0.05,
			ease: 'easeInOut',
			when: 'beforeChildren',
			staggerChildren: 0.1,
			staggerDirection: 1,
			delayChildren: 0.1
		}
	}
};

const MenuItems = (props: Props) => {
	const {
		menuIsActive
	} = props;

	const [itemIsHovered, setItemIsHovered] = useState(false);

	const router = useRouter();

	useEffect(() => {
		setItemIsHovered(false);
	}, [router])

	return (
		<AnimatePresence>
			{menuIsActive && (
				<MenuItemsWrapper
					variants={wrapperVariants}
					initial='hidden'
					animate='visible'
					exit='hidden'
				>
					<MenuLinkItem
						link="/about"
						title="About"
						setItemIsHovered={setItemIsHovered}
						itemIsHovered={itemIsHovered}
					/>
					<MenuLinkItem
						link="/work"
						title="Work"
						setItemIsHovered={setItemIsHovered}
						itemIsHovered={itemIsHovered}
					/>
					<MenuLinkItem
						link="/learn"
						title="Learn"
						setItemIsHovered={setItemIsHovered}
						itemIsHovered={itemIsHovered}
					/>
					<MenuLinkItem
						link="/contact"
						title="Contact"
						setItemIsHovered={setItemIsHovered}
						itemIsHovered={itemIsHovered}
					/>
				</MenuItemsWrapper>
			)}
		</AnimatePresence>
	);
};

export default MenuItems;

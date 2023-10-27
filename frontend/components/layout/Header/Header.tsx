import styled from 'styled-components';
import LayoutWrapper from '../../common/LayoutWrapper';
import { useEffect, useRef, useState } from 'react';
import throttle from 'lodash.throttle';
import HeaderBar from '../../elements/HeaderBar';
import MenuItems from '../../elements/MenuItems';
import MenuFooter from '../../elements/MenuFooter';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import useNoScroll from '../../../hooks/useNoScroll';

type StyledProps = {
	$headerIsActive?: boolean;
	$menuIsActive?: boolean;
};

const HeaderWrapper = styled.header<StyledProps>`
	background: ${(props) => props.$menuIsActive ? 'var(--colour-cream)' : 'var(--colour-white)'};
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	transform: translateY(${props => props.$headerIsActive ? '0' : 'calc(var(--negative-header-h))'});
	z-index: 100;
	backface-visibility: hidden;
	perspective: 1000;

	transition: all var(--transition-speed-slow) var(--transition-ease);
`;

const Inner = styled(motion.div)`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const wrapperVariants = {
	hidden: {
		height: 'auto',
		transition: {
			duration: 0.5,
			ease: 'easeInOut',
			when: 'afterChildren',
			staggerChildren: 0.1,
			delay: 0.3
		}
	},
	visible: {
		height: '100vh',
		transition: {
			duration: 0.5,
			ease: 'easeInOut',
			when: 'beforeChildren',
			staggerChildren: 0.1
		}
	}
};

const Header = () => {
	const [menuIsActive, setMenuIsActive] = useState(false);
	const [headerIsActive, setHeaderIsActive] = useState(true);

	const router = useRouter();

	const prevScrollPosRef = useRef(0);

	const handleScroll = () => {
		const currentScrollPos = window.pageYOffset;

		if (currentScrollPos < 30) {
			setHeaderIsActive(true);
			return;
		}

		const isScrollingDown = currentScrollPos > prevScrollPosRef.current;

		setHeaderIsActive(!isScrollingDown);
		prevScrollPosRef.current = currentScrollPos;
	};

	useEffect(() => {
		if (menuIsActive) {
			useNoScroll(true);
		} else {
			useNoScroll(false);
		}
	}, [menuIsActive]);

	useEffect(() => {
		setMenuIsActive(false);
	}, [router]);

	useEffect(() => {
		const throttledHandleScroll = throttle(handleScroll, 100);
		window.addEventListener('scroll', throttledHandleScroll);

		return () => {
			window.removeEventListener('scroll', throttledHandleScroll);
		};
	}, []);

	return (
		<HeaderWrapper
			className="header"
			$headerIsActive={headerIsActive}
			$menuIsActive={menuIsActive}
		>
			<LayoutWrapper>
				<Inner
					variants={wrapperVariants}
					initial='hidden'
					animate={menuIsActive ? 'visible' : 'hidden'}
				>
					<HeaderBar
						menuIsActive={menuIsActive}
						setMenuIsActive={setMenuIsActive}
					/>
					<MenuItems
						menuIsActive={menuIsActive}
					/>
					<MenuFooter
						menuIsActive={menuIsActive}
					/>
				</Inner>
			</LayoutWrapper>
		</HeaderWrapper>
	)
};

export default Header;

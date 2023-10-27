import styled from 'styled-components';
import { useMousePosition } from '../../../hooks/useMousePosition';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import pxToRem from '../../../utils/pxToRem';
import ArrowIconSvg from '../../svgs/ArrowIconSvg';

type Props = {
	cursorRefresh: () => void;
}

const CursorWrapper = styled.div`
	position: fixed;
	height: 50px;
	width: 100px;
	z-index: 1000;
	pointer-events: none;
`;

const Inner = styled(motion.div)`
	position: fixed;
	display: flex;
	flex-flow: row;
	align-content: center;
	justify-content: center;
	top: -30px;
	left: 0;
	padding: ${pxToRem(9)} ${pxToRem(30)} ${pxToRem(10)};
	font-size: ${pxToRem(18)};
	line-height: ${pxToRem(11.5)};
	background: var(--colour-yellow);
	color: var(--colour-black);
	border-radius: 100px;
	white-space: nowrap;
	text-transform: capitalize;
	column-gap: ${pxToRem(10)};
`;

const Cursor = ({ cursorRefresh }: Props) => {
	const [isHoveringLink, setIsHoveringLink] = useState(false);
	const [isOnDevice, setIsOnDevice] = useState(false);
	const [randomIndex, setRandomIndex] = useState(1);
	const [title, setTitle] = useState("");

	const router = useRouter();

	const position = useMousePosition();

	let mouseXPosition = position.x;
	let mouseYPosition = position.y;

	const variantsWrapper = {
		hidden: {
			opacity: 0,
			x: mouseXPosition,
			y: mouseYPosition,
		},
		visible: {
			opacity: 1,
			x: mouseXPosition,
			y: mouseYPosition,
		},
	};

	useEffect(() => {
		const frameLinks = document.querySelectorAll('.frame-link');

		frameLinks.forEach((link) => {
			link.addEventListener('mouseenter', () => {
				setIsHoveringLink(true);
				const dataTitle = link.getAttribute('data-title');
				setTitle(dataTitle);
			});
			link.addEventListener('mouseleave', () => {
				setIsHoveringLink(false);
				setRandomIndex(Math.floor(Math.random() * 3) + 1);
			});
			link.addEventListener('click', () => {
				setIsHoveringLink(false);
			});
		});

		// checking if on a device
		const ua = navigator.userAgent;
		if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
			setIsOnDevice(true);
		} else if (
			/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
				ua
			)
		) {
			setIsOnDevice(true);
		}
	}, [cursorRefresh]);

	useEffect(() => {
		setIsHoveringLink(false);
	}, [router.asPath, cursorRefresh]);

	useEffect(() => {
		const html = document.querySelector('html');

		if (isHoveringLink) {
			html?.classList.add('remove-cursor');
		} else {
			html?.classList.remove('remove-cursor');
		}
	}, [isHoveringLink]);

	return (
		<>
			{!isOnDevice && (
				<CursorWrapper>
					<Inner
						variants={variantsWrapper}
						initial="hidden"
						animate={isHoveringLink ? 'visible' : 'hidden'}
						transition={{
							type: 'spring',
							mass: 0.05,
							stiffness: 1000,
							damping: 40,
							ease: 'linear',
						}}
					>
						{title}
						<ArrowIconSvg />
					</Inner>
				</CursorWrapper>
			)}
		</>
	);
};

export default Cursor;

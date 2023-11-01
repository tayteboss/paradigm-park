import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import pxToRem from '../../../utils/pxToRem';
import { useEffect, useRef } from 'react';
import { useClickOutside } from '../../../hooks/useClickOutside';
import { PortableText } from '@portabletext/react';
import urlBuilder from '@sanity/image-url'
import client from '../../../client';
import serializers from '../../../utils/serializers';

type StyledProps = {
	$isRHS?: boolean;
};

type Props = {
	workModalContent: any;
	setWorkModalContent: any;
};

const ContentModalWrapper = styled(motion.div)<StyledProps>`
	position: fixed;
	top: 0;
	right: ${(props: any) => props.$isRHS ? 0 : 'auto'};
	left: ${(props: any) => props.$isRHS ? 'auto' : 0};
	z-index: 1000;
	background: var(--colour-yellow);
`;

const Inner = styled(motion.div)`
	height: 100vh;
	height: 100dvh;
	width: ${pxToRem(620)};
	padding: ${pxToRem(60)} ${pxToRem(60)} ${pxToRem(100)};
	overflow-y: auto;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		width: 100%;
		padding: ${pxToRem(30)} ${pxToRem(30)} ${pxToRem(100)};
	}

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		padding: ${pxToRem(30)} ${pxToRem(15)} ${pxToRem(100)};
	}
`;

const Title = styled.h4`
	margin-bottom: ${pxToRem(50)};
	text-align: center;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		margin-bottom: ${pxToRem(30)};
	}
`;

const ContentWrapper = styled.div``;

const CloseWrapper = styled(motion.div)`
	position: fixed;
	z-index: 2;
	bottom: 0;
	left: 0;
	height: ${pxToRem(128)};
	width: 100%;
	background: linear-gradient(180deg, rgba(251, 255, 68, 0.00) 0%, #FBFF44 89.76%);
	display: flex;
	align-items: center;
	justify-content: center;
`;

const CloseTrigger = styled.button`
	font-size: ${pxToRem(14)};
	text-align: center;
	text-decoration: underline;
	position: relative;
	top: ${pxToRem(25)};
`;

const wrapperVariants = {
	hidden: {
		x: '-100%',
		transition: {
			duration: 0.5,
			ease: 'easeInOut',
			when: 'afterChildren'
		}
	},
	visible: {
		x: 0,
		transition: {
			duration: 0.5,
			ease: 'easeInOut',
			when: 'beforeChildren',
		}
	}
};

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
			ease: 'easeInOut'
		}
	}
};

const ContentModal = (props: Props) => {
	const {
		workModalContent,
		setWorkModalContent
	} = props;

	const {
		title,
		content
	} = workModalContent;

	const ref = useRef<HTMLDivElement>(null!);

	useClickOutside(ref, () => {
		setWorkModalContent(false);
	});

	const SampleImageComponent = ({ value, isInline }: any) => {
		return (
			<img
				src={urlBuilder(client)
					.image(value)
					.fit('max')
					.auto('format')
					.url()}
				alt={value.alt || ' '}
				loading="lazy"
				style={{
					display: isInline ? 'inline-block' : 'block',
					aspectRatio: 16 / 9,
				}}
			/>
		);
	};

	const components = {
		types: {
			image: SampleImageComponent,
		},
	}

	useEffect(() => {
		const body = document.body as HTMLElement;
		const framerScroller = document.querySelector('.frame-scroller') as HTMLElement;

		if (!framerScroller) return;

		if (workModalContent) {
			body.style.overflow = 'hidden';
			framerScroller.style.overflow = 'hidden';
		} else {
			body.style.overflow = 'auto';
			framerScroller.style.overflow = 'auto';
		}
	}, [workModalContent]);

	return (
		<AnimatePresence mode="wait">
			{workModalContent && (
				<ContentModalWrapper
					variants={wrapperVariants}
					initial='hidden'
					animate='visible'
					exit='hidden'
					ref={ref}
				>
					<Inner variants={childVariants}>
						{title && (
							<Title className="type-h4">
								{title}
							</Title>
						)}
						{content && (
							<ContentWrapper className="content">
								<PortableText
									value={content}
									components={components}
								/>
							</ContentWrapper>
						)}
					</Inner>
					<CloseWrapper variants={childVariants}>
						<CloseTrigger onClick={() => setWorkModalContent(false)}>
							Close
						</CloseTrigger>
					</CloseWrapper>
				</ContentModalWrapper>
			)}
		</AnimatePresence>
	);
};

export default ContentModal;


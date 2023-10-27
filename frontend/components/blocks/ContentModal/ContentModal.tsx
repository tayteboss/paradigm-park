import styled from 'styled-components';
import { FrameItemType } from '../../../shared/types/types';
import { AnimatePresence, motion } from 'framer-motion';
import pxToRem from '../../../utils/pxToRem';
import { useEffect, useRef } from 'react';
import { useClickOutside } from '../../../hooks/useClickOutside';
import { PortableText } from '@portabletext/react';

type StyledProps = {
	$isRHS?: boolean;
};

type Props = {
	content: FrameItemType | false;
	setContent: any;
};

const ContentModalWrapper = styled(motion.div)<StyledProps>`
	position: fixed;
	top: 0;
	right: ${(props: any) => props.$isRHS ? 0 : 'auto'};
	left: ${(props: any) => props.$isRHS ? 'auto' : 0};
	z-index: 1000;
	background: var(--colour-cream);
`;

const Inner = styled(motion.div)`
	height: 100vh;
	height: 100dvh;
	width: ${pxToRem(620)};
	padding: ${pxToRem(60)};
	overflow-y: auto;
	padding-bottom: ${pxToRem(100)};
`;

const Title = styled.h1`
	margin-bottom: ${pxToRem(50)};
	text-align: center;
`;

const SubTitle = styled.h3`
	margin-bottom: ${pxToRem(50)};
	text-align: center;
`;

const ContentWrapper = styled.div``;

const CloseWrapper = styled(motion.div)`
	position: fixed;
	z-index: 2;
	bottom: 0;
	left: 0;
	height: ${pxToRem(128)};
	width: 100%;
	background: linear-gradient(180deg, rgba(242, 244, 222, 0.00) -82.68%, #F2F4DE 89.76%);
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

const DotPointsContentBlock = styled.div`
	padding: ${pxToRem(15)} 0 ${pxToRem(60)};
	border-top: 1px solid var(--colour-black);
`;

const DotPointTitle = styled.h4`
	font-size: ${pxToRem(30)};
	line-height: ${pxToRem(36)};
	margin-bottom: ${pxToRem(30)};
`;

const DotPointDescription = styled.p`
	margin-bottom: ${pxToRem(30)};
`;

const DotPointsWrapper = styled.ul`
	columns: 2;
	-webkit-columns: 2;
	-moz-columns: 2;
`;

const DotPoint = styled.li`
	list-style: disc;
	margin-left: ${pxToRem(14)};
`;

const ContentModal = (props: Props) => {
	const {
		content,
		setContent
	} = props;

	const hasContentBlocks = content && content.contentBlock && content.contentBlock.length > 0;

	const {
		title,
		subTitle,
		contentBlock,
	} = content;

	const ref = useRef<HTMLDivElement>(null!);

	useClickOutside(ref, () => {
		setContent(false);
	});

	const wrapperVariants = {
		hidden: {
			x: content?.isRHS ? '100%' : '-100%',
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

	return (
		<AnimatePresence mode="wait">
			{content && (
				<ContentModalWrapper
					variants={wrapperVariants}
					initial='hidden'
					animate='visible'
					exit='hidden'
					ref={ref}
					$isRHS={content.isRHS}
				>
					<Inner variants={childVariants}>
						{title && (
							<Title className="type-h5">
								{title}
							</Title>
						)}
						{subTitle && (
							<SubTitle className="type-h4">
								{subTitle}
							</SubTitle>
						)}
						{hasContentBlocks && contentBlock.map((item: any, i: number) => {
							const usePortableText = item?.content;

							return (
								<>
									{usePortableText ? (
										<ContentWrapper className="content">
											{item?.content && (
												<PortableText value={item?.content} />
											)}
										</ContentWrapper>
									) : (
										<DotPointsContentBlock>
											{item?.string && (
												<DotPointTitle>{item.string}</DotPointTitle>
											)}
											{item?.description && (
												<DotPointDescription className="type-b2">
													{item.description}
												</DotPointDescription>
											)}
											<DotPointsWrapper>
												{item?.dotPoints.length > 0 && item?.dotPoints.map((item: any, i: number) => (
													<DotPoint
														className="type-b2"
														key={i}
													>
														{item}
													</DotPoint>
												))}
											</DotPointsWrapper>
										</DotPointsContentBlock>
									)}
								</>
							)
						})}
					</Inner>
					<CloseWrapper variants={childVariants}>
						<CloseTrigger onClick={() => setContent(false)}>
							Close
						</CloseTrigger>
					</CloseWrapper>
				</ContentModalWrapper>
			)}
		</AnimatePresence>
	);
};

export default ContentModal;


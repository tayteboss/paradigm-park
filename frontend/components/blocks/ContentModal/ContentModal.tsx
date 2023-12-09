import styled from 'styled-components';
import { FrameItemType } from '../../../shared/types/types';
import { AnimatePresence, motion } from 'framer-motion';
import pxToRem from '../../../utils/pxToRem';
import { useEffect, useRef } from 'react';
import { useClickOutside } from '../../../hooks/useClickOutside';
import { PortableText } from '@portabletext/react';
import PrimaryLink from '../../elements/PrimaryLink';

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
	right: ${(props: any) => (props.$isRHS ? 0 : 'auto')};
	left: ${(props: any) => (props.$isRHS ? 'auto' : 0)};
	z-index: 1000;
	background: var(--colour-cream);
`;

const Inner = styled(motion.div)`
	height: 100vh;
	width: ${pxToRem(620)};
	padding: ${pxToRem(60)} ${pxToRem(60)} ${pxToRem(250)};
	overflow-y: auto;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		width: 100%;
		padding: ${pxToRem(30)} ${pxToRem(30)} ${pxToRem(250)};
	}

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		padding: ${pxToRem(30)} ${pxToRem(15)} ${pxToRem(250)};
	}
`;

const Title = styled.h1`
	margin-bottom: ${pxToRem(50)};
	text-align: center;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		margin-bottom: ${pxToRem(30)};
	}
`;

const SubTitle = styled.h3`
	margin-bottom: ${pxToRem(50)};
	text-align: center;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		&.type-h4 {
			font-size: ${pxToRem(35)};
			line-height: normal;
		}
	}
`;

const ContentWrapper = styled.div``;

const PrimaryLinkWrapper = styled.div`
	margin-top: ${pxToRem(50)};
	width: 100%;
	text-align: center;
`;

const CloseOuterWrapper = styled(motion.div)`
	position: fixed;
	top: 0;
	left: 0;
	pointer-events: none;
	height: 100dvh;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	z-index: 2;
`;

const CloseWrapper = styled(motion.div)`
	pointer-events: all;
	height: ${pxToRem(100)};
	width: 100%;
	background: linear-gradient(
		180deg,
		rgba(242, 244, 222, 0) -82.68%,
		#f2f4de 89.76%
	);
	display: flex;
	align-items: center;
	justify-content: center;
`;

const CloseTrigger = styled.button`
	font-size: ${pxToRem(14)};
	text-align: center;
	text-decoration: underline;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
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

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		columns: 1;
		-webkit-columns: 1;
		-moz-columns: 1;
	}
`;

const DotPoint = styled.li`
	list-style: disc;
	margin-left: ${pxToRem(14)};
`;

const ContentModal = (props: Props) => {
	const { content, setContent } = props;

	const hasContentBlocks =
		content && content.contentBlock && content.contentBlock.length > 0;

	const { title, subTitle, contentBlock } = content;

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
				when: 'beforeChildren'
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

	useEffect(() => {
		const body = document.body as HTMLElement;
		const framerScroller = document.querySelector(
			'.frame-scroller'
		) as HTMLElement;

		if (!framerScroller) return;

		if (content) {
			body.style.overflow = 'hidden';
			framerScroller.style.overflow = 'hidden';
		} else {
			body.style.overflow = 'auto';
			framerScroller.style.overflow = 'auto';
		}
	}, [content]);

	return (
		<AnimatePresence mode="wait">
			{content && (
				<ContentModalWrapper
					variants={wrapperVariants}
					initial="hidden"
					animate="visible"
					exit="hidden"
					ref={ref}
					$isRHS={content.isRHS}
				>
					<Inner variants={childVariants}>
						{title && <Title className="type-h5">{title}</Title>}
						{subTitle && (
							<SubTitle className="type-h4">{subTitle}</SubTitle>
						)}
						{hasContentBlocks &&
							contentBlock.map((item: any, i: number) => {
								const usePortableText = item?.content;
								const internalSlug: string =
									item?.internal?.slug?.current;
								const linkTitle: string = item?.linkTitle;

								return (
									<>
										{usePortableText ? (
											<>
												<ContentWrapper className="content">
													{item?.content && (
														<PortableText
															value={
																item?.content
															}
														/>
													)}
												</ContentWrapper>
												{internalSlug && linkTitle && (
													<>
														<PrimaryLinkWrapper>
															<PrimaryLink
																url={`/${internalSlug}`}
																title={
																	linkTitle
																}
															/>
														</PrimaryLinkWrapper>
													</>
												)}
											</>
										) : (
											<>
												<DotPointsContentBlock>
													{item?.string && (
														<DotPointTitle>
															{item.string}
														</DotPointTitle>
													)}
													{item?.description && (
														<DotPointDescription className="type-b2">
															{item.description}
														</DotPointDescription>
													)}
													<DotPointsWrapper>
														{item?.dotPoints
															.length > 0 &&
															item?.dotPoints.map(
																(
																	item: any,
																	i: number
																) => (
																	<DotPoint
																		className="type-b2"
																		key={i}
																	>
																		{item}
																	</DotPoint>
																)
															)}
													</DotPointsWrapper>
												</DotPointsContentBlock>
												{(internalSlug && linkTitle) ||
													(linkTitle && (
														<PrimaryLink
															url={`/${internalSlug}`}
															title={linkTitle}
														/>
													))}
											</>
										)}
									</>
								);
							})}
					</Inner>
					<CloseOuterWrapper variants={childVariants}>
						<CloseWrapper>
							<CloseTrigger onClick={() => setContent(false)}>
								Close
							</CloseTrigger>
						</CloseWrapper>
					</CloseOuterWrapper>
				</ContentModalWrapper>
			)}
		</AnimatePresence>
	);
};

export default ContentModal;

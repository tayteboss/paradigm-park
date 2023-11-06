import Link from 'next/link';
import styled from 'styled-components';
import { SlugType } from '../../../shared/types/types';
import Image from 'next/image';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import pxToRem from '../../../utils/pxToRem';

type Props = {
	title: string;
	issueNumber: string;
	excerpt: string;
	heroImage: string;
	slug: SlugType;
};

const RelatedIssueCardWrapper = styled.a`
	grid-column: span 4;
	position: relative;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		grid-column: 1 / -1;
	}
`;

const ImageWrapper = styled.div`
	padding-top: 100%;
	width: 100%;
	position: relative;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		padding-top: 66.66%;
	}
`;

const ImageInner = styled.div`
	height: 100%;
	width: 100%;
	position: absolute;
	top: 0;
	left: 0;
	overflow: hidden;
	border-radius: var(--block-border-radius);

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		border-radius: 0;
	}
`;

const DesktopButtonWrapper = styled(motion.div)`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	background: rgba(255,255,255,0.5);

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		display: none;
	}
`;

const MobileButtonWrapper = styled.div`
	display: none;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		display: block;
	}
`;

const Button = styled(motion.div)`
	padding: ${pxToRem(9)} ${pxToRem(30)} ${pxToRem(10)};
	display: inline-block;
	font-size: ${pxToRem(16)};
	line-height: ${pxToRem(11.5)};
	background: var(--colour-white);
	color: var(--colour-black);
	border-radius: 100px;
	border: 1px solid var(--colour-white);
	white-space: nowrap;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		background: var(--colour-yellow);
		border-color: var(--colour-yellow);
		display: inline-block;
		font-size: ${pxToRem(15)};
	}
`;

const ContentWrapper = styled.div`
	padding-top: ${pxToRem(30)};
`;

const Issue = styled.p`
	margin-bottom: ${pxToRem(20)};
	text-align: center;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		text-align: left;
	}
`;

const Excerpt = styled.h4`
	text-align: center;
	font-size: ${pxToRem(30)};
	line-height: ${pxToRem(36)};

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		text-align: left;
		font-size: ${pxToRem(21)};
		line-height: normal;
		margin-bottom: ${pxToRem(30)};
	}
`;

const wrapperVariants = {
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

const childVariants = {
	hidden: {
		y: 5,
		transition: {
			duration: 0.3,
			ease: 'easeInOut'
		}
	},
	visible: {
		y: 0,
		transition: {
			duration: 0.3,
			ease: 'easeInOut'
		}
	}
};

const RelatedIssueCard = (props: Props) => {
	const {
		title,
		issueNumber,
		excerpt,
		heroImage,
		slug
	} = props;

	const [isHovered, setIsHovered] = useState(false);

	return (
		<Link href={`/learn/${slug?.current}`} passHref>
			<RelatedIssueCardWrapper
				onMouseOver={() => setIsHovered(true)}
				onMouseOut={() => setIsHovered(false)}
			>
				<ImageWrapper>
					<ImageInner>
						<Image
							src={heroImage}
							layout="fill"
							objectFit="cover"
						/>
					</ImageInner>
					<AnimatePresence>
						{isHovered && (
							<DesktopButtonWrapper
								variants={wrapperVariants}
								initial='hidden'
								animate='visible'
								exit='hidden'
							>
								<Button
									variants={childVariants}
								>
									Read Article
								</Button>
							</DesktopButtonWrapper>
						)}
					</AnimatePresence>
				</ImageWrapper>
				<ContentWrapper>
					<Issue>
						Issue {issueNumber || ''} — {title || ''}
					</Issue>
					{excerpt && (
						<Excerpt>{excerpt}</Excerpt>
					)}
					<MobileButtonWrapper>
						<Button>
							Read Article
						</Button>
					</MobileButtonWrapper>
				</ContentWrapper>
			</RelatedIssueCardWrapper>
		</Link>
	);
};

export default RelatedIssueCard;

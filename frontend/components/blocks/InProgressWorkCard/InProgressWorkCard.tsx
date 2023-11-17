import styled from 'styled-components';
import { CaseStudyType } from '../../../shared/types/types';
import pxToRem from '../../../utils/pxToRem';
import PrimaryLink from '../../elements/PrimaryLink';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import useViewportWidth from '../../../hooks/useViewportWidth';
import { useInView } from 'react-intersection-observer';

type StyledProps = {
	$bg: string;
}

const InProgressWorkCardWrapper = styled.div<StyledProps>`
	position: relative;
	grid-column: span 6;
	background: ${props => props.$bg};
	padding: ${pxToRem(60)} ${pxToRem(30)};
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	border-radius: var(--block-border-radius);
	height: ${pxToRem(600)};

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		grid-column: 1 / -1;
		height: auto;
	}

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		padding: ${pxToRem(60)};
	}
`;

const Title = styled.h5`
	text-align: center;
	line-height: normal;
`;

const PrimaryLinkWrapper = styled.div`
	.primary-link {
		background: var(--colour-white);
		color: var(--colour-black);
		border-color: transparent;

		&:hover {
			background: var(--colour-black);
			color: var(--colour-white);
		}
	}
`;

const ThumbnailWrapper = styled(motion.div)`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	height: 50%;
	width: auto;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		opacity: 0 !important;
	}
`;

const Thumbnail = styled.img`
	object-fit: contain;
	height: 100%;
	width: 100%;
`;

const ContentWrapper = styled(motion.div)`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 100%;
	padding: 0 ${pxToRem(60)};

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		opacity: 1 !important;
		position: relative;
		top: unset;
		left: unset;
		transform: unset;
		padding: ${pxToRem(50)} 0;
	}
`;

const Excerpt = styled.h4`
	text-align: center;
	max-width: ${pxToRem(500)};
	margin: 0 auto ${pxToRem(30)};

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		font-size: ${pxToRem(25)};
		line-height: normal;
		margin: 0 auto ${pxToRem(30)};
	}
`;

const TagsWrapper = styled.div`
	text-align: center;
`;

const Tag = styled.span``;

const Inner = styled(motion.div)`
	width: 100%;
	height: 100%;
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

const innerVariants = {
	hidden: {
		y: 2,
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

const InProgressWorkCard = (props: CaseStudyType) => {
	const {
		title,
		excerpt,
		tags,
		thumbnailImageUrl,
		slug,
		projectColor,
		workInProgressExternalLink
	} = props;

	const [isHovered, setIsHovered] = useState(false);

	const windowViewportWidth = useViewportWidth();

	useEffect(() => {
		if (windowViewportWidth === 'tabletPortrait' || windowViewportWidth === 'mobile') {
			setIsHovered(true);
		}
	}, [windowViewportWidth]);

	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
		rootMargin: '-50px'
	});

	return (
		<InProgressWorkCardWrapper
			$bg={projectColor ? projectColor?.hex : 'var(--colour-cream)'}
			onMouseOver={() => setIsHovered(true)}
			onMouseOut={() => setIsHovered(false)}
			ref={ref}
			className={`view-element-fade-in ${
				inView ? 'view-element-fade-in--in-view' : ''
			}`}
		>
			{title && (
				<Title>
					{title}
				</Title>
			)}
			<AnimatePresence mode="wait">
				{!isHovered && (
					<ThumbnailWrapper
						key={1}
						variants={wrapperVariants}
						initial='hidden'
						animate='visible'
						exit='hidden'
					>
						<Inner variants={innerVariants}>
							{thumbnailImageUrl && (
								<Thumbnail src={thumbnailImageUrl} />
							)}
						</Inner>
					</ThumbnailWrapper>
				)}
				{isHovered && (
					<ContentWrapper
						variants={wrapperVariants}
						initial='hidden'
						animate='visible'
						exit='hidden'
						key={2}
					>
						<Inner variants={innerVariants}>
							{excerpt && (
								<Excerpt>{excerpt}</Excerpt>
							)}
							{tags && (
								<TagsWrapper>
									{tags && tags.map((tag, i) => (
										<Tag className="type-b2" key={i}>
											{tag}{i < tags.length - 1 && ', '}
										</Tag>
									))}
								</TagsWrapper>
							)}
						</Inner>
					</ContentWrapper>
				)}
			</AnimatePresence>
			{workInProgressExternalLink && (
				<PrimaryLinkWrapper>
					<PrimaryLink
						title="Learn More"
						url={workInProgressExternalLink}
						target="_blank"
					/>
				</PrimaryLinkWrapper>
			)}
		</InProgressWorkCardWrapper>
	);
};

export default InProgressWorkCard;

import MuxPlayer from '@mux/mux-player-react';
import styled from 'styled-components';
import { ImageType, MuxVideoType } from '../../../shared/types/types';
import LayoutWrapper from '../../common/LayoutWrapper';
import LogoTextSvg from '../../svgs/LogoTextSvg';
import { motion } from 'framer-motion';
import pxToRem from '../../../utils/pxToRem';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

type Props = {
	data: MuxVideoType;
	image: ImageType;
};

const HomeHeroWrapper = styled(motion.section)`
	position: relative;
	margin-bottom: ${pxToRem(30)};

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		margin-bottom: ${pxToRem(15)};
	}
`;

const Inner = styled(motion.div)`
	position: relative;
	overflow: hidden;
	border-radius: var(--block-border-radius);
	height: calc(100vh - var(--header-h) - 30px);

	mux-player,
	img {
		height: 100%;
		width: 100%;
	}
`;

const LogoWrapper = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	z-index: 2;
	transform: translate(-50%, -50%);
	width: 90%;
	margin: 0 auto;
	text-align: center;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		width: 80%;
	}

	svg {
		width: 100%;
		height: auto;
	}

	&.view-element-fade-in {
		transition-delay: 500ms;
	}
`;

const HomeHero = (props: Props) => {
	const { data, image } = props;

	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
		rootMargin: '-50px'
	});

	return (
		<HomeHeroWrapper ref={ref}>
			<LayoutWrapper>
				<Inner>
					{data?.asset?.playbackId && (
						<MuxPlayer
							streamType="on-demand"
							playbackId={data.asset.playbackId}
							autoPlay="muted"
							loop={true}
							thumbnailTime={0}
							preload="auto"
							muted
							playsInline={true}
						/>
					)}
					{image?.asset?.url && (
						<Image
							src={image.asset.url}
							layout="fill"
							objectFit="cover"
							priority={true}
						/>
					)}
				</Inner>
			</LayoutWrapper>
			<LogoWrapper
				className={`view-element-fade-in ${
					inView ? 'view-element-fade-in--in-view' : ''
				}`}
			>
				<LogoTextSvg color="var(--colour-cream)" />
			</LogoWrapper>
		</HomeHeroWrapper>
	);
};

export default HomeHero;

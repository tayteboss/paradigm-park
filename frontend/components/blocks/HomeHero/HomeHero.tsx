import MuxPlayer from '@mux/mux-player-react/lazy';
import styled from 'styled-components';
import { ImageType, MuxVideoType } from '../../../shared/types/types';
import LayoutWrapper from '../../common/LayoutWrapper';
import LogoTextSvg from '../../svgs/LogoTextSvg';
import { motion } from 'framer-motion';
import pxToRem from '../../../utils/pxToRem';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

type StyledProps = {
	$placement: string;
};

type Props = {
	data: MuxVideoType;
	mobileData: MuxVideoType;
	image: ImageType;
	heroMediaPlaceholderData: any;
	mobileHeroMediaPlaceholderData: any;
	mobileImage: ImageType;
	placement: string;
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
		object-fit: cover;
		height: 100%;
		width: 100%;
	}
`;

const LogoWrapper = styled.div<StyledProps>`
	position: absolute;
	top: 50%;
	left: 50%;
	z-index: 2;
	transform: translate(-50%, -50%);
	width: 90%;
	margin: 0 auto;
	text-align: center;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: ${(props) => props.$placement};
	padding: ${pxToRem(30)} 0;

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

const Desktop = styled.div`
	height: 100%;
	width: 100%;

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		display: none;
	}
`;

const Mobile = styled.div`
	display: none;
	height: 100%;
	width: 100%;

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		display: block;
	}
`;

const HomeHero = (props: Props) => {
	const {
		data,
		mobileData,
		heroMediaPlaceholderData,
		mobileHeroMediaPlaceholderData,
		image,
		mobileImage,
		placement
	} = props;

	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
		rootMargin: '-50px'
	});

	const highResDesktop = 'l87Jhs402lJ02UBgzVA3MoPWD00UhOkG1fl3KkRBiCgweY';

	return (
		<HomeHeroWrapper ref={ref}>
			<LayoutWrapper>
				<Inner>
					<Desktop>
						{highResDesktop && (
							<MuxPlayer
								streamType="on-demand"
								playbackId={highResDesktop}
								autoPlay="muted"
								loop={true}
								thumbnailTime={1}
								loading="page"
								preload="auto"
								muted
								playsInline={true}
								poster={
									'https://image.mux.com/mZViVMVUgVLvqoTWOk2knYWRtFctWQrqZFa7EtmDEQw/thumbnail.png?width=214&height=121&time=2'
								}
							/>
						)}
						{/* {data?.asset?.playbackId && (
							<MuxPlayer
								streamType="on-demand"
								playbackId={data.asset.playbackId}
								autoPlay="muted"
								loop={true}
								thumbnailTime={1}
								loading="page"
								preload="auto"
								muted
								playsInline={true}
								placeholder={heroMediaPlaceholderData}
							/>
						)} */}
						{image?.asset?.url && (
							<Image
								src={image.asset.url}
								layout="fill"
								objectFit="cover"
								priority={true}
							/>
						)}
					</Desktop>
					<Mobile>
						{mobileData?.asset?.playbackId ? (
							<MuxPlayer
								streamType="on-demand"
								playbackId={props.mobileData.asset.playbackId}
								autoPlay="muted"
								loop={true}
								thumbnailTime={1}
								preload="auto"
								muted
								playsInline={true}
								placeholder={mobileHeroMediaPlaceholderData}
							/>
						) : (
							<>
								{data?.asset?.playbackId && (
									<MuxPlayer
										streamType="on-demand"
										playbackId={data.asset.playbackId}
										autoPlay="muted"
										loop={true}
										thumbnailTime={1}
										preload="auto"
										muted
										playsInline={true}
										placeholder={heroMediaPlaceholderData}
									/>
								)}
							</>
						)}
						{mobileImage?.asset?.url ? (
							<Image
								src={mobileImage.asset.url}
								layout="fill"
								objectFit="cover"
								priority={true}
							/>
						) : (
							<>
								{image?.asset?.url && (
									<Image
										src={image.asset.url}
										layout="fill"
										objectFit="cover"
										priority={true}
									/>
								)}
							</>
						)}
					</Mobile>
				</Inner>
			</LayoutWrapper>
			<LogoWrapper
				className={`view-element-fade-in ${
					inView ? 'view-element-fade-in--in-view' : ''
				}`}
				$placement={placement}
			>
				<LogoTextSvg color="var(--colour-cream)" />
			</LogoWrapper>
		</HomeHeroWrapper>
	);
};

export default HomeHero;

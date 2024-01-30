import React from 'react';
import styled from 'styled-components';
import MuxPlayer from '@mux/mux-player-react';
import { ImageType, MuxVideoType } from '../../../shared/types/types';
import LayoutWrapper from '../../common/LayoutWrapper';
import pxToRem from '../../../utils/pxToRem';
import Image from 'next/image';

type Props = {
	newsletterMedia: MuxVideoType;
	newsletterImage: ImageType;
};

const NewsletterPlayerWrapper = styled.div`
	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		display: none;
	}
`;

const Inner = styled.div`
	min-height: ${pxToRem(620)};
	border-radius: var(--block-border-radius);
	overflow: hidden;

	mux-player,
	img {
		height: 100%;
		width: 100%;
	}
`;

const MuxPlayerWrapper = styled.div`
	height: 100%;
	width: 100%;
	position: relative;
	overflow: hidden;
`;

const NewsletterPlayer = (props: Props) => {
	const { newsletterMedia, newsletterImage } = props;

	return (
		<NewsletterPlayerWrapper>
			<LayoutWrapper>
				<Inner className="full-height-block">
					<MuxPlayerWrapper className="mux-player-wrapper">
						{newsletterMedia?.asset?.playbackId && (
							<MuxPlayer
								streamType="on-demand"
								playbackId={newsletterMedia.asset.playbackId}
								autoPlay="muted"
								loop={true}
								thumbnailTime={0}
								preload="auto"
								muted
								playsInline={true}
							/>
						)}
						{newsletterImage?.asset?.url && (
							<Image
								src={newsletterImage.asset.url}
								layout="fill"
								objectFit="cover"
								priority={true}
							/>
						)}
					</MuxPlayerWrapper>
				</Inner>
			</LayoutWrapper>
		</NewsletterPlayerWrapper>
	);
};

export default NewsletterPlayer;

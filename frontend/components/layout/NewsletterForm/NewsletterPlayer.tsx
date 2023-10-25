import React from 'react';
import styled from 'styled-components';
import MuxPlayer from '@mux/mux-player-react';
import { MuxVideoType } from '../../../shared/types/types';
import LayoutWrapper from '../../common/LayoutWrapper';
import pxToRem from '../../../utils/pxToRem';

type Props = {
	newsletterMedia: MuxVideoType;
};

const NewsletterPlayerWrapper = styled.div`
	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		display: none;
	}
`;

const Inner = styled.div`
	min-height: ${pxToRem(620)};
	height: calc(100vh - 60px);
	height: calc(100dvh - 60px);
	border-radius: var(--block-border-radius);
	overflow: hidden;

	mux-player {
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
	const {
		newsletterMedia
	} = props;

	return (
		<NewsletterPlayerWrapper>
			<LayoutWrapper>
				<Inner>
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
					</MuxPlayerWrapper>
				</Inner>
			</LayoutWrapper>
		</NewsletterPlayerWrapper>
	);
};

export default NewsletterPlayer;

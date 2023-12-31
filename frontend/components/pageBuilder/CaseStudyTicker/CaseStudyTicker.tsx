import styled from 'styled-components';
import Marquee from 'react-fast-marquee';
import pxToRem from '../../../utils/pxToRem';
import Link from 'next/link';
import { SlugType } from '../../../shared/types/types';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

type Props = {
	tickerContent: string;
	tickerLinkTitle: string;
	tickerButtonExternalLink: string;
	tickerInternalLink: any;
};

const CaseStudyTickerWrapper = styled.section`
	padding: ${pxToRem(30)} 0;
	margin-left: ${pxToRem(-30)};
	width: 100vw;
	position: relative;
	overflow: hidden;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		padding: ${pxToRem(60)} 0;
		margin-left: ${pxToRem(-15)};
	}

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		padding: ${pxToRem(30)} 0;
	}

	.rfm-child {
		margin-right: ${pxToRem(30)};
		font-size: ${pxToRem(82)};
		line-height: normal;
		font-family: var(--font-reslindale);

		@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
			font-size: ${pxToRem(45)};
		}
	}
`;

const LinkTag = styled.a``;

const MobileLinkButton = styled.div`
	display: none !important;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		display: block !important;
		position: absolute;
		top: 50%;
		left: calc(50% - 7px);
		transform: translate(-50%, -50%);
		z-index: 2;
	}
`;

const CaseStudyTicker = (props: Props) => {
	const {
		tickerContent,
		tickerLinkTitle,
		tickerButtonExternalLink,
		tickerInternalLink
	} = props;

	const [link, setLink] = useState('/');

	const hasLink =
		(tickerButtonExternalLink || tickerInternalLink) && tickerLinkTitle;

	useEffect(() => {
		if (tickerButtonExternalLink) {
			setLink(tickerButtonExternalLink);
		}

		if (tickerInternalLink) {
			setLink(`/${tickerInternalLink?.current}`);
		}
	}, [tickerButtonExternalLink, tickerInternalLink]);

	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
		rootMargin: '-50px'
	});

	return (
		<CaseStudyTickerWrapper
			ref={ref}
			className={`case-study-ticker view-element-fade-in ${
				inView ? 'view-element-fade-in--in-view' : ''
			}`}
		>
			{hasLink ? (
				<Link href={link} passHref scroll={false}>
					<LinkTag
						className={hasLink ? 'frame-link' : ''}
						data-title={tickerLinkTitle ? tickerLinkTitle : ''}
						target={tickerButtonExternalLink ? '_blank' : '_self'}
					>
						{tickerContent && (
							<Marquee autoFill speed={130}>
								{tickerContent}
							</Marquee>
						)}
						{/* <MobileLinkButton
							className="primary-link-style case-study-ticker__button"
						>
							{tickerLinkTitle ? tickerLinkTitle : ''}
						</MobileLinkButton> */}
					</LinkTag>
				</Link>
			) : (
				tickerContent && (
					<Marquee autoFill speed={130}>
						{tickerContent}
					</Marquee>
				)
			)}
		</CaseStudyTickerWrapper>
	);
};

export default CaseStudyTicker;

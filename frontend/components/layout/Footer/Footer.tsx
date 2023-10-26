import styled from 'styled-components';
import MenuFooterLinks from '../../elements/MenuFooter/MenuFooterLinks';
import MenuFooterCopyright from '../../elements/MenuFooter/MenuFooterCopyright';
import pxToRem from '../../../utils/pxToRem';
import LayoutWrapper from '../../common/LayoutWrapper';
import Link from 'next/link';
import LogoTextSvg from '../../svgs/LogoTextSvg';
import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const siteOptions = require('../../../json/siteSettings.json');

const FooterWrapper = styled(motion.footer)`
	position: sticky;
	bottom: 0;
	left: 0;
	width: 100%;
	z-index: 1;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		opacity: 1 !important;
		transform: unset !important;
	}
`;

const Inner = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: ${pxToRem(30)} 0;
`;

const TopContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: ${pxToRem(222)};

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		justify-content: center;
		margin-bottom: ${pxToRem(136)};
	}
`;

const BottomContainer = styled.div``;

const LinksWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: ${pxToRem(22)};

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		flex-direction: column;
		justify-content: center;
	}
`;

const LinkTag = styled.a`
	&.type-h4 {
		@media ${(props) => props.theme.mediaBreakpoints.tabletLandscape} {
			font-size: ${pxToRem(42)};
		}

		@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
			font-size: ${pxToRem(38)};
		}

		@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
			text-align: center;
		}

		@media ${(props) => props.theme.mediaBreakpoints.mobile} {
			font-size: ${pxToRem(25)};
		}
	}
`;

const LogoWrapper = styled.div`
	width: 100%;

	svg {
		width: 100%;
		height: auto;
	}
`;

const DesktopCopyrightWrapper = styled.div`
	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		display: none;
	}
`;

const MobileCopyrightWrapper = styled.div`
	display: none;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		display: block;

		* {
			display: block;
			text-align: center;
			margin-bottom: ${pxToRem(30)};
		}
	}
`;

const LogoLinkTag = styled.a``;

const Footer = () => {
	const {
		address,
		addressUrl,
		generalEmail
	} = siteOptions;

	const [windowHeight, setWindowHeight] = useState(0);
	const [footerHeight, setFooterHeight] = useState(500);
	const [documentHeight, setDocumentHeight] = useState(0);

	const ref = useRef<HTMLDivElement>(null);

	const { scrollY } = useScroll();

	const opacity = useTransform(
		scrollY,
		[documentHeight - (windowHeight * 2), documentHeight - windowHeight],
		['0', '1']
	);

	const transform = useTransform(
		scrollY,
		[documentHeight - (windowHeight * 2), documentHeight - windowHeight],
		['translateY(100px)', 'translateY(0px)']
	);

	useEffect(() => {
		if (!ref?.current) return;

		const footerHeight = ref.current.clientHeight;
		document.documentElement.style.setProperty('--footer-height', `${footerHeight}px`);

		setFooterHeight(footerHeight);
		setWindowHeight(window.innerHeight);

		var body = document.body,
    	html = document.documentElement;

		var height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );

		setDocumentHeight(height);
	}, []);

	return (
		<FooterWrapper
			style={{ opacity, transform }}
		>
			<LayoutWrapper>
				<Inner ref={ref}>
					<TopContainer>
						<MenuFooterLinks />
						<DesktopCopyrightWrapper>
							<MenuFooterCopyright />
						</DesktopCopyrightWrapper>
					</TopContainer>
					<BottomContainer>
						<LinksWrapper>
							{(address && addressUrl) && (
								<Link href={addressUrl}>
									<LinkTag
										className="type-h4"
										target='_blank'
									>
										{address}
									</LinkTag>
								</Link>
							)}
							{generalEmail && (
								<Link href={`mailto:${generalEmail}`}>
									<LinkTag className="type-h4">
										{generalEmail}
									</LinkTag>
								</Link>
							)}
						</LinksWrapper>
						<MobileCopyrightWrapper>
							<MenuFooterCopyright />
						</MobileCopyrightWrapper>
						<LogoWrapper>
							<Link href="/" passHref scroll={false}>
								<LogoLinkTag>
									<LogoTextSvg color="var(--colour-black)" />
								</LogoLinkTag>
							</Link>
						</LogoWrapper>
					</BottomContainer>
				</Inner>
			</LayoutWrapper>
		</FooterWrapper>
	)
};

export default Footer;
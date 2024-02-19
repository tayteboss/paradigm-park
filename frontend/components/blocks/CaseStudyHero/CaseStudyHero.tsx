import styled from 'styled-components';
import LayoutWrapper from '../../common/LayoutWrapper';
import { ColorType } from '../../../shared/types/types';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

type StyledProps = {
	$bg?: string;
	$color?: string;
};

type Props = {
	desktopHeroMask?: string;
	heroImage: string;
	mobileHeroImage: string;
	mobileHeroMask?: string;
	title?: string;
	projectColor?: ColorType;
	titleColor?: ColorType;
};

const CaseStudyHeroWrapper = styled.section`
	position: sticky;
	top: var(--header-h);
	z-index: 1;
`;

const Outer = styled(motion.div)`
	margin-bottom: 200vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: calc(100vh - var(--header-h) - 30px);
	overflow: hidden;
`;

const Inner = styled.div<StyledProps>`
	overflow: hidden;
	border-radius: var(--block-border-radius);
	background-color: ${(props) => props.$bg};
	height: 100%;
	width: 100%;
	position: relative;
`;

const DesktopImageWrapper = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	height: 100%;
	width: 100%;
	overflow: hidden;
	z-index: 1;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		display: none;
	}
`;

const MobileImageWrapper = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	height: 100%;
	width: 100%;
	overflow: hidden;
	z-index: 1;
	display: none;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		display: block;
	}
`;

const MotionInner = styled(motion.div)`
	height: 100%;
	width: 100%;
	overflow: hidden;
`;

const DesktopMaskWrapper = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	height: 100%;
	width: 100%;
	overflow: hidden;
	z-index: 2;

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		display: none;
	}
`;

const MobileMaskWrapper = styled.div`
	display: none;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	height: 100%;
	width: 100%;
	overflow: hidden;
	z-index: 2;

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		display: block;
	}
`;

const Title = styled(motion.h1)<StyledProps>`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 3;
	text-align: center;
	color: ${(props) => props.$color};
`;

const CaseStudyHero = (props: Props) => {
	const {
		desktopHeroMask,
		heroImage,
		mobileHeroImage,
		mobileHeroMask,
		projectColor,
		titleColor,
		title
	} = props;

	const [windowHeight, setWindowHeight] = useState(0);

	const { scrollY } = useScroll();

	const maskTransform = useTransform(
		scrollY,
		[0, windowHeight * 3],
		['scale(1.05)', 'scale(5)']
	);

	const imageTransform = useTransform(
		scrollY,
		[0, windowHeight * 3],
		['scale(1.2)', 'scale(1)']
	);

	const opacity = useTransform(
		scrollY,
		[windowHeight * 3, windowHeight * 3.5],
		[1, 0]
	);

	const titleFade = useTransform(
		scrollY,
		[0, windowHeight * 1.5, windowHeight * 2.5],
		[1, 1, 0]
	);

	useEffect(() => {
		setWindowHeight(window.innerHeight);
	}, []);

	return (
		<CaseStudyHeroWrapper>
			<LayoutWrapper>
				<Outer
					style={{
						opacity: opacity
					}}
				>
					<Inner
						$bg={
							projectColor
								? projectColor?.hex
								: 'var(--colour-white)'
						}
					>
						<DesktopImageWrapper>
							<MotionInner
								style={{
									transform: imageTransform
								}}
							>
								{heroImage && (
									<Image
										src={heroImage}
										layout="fill"
										objectFit="cover"
										priority
									/>
								)}
							</MotionInner>
						</DesktopImageWrapper>
						<MobileImageWrapper>
							<MotionInner
								style={{
									transform: imageTransform
								}}
							>
								{mobileHeroImage ? (
									<Image
										src={mobileHeroImage}
										layout="fill"
										objectFit="cover"
										priority
									/>
								) : (
									<Image
										src={heroImage}
										layout="fill"
										objectFit="cover"
										priority
									/>
								)}
							</MotionInner>
						</MobileImageWrapper>
						<DesktopMaskWrapper>
							<MotionInner
								style={{
									transform: maskTransform
								}}
							>
								{desktopHeroMask && (
									<Image
										src={desktopHeroMask}
										layout="fill"
										objectFit="cover"
										priority
									/>
								)}
							</MotionInner>
						</DesktopMaskWrapper>
						<MobileMaskWrapper>
							<MotionInner
								style={{
									transform: maskTransform
								}}
							>
								{mobileHeroMask && (
									<Image
										src={mobileHeroMask}
										layout="fill"
										objectFit="cover"
										priority
									/>
								)}
							</MotionInner>
						</MobileMaskWrapper>
						{title && (
							<Title
								$color={
									titleColor?.hex
										? titleColor.hex
										: 'var(--colour-black)'
								}
								style={{
									opacity: titleFade
								}}
							>
								{title}
							</Title>
						)}
					</Inner>
				</Outer>
			</LayoutWrapper>
		</CaseStudyHeroWrapper>
	);
};

export default CaseStudyHero;

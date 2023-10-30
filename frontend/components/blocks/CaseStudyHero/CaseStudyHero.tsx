import styled from 'styled-components';
import LayoutWrapper from '../../common/LayoutWrapper';
import { ColorType } from '../../../shared/types/types';
import pxToRem from '../../../utils/pxToRem';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

type StyledProps = {
	$bg: string;
}

type Props = {
	desktopHeroMask?: string;
	heroImage?: string;
	mobileHeroMask?: string;
	title?: string;
	projectColor?: ColorType;
};

const CaseStudyHeroWrapper = styled.section`
	position: sticky;
	top: var(--header-h);
	z-index: 1;
`;

const Outer = styled.div`
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
	background-color: ${props => props.$bg};
	height: 100%;
	width: 100%;
	position: relative;
`;

const ImageWrapper = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	height: 100%;
	width: 100%;
	overflow: hidden;
	z-index: 1;
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

const Title = styled(motion.h1)`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 3;
	text-align: center;
`;

const CaseStudyHero = (props: Props) => {
	const {
		desktopHeroMask,
		heroImage,
		mobileHeroMask,
		projectColor,
		title
	} = props;

	const [windowHeight, setWindowHeight] = useState(0);

	const { scrollY } = useScroll();

	const maskTransform = useTransform(
		scrollY,
		[0, windowHeight * 2],
		['scale(1)', 'scale(4)']
	);

	const imageTransform = useTransform(
		scrollY,
		[0, windowHeight * 3],
		['scale(1.2)', 'scale(1)']
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
				<Outer>
					<Inner
						$bg={projectColor ? projectColor?.hex : 'var(--colour-white)'}
					>
						<ImageWrapper>
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
						</ImageWrapper>
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

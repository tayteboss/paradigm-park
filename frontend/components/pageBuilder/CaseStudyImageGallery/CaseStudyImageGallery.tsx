import styled from 'styled-components';
import useEmblaCarousel from 'embla-carousel-react';
import pxToRem from '../../../utils/pxToRem';
import Image from 'next/image';
import ArrowIconSvg from '../../svgs/ArrowIconSvg';

const CaseStudyImageGalleryWrapper = styled.section``;

const Inner = styled.div`
	padding: ${pxToRem(30)} 0;
`;

const Embla = styled.div`
	position: relative;
`;

const EmblaContainer = styled.div``;

const EmblaSlide = styled.div`
	position: relative;
	height: calc(100vh - 60px);
	overflow: hidden;

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		padding-top: 100%;
		height: unset;
	}
`;

const ImageInner = styled.div`
	height: 100%;
	width: 100%;
	position: relative;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		position: absolute;
		inset: 0;
		overflow: hidden;
	}
`;

const NavigationWrapper = styled.div`
	position: absolute;
	bottom: ${pxToRem(20)};
	left: 50%;
	transform: translateX(-50%);
	display: flex;

	button {
		svg {
			height: ${pxToRem(12)};
			width: ${pxToRem(12)};
		}

		&:first-child {
			border-top-left-radius: 100px;
			border-bottom-left-radius: 100px;

			svg {
				transform: rotate(-135deg);
			}
		}

		&:last-child {
			border-top-right-radius: 100px;
			border-bottom-right-radius: 100px;

			svg {
				transform: rotate(45deg);
			}
		}
	}
`;

const Trigger = styled.button`
	flex: 1;
	height: ${pxToRem(30)};
	width: ${pxToRem(55)};
	background: var(--colour-white);

	transition: all 300ms var(--transition-ease);

	&:hover {
		background: var(--colour-black);

		svg {
			path {
				stroke: var(--colour-white);
			}
		}
	}

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		&:hover {
			background: var(--colour-white);

			svg {
				path {
					stroke: var(--colour-black);
				}
			}
		}
	}

	svg {
		path {
			transition: all 300ms var(--transition-ease);
		}
	}
`;

const CaseStudyImageGallery = (props: any) => {
	const {
		imageGallery
	} = props;

	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

	const hasImages = imageGallery?.length > 0;

	const handleNextSlide = () => {
		if (emblaApi) {
			emblaApi.scrollNext();
		}
	};

	const handlePrevSlide = () => {
		if (emblaApi) {
			emblaApi.scrollPrev();
		}
	};

	return (
		<CaseStudyImageGalleryWrapper>
			<Inner>
				{hasImages && (
					<Embla
						ref={emblaRef}
						className="embla"
					>
						<EmblaContainer className="embla__container">
							{imageGallery.map((item: any, i: any) => (
								<EmblaSlide
									key={i}
									className="embla__slide"
								>
									<ImageInner>
										<Image
											src={item?.asset.url}
											layout="fill"
											objectFit="cover"
										/>
									</ImageInner>
								</EmblaSlide>
							))}
						</EmblaContainer>
						<NavigationWrapper>
							<Trigger onClick={() => handlePrevSlide()}>
								<ArrowIconSvg />
							</Trigger>
							<Trigger onClick={() => handleNextSlide()}>
								<ArrowIconSvg />
							</Trigger>
						</NavigationWrapper>
					</Embla>
				)}
			</Inner>
		</CaseStudyImageGalleryWrapper>
	);
};

export default CaseStudyImageGallery;

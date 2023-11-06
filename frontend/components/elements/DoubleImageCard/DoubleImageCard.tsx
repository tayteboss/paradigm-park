import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';
import { useInView } from 'react-intersection-observer';

type Props = {
	data: any;
	isPriority: boolean;
};

const DoubleImageCardWrapper = styled.div`
	width: 100%;
	display: flex;
	column-gap: ${pxToRem(30)};

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		column-gap: ${pxToRem(15)};
		flex-direction: column;
		row-gap: ${pxToRem(15)};
	}
`;

const Outer = styled.div`
	width: 100%;
	flex: 1;
	position: relative;
	overflow: hidden;
`;

const Inner = styled.div`
	width: 100%;
`;

const Image = styled.img`
	object-fit: cover;
	height: 100%;
	width: 100%;
`;

const DoubleImageCard = (props: Props) => {
	const {
		data
	} = props;

	const hasImages = data?.twoImagesUrls?.length === 2;
	const images = data?.twoImagesUrls;

	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
		rootMargin: '-50px'
	});

	return (
		<DoubleImageCardWrapper ref={ref}>
			{hasImages && images.map((item: any, i: number) => (
				<Outer
					className={`view-element-image-scale-up ${
						inView ? 'view-element-image-scale-up--in-view' : ''
					}`}
					key={i}
				>
					<Inner>
						<Image
							src={item}
						/>
					</Inner>
				</Outer>
			))}
		</DoubleImageCardWrapper>
	);
};

export default DoubleImageCard;

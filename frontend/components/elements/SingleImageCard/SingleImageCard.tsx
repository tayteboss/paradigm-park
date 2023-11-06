import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';
import { useInView } from 'react-intersection-observer';

type Props = {
	data: any;
	isPriority: boolean;
};

const SingleImageCardWrapper = styled.div`
	width: 100%;
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

const SingleImageCard = (props: Props) => {
	const {
		data
	} = props;

	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
		rootMargin: '-50px'
	});

	return (
		<SingleImageCardWrapper ref={ref}>
			{data.singleImageUrl && (
				<Inner
					className={`view-element-image-scale-up ${
						inView ? 'view-element-image-scale-up--in-view' : ''
					}`}
				>
					<Image
						src={data.singleImageUrl}
					/>
				</Inner>
			)}
		</SingleImageCardWrapper>
	);
};

export default SingleImageCard;

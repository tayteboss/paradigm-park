import styled from 'styled-components';
import LayoutWrapper from '../../common/LayoutWrapper';
import pxToRem from '../../../utils/pxToRem';
import SingleImageCard from '../../elements/SingleImageCard';
import DoubleImageCard from '../../elements/DoubleImageCard';

type Props = {
	data: any;
}

const IssueImageGalleryWrapper = styled.section`
	margin-bottom: ${pxToRem(30)};
`;

const Inner = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: ${pxToRem(30)};

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		row-gap: ${pxToRem(15)};
	}
`;

const IssueImageGallery = (props: Props) => {
	const {
		data
	} = props;

	const hasGalleryData = data?.length > 0;

	return (
		<IssueImageGalleryWrapper>
			<LayoutWrapper>
				<Inner>
					{hasGalleryData && data?.map((item: any, i: number) => {
						const isSingleImage = item?.imageType === 'Single Image';

						return (
							isSingleImage ? (
								<SingleImageCard
									data={item}
									key={i}
									isPriority={i === 0}
								/>
							) : (
								<DoubleImageCard
									data={item}
									key={i}
									isPriority={i === 0}
								/>
							)
						);
					})}
				</Inner>
			</LayoutWrapper>
		</IssueImageGalleryWrapper>
	);
};

export default IssueImageGallery;

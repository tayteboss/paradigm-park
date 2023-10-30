import styled from 'styled-components';
import LayoutWrapper from '../../common/LayoutWrapper';
import pxToRem from '../../../utils/pxToRem';
import { useInView } from 'react-intersection-observer';

type StyledProps = {
	$bg: string;
}

type Props = {
	heroTitle: string;
	heroColor: string;
};

const WorkHeroBlockWrapper = styled.section``;

const Inner = styled.div<StyledProps>`
	background: ${props => props.$bg};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: calc(100vh - var(--header-h) - 30px);
	height: calc(100dvh - var(--header-h) - 30px);
	border-radius: var(--block-border-radius);
	padding: 0 ${pxToRem(60)};

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		padding: 0 ${pxToRem(15)};
	}
`;

const Title = styled.h1`
	text-transform: none;
	text-align: center;
	max-width: ${pxToRem(948)};

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		&.type-h2 {
			font-size: ${pxToRem(35)};
			line-height: normal;
		}
	}
`;

const WorkHeroBlock = (props: Props) => {
	const {
		heroTitle,
		heroColor
	} = props;

	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
		rootMargin: '-50px'
	});

	return (
		<WorkHeroBlockWrapper>
			<LayoutWrapper>
				<Inner
					$bg={heroColor ? heroColor : 'var(--colour-cream)'}
					ref={ref}
				>
					{heroTitle && (
						<Title
							className={`type-h2 view-element-fade-in ${
								inView ? 'view-element-fade-in--in-view' : ''
							}`}
						>
							{heroTitle}
						</Title>
					)}
				</Inner>
			</LayoutWrapper>
		</WorkHeroBlockWrapper>
	);
};

export default WorkHeroBlock;

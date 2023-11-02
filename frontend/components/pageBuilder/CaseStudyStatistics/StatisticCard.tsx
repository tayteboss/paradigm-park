import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import pxToRem from '../../../utils/pxToRem';
import { motion } from 'framer-motion';

type StyledProps = {
	$inView: boolean;
	$useFour?: boolean;
	$useTwo?: boolean;
}

type Props = {
	title: string;
	value: string;
	useFour?: boolean;
	useTwo?: boolean;
};

const StatisticCardWrapper = styled(motion.div)<StyledProps>`
	grid-column: ${(props) => props.$useTwo ? 'span 6' : props.$useFour ? 'span 3' : 'span 4'};
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	row-gap: ${pxToRem(50)};
	position: relative;
	padding: ${pxToRem(30)} 0 ${pxToRem(60)};
	height: 100%;

	@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
		padding: ${pxToRem(20)} 0 ${pxToRem(40)};
		row-gap: ${pxToRem(30)};
	}

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		grid-column: 1 / -1;
	}

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		row-gap: ${pxToRem(25)};
		padding: ${pxToRem(30)} 0;
	}

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		height: 1px;
		background: var(--colour-black);
		width: ${(props) => props.$inView ? '100%' : '0'};

		transition: all var(--transition-speed-default) var(--transition-ease);
	}

	&:not(:first-child) {
		&::before {
			@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
				display: none;
			}
		}
	}

	&::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		height: 1px;
		background: var(--colour-black);
		width: ${(props) => props.$inView ? '100%' : '0'};

		transition: all var(--transition-speed-default) var(--transition-ease);
		transition-delay: 150ms;
	}
`;

const Value = styled.p`
	&.type-h1 {
		@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
			font-size: ${pxToRem(70)};
			line-height: normal;
		}

		@media ${(props) => props.theme.mediaBreakpoints.mobile} {
			font-size: ${pxToRem(45)};
		}
	}
`;

const Title = styled.h4`
	@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
		font-size: ${pxToRem(35)};
		line-height: normal;
	}

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		font-size: ${pxToRem(25)};
	}
`;

const childVariants = {
	hidden: {
		opacity: 0,
		y: 10,
		transition: {
			duration: 0.3,
			ease: 'easeInOut'
		}
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.3,
			ease: 'easeInOut'
		}
	}
};

const StatisticCard = (props: Props) => {
	const {
		title,
		value,
		useFour,
		useTwo
	} = props;

	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
		rootMargin: '-50px'
	});

	return (
		<StatisticCardWrapper
			ref={ref}
			$inView={inView}
			$useFour={useFour}
			$useTwo={useTwo}
			variants={childVariants}
		>
			{title && (
				<Value className="type-h1">
					{title}
				</Value>
			)}
			{value && (
				<Title>{value}</Title>
			)}
		</StatisticCardWrapper>
	);
};

export default StatisticCard;

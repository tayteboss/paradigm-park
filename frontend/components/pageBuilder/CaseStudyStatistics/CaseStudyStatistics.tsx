import styled from 'styled-components';
import LayoutGrid from '../../common/LayoutGrid';
import StatisticCard from './StatisticCard';
import pxToRem from '../../../utils/pxToRem';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

type StatisticType = {
	key: string;
	value: string;
};

type Props = {
	statistic: StatisticType[];
};

const CaseStudyStatisticsWrapper = styled(motion.section)`
	padding: ${pxToRem(150)} 0 ${pxToRem(30)};

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		padding: ${pxToRem(60)}  0;
	}

	.layout-grid {
		row-gap: ${pxToRem(60)};

		@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
			row-gap: 0;
		}
	}
`;

const wrapperVariants = {
	hidden: {
		opacity: 0,
		transition: {
			duration: 0.3,
			ease: 'easeInOut'
		}
	},
	visible: {
		opacity: 1,
		transition: {
			duration: 0.3,
			ease: 'easeInOut',
			when: 'beforeChildren',
			staggerChildren: 0.3
		}
	}
};

const CaseStudyStatistics = (props: Props) => {
	const {
		statistic
	} = props;

	const hasStatistic = statistic && statistic.length > 0;
	const hasFourStatistic = statistic && statistic.length === 4;
	const hasTwoStatistic = statistic && statistic.length === 2;

	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
		rootMargin: '-50px'
	});

	return (
		<CaseStudyStatisticsWrapper
			ref={ref}
			variants={wrapperVariants}
			initial='hidden'
			animate={inView ? 'visible' : 'hidden'}
		>
			<LayoutGrid>
				{hasStatistic && statistic.map((item, i) => (
					<StatisticCard
						title={item?.key}
						value={item?.value}
						useFour={hasFourStatistic}
						useTwo={hasTwoStatistic}
						key={i}
					/>
				))}
			</LayoutGrid>
		</CaseStudyStatisticsWrapper>
	);
};

export default CaseStudyStatistics;

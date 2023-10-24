import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';
import MenuFooterCopyright from './MenuFooterCopyright';
import MenuFooterLinks from './MenuFooterLinks';
import pxToRem from '../../../utils/pxToRem';
import LayoutWrapper from '../../common/LayoutWrapper';
import MenuMobileInformation from './MenuMobileInformation';

type Props = {
	menuIsActive: boolean;
};

const MenuFooterWrapper = styled(motion.div)`
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	z-index: 2;
`;

const Inner = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-bottom: ${pxToRem(30)};

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		justify-content: center;
		align-items: center;
		flex-direction: column;
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
			delay: 0.5
		}
	}
};

const MenuFooter = (props: Props) => {
	const {
		menuIsActive
	} = props;

	return (
		<AnimatePresence>
			{menuIsActive && (
				<MenuFooterWrapper
					variants={wrapperVariants}
					initial='hidden'
					animate='visible'
					exit='hidden'
				>
					<LayoutWrapper>
						<Inner>
							<MenuMobileInformation />
							<MenuFooterLinks />
							<MenuFooterCopyright />
						</Inner>
					</LayoutWrapper>
				</MenuFooterWrapper>
			)}
		</AnimatePresence>
	);
};

export default MenuFooter;

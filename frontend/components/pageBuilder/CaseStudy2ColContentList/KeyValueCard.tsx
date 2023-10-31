import { PortableText } from '@portabletext/react';
import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';

interface Props {
	title: string;
	value: [];
};

const KeyValueCardWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(2, minmax(0, 1fr));
	align-items: start;
	padding: ${pxToRem(25)} 0;
	border-bottom: 1px solid var(--colour-black);

	&:first-child {
		border-top: 1px solid var(--colour-black);
	}

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		padding: ${pxToRem(15)} 0;
	}
`;

const Title = styled.p`
	grid-column: span 1;

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		font-size: ${pxToRem(12)};
		line-height: ${pxToRem(18)};
	}
`;

const ContentWrapper = styled.div`
	grid-column: span 1;

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		* {
			font-size: ${pxToRem(12)};
			line-height: ${pxToRem(18)};
		}
	}
`;

const KeyValueCard = (props: Props) => {
	const {
		title,
		value
	} = props;

	return (
		<KeyValueCardWrapper>
			{title && (
				<Title>{title}</Title>
			)}
			{value && (
				<ContentWrapper>
					<PortableText value={value} />
				</ContentWrapper>
			)}
		</KeyValueCardWrapper>
	);
};

export default KeyValueCard;

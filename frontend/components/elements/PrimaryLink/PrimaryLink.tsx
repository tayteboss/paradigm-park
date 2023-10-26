import Link from 'next/link';
import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';

type StyledProps = {
	$isOutline: boolean;
};

type Props = {
	title: string;
	url: string;
	isOutline?: boolean;
};

const LinkTag = styled.a<StyledProps>`
	padding: ${pxToRem(6)} ${pxToRem(20)} ${pxToRem(8)};
	font-size: ${pxToRem(16)};
	line-height: ${pxToRem(11.5)};
	background: ${({ $isOutline }) => $isOutline ? 'transparent' : 'var(--colour-yellow)'};
	color: var(--colour-black);
	border-radius: 100px;
	border: 1px solid var(--colour-black);
	border-color: ${({ $isOutline }) => $isOutline ? 'var(--colour-black)' : 'var(--colour-yellow)'};

	&:hover {
		background: ${({ $isOutline }) => $isOutline ? 'var(--colour-black)' : 'transparent'};
		color: ${({ $isOutline }) => $isOutline ? 'var(--colour-white)' : 'var(--colour-black)'};
		border-color: var(--colour-black);
	}
`;

const PrimaryLink = (props: Props) => {
	const {
		title,
		url,
		isOutline = false
	} = props;

	return (
		<Link href={url} passHref scroll={false}>
			<LinkTag className="primary-link" $isOutline={isOutline}>
				{title && title}
			</LinkTag>
		</Link>
	);
};

export default PrimaryLink;

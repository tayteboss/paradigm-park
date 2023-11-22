import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';

type Props = {
	title: string;
	email: string;
	buttonTitle: string;
};

const EmailCardWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const Title = styled.p`
	@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
		margin-bottom: ${pxToRem(10)};
	}
`;

const LinkTag = styled.a`
	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		&.type-b2 {
			font-size: ${pxToRem(25)};
		}
	}
`;

const EmailCard = (props: Props) => {
	const {
		title,
		email,
		buttonTitle
	} = props;
	
	return (
		<EmailCardWrapper
			className="frame-link--alt"
			data-title={buttonTitle}
		>
			{title && (
				<Title className="type-b2">
					{title}
				</Title>
			)}
			{email && (
				<LinkTag
					className="type-h4"
					href={`mailto: ${email}`}
				>
					{email}
				</LinkTag>
			)}
		</EmailCardWrapper>
	);
};

export default EmailCard;

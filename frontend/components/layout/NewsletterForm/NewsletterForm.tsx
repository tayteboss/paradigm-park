import styled from 'styled-components';
import NewsletterPlayer from './NewsletterPlayer';
import { useState } from 'react';
import { PortableText } from '@portabletext/react';
import pxToRem from '../../../utils/pxToRem';
import { useInView } from 'react-intersection-observer';

type StyledProps = {
	$isFocused?: boolean;
	$isSuccess?: boolean;
	$inView?: boolean;
};

const siteOptions = require('../../../json/siteSettings.json');

const NewsletterFormWrapper = styled.section<StyledProps>`
	position: relative;
	z-index: 2;
	background: var(--colour-white);

	.mux-player-wrapper {
		transform: ${(props) => props.$inView ? 'scale(1)' : 'scale(1.05)'};

		transition: all 5000ms var(--transition-ease);
	}
`;

const Inner = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 2;
	background: var(--colour-cream);
	border-radius: var(--block-border-radius);
	padding: ${pxToRem(60)} ${pxToRem(72)};
	display: flex;
	flex-direction: column;
	align-items: center;

	@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
		width: 80%;
	}

	@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
		opacity: 1 !important;
	}

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		position: relative;
		top: unset;
		left: unset;
		transform: unset;
		width: unset;
		margin: 0 ${pxToRem(15)};
		padding: ${pxToRem(64)} ${pxToRem(27)};
	}

	&.view-element-fade-in {
		transition-delay: 100ms;
	}
`;

const Title = styled.h3`
	text-align: center;
	max-width: ${pxToRem(490)};
	margin: 0 auto ${pxToRem(30)};
`;

const Subtitle = styled.h4`
	text-align: center;
`;

const FormWrapper = styled.div``;

const Form = styled.form<StyledProps>`
	margin-bottom: ${pxToRem(30)};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	.email-input {
		color: var(--colour-black);
		text-align: center;

		@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
			font-size: ${pxToRem(35)};
		}

		&::placeholder {
			color: rgba(0, 0, 0, 0.3);
		}
	}

	.button {
		text-align: center;
		font-size: ${pxToRem(16)};
		padding: ${pxToRem(10)} ${pxToRem(30)};
		border-radius: 100px;
		border: 1px solid rgba(0, 0, 0, 0.3);
		cursor: pointer;
		display: block;
		width: ${pxToRem(150)};
		margin: ${pxToRem(30)} auto 0;
		color: ${(props) => props.$isSuccess ? 'var(--colour-white)' : props.$isFocused ? 'var(--colour-black)' : 'rgba(0, 0, 0, 0.3)'};
		background: ${(props) => props.$isSuccess ? 'rgba(0, 0, 0, 0.3)' : props.$isFocused ? 'var(--colour-yellow)' : 'transparent'};
		border-color: ${(props) => props.$isSuccess ? 'transparent' : props.$isFocused ? 'var(--colour-yellow)' : 'rgba(0, 0, 0, 0.3)'};
		pointer-events: ${(props) => props.$isSuccess ? 'none' : 'auto'};

		transition: all 300ms var(--transition-ease);

		@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
			font-size: ${pxToRem(15)};
			padding: ${pxToRem(9)} ${pxToRem(30)};
			color: ${(props) => props.$isSuccess ? 'var(--colour-white)' : props.$isFocused ? 'var(--colour-black)' : 'var(--colour-black)'};
			background: ${(props) => props.$isSuccess ? 'rgba(0, 0, 0, 0.3)' : props.$isFocused ? 'var(--colour-yellow)' : 'var(--colour-white)'};
			border-color: ${(props) => props.$isSuccess ? 'transparent' : props.$isFocused ? 'var(--colour-yellow)' : 'transparent'};
		}
	}
`;

const FormFooter = styled.div`
	* {
		text-align: center;
		font-family: var(--font-graphik-regular);
		font-size: ${pxToRem(12)};
		line-height: ${pxToRem(11.5)};
	}

	a {
		text-decoration: underline;
	}
`;

const NewsletterForm = () => {
	const {
		newsletterTermsTextRaw,
		newsletterTitle,
		newsletterMedia
	} = siteOptions;

	const [result, setResult] = useState('');
	const [isFocused, setIsFocused] = useState(false);

	const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setResult('Sending...');

		const formData = new FormData(event.currentTarget);

		setTimeout(() => {
			setResult('Success');
		}, 1000);

		// formData.append("access_key", "18a72dbb-7a88-44d0-9b4b-2d73dabe15f6");

		// const res = await fetch("https://api.web3forms.com/submit", {
		// 	method: "POST",
		// 	body: formData
		// }).then((res) => res.json());

		// if (res.success) {
		// 	setResult("Success");
		// } else {
		// 	setResult(res.message);
		// }
	};

	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
		rootMargin: '-50px'
	});

	return (
		<NewsletterFormWrapper
			$inView={inView}
			className="performance"
		>
			<NewsletterPlayer newsletterMedia={newsletterMedia} />
			<Inner
				className={`view-element-fade-in ${
					inView ? 'view-element-fade-in--in-view' : ''
				}`}
			>
				{newsletterTitle && (
					<Title className="type-h3">
						{newsletterTitle}
					</Title>
				)}
				<FormWrapper
					ref={ref}
				>
					<Form
						onSubmit={onSubmit}
						$isFocused={isFocused}
						$isSuccess={result === 'Success'}
					>
						{result === 'Success' ? (
							<Subtitle>Thank you!</Subtitle>
						) : (
							<input
								className="email-input type-h4"
								type="email"
								name="email"
								placeholder="Enter Email"
								required
								onFocus={() => setIsFocused(true)}
								onBlur={() => setIsFocused(false)}
							/>
						)}
						<input
							className="button"
							type="submit"
							value={result === 'Success' ? 'Subscribed' : result === 'Sending...' ? 'Sending' : 'Subscribe'}
						/>
					</Form>
					{newsletterTermsTextRaw && (
						<FormFooter className="content">
							<PortableText value={newsletterTermsTextRaw} />
						</FormFooter>
					)}
				</FormWrapper>
			</Inner>
		</NewsletterFormWrapper>
	);
};

export default NewsletterForm;

import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';
import pxToRem from '../utils/pxToRem';

export const GlobalStyles = createGlobalStyle`
	:root {
		--colour-white: ${theme.colours.white};
		--colour-black: ${theme.colours.black};
		--colour-cream: ${theme.colours.cream};
		--colour-yellow: ${theme.colours.yellow};
		--colour-grey: ${theme.colours.grey};
		--font-graphik-regular: ${theme.fonts.graphikRegular};
		--font-graphik-black: ${theme.fonts.graphikBlack};
		--font-graphik-bold: ${theme.fonts.graphikBold};
		--font-reslindale: ${theme.fonts.reslindale};
		--block-border-radius: ${pxToRem(20)};
		--transition-speed-default: ${theme.transitionSpeed.slow};
		--transition-speed-fast: ${theme.transitionSpeed.fast};
		--transition-speed-extra-fast: ${theme.transitionSpeed.extraFast};
		--transition-speed-slow: ${theme.transitionSpeed.slow};
		--transition-speed-extra-slow: ${theme.transitionSpeed.extraSlow};
		--transition-ease: cubic-bezier(0.65, 0, 0.35, 1);
	}

	* {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		border: none;
		list-style: none;
		background: none;
		outline: none;
		border-radius: 0;
		box-shadow: none;
		font-weight: 100;
	}

	mux-player {
		--media-object-fit: contain;
		--media-object-position: center;
		--controls: none;
		--media-object-fit: cover;
		--media-object-position: center;
	}

	::selection {
		background-color: var(--colour-yellow);
		color: var(--colour-black);
	}

	html {
		scroll-behavior: smooth;
		background: ${theme.colours.white};
		font-size: 16px;

		&.no-scroll {
			overflow-y: hidden;
			
			body {
				overflow-y: hidden;
			}
		}
	}

	body {
		position: relative;
	}

	input,
	textarea,
	select,
	button,
	label,
	body {
		font-family: var(--font-graphik-regular);
		color: var(--colour-black);
		line-height: 1.4;
	}

	strong,
	b {
		font-weight: 900;
	}

	em {
		font-style: italic;
	}

	a {
		text-decoration: none;
		color: var(--colour-black);
	}

	button {
		cursor: pointer;
	}

	h1,
	.type-h1 {
		font-size: ${pxToRem(105)};
		line-height: ${pxToRem(95)};
		font-family: var(--font-graphik-black);
		letter-spacing: -${pxToRem(2.1)};
		text-transform: uppercase;

		@media ${theme.mediaBreakpoints.tabletPortrait}
		{
			font-size: ${pxToRem(45)};
			line-height: ${pxToRem(57)};
			letter-spacing: -${pxToRem(0.9)};
		}

		@media ${theme.mediaBreakpoints.mobile}
		{
			font-size: ${pxToRem(45)};
			line-height: ${pxToRem(57)};
		}
	}

	h2,
	.type-h2 {
		font-size: ${pxToRem(82)};
		line-height: ${pxToRem(96)};
		font-family: var(--font-reslindale);

		@media ${theme.mediaBreakpoints.tabletPortrait}
		{
			font-size: ${pxToRem(45)};
			line-height: ${pxToRem(45)};
		}

		@media ${theme.mediaBreakpoints.mobile}
		{
			font-size: ${pxToRem(45)};
		line-height: ${pxToRem(45)};
		}
	}

	h3,
	.type-h3 {
		font-size: ${pxToRem(60)};
		line-height: ${pxToRem(74)};
		font-family: var(--font-reslindale);

		@media ${theme.mediaBreakpoints.tabletPortrait}
		{
			font-size: ${pxToRem(35)};
			line-height: normal;
		}

		@media ${theme.mediaBreakpoints.mobile}
		{
			font-size: ${pxToRem(35)};
			line-height: normal;
		}
	}

	h4,
	.type-h4 {
		font-size: ${pxToRem(45)};
		line-height: ${pxToRem(54)};
		font-family: var(--font-reslindale);

		@media ${theme.mediaBreakpoints.tabletPortrait}
		{
			font-size: ${pxToRem(25)};
			line-height: normal;
		}

		@media ${theme.mediaBreakpoints.mobile}
		{
			font-size: ${pxToRem(25)};
			line-height: normal;
		}
	}

	h5,
	.type-h5 {
		font-size: ${pxToRem(20)};
		line-height: ${pxToRem(32.6)};
		font-family: var(--font-graphik-black);
		text-transform: uppercase;
		letter-spacing: ${pxToRem(0.1)};

		@media ${theme.mediaBreakpoints.tabletPortrait}
		{
			font-size: ${pxToRem(20)};
			line-height: normal;
		}
	}

	.type-b1 {
		font-size: ${pxToRem(30)};
		line-height: ${pxToRem(30)};
		font-family: var(--font-reslindale);

		@media ${theme.mediaBreakpoints.tabletPortrait}
		{
			font-size: ${pxToRem(21)};
			line-height: ${pxToRem(21)};
		}

		@media ${theme.mediaBreakpoints.mobile}
		{
			font-size: ${pxToRem(21)};
			line-height: ${pxToRem(21)};
		}
	}

	.type-b2 {
		font-size: ${pxToRem(16)};
		line-height: ${pxToRem(25)};
		font-family: var(--font-graphik-regular);

		@media ${theme.mediaBreakpoints.tabletPortrait}
		{
			font-size: ${pxToRem(15)};
			line-height: ${pxToRem(22)};
		}

		@media ${theme.mediaBreakpoints.mobile}
		{
			font-size: ${pxToRem(15)};
			line-height: ${pxToRem(22)};
		}
	}

	.type-b3 {
		font-family: var(--font-graphik-regular);
		font-size: ${pxToRem(12)};
		line-height: ${pxToRem(11.5)};
	}

	button {
		cursor: pointer;
	}

	p,
	.type-p,
	a,
	button,
	div {
		font-size: ${pxToRem(16)};
		line-height: ${pxToRem(17)};
		font-family: var(--font-graphik-regular);

		@media ${theme.mediaBreakpoints.tabletPortrait}
		{
			font-size: ${pxToRem(15)};
			line-height: ${pxToRem(15)};
		}

		@media ${theme.mediaBreakpoints.mobile}
		{
			font-size: ${pxToRem(15)};
			line-height: ${pxToRem(15)};
		}
	}

	.content {
		h1,
		h2,
		h3,
		h4,
		h5,
		h6 {
			margin-bottom: ${pxToRem(20)};
		}

		h5,
		h6 {
			@media ${theme.mediaBreakpoints.tabletPortrait} {
				margin-bottom: ${pxToRem(10)};
			}
		}

		p {
			line-height: ${pxToRem(26)};

			&:not(:last-child) {
				margin-bottom: ${pxToRem(15)};
			}
		}

		a {
			color: var(--colour-black);
			text-decoration: underline;

			transition: all 300ms var(--transition-ease);

			&:hover {
				opacity: 0.3;
			}
		}

		.unknown__pt__mark__super {
			font-size: ${pxToRem(11)};
			vertical-align: super;
			position: relative;
			top: 1px;
		}

		&--mobile-centered {
			@media ${theme.mediaBreakpoints.tabletPortrait} {
				&:first-child {
					h1,
					h2,
					h3 {
						text-align: center;
					}
				}
			}
		}
	}

	.full-height-block {
		height: calc(100vh - 60px);

		@media ${theme.mediaBreakpoints.tabletPortrait} {
			height: calc(100vh - 30px);
		}
	}

	.view-element-fade-in
	{
		opacity: 0;

		transition: opacity ${theme.transitionSpeed.slow} ease;

		&--in-view
		{
			opacity: 1;
		}
	}

	.view-element-bottom-top
	{
		opacity: 0;
		transform: translateY(15px);

		transition: opacity ${theme.transitionSpeed.slow} cubic-bezier(0.65, 0, 0.35, 1), transform ${theme.transitionSpeed.slow} cubic-bezier(0.65, 0, 0.35, 1);

		&--in-view
		{
			opacity: 1;
			transform: translateY(0);
		}
	}

	.view-element-image-scale-up
	{
		opacity: 0;

		transition: all var(--transition-speed-default) var(--transition-ease);

		img  {
			transform: scale(1.05) !important;

			transition: all 5000ms ease;
		}


		&--in-view
		{
			opacity: 1;

			img {
				transform: scale(1) !important;
			}
		}
	}

	.primary-link-style {
		padding: ${pxToRem(9)} ${pxToRem(30)} ${pxToRem(10)};
		display: inline-block;
		font-size: ${pxToRem(16)};
		line-height: ${pxToRem(11.5)};
		background: var(--colour-yellow);
		color: var(--colour-black);
		border-radius: 100px;
		border: 1px solid var(--colour-black);
		border-color: var(--colour-yellow);
		white-space: nowrap;

		transition: all 300ms var(--transition-ease);

		&:hover {
			background: var(--colour-black);
			color: var(--colour-white);
			border-color: var(--colour-black);
		}
	}

	.embla {
		overflow: hidden;
	}
	.embla__container {
		display: flex;
	}
	.embla__slide {
		flex: 0 0 100%;
		min-width: 0;
	}

	.performance {
		-webkit-transform: translateZ(0);
		backface-visibility: hidden;
		perspective: 1000;
		transform: translate3d(0,0,0);
		transform: translateZ(0);
	}

	::placeholder {
		color: currentcolor;
		opacity: 1;
	}

	input[type="search"]::-webkit-search-decoration,
	input[type="search"]::-webkit-search-cancel-button,
	input[type="search"]::-webkit-search-results-button,
	input[type="search"]::-webkit-search-results-decoration {
		-webkit-appearance: none;
	}

	input[type="hidden"] {
		display: none;
	}

	input,
	textarea,
	select {
		padding: 0.125rem 0;
		font-size: ${theme.size.body};
		width: 100%;
		appearance: none;
	}

	input::placeholder,
	textarea::placeholder {
		transition: all var(--transition-speed-default) var(--transition-ease);
	}

	textarea {
		min-height: 8rem;
	}

	label {
		display: inline-block;
	}

	.overflow-hidden {
		overflow: hidden;
	}

	img,
	video {
		max-width: 100%;
		display: block;
		height: auto;
	}

	iframe {
		max-width: 100%;
		display: block;
	}
`;

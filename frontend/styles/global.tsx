import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';
import pxToRem from '../utils/pxToRem';

export const GlobalStyles = createGlobalStyle`
	:root {
		--colour-white: ${theme.colours.white};
		--colour-black: ${theme.colours.black};
		--colour-cream: ${theme.colours.cream};
		--colour-yellow: ${theme.colours.yellow};
		--font-default: ${theme.fonts.default};
		--transition-speed-default: ${theme.transitionSpeed.default};
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
		font-family: var(--font-default);
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
		text-decoration: underline;
		color: var(--colour-black);
		transition: all var(--transition-speed-default) var(--transition-ease);
	}

	button {
		cursor: pointer;
	}

	h1,
	.type-h1 {
		font-size: ${pxToRem(105)};
		line-height: ${pxToRem(105)};

		@media ${theme.mediaBreakpoints.tabletPortrait}
		{
			font-size: ${pxToRem(45)};
			line-height: ${pxToRem(57)};
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
		line-height: ${pxToRem(120)};

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
		line-height: ${pxToRem(120)};

		@media ${theme.mediaBreakpoints.tabletPortrait}
		{
			font-size: ${pxToRem(35)};
			line-height: ${pxToRem(35)};
		}

		@media ${theme.mediaBreakpoints.mobile}
		{
			font-size: ${pxToRem(35)};
			line-height: ${pxToRem(35)};
		}
	}

	h4,
	.type-h4 {
		font-size: ${pxToRem(60)};
		line-height: ${pxToRem(120)};

		@media ${theme.mediaBreakpoints.tabletPortrait}
		{
			font-size: ${pxToRem(25)};
			line-height: ${pxToRem(25)};
		}

		@media ${theme.mediaBreakpoints.mobile}
		{
			font-size: ${pxToRem(25)};
			line-height: ${pxToRem(25)};
		}
	}

	h5,
	.type-h5 {
		font-size: ${pxToRem(20)};
		line-height: ${pxToRem(32.6)};

		@media ${theme.mediaBreakpoints.tabletPortrait}
		{
			font-size: ${pxToRem(20)};
			line-height: ${pxToRem(57)};
		}

		@media ${theme.mediaBreakpoints.mobile}
		{
			font-size: ${pxToRem(20)};
		line-height: ${pxToRem(57)};
		}
	}

	.type-b1 {
		font-size: ${pxToRem(30)};
		line-height: ${pxToRem(30)};

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
		line-height: ${pxToRem(16)};

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

	p,
	.type-p,
	a,
	button,
	div {
		font-size: ${pxToRem(16)};
		line-height: ${pxToRem(16)};

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

	.view-element-fade-in
	{
		opacity: 0;

		transition: opacity ${theme.transitionSpeed.default} ease;

		&--in-view
		{
			opacity: 1;
		}
	}

	.view-element-bottom-top
	{
		opacity: 0;
		transform: translateY(15px);

		transition: opacity ${theme.transitionSpeed.default} cubic-bezier(0.65, 0, 0.35, 1), transform ${theme.transitionSpeed.default} cubic-bezier(0.65, 0, 0.35, 1);

		&--in-view
		{
			opacity: 1;
			transform: translateY(0);
		}
	}

	.view-element-scale-up
	{
		transform: scale(0.95);
		opacity: 0;

		transition: opacity ${theme.transitionSpeed.default} ease, transform ${theme.transitionSpeed.default} ease;

		&--in-view
		{
			opacity: 1;
			transform: scale(1);
		}
	}

	.performance {
		-webkit-transform: translateZ(0);
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

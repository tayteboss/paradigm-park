import { TextIcon } from '@sanity/icons';

export default {
	title: 'Ticker',
	name: 'caseStudyTicker',
	type: 'document',
	icon: TextIcon,
	fields: [
		{
			title: 'Title',
			name: 'title',
			type: 'string',
			description: 'This is an internal reference title.',
			initialValue: 'Ticker'
		},
		{
			title: 'Ticker Content',
			name: 'tickerContent',
			type: 'string',
		},
		{
			title: 'Ticker Link Title',
			name: 'tickerLinkTitle',
			type: 'string',
			description: 'Optional. Link will only display if Title and Link (Internal or External) are both provided.'
		},
		{
			title: 'Ticker External Link',
			name: 'tickerButtonExternalLink',
			type: 'url',
			description: 'Optional. Please use either Internal or External link if link is required.',
			hidden: ({ parent, value }) => !value && !!parent?.internal,
		},
		{
			title: 'Ticker Internal Link',
			name: 'tickerInternalLink',
			type: 'reference',
			to: [{ type: 'aboutPage' }, { type: 'learnPage' }, { type: 'workPage' }, { type: 'homePage' }, { type: 'contactPage' }],
			description: 'Optional. Please use either Internal or External link if link is required.',
			hidden: ({ parent, value }) => !value && !!parent?.external,
		},
	]
}
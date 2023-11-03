export default {
	title: 'Learn Page',
	name: 'learnPage',
	type: 'document',
	fields: [
		{
			title: 'Reference Title',
			name: 'referenceTitle',
			type: 'string',
		},
		{
			title: 'Slug',
			name: 'slug',
			type: 'slug',
			description: 'NOTE: Please do not change this value.',
			options: {
				source: 'referenceTitle',
				maxLength: 200,
				slugify: input => input
						.toLowerCase()
						.replace(/\s+/g, '-')
						.slice(0, 200)
			},
			validation: Rule => Rule.required()
		},
		{
			title: 'SEO Title',
			name: 'seoTitle',
			type: 'string',
			description: 'This is the SEO title that appears in search engines.'
		},
		{
			title: 'SEO Description',
			name: 'seoDescription',
			type: 'string',
			description: 'This is the SEO description that appears in search engines.'
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
		{
			title: 'Issue Articles',
			name: 'issueArticles',
			type: 'array',
			of: [
				{
					type: 'reference',
					to: [{ type: 'issue' }]
				}
			]
		},
	]
}
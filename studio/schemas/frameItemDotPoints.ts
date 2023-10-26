export default {
	title: 'Frame Item Dot Points',
	name: 'frameItemDotPoints',
	type: 'document',
	fields: [
		{
			title: 'Title',
			name: 'string',
			type: 'string'
		},
		{
			title: 'Description',
			name: 'description',
			type: 'string'
		},
		{
			title: 'Dot Points',
			name: 'dotPoints',
			type: 'array',
			of: [
				{
					type: 'string'
				}
			]
		},
		{
			title: 'Link Title',
			name: 'linkTitle',
			type: 'string',
			description: 'Optional'
		},
		{
			title: 'Internal Link',
			name: 'internal',
			type: 'reference',
			description: 'Optional',
			to: [
				{ type: 'aboutPage' },
				{ type: 'learnPage' },
				{ type: 'workPage' },
				{ type: 'homePage' },
				{ type: 'contactPage' }
			],
			hidden: ({ parent, value }) => !value && !!parent?.external,
		},
	]
}
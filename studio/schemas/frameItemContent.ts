export default {
	title: 'Frame Item Content',
	name: 'frameItemContent',
	type: 'document',
	fields: [
		{
			title: 'Content',
			name: 'content',
			type: 'array',
			of: [
				{
					type: 'block',
					styles: [
						{title: 'Normal', value: 'normal'},
						{title: 'H1', value: 'h1'},
						{title: 'H2', value: 'h2'},
						{title: 'H3', value: 'h3'},
						{title: 'H4', value: 'h4'},
						{title: 'H5', value: 'h5'},
					],
					lists: [],
					marks: {
						decorators: [
							{title: 'Strong', value: 'strong'},
							{title: 'Emphasis', value: 'em'}
						],
					}
				},
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
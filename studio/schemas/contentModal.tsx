export default {
	title: 'Content Modal',
	name: 'contentModal',
	type: 'document',
	fields: [
		{
			title: 'Title',
			name: 'title',
			type: 'string',
		},
		{
			title: 'Button Title',
			name: 'buttonTitle',
			type: 'string',
		},
		{
			title: 'Button Superscript Number',
			name: 'buttonSuperscriptNumber',
			type: 'string',
		},
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
							{title: 'Emphasis', value: 'em'},
						],
					}
				},
				{
					type: 'image',
					fields: [
						{
							type: 'text',
							name: 'alt',
							title: 'Alternative text',
						}
					]
				},
			]
		}
	]
}
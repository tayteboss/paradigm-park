export default {
	title: 'Issue',
	name: 'issue',
	type: 'document',
	fields: [
		{
			title: 'Title',
			name: 'title',
			type: 'string',
		},
		{
			title: 'Slug',
			name: 'slug',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 200,
				slugify: input => input
						.toLowerCase()
						.replace(/\s+/g, '-')
						.slice(0, 200)
			},
			validation: Rule => Rule.required()
		},
		{
			title: 'Project Color',
			name: 'projectColor',
			type: 'color'
		},
		{
			title: 'Hero Image',
			name: 'heroImage',
			type: 'image',
		},
		{
			title: 'Excerpt',
			name: 'excerpt',
			type: 'string',
		},
		{
			title: 'In Progress',
			name: 'inProgress',
			type: 'boolean',
		},
		{
			title: 'Issue Number',
			name: 'issueNumber',
			type: 'string',
		},
		{
			title: 'Issue Prefix',
			name: 'issuePrefix',
			type: 'string',
			description: 'e.g. Issue or Collection'
		},
		{
			title: 'CTA Link Title',
			name: 'ctaLinkTitle',
			type: 'string',
		},
		{
			title: 'CTA Link',
			name: 'external',
			type: 'url',
			hidden: ({ parent, value }) => !value && !!parent?.internal,
		},
		{
			title: 'Introduction Heading',
			name: 'introductionHeading',
			type: 'string',
		},
		{
			title: 'Introduction Sub Heading',
			name: 'introductionSubHeading',
			type: 'string',
		},
		{
			title: 'Introduction Content',
			name: 'introductionContent',
			type: 'array',
			of: [
				{
					type: 'block',
					styles: [
						{title: 'Normal', value: 'normal'},
					],
					lists: [],
					marks: {
						decorators: [],
					}
				}
			]
		},
		{
			name: 'imageGallery',
			title: 'Image Gallery',
			type: 'array',
			of: [{ type: 'issueImageBlock' }], // Reference to the imageBlock type
		},
		{
			title: 'Inside the Issue Heading',
			name: 'insideTheIssueHeading',
			type: 'string',
			initialValue: 'Inside the Issue'
		},
		{
			title: 'Inside the Issue Content',
			name: 'insideTheIssueContent',
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
			title: 'Inside the Issue Block Colour',
			name: 'insideTheIssueBlockColour',
			type: 'color',
		},
		{
			title: 'Related Issue',
			name: 'relatedIssue',
			type: 'array',
			of: [
				{
					type: 'reference',
					to: [{ type: 'issue' }]
				}
			],
			validation: Rule => Rule.max(3).min(2),
			description: 'Please add 2 or 3 related articles'
		},
	],
}
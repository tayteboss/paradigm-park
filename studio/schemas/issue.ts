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
			of: [
				{
					type: 'object',
					name: 'imageBlock',
					title: 'Image Block',
					fields: [
						{
							name: 'imageType',
							title: 'Image Type',
							type: 'string',
							options: {
								list: ['Single Image', 'Two Images Side by Side'],
							},
						},
						{
							name: 'singleImage',
							title: 'Single Image',
							type: 'image',
							description: 'Select a single image',
							hidden: ({ parent }) => parent?.imageType !== 'Single Image',
						},
						{
							name: 'twoImages',
							title: 'Two Images',
							type: 'array',
							of: [{ type: 'image' }],
							description: 'Select two images to display side by side',
							hidden: ({ parent }) => parent?.imageType !== 'Two Images Side by Side',
							validation: (Rule) =>
								Rule.custom((images) => {
								if (images && images.length !== 2) {
									return 'You must select exactly two images for Two Images Side by Side.';
								}
									return true;
								}),
						},
					],
				},
			],
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
		}
	]
}
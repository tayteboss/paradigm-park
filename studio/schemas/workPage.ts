export default {
	title: 'Work Page',
	name: 'workPage',
	type: 'document',
	fields: [
		{
			title: 'Reference Title',
			name: 'referenceTitle',
			type: 'string',
			description: 'This is an internal reference title.'
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
			title: 'Hero Title',
			name: 'heroTitle',
			type: 'string',
		},
		{
			title: 'Hero Color',
			name: 'heroColor',
			type: 'color',
		},
		{
			title: 'Case Studies',
			name: 'activeCaseStudies',
			type: 'array',
			of: [
				{
					type: 'reference',
					to: [{ type: 'caseStudy' }]
				}
			]
		},
		{
			title: "In Progress Title",
			name: "inProgressTitle",
			type: "array",
			of: [
				{
					type: "block",
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
						decorators: [],
						annotations: [],
					},
				},
			]
		},
		{
			title: 'In Progress Case Studies',
			name: 'inProgressCaseStudies',
			type: 'array',
			of: [
				{
					type: 'reference',
					to: [{ type: 'caseStudy' }]
				}
			]
		},
	]
}
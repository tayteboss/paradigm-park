export default {
	title: 'About Page',
	name: 'aboutPage',
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
			title: 'Hero Image',
			name: 'heroImage',
			type: 'image',
		},
		{
			title: 'Hero Title',
			name: 'heroTitle',
			type: 'string'
		},
		{
			title: 'Frame Items',
			name: 'frameItems',
			type: 'array',
			of: [
				{
					type: 'reference',
					to: [{ type: 'frameItem' }]
				}
			]
		},
	]
}
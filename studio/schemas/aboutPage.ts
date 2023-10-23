export default {
	title: 'About Page',
	name: 'aboutPage',
	type: 'document',
	fields: [
		{
			title: 'Title',
			name: 'title',
			type: 'string',
			description: 'This is an internal reference title.'
		},
		{
			title: 'Slug',
			name: 'slug',
			type: 'slug',
			description: 'NOTE: Please do not change this value.',
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
			title: 'Hero Image',
			name: 'heroImage',
			type: 'image',
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
export default {
	title: 'Contact Page',
	name: 'contactPage',
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
			title: 'Title',
			name: 'title',
			type: 'string',
		},
		{
			title: 'CTA',
			name: 'cta',
			type: 'string',
		},
		{
			title: 'Hero Color',
			name: 'heroColor',
			type: 'color'
		}
	]
}
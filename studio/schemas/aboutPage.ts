export default {
	title: 'About Page',
	name: 'aboutPage',
	type: 'document',
	fields: [
		{
			title: 'Title',
			name: 'title',
			type: 'string',
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
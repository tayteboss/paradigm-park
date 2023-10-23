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
	]
}
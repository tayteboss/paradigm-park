export default {
	title: 'Title Blocks',
	name: 'titleBlocks',
	type: 'document',
	fields: [
		{
			title: 'Title',
			name: 'title',
			type: 'string',
			description: 'This is an internal reference title.'
		},
		{
			title: 'Block',
			name: 'titleBlock',
			type: 'array',
			of: [{type: 'titleBlock'}]
		}
	]
}
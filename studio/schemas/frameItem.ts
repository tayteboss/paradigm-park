export default {
	title: 'Frame Item',
	name: 'frameItem',
	type: 'document',
	fields: [
		{
			title: 'Title',
			name: 'title',
			type: 'string',
		},
		{
			title: 'Sub Title',
			name: 'subTitle',
			type: 'string',
		},
		{
			title: 'Image',
			name: 'image',
			type: 'image',
			description: 'Please either use an image or video',
		},
		{
			title: 'Video',
			name: 'video',
			type: "mux.video",
			description: "Please either use an image or video"
		},
		{
			title: 'Content Block',
			name: 'contentBlock',
			type: 'array',
			of: [
				{
					type: 'reference',
					to: [{ type: 'frameItemContent' }, { type: 'frameItemDotPoints' }]
				}
			]
		},
	]
}
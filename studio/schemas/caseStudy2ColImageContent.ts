import { BlockContentIcon } from '@sanity/icons';

export default {
	title: 'Two Column (Image & Content)',
	name: 'caseStudy2ColImageContent',
	type: 'document',
	icon: BlockContentIcon,
	fields: [
		{
			title: 'Title',
			name: 'title',
			type: 'string',
			description: 'This is an internal reference title.',
			initialValue: 'Two Column (Image & Content)'
		},
		{
			title: 'Image',
			name: 'image',
			type: 'image',
			description: 'Please use a portrait image for the best result.'
		},
		{
			title: 'Top Title',
			name: 'topTitle',
			type: 'string',
		},
		{
			title: 'Center Title',
			name: 'centerTitle',
			type: 'string',
		},
		{
			title: "Content",
			name: "content",
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
						decorators: [
							{title: 'Strong', value: 'strong'},
							{title: 'Emphasis', value: 'em'}
						],
					}
				},
			]
		},
	]
}
import { ImageIcon } from '@sanity/icons';

export default {
	title: 'One Column (Image)',
	name: 'caseStudy1ColImage',
	type: 'document',
	icon: ImageIcon,
	fields: [
		{
			title: 'Title',
			name: 'title',
			type: 'string',
			description: 'This is an internal reference title.',
			initialValue: 'One Column (Image)'
		},
		{
			title: 'Use tall image style',
			name: 'useTallImageStyle',
			type: 'boolean',
		},
		{
			title: 'Image',
			name: 'image',
			type: 'image',
		},
		{
			title: 'Image Alt Text',
			name: 'imageAltText',
			type: 'string',
		},
	]
}
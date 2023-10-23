import { ImagesIcon } from '@sanity/icons';

export default {
	title: 'Two Column (Image)',
	name: 'caseStudy2ColImage',
	type: 'document',
	icon: ImagesIcon,
	fields: [
		{
			title: 'Title',
			name: 'title',
			type: 'string',
			description: 'This is an internal reference title.',
			initialValue: 'Two Column (Image)'
		},
		{
			title: 'Use tall image style',
			name: 'useTallImageStyle',
			type: 'boolean',
		},
		{
			title: 'Left Column Image',
			name: 'leftColImage',
			type: 'image',
		},
		{
			title: 'Left Column Image Alt Text',
			name: 'leftColImageAltText',
			type: 'string',
		},
		{
			title: 'Right Column Image',
			name: 'rightColImage',
			type: 'image',
		},
		{
			title: 'Right Column Image Alt Text',
			name: 'rightColImageAltText',
			type: 'string',
		},
	]
}
import { ImagesIcon } from '@sanity/icons';

export default {
	title: 'Image Gallery',
	name: 'caseStudyImageGallery',
	type: 'document',
	icon: ImagesIcon,
	fields: [
		{
			title: 'Title',
			name: 'title',
			type: 'string',
			description: 'This is an internal reference title.',
			initialValue: 'Image Gallery'
		},
		{
			title: 'Image Gallery',
			name: 'imageGallery',
			type: 'array',
			of: [
				{
					type: 'image',
				}
			]
		}
	]
}
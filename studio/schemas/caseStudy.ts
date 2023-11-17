export default {
	title: 'Case Study',
	name: 'caseStudy',
	type: 'document',
	fields: [
		{
			title: 'Title',
			name: 'title',
			type: 'string',
		},
		{
			title: 'Slug',
			name: 'slug',
			type: 'slug',
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
			title: 'Project Color',
			name: 'projectColor',
			type: 'color'
		},
		{
			title: 'Tags',
			name: 'tags',
			type: 'array',
			of: [{type: 'string'}],
		},
		{
			title: 'Excerpt',
			name: 'excerpt',
			type: 'string',
		},
		{
			title: 'In Progress',
			name: 'inProgress',
			type: 'boolean',
		},
		{
			title: 'Hero Image',
			name: 'heroImage',
			type: 'image',
			description: 'Please use a landscape image for the best result.'
		},
		{
			title: 'Thumbnail Image',
			name: 'thumbnailImage',
			type: 'image',
			description: 'This image will display on the In Progress card module. Please use a PNG masked image.'
		},
		{
			title: 'Desktop Hero Mask',
			name: 'desktopHeroMask',
			type: 'image',
			description: 'Please use a SVG with a transparent shape mask. The image should also be 16:9 ratio for the best result.',
		},
		{
			title: 'Mobile Hero Mask',
			name: 'mobileHeroMask',
			type: 'image',
			description: 'Please use a SVG with a transparent shape mask. The image should also be 9:16 ratio for the best result.',
		},
		{
			title: 'Page Builder',
			name: 'pageBuilder',
			type: 'array',
			of: [
				{type: 'caseStudyTitleBlock'},
				{type: 'caseStudy2ColContentList'},
				{type: 'caseStudy2ColContent'},
				{type: 'caseStudy2ColImage'},
				{type: 'caseStudy1ColImage'},
				{type: 'caseStudyStatistics'},
				{type: 'caseStudy2ColImageContent'},
				{type: 'caseStudyImageGallery'},
				{type: 'caseStudyTicker'},
			]
		},
		{
			title: 'Related Case Study',
			name: 'relatedCaseStudy',
			type: 'reference',
			to: [{type: 'caseStudy'}]
		},
		{
			title: 'Work In Progress External Link',
			name: 'workInProgressExternalLink',
			type: 'url',
			description: 'This link is shown on the Work In Progress section on the Work Page'
		}
	]
}
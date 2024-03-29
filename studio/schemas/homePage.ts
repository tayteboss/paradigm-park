export default {
	title: 'Home Page',
	name: 'homePage',
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
			title: 'SEO Title',
			name: 'seoTitle',
			type: 'string',
			description: 'This is the SEO title that appears in search engines.'
		},
		{
			title: 'SEO Description',
			name: 'seoDescription',
			type: 'string',
			description: 'This is the SEO description that appears in search engines.'
		},
		{
			title: 'Logo Placement',
			name: 'logoPlacement',
			type: "string",
			options: {
				list: [
				{ title: "Top", value: "flex-start" },
				{ title: "Center", value: "center" },
				{ title: "Bottom", value: "flex-end" },
				],
			},
			validation: (Rule) => Rule.required(),
		},
		{
			title: 'Hero Media',
			name: 'heroMedia',
			type: "mux.video",
			description: 'Please only use a video or an image, not both'
		},
		{
			title: 'Mobile Hero Media',
			name: 'mobileHeroMedia',
			type: "mux.video",
			description: 'Please only use a video or an image, not both'
		},
		{
			title: 'Hero Image',
			name: 'heroImage',
			type: 'image',
			description: 'Please only use a video or an image, not both'
		},
		{
			title: 'Mobile Hero Image',
			name: 'mobileHeroImage',
			type: 'image',
			description: 'Please only use a video or an image, not both'
		},
		{
			title: 'Title Blocks',
			name: 'titleBlocks',
			type: 'reference',
			to: [{ type: 'titleBlocks' }],
		},
		{
			title: 'Case Studies',
			name: 'caseStudies',
			type: 'array',
			of: [
				{
					type: 'reference',
					to: [{ type: 'caseStudy' }]
				}
			]
		},
		{
			title: 'Explore Projects Title',
			name: 'exploreProjectsTitle',
			type: 'string',
		},
		{
			title: 'Explore Projects Description',
			name: 'exploreProjectsDescription',
			type: 'string',
		},
		{
			title: 'Explore Projects Button Title',
			name: 'exploreProjectsButtonTitle',
			type: 'string',
		},
		{
			title: 'Explore Projects Background Image',
			name: 'exploreProjectsBackgroundImage',
			type: 'image',
		},
		{
			title: 'Explore Projects Background Shape',
			name: 'exploreProjectsBackgroundShape',
			type: 'image',
			description: 'Please use a transparant SVG'
		},
		{
			title: 'Explore Learn Title',
			name: 'exploreLearnTitle',
			type: 'string',
		},
		{
			title: 'Explore Learn Description',
			name: 'exploreLearnDescription',
			type: 'string',
		},
		{
			title: 'Explore Learn Button Title',
			name: 'exploreLearnButtonTitle',
			type: 'string',
		},
		{
			title: 'Explore Learn Background Color',
			name: 'exploreLearnBackgroundColor',
			type: 'color',
		},
		{
			title: 'Explore Learn Background Shape',
			name: 'exploreLearnBackgroundShape',
			type: 'image',
			description: 'Please use a transparant SVG'
		},
	]
}
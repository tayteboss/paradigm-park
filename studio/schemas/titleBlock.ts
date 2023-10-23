export default {
	title: 'Title Block',
	name: 'titleBlock',
	type: 'document',
	fields: [
		{
			title: 'Title',
			name: 'title',
			type: 'string',
		},
		{
			title: "Link Title",
			name: "linkTitle",
			type: "string",
		},
		{
			title: "Internal Link",
			name: "internal",
			type: "reference",
			to: [{ type: "aboutPage" }, { type: "learnPage" }, { type: "workPage" }, { type: "homePage" }],
			hidden: ({ parent, value }) => !value && !!parent?.external,
		},
	]
}
export default {
	name: "customUrl",
	title: "Custom URL",
	type: "object",
	fields: [
		{
			title: "Title",
			name: "title",
			type: "string",
		},
		{
			title: "URL",
			name: "external",
			type: "url",
			hidden: ({ parent, value }) => !value && !!parent?.internal,
		},
		{
			name: "internal",
			type: "reference",
			to: [{ type: "aboutPage" }, { type: "learnPage" }, { type: "workPage" }, { type: "homePage" }],
			hidden: ({ parent, value }) => !value && !!parent?.external,
		},
	],
  };
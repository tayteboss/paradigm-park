export default {
	title: "Site Settings",
	name: "siteSettings",
	type: "document",
	fields: [
		{
			title: "Instagram URL",
			name: "instagramUrl",
			type: "url"
		},
		{
			title: "New Business and General Email",
			name: "generalEmail",
			type: "string"
		},
		{
			title: "Collaborations and Writing Submissions Email",
			name: "collaborationsEmail",
			type: "string"
		},
		{
			title: "Address",
			name: "address",
			type: "string"
		},
		{
			title: "Address URL",
			name: "addressUrl",
			type: "url"
		},
		{
			title: "Newsletter Title",
			name: "newsletterTitle",
			type: "string"
		},
		{
			title: "Newsletter Terms Text",
			name: "newsletterTermsText",
			type: "array",
			of: [
				{
					type: "block",
					styles: [
						{title: 'Normal', value: 'normal'},
					],
					lists: [],
					marks: {
						decorators: [],
					}
				}
			]
		},
	]
}
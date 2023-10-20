export default {
	title: "Site Settings",
	name: "siteSettings",
	type: "document",
	fields: [
		{
			title: "SEO Description",
			name: "seoDescription",
			type: "string"
		},
		{
			title: "Instagram URL",
			name: "instagramUrl",
			type: "url"
		},
		{
			title: "Email",
			name: "email",
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
					type: "block"
				}
			]
		},
	]
}
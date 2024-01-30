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
			title: "New Business and General Email Button Title",
			name: "generalEmailButtonTitle",
			type: "string"
		},
		{
			title: "Collaborations and Writing Submissions Email",
			name: "collaborationsEmail",
			type: "string"
		},
		{
			title: "Collaborations and Writing Submissions Email Button Title",
			name: "collaborationsEmailButtonTitle",
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
			title: "Address Button Title",
			name: "addressUrlButtonTitle",
			type: "string"
		},
		{
			title: "Newsletter Title",
			name: "newsletterTitle",
			type: "string"
		},
		{
			title: 'Newsletter Media',
			name: 'newsletterMedia',
			type: "mux.video",
			description: 'Please only use a video or an image, not both'
		},
		{
			title: 'Newsletter Image',
			name: 'newsletterImage',
			type: 'image',
			description: 'Please only use a video or an image, not both'
		},
	]
}
export default {
	title: 'Image Block',
	name: 'issueImageBlock',
	type: 'document',
	fields: [
	  {
		name: 'imageType',
		title: 'Image Type',
		type: 'string',
		options: {
		  list: ['Single Image', 'Two Images Side by Side'],
		},
	  },
	  {
		name: 'singleImage',
		title: 'Single Image',
		type: 'image',
		description: 'Select a single image',
		options: {
		  hotspot: true, // Optional, if you want to enable hotspot for single images
		},
		hidden: ({ parent }) => parent?.imageType !== 'Single Image',
	  },
	  {
		name: 'twoImages',
		title: 'Two Images',
		type: 'array',
		of: [{ type: 'image' }], // Reference to the Sanity image type
		description: 'Select two images to display side by side',
		hidden: ({ parent }) => parent?.imageType !== 'Two Images Side by Side',
		validation: (Rule) =>
		  Rule.custom((images) => {
			if (images && images.length !== 2) {
			  return 'You must select exactly two images for Two Images Side by Side.';
			}
			return true;
		  }),
	  },
	],
};

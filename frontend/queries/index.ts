export const siteSettingsQueryString = `
	*[_type == 'siteSettings'][0] {
		...,
	}
`;

export const homePageQueryString = `
	*[_type == 'homePage'][0] {
		...,
		heroMedia {
			asset->
		},
		titleBlocks-> {
			...,
			titleBlock[] {
				...,
				internal->
			}
		}
	}
`;

export const aboutPageQueryString = `
	*[_type == 'aboutPage'][0] {
		...,
	}
`;

export const contactPageQueryString = `
	*[_type == 'contactPage'][0] {
		...,
	}
`;
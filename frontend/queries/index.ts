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
		},
		caseStudies[]-> {
			...,
			"thumbnailImageUrl": thumbnailImage.asset->url,
		},
		"exploreLearnBackgroundShape": exploreLearnBackgroundShape.asset->url,
		"exploreProjectsBackgroundImage": exploreProjectsBackgroundImage.asset->url,
		"exploreProjectsBackgroundShape": exploreProjectsBackgroundShape.asset->url,

	}
`;

export const aboutPageQueryString = `
	*[_type == 'aboutPage'][0] {
		...,
		frameItems[]-> {
			...,
			"contentBlock": contentBlock[]-> {
				...,
				frameItemContent-> {...},
				frameItemDotPoints-> {...}
			},
			"image": image.asset->url,
		},
	}
`;

export const contactPageQueryString = `
	*[_type == 'contactPage'][0] {
		...,
	}
`;
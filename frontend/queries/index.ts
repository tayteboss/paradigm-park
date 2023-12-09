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
		"heroImage": heroImage.asset->url,
		frameItems[]-> {
			...,
			"contentBlock": contentBlock[]-> {
				...,
				frameItemContent-> {
					...,
				},
				frameItemDotPoints-> {
					...,
				},
				internal->
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

export const learnPageQueryString = `
	*[_type == 'learnPage'][0] {
		...,
		issueArticles[]-> {
			...,
			"heroImage": heroImage.asset->url,
		},
		"tickerInternalLink": tickerInternalLink->,
	}
`;

export const workPageQueryString = `
	*[_type == 'workPage'][0] {
		...,
		activeCaseStudies[]-> {
			...,
			"thumbnailImageUrl": thumbnailImage.asset->url,
		},
		inProgressCaseStudies[]-> {
			...,
			"thumbnailImageUrl": thumbnailImage.asset->url,
			"workInProgressExternalLink": workInProgressExternalLink
		},
	}
`;
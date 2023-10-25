export type MediaType = {
	media: [
		{
			webmVideoFile: {
				url: string;
			};
			mp4VideoFile: {
				url: string;
			};
			placeholderImage: {
				url: string;
			}
		}
	];
};

export type TransitionsType = {
	hidden: {
		opacity: number;
		transition: {
			duration: number;
		}
	}
	visible: {
		opacity: number;
		transition: {
			duration: number;
			delay?: number
		}
	}
};

export type ColorType = {
	hex: string;
};

export type ImageType = {
	asset: {
		url: string;
	}
};

export type MuxVideoType = {
	asset: {
		playbackId: string;
	}
}

export type CaseStudyType = {
	title: string;
}

export type SlugType = {
	current: string;
}

export type HomePageType = {
	seoDescription: string;
	exploreProjectsButtonTitle: string;
	exploreLearnBackgroundColor: ColorType;
	exploreLearnBackgroundShape: ImageType;
	exploreLearnTitle: string;
	exploreProjectsTitle: string;
	exploreProjectsBackgroundImage: ImageType;
	exploreProjectsDescription: string;
	titleBlocks: {};
	exploreProjectsBackgroundShape: ImageType;
	exploreLearnDescription: string;
	caseStudies: CaseStudyType[];
	exploreLearnButtonTitle: string;
	seoTitle: string;
	slug: SlugType;
}

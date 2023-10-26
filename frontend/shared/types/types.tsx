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

export type TitleBlockType = {
	title: string;
	linkTitle: string;
	internal: {
		slug: {
			current: string;
		}
	}
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
	titleBlocks: {
		title: string;
		titleBlock: TitleBlockType[];
	};
	exploreProjectsBackgroundShape: ImageType;
	exploreLearnDescription: string;
	caseStudies: CaseStudyType[];
	exploreLearnButtonTitle: string;
	seoTitle: string;
	slug: SlugType;
	heroMedia: MuxVideoType;
}

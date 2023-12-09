export type TransitionsType = {
	hidden: {
		opacity: number;
		transition: {
			duration: number;
		};
	};
	visible: {
		opacity: number;
		transition: {
			duration: number;
			delay?: number;
		};
	};
};

export type ColorType = {
	hex: string;
};

export type ImageType = {
	asset: {
		url: string;
	};
};

export type MuxVideoType = {
	asset: {
		playbackId: string;
	};
};

export type PageBuilderType = {
	_type: string;
	_rawChildren: any[];
};

export type CaseStudyType = {
	title?: string;
	desktopHeroMask?: string;
	excerpt?: string;
	heroImage?: string;
	inProgress?: boolean;
	mobileHeroMask?: string;
	pageBuilder?: any;
	projectColor?: ColorType;
	relatedCaseStudy?: CaseStudyType;
	slug?: SlugType;
	tags?: string[];
	thumbnailImage?: ImageType;
	thumbnailImageUrl?: string;
	index?: number;
	isLastBlock?: boolean;
	isFirstBlock?: boolean;
	workInProgressExternalLink?: string;
};

export type SlugType = {
	current: string;
};

export type TitleBlockType = {
	title: string;
	linkTitle: string;
	internal: {
		slug: {
			current: string;
		};
	};
	isFirstBlock?: boolean;
	isLastBlock?: boolean;
};

export type HomePageType = {
	seoDescription: string;
	exploreProjectsButtonTitle: string;
	exploreLearnBackgroundColor: ColorType;
	exploreLearnBackgroundShape: string;
	exploreLearnTitle: string;
	exploreProjectsTitle: string;
	exploreProjectsBackgroundImage: string;
	exploreProjectsDescription: string;
	titleBlocks: {
		title: string;
		titleBlock: TitleBlockType[];
	};
	exploreProjectsBackgroundShape: string;
	exploreLearnDescription: string;
	caseStudies: CaseStudyType[];
	exploreLearnButtonTitle: string;
	seoTitle: string;
	slug: SlugType;
	heroMedia: MuxVideoType;
};

export type FrameItemType = {
	title: string;
	subTitle: string;
	image: string;
	contentBlock: any;
	setContent?: any;
	index: number;
	isRHS?: boolean;
};

export type AboutPageType = {
	seoDescription: string;
	seoTitle: string;
	slug: SlugType;
	frameItems: FrameItemType[];
	heroImage: string;
	heroTitle: string;
};

export type IssueType = {
	ctaLinkTitle: string;
	excerpt: string;
	external: string;
	heroImage: string;
	inProgress: boolean;
	insideTheIssueBlockColour: ColorType;
	insideTheIssueContent: [];
	insideTheIssueHeading: string;
	introductionContent: [];
	introductionHeading: string;
	introductionSubHeading: string;
	imageGallery: any;
	projectColor: ColorType;
	slug: SlugType;
	title: string;
	isFirstBlock?: boolean;
	isLastBlock?: boolean;
	index?: number;
	issueNumber: string;
	issuePrefix: string;
	relatedIssue: IssueType[];
};

export type LearnPageType = {
	seoDescription: string;
	seoTitle: string;
	slug: SlugType;
	tickerContent: string;
	tickerButtonExternalLink: string;
	tickerInternalLink: SlugType;
	tickerLinkTitle: string;
	issueArticles: IssueType[];
	relatedIssueHeading: string;
};

export type ContactPageType = {
	seoDescription: string;
	seoTitle: string;
	slug: SlugType;
	cta: string;
	heroColor: ColorType;
	title: string;
	newBusinessAndGeneralEnquiriesTitle: string;
	collaborationsAndWritingSubmissionsTitle: string;
};

export type SiteSettingsType = {
	address: string;
	addressUrl: string;
	collaborationsEmail: string;
	generalEmail: string;
	instagramUrl: string;
	newsletterMedia: MuxVideoType;
	newsletterTitle: string;
	generalEmailButtonTitle: string;
	collaborationsEmailButtonTitle: string;
};

export type WorkPageType = {
	activeCaseStudies: CaseStudyType[];
	heroColor: ColorType;
	heroTitle: string;
	inProgressCaseStudies: CaseStudyType[];
	inProgressTitle: [];
	seoDescription: string;
	seoTitle: string;
	slug: SlugType;
};

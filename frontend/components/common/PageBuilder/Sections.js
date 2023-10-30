import CaseStudy1ColImage from "../../pageBuilder/CaseStudy1ColImage";
import CaseStudy2ColContent from "../../pageBuilder/CaseStudy2ColContent";
import CaseStudy2ColContentList from "../../pageBuilder/CaseStudy2ColContentList";
import CaseStudy2ColImage from "../../pageBuilder/CaseStudy2ColImage";
import CaseStudy2ColImageContent from "../../pageBuilder/CaseStudy2ColImageContent";
import CaseStudy2ColImageList from "../../pageBuilder/CaseStudy2ColImageList";
import CaseStudyImageGallery from "../../pageBuilder/CaseStudyImageGallery";
import CaseStudyStatistics from "../../pageBuilder/CaseStudyStatistics";
import CaseStudyTicker from "../../pageBuilder/CaseStudyTicker";
import CaseStudyTitleBlock from "../../pageBuilder/CaseStudyTitleBlock";

const availableSections = {
	caseStudyTitleBlock: CaseStudyTitleBlock,
	caseStudy2ColContentList: CaseStudy2ColContentList,
	caseStudy2ColImageList: CaseStudy2ColImageList,
	caseStudy1ColImage: CaseStudy1ColImage,
	caseStudy2ColImage: CaseStudy2ColImage,
	caseStudy2ColContent: CaseStudy2ColContent,
	caseStudyStatistics: CaseStudyStatistics,
	caseStudy2ColImageContent: CaseStudy2ColImageContent,
	caseStudyImageGallery: CaseStudyImageGallery,
	caseStudyTicker: CaseStudyTicker,
};

const Sections = ({ sections }) => {
	return (
		<>
			{sections && sections.map((section) => {
				if(!availableSections[section._type]) {
					return <div key={Math.random() * 10000}>No section found for {section._type}</div>
				} else {
					const Component = availableSections[section._type];
					return <Component key={section.id} {...section} />
				}
			})}
		</>
	);
};

export default Sections;
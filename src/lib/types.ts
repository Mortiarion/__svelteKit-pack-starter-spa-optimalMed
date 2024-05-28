export type BreadcrumbType = {
	bredCrumbsHead: string;
	bredCrumbsCategories: string;
};

export type SectionTitleTwoParagraphType = {
	title: string;
	subtitle: string;
	paragraph__one: string;
	paragraph__two: string;
};

export type SectionTitleParListTwoParType = {
	title: string;
	subtitle: string;
	paragraph__one: string;
	list: { text: string }[];
	paragraph__two: string;
	paragraph__three: string;
};

export type SectionTitleParListParType = {
	title: string;
	subtitle: string;
	paragraph__one: string;
	list: { text: string }[];
	paragraph__two: string;
};

export type SectionTitleParListParTypeTwo = {
	title: string;
	subtitle: string;
	paragraph__one: string;
	list: { text: string }[];
	paragraph__two: string;
};

export type SectionImageType = {
	image: {
		src: string;
		alt: string;
	};
	source: {
		srcset: string;
		type: string;
	};
	source1: {
		srcset: string;
		type: string;
	};
};

export type SectionTitleParTextListParType = {
	title: string;
	subtitle: string;
	paragraph__one: string;
	text: string;
	list: { text: string }[];
	paragraph__two: string;
};

export type SectionTitleParTextListParParType = {
	title: string;
	subtitle: string;
	text: string;
	list: { text: string }[];
	paragraph__one: string;
	paragraph__two: string;
};

export type Breadcrumb_Type = {
	bredCrumbsHead: string;
	bredCrumbsCategories: string;
};

export type Section_Title_Par_Par_Type = {
	title: string;
	subtitle: string;
	paragraph__one: string;
	paragraph__two: string;
};

export type Section_Title_Par_Par_Par_Type = {
	title: string;
	subtitle: string;
	paragraph__one: string;
	paragraph__two: string;
	paragraph__three: string;
};

export type Section_Title_Par_List_Par_Par_Type = {
	title: string;
	subtitle: string;
	paragraph__one: string;
	list: { text: string }[];
	paragraph__two: string;
	paragraph__three: string;
};

export type Section_Title_Text_List_Par_Type = {
	title: string;
	subtitle: string;
	text: string;
	list: { text: string }[];
	paragraph: string;
};

export type Section_Image_Type = {
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

export type Section_Title_Par_Text_List_Par_Type = {
	title: string;
	subtitle: string;
	paragraph__one: string;
	text: string;
	list: { text: string }[];
	paragraph__two: string;
};

export type Section_Title_Text_List_Par_Par_Type = {
	title: string;
	subtitle: string;
	text: string;
	list: { text: string }[];
	paragraph__one: string;
	paragraph__two: string;
};

export type Section_Title_Par_List_Text_List_Par_Type = {
	title: string;
	subtitle: string;
	paragraph__one: string;
	list_one: { text: string }[];
	text: string;
	list_two: { text: string }[];
	paragraph__two: string;
};

export type Section_Title_Text_List_Img_Par_Par_Type = {
	title: string;
	subtitle: string;
	text: string;
	list: { text: string }[];
	img: {
		img: string;
		alt: string;
		srcset_one: string;
		type_one: string;
		srcset_two: string;
		type_two: string;
	};
	paragraph__one: string;
	paragraph__two: string;
};

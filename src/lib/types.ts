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

export type Section_Title_Par_Type = {
	title: string;
	subtitle: string;
	paragraph: string;
};

export type Section_Title_Five_Par_Type = {
	title: string;
	subtitle: string;
	paragraph__one: string;
	paragraph__two: string;
	paragraph__three: string;
	paragraph__four: string;
	paragraph__five: string;
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

export type Section_Title_Text_List_Img_Text_List_Par_Type = {
	title: string;
	subtitle: string;
	text_one: string;
	list_one: { text: string }[];
	img: {
		img: string;
		alt: string;
		srcset_one: string;
		type_one: string;
		srcset_two: string;
		type_two: string;
	};
	text_two: string;
	list_two: { text: string }[];
	paragraph: string;
};

export type Section_Title_Text_List_Par_Img_Text_List_Par_Par_Par_Type = {
	title: string;
	subtitle: string;
	text_one: string;
	list_one: { text: string }[];
	paragraph_one: string;
	img: {
		img: string;
		alt: string;
		srcset_one: string;
		type_one: string;
		srcset_two: string;
		type_two: string;
	};
	text_two: string;
	list_two: { text: string }[];
	paragraph_two: string;
	paragraph_three: string;
	paragraph_four: string;
};

export type Section_Title_Text_List_Par_Par_Par_Type = {
	title: string;
	subtitle: string;
	text: string;
	list: { text: string }[];
	paragraph_one: string;
	paragraph_two: string;
	paragraph_three: string;
};

export type Section_Page_Type = { href: string; text: string }[];

export type Section_Title_Par_Text_List_Par_Par_Type = {
	title: string;
	subtitle: string;
	paragraph_one: string;
	text: string;
	list: { text: string }[];
	paragraph_two: string;
	paragraph_three: string;
};

export type Section_Title_Par_Par_Par_Text_List_Par_Type = {
	title: string;
	subtitle: string;
	paragraph_one: string;
	paragraph_two: string;
	paragraph_three: string;
	text: string;
	list: { text: string }[];
	paragraph_four: string;
};
export type Section_Title_Par_Par_Text_List_Par_Type = {
	title: string;
	subtitle: string;
	paragraph_one: string;
	paragraph_two: string;
	text: string;
	list: { text: string }[];
	paragraph_three: string;
};

import { t } from '$lib/i18n';
import { derived } from 'svelte/store';

export const Bredcrumbs_Data = derived(t, ($t) => ({
	bredCrumbsHead: $t('breadcrumbs.title'),
	bredCrumbsCategories: $t('ginecologist.breadcrumbs_categories')
}));

export const Section_Title_Par_Par_Data = derived(t, ($t) => ({
	title: $t('ginecologist.section_one_title'),
	subtitle: $t('ginecologist.section_one_subtitle'),
	paragraph__one: $t('ginecologist.section_one_par_one'),
	paragraph__two: $t('ginecologist.section_one_par_two')
}));

export const Section_Title_Text_List_Par_Img_Text_List_Par_Par_Par_Data = derived(t, ($t) => ({
	title: $t('ginecologist.section_two_title'),
	subtitle: $t('ginecologist.section_two_subtitle'),
	text_one: $t('ginecologist.section_two_text_one'),
	list_one: [
		{ text: $t('ginecologist.section_two_list_one_one') },
		{ text: $t('ginecologist.section_two_list_one_two') },
		{ text: $t('ginecologist.section_two_list_one_three') },
		{ text: $t('ginecologist.section_two_list_one_four') },
		{ text: $t('ginecologist.section_two_list_one_five') }
	],
	paragraph_one: $t('ginecologist.section_two_par_one'),
	img: {
		img: '/img/all-article-web-page-content-img/article-ginecologist.jpg',
		alt: 'article-ginecologist',
		srcset_one: '/img/all-article-web-page-content-img/article-ginecologist.webp',
		type_one: 'image/webp',
		srcset_two: '/img/all-article-web-page-content-img/article-ginecologist.avif',
		type_two: 'image/avif'
	},
	text_two: $t('ginecologist.section_two_text_two'),
	list_two: [
		{ text: $t('ginecologist.section_two_list_two_one') },
		{ text: $t('ginecologist.section_two_list_two_two') },
		{ text: $t('ginecologist.section_two_list_two_three') },
		{ text: $t('ginecologist.section_two_list_two_four') },
		{ text: $t('ginecologist.section_two_list_two_five') },
		{ text: $t('ginecologist.section_two_list_two_six') }
	],
	paragraph_two: $t('ginecologist.section_two_par_ones'),
	paragraph_three: $t('ginecologist.section_two_par_two'),
	paragraph_four: $t('ginecologist.section_two_par_three')
}));

export const Section_Title_Text_List_Par_Par_Data = derived(t, ($t) => ({
	title: $t('ginecologist.section_thre_title'),
	subtitle: $t('ginecologist.section_thre_subtitle'),
	text: $t('ginecologist.section_thre_text'),
	list: [
		{ text: $t('ginecologist.section_thre_list_one') },
		{ text: $t('ginecologist.section_thre_list_two') },
		{ text: $t('ginecologist.section_thre_list_three') },
		{ text: $t('ginecologist.section_thre_list_four') },
		{ text: $t('ginecologist.section_thre_list_five') }
	],
	paragraph__one: $t('ginecologist.section_thre_par_one'),
	paragraph__two: $t('ginecologist.section_thre_par_two')
}));

export const Section_Title_Text_List_Par_Par_Data_Two = derived(t, ($t) => ({
	title: $t('ginecologist.section_four_title'),
	subtitle: $t('ginecologist.section_four_subtitle'),
	text: $t('ginecologist.section_four_text'),
	list: [
		{ text: $t('ginecologist.section_four_list_one') },
		{ text: $t('ginecologist.section_four_list_two') },
		{ text: $t('ginecologist.section_four_list_three') },
		{ text: $t('ginecologist.section_four_list_four') },
		{ text: $t('ginecologist.section_four_list_five') },
		{ text: $t('ginecologist.section_four_list_six') }
	],
	paragraph__one: $t('ginecologist.section_four_par_one'),
	paragraph__two: $t('ginecologist.section_four_par_two')
}));

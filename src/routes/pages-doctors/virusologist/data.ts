import { t } from '$lib/i18n';
import { derived } from 'svelte/store';

export const Breadcrumb_Data = derived(t, ($t) => ({
	bredCrumbsHead: $t('breadcrumbs.title'),
	bredCrumbsCategories: $t('virusologist.breadcrumbs_subtitle')
}));

export const Section_Title_Par_Par_Data = derived(t, ($t) => ({
	title: $t('virusologist.section_one_title'),
	subtitle: $t('virusologist.section_one_subtitle'),
	paragraph__one: $t('virusologist.section_one_par_one'),
	paragraph__two: $t('virusologist.section_one_par_two')
}));

export const Section_Title_Text_List_Img_Text_List_Par_Data = derived(t, ($t) => ({
	title: $t('virusologist.section_two_title'),
	subtitle: $t('virusologist.section_two_subtitle'),
	text_one: $t('virusologist.section_two_text_one'),
	list_one: [
		{ text: $t('virusologist.section_two_list_one_one') },
		{ text: $t('virusologist.section_two_list_one_two') },
		{ text: $t('virusologist.section_two_list_one_three') },
		{ text: $t('virusologist.section_two_list_one_four') },
		{ text: $t('virusologist.section_two_list_one_five') },
		{ text: $t('virusologist.section_two_list_one_six') },
		{ text: $t('virusologist.section_two_list_one_seven') },
		{ text: $t('virusologist.section_two_list_one_eight') },
		{ text: $t('virusologist.section_two_list_one_nine') }
	],
	img: {
		img: '/img/all-article-web-page-content-img/article-virusologist.jpg',
		alt: 'article-virusologist',
		srcset_one: '/img/all-article-web-page-content-img/article-virusologist.webp',
		type_one: 'image/webp',
		srcset_two: '/img/all-article-web-page-content-img/article-virusologist.avif',
		type_two: 'image/avif'
	},
	text_two: $t('virusologist.section_two_text_two'),
	list_two: [
		{ text: $t('virusologist.section_two_list_two_one') },
		{ text: $t('virusologist.section_two_list_two_two') },
		{ text: $t('virusologist.section_two_list_two_three') },
		{ text: $t('virusologist.section_two_list_two_four') },
		{ text: $t('virusologist.section_two_list_two_five') }
	],
	paragraph: $t('virusologist.section_two_par')
}));

export const Section_Title_Par_Par_Par_Data = derived(t, ($t) => ({
	title: $t('virusologist.section_three_title'),
	subtitle: $t('virusologist.section_three_subtitle'),
	paragraph__one: $t('virusologist.section_three_par_one'),
	paragraph__two: $t('virusologist.section_three_par_two'),
	paragraph__three: $t('virusologist.section_three_par_three')
}));

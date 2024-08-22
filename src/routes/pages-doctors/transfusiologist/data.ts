import type { Section_Image_Type } from '$lib/types';
import { derived } from 'svelte/store';
import { t } from '$lib/i18n';

export const Bredcrumbs_Data = derived(t, ($t) => ({
	bredCrumbsHead: $t('breadcrumbs.title'),
	bredCrumbsCategories: $t('transfusiologist.section_breadcrumbs_cat')
}));

export const Section_Title_Par_Data = derived(t, ($t) => ({
	title: $t('transfusiologist.section_one_title'),
	subtitle: $t('transfusiologist.section_one_sub'),
	paragraph: $t('transfusiologist.section_one_par')
}));

export const Section_Title_Par_Text_List_Par_Data = derived(t, ($t) => ({
	title: $t('transfusiologist.section_two_title'),
	subtitle: $t('transfusiologist.section_two_sub'),
	paragraph__one: $t('transfusiologist.section_two_par_one'),
	text: $t('transfusiologist.section_two_text'),
	list: [
		{ text: $t('transfusiologist.section_two_list_one') },
		{ text: $t('transfusiologist.section_two_list_two') },
		{ text: $t('transfusiologist.section_two_list_three') },
		{ text: $t('transfusiologist.section_two_list_four') }
	],
	paragraph__two: $t('transfusiologist.section_two_par_two')
}));

export const Section_Image_Data: Section_Image_Type = {
	image: {
		src: '/img/all-article-web-page-content-img/article-transfusiologist.jpg',
		alt: 'article-transfusiologist'
	},
	source: {
		srcset: '/img/all-article-web-page-content-img/article-transfusiologist.webp',
		type: 'image/webp'
	},
	source1: {
		srcset: '/img/all-article-web-page-content-img/article-transfusiologist.avif',
		type: 'image/avif'
	}
};

export const Section_Text_List_Par_Text_List_Par_Data = derived(t, ($t) => ({
	title: $t('transfusiologist.section_three_title'),
	subtitle: $t('transfusiologist.section_three_sub'),
	text_one: $t('transfusiologist.section_three_text_one'),
	list_one: [
		{ text: $t('transfusiologist.section_three_list_one') },
		{ text: $t('transfusiologist.section_three_list_two') },
		{ text: $t('transfusiologist.section_three_list_three') },
		{ text: $t('transfusiologist.section_three_list_four') }
	],
	paragraph_one: $t('transfusiologist.section_three_par_one'),
	text_two: $t('transfusiologist.section_three_text_two'),
	list_two: [
		{ text: $t('transfusiologist.section_three_list_two_one') },
		{ text: $t('transfusiologist.section_three_list_two_two') },
		{ text: $t('transfusiologist.section_three_list_two_three') },
		{ text: $t('transfusiologist.section_three_list_two_four') }
	],
	paragraph_two: $t('transfusiologist.section_three_par_two')
}));

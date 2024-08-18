import type { Section_Image_Type } from '$lib/types';
import { derived } from 'svelte/store';
import { t } from '$lib/i18n';

export const Bredcrumbs_Data = derived(t, ($t) => ({
	bredCrumbsHead: $t('breadcrumbs.title'),
	bredCrumbsCategories: $t('narcologist.section_one_breadcrumbs_categories')
}));

export const Section_Title_Par_Par_Data = derived(t, ($t) => ({
	title: $t('narcologist.section_one_title'),
	subtitle: $t('narcologist.section_one_subtitle'),
	paragraph__one: $t('narcologist.section_one_par_one'),
	paragraph__two: $t('narcologist.section_one_par_two')
}));

export const Section_Title_Par_Text_List_Par_Par_Data = derived(t, ($t) => ({
	title: $t('narcologist.section_two_title'),
	subtitle: $t('narcologist.section_two_subtitle'),
	paragraph_one: $t('narcologist.section_two_par_one'),
	text: $t('narcologist.section_two_text'),
	list: [
		{ text: $t('narcologist.section_two_list_one') },
		{ text: $t('narcologist.section_two_list_two') },
		{ text: $t('narcologist.section_two_list_three') },
		{ text: $t('narcologist.section_two_list_four') },
		{ text: $t('narcologist.section_two_list_five') },
		{ text: $t('narcologist.section_two_list_six') }
	],
	paragraph_two: $t('narcologist.section_two_par_two'),
	paragraph_three: $t('narcologist.section_two_par_three')
}));

export const Section_Image_Data: Section_Image_Type = {
	image: {
		src: '/img/all-article-web-page-content-img/article-narcologist.jpg',
		alt: 'article-narcologist'
	},
	source: {
		srcset: '/img/all-article-web-page-content-img/article-narcologist.webp',
		type: 'image/webp'
	},
	source1: {
		srcset: '/img/all-article-web-page-content-img/article-narcologist.avif',
		type: 'image/avif'
	}
};

export const Section_Title_Text_List_Par_Data = derived(t, ($t) => ({
	title: $t('narcologist.section_three_title'),
	subtitle: $t('narcologist.section_three_subtitle'),
	text: $t('narcologist.section_three_text'),
	list: [
		{ text: $t('narcologist.section_three_list_one') },
		{ text: $t('narcologist.section_three_list_two') },
		{ text: $t('narcologist.section_three_list_three') },
		{ text: $t('narcologist.section_three_list_four') },
		{ text: $t('narcologist.section_three_list_five') }
	],
	paragraph: $t('narcologist.section_three_par_one')
}));

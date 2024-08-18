import type { Section_Image_Type } from '$lib/types';
import { t } from '$lib/i18n';
import { derived } from 'svelte/store';

export const Breadcrumb_Data = derived(t, ($t) => ({
	bredCrumbsHead: $t('breadcrumbs.title'),
	bredCrumbsCategories: $t('dermatologist.breadcrumbs_categories')
}));

export const Section_Title_Par_Par_Data = derived(t, ($t) => ({
	title: $t('dermatologist.section_one_title'),
	subtitle: $t('dermatologist.section_one_subtitle'),
	paragraph__one: $t('dermatologist.section_one_par_one'),
	paragraph__two: $t('dermatologist.section_one_par_two')
}));

export const Section_Title_Text_List_Par_Par_Data = derived(t, ($t) => ({
	title: $t('dermatologist.section_two_title'),
	subtitle: $t('dermatologist.section_two_subtitle'),
	text: $t('dermatologist.section_two_text'),
	list: [
		{ text: $t('dermatologist.section_two_list_one') },
		{ text: $t('dermatologist.section_two_list_two') },
		{ text: $t('dermatologist.section_two_list_three') },
		{ text: $t('dermatologist.section_two_list_four') }
	],
	paragraph__one: $t('dermatologist.section_two_par_one'),
	paragraph__two: $t('dermatologist.section_two_par_two')
}));

export const Section_Image_Data: Section_Image_Type = {
	image: {
		src: '/img/all-article-web-page-content-img/article-dermatologist.jpg',
		alt: 'article-dermatologist'
	},
	source: {
		srcset: '/img/all-article-web-page-content-img/article-dermatologist.webp',
		type: 'image/webp'
	},
	source1: {
		srcset: '/img/all-article-web-page-content-img/article-dermatologist.avif',
		type: 'image/avif'
	}
};

export const Section_Title_Text_List_Par_Par_Par_Data = derived(t, ($t) => ({
	title: $t('dermatologist.section_three_title'),
	subtitle: $t('dermatologist.section_three_subtitle'),
	text: $t('dermatologist.section_three_text'),
	list: [
		{ text: $t('dermatologist.section_three_list_one') },
		{ text: $t('dermatologist.section_three_list_two') },
		{ text: $t('dermatologist.section_three_list_three') },
		{ text: $t('dermatologist.section_three_list_four') },
		{ text: $t('dermatologist.section_three_list_five') },
		{ text: $t('dermatologist.section_three_list_six') }
	],
	paragraph_one: $t('dermatologist.section_three_par_one'),
	paragraph_two: $t('dermatologist.section_three_par_two'),
	paragraph_three: $t('dermatologist.section_three_par_three')
}));

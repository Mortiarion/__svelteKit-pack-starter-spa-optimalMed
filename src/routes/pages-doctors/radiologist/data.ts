import type { Section_Image_Type } from '$lib/types';
import { derived } from 'svelte/store';
import { t } from '$lib/i18n';

export const Bredcrumbs_Data = derived(t, ($t) => ({
	bredCrumbsHead: $t('breadcrumbs.title'),
	bredCrumbsCategories: $t('radiologist.section_breadcrumbs_categories')
}));

export const Section_Title_Par_Data = derived(t, ($t) => ({
	title: $t('radiologist.section_one_title'),
	subtitle: $t('radiologist.section_one_subtitle'),
	paragraph: $t('radiologist.section_one_par')
}));

export const Section_Title_Par_Par_Text_List_Par_Data = derived(t, ($t) => ({
	title: $t('radiologist.section_one_two_title'),
	subtitle: $t('radiologist.section_one_two_subtitle'),
	paragraph_one: $t('radiologist.section_one_two_par_one'),
	paragraph_two: $t('radiologist.section_one_two_par_two'),
	text: $t('radiologist.section_one_two_text'),
	list: [
		{ text: $t('radiologist.section_one_two_list_one') },
		{ text: $t('radiologist.section_one_two_list_two') },
		{ text: $t('radiologist.section_one_two_list_three') },
		{ text: $t('radiologist.section_one_two_list_four') }
	],
	paragraph_three: $t('radiologist.section_one_two_par_three')
}));

export const Section_Image_Data: Section_Image_Type = {
	image: {
		src: '/img/all-article-web-page-content-img/article-radiologist.jpg',
		alt: 'article-radiologist'
	},
	source: {
		srcset: '/img/all-article-web-page-content-img/article-radiologist.webp',
		type: 'image/webp'
	},
	source1: {
		srcset: '/img/all-article-web-page-content-img/article-radiologist.avif',
		type: 'image/avif'
	}
};

export const Section_Title_Par_Text_List_Par_Par_Data = derived(t, ($t) => ({
	title: $t('radiologist.section_three_title'),
	subtitle: $t('radiologist.section_three_subtitle'),
	paragraph_one: $t('radiologist.section_three_par_one'),
	text: $t('radiologist.section_three_text'),
	list: [
		{ text: $t('radiologist.section_three_list_one') },
		{ text: $t('radiologist.section_three_list_two') },
		{ text: $t('radiologist.section_three_list_three') },
		{ text: $t('radiologist.section_three_list_four') }
	],
	paragraph_two: $t('radiologist.section_three_par_two'),
	paragraph_three: $t('radiologist.section_three_par_three')
}));

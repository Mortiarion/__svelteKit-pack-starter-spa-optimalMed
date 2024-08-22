import type { Section_Image_Type } from '$lib/types';
import { derived } from 'svelte/store';
import { t } from '$lib/i18n';

export const Bredcrumbs_Data = derived(t, ($t) => ({
	bredCrumbsHead: $t('breadcrumbs.title'),
	bredCrumbsCategories: $t('transplantologist.breadcrumbs_cat')
}));

export const Section_Title_Par_Par_Data = derived(t, ($t) => ({
	title: $t('transplantologist.section_one_title'),
	subtitle: $t('transplantologist.section_one_sub'),
	paragraph__one: $t('transplantologist.section_one_par_one'),
	paragraph__two: $t('transplantologist.section_one_par_two')
}));

export const Section_Title_Text_List_Par_Par_Data = derived(t, ($t) => ({
	title: $t('transplantologist.section_two_title'),
	subtitle: $t('transplantologist.section_two_sub'),
	text: $t('transplantologist.section_two_text'),
	list: [
		{ text: $t('transplantologist.section_two_list_one') },
		{ text: $t('transplantologist.section_two_list_two') },
		{ text: $t('transplantologist.section_two_list_three') },
		{ text: $t('transplantologist.section_two_list_four') }
	],
	paragraph__one: $t('transplantologist.section_two_par_one'),
	paragraph__two: $t('transplantologist.section_two_par_two')
}));

export const Section_Image_Data: Section_Image_Type = {
	image: {
		src: '/img/all-article-web-page-content-img/article-transplantologist.jpg',
		alt: 'article-transplantologist'
	},
	source: {
		srcset: '/img/all-article-web-page-content-img/article-transplantologist.webp',
		type: 'image/webp'
	},
	source1: {
		srcset: '/img/all-article-web-page-content-img/article-transplantologist.avif',
		type: 'image/avif'
	}
};

export const Section_Title_Text_List_Par_Par_Data_Two = derived(t, ($t) => ({
	title: $t('transplantologist.section_three_title'),
	subtitle: $t('transplantologist.section_three_sub'),
	text: $t('transplantologist.section_three_text'),
	list: [
		{ text: $t('transplantologist.section_three_list_one') },
		{ text: $t('transplantologist.section_three_list_two') },
		{ text: $t('transplantologist.section_three_list_three') },
		{ text: $t('transplantologist.section_three_list_four') },
		{ text: $t('transplantologist.section_three_list_five') }
	],
	paragraph__one: $t('transplantologist.section_three_par_one'),
	paragraph__two: $t('transplantologist.section_three_par_two')
}));

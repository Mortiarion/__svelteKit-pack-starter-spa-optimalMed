import { t } from '$lib/i18n';
import type { Section_Image_Type } from '$lib/types';
import { derived } from 'svelte/store';

export const Bredcrumbs_Data = derived(t, ($t) => ({
	bredCrumbsHead: $t('breadcrumbs.title'),
	bredCrumbsCategories: $t('chemotherapost.breadcrumbs_cat')
}));

export const Section_Title_Par_Data = derived(t, ($t) => ({
	title: $t('chemotherapost.section_one_title'),
	subtitle: $t('chemotherapost.section_one_sub'),
	paragraph: $t('chemotherapost.section_one_par')
}));

export const Section_Title_Par_Text_List_Par_Data = derived(t, ($t) => ({
	title: $t('chemotherapost.section_two_title'),
	subtitle: $t('chemotherapost.section_two_sub'),
	paragraph__one: $t('chemotherapost.section_two_par_one'),
	text: $t('chemotherapost.section_two_text'),
	list: [
		{ text: $t('chemotherapost.section_two_list_one') },
		{ text: $t('chemotherapost.section_two_list_two') },
		{ text: $t('chemotherapost.section_two_list_three') },
		{ text: $t('chemotherapost.section_two_list_four') },
		{ text: $t('chemotherapost.section_two_list_five') },
		{ text: $t('chemotherapost.section_two_list_six') }
	],
	paragraph__two: $t('chemotherapost.section_two_par_two')
}));

export const Section_Image_Data: Section_Image_Type = {
	image: {
		src: '/img/all-article-web-page-content-img/article-chemoterapevtist.jpg',
		alt: 'article-chemoterapevtist'
	},
	source: {
		srcset: '/img/all-article-web-page-content-img/article-chemoterapevtist.webp',
		type: 'image/webp'
	},
	source1: {
		srcset: '/img/all-article-web-page-content-img/article-chemoterapevtist.avif',
		type: 'image/avif'
	}
};

export const Section_Title_Text_List_Par_Par_Par_Par_Data = derived(t, ($t) => ({
	title: $t('chemotherapost.section_three_title'),
	subtitle: $t('chemotherapost.section_three_sub'),
	text: $t('chemotherapost.section_three_text'),
	list: [
		{ text: $t('chemotherapost.section_three_list_one') },
		{ text: $t('chemotherapost.section_three_list_two') },
		{ text: $t('chemotherapost.section_three_list_three') },
		{ text: $t('chemotherapost.section_three_list_four') },
		{ text: $t('chemotherapost.section_three_list_five') }
	],
	paragraph_one: $t('chemotherapost.section_three_par_one'),
	paragraph_two: $t('chemotherapost.section_three_par_two'),
	paragraph_three: $t('chemotherapost.section_three_par_three'),
	paragraph_four: $t('chemotherapost.section_three_par_four')
}));

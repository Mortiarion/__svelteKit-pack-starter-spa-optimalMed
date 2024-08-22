import { t } from '$lib/i18n';
import type { Section_Image_Type } from '$lib/types';
import { derived } from 'svelte/store';

export const Breadcrumb_Data = derived(t, ($t) => ({
	bredCrumbsHead: $t('breadcrumbs.title'),
	bredCrumbsCategories: $t('surgeon.breadcrumbs_cat')
}));

export const Section_Title_Par_Data = derived(t, ($t) => ({
	title: $t('surgeon.section_one_title'),
	subtitle: $t('surgeon.section_one_sub'),
	paragraph: $t('surgeon.section_one_par')
}));

export const Section_Title_Text_List_Par_Par_Data = derived(t, ($t) => ({
	title: $t('surgeon.section_two_title'),
	subtitle: $t('surgeon.section_two_sub'),
	text: $t('surgeon.section_two_text'),
	list: [
		{ text: $t('surgeon.section_two_list_one') },
		{ text: $t('surgeon.section_two_list_two') },
		{ text: $t('surgeon.section_two_list_three') },
		{ text: $t('surgeon.section_two_list_four') },
		{ text: $t('surgeon.section_two_list_five') }
	],
	paragraph__one: $t('surgeon.section_two_par_one'),
	paragraph__two: $t('surgeon.section_two_par_two')
}));

export const Section_Image_Data: Section_Image_Type = {
	image: {
		src: '/img/all-article-web-page-content-img/article-surgeon.jpg',
		alt: 'article-surgeon'
	},
	source: {
		srcset: '/img/all-article-web-page-content-img/article-surgeon.webp',
		type: 'image/webp'
	},
	source1: {
		srcset: '/img/all-article-web-page-content-img/article-surgeon.avif',
		type: 'image/avif'
	}
};

export const Section_Title_Par_Text_List_Par_Par_Par_Par_Data = derived(t, ($t) => ({
	title: $t('surgeon.section_three_title'),
	subtitle: $t('surgeon.section_three_sub'),
	paragraph_one: $t('surgeon.section_three_par_one'),
	text: $t('surgeon.section_three_text'),
	list: [
		{ text: $t('surgeon.section_three_list_one') },
		{ text: $t('surgeon.section_three_list_two') },
		{ text: $t('surgeon.section_three_list_three') },
		{ text: $t('surgeon.section_three_list_four') }
	],
	paragraph_two: $t('surgeon.section_three_par_two'),
	paragraph_three: $t('surgeon.section_three_par_three'),
	paragraph_four: $t('surgeon.section_three_par_four'),
	paragraph_five: $t('surgeon.section_three_par_five')
}));

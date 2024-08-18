import type { Section_Image_Type } from '$lib/types';
import { derived } from 'svelte/store';
import { t } from '$lib/i18n';

export const Bredcrumbs_Data = derived(t, ($t) => ({
	bredCrumbsHead: $t('breadcrumbs.title'),
	bredCrumbsCategories: $t('neurosurgeon.breadcrumbs_categories')
}));

export const Section_Title_Par_Data = derived(t, ($t) => ({
	title: $t('neurosurgeon.section_one_title'),
	subtitle: $t('neurosurgeon.section_one_subtitle'),
	paragraph: $t('neurosurgeon.section_one_par')
}));

export const Section_Title_Par_Text_List_Par_Data = derived(t, ($t) => ({
	title: $t('neurosurgeon.section_two_title'),
	subtitle: $t('neurosurgeon.section_two_subtitle'),
	paragraph__one: $t('neurosurgeon.section_two_par_one'),
	text: $t('neurosurgeon.section_two_text'),
	list: [
		{ text: $t('neurosurgeon.section_two_list_one') },
		{ text: $t('neurosurgeon.section_two_list_two') },
		{ text: $t('neurosurgeon.section_two_list_three') },
		{ text: $t('neurosurgeon.section_two_list_four') },
		{ text: $t('neurosurgeon.section_two_list_five') }
	],
	paragraph__two: $t('neurosurgeon.section_two_par_two')
}));

export const Section_Image_Data: Section_Image_Type = {
	image: {
		src: '/img/all-article-web-page-content-img/article-neurosurgeon.jpg',
		alt: 'article-neurosurgeon'
	},
	source: {
		srcset: '/img/all-article-web-page-content-img/article-neurosurgeon.webp',
		type: 'image/webp'
	},
	source1: {
		srcset: '/img/all-article-web-page-content-img/article-neurosurgeon.avif',
		type: 'image/avif'
	}
};

export const Section_Title_Text_List_Par_Par_Data = derived(t, ($t) => ({
	title: $t('neurosurgeon.section_three_title'),
	subtitle: $t('neurosurgeon.section_three_subtitle'),
	text: $t('neurosurgeon.section_three_text'),
	list: [
		{ text: $t('neurosurgeon.section_three_list_one') },
		{ text: $t('neurosurgeon.section_three_list_two') },
		{ text: $t('neurosurgeon.section_three_list_three') },
		{ text: $t('neurosurgeon.section_three_list_four') },
		{ text: $t('neurosurgeon.section_three_list_five') },
		{ text: $t('neurosurgeon.section_three_list_six') }
	],
	paragraph__one: $t('neurosurgeon.section_three_par_one'),
	paragraph__two: $t('neurosurgeon.section_three_par_two')
}));

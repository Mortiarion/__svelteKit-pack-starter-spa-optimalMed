import type { Section_Image_Type } from '$lib/types';
import { derived } from 'svelte/store';
import { t } from '$lib/i18n';

export const Bredcrumbs_Data = derived(t, ($t) => ({
	bredCrumbsHead: $t('breadcrumbs.title'),
	bredCrumbsCategories: $t('cardiac_surgeon.breadcrumbs_categories')
}));

export const Section_Title_Par_Par_Data = derived(t, ($t) => ({
	title: $t('cardiac_surgeon.section_one_title'),
	subtitle: $t('cardiac_surgeon.section_one_subtitle'),
	paragraph__one: $t('cardiac_surgeon.section_one_par_one'),
	paragraph__two: $t('cardiac_surgeon.section_one_par_two')
}));

export const Section_Title_Par_Text_List_Par_Data = derived(t, ($t) => ({
	title: $t('cardiac_surgeon._two_title'),
	subtitle: $t('cardiac_surgeon._two_subtitle'),
	paragraph__one: $t('cardiac_surgeon._two_par_one'),
	text: $t('cardiac_surgeon._two_text'),
	list: [
		{ text: $t('cardiac_surgeon._two_list_one') },
		{ text: $t('cardiac_surgeon._two_list_two') },
		{ text: $t('cardiac_surgeon._two_list_three') },
		{ text: $t('cardiac_surgeon._two_list_four') },
		{ text: $t('cardiac_surgeon._two_list_five') },
		{ text: $t('cardiac_surgeon._two_list_six') }
	],
	paragraph__two: $t('cardiac_surgeon._two_par_two')
}));

export const Section_Image_Data: Section_Image_Type = {
	image: {
		src: '/img/all-article-web-page-content-img/article-cardiosurgeon.jpg',
		alt: 'article-cardiosurgeon'
	},
	source: {
		srcset: '/img/all-article-web-page-content-img/article-cardiosurgeon.webp',
		type: 'image/webp'
	},
	source1: {
		srcset: '/img/all-article-web-page-content-img/article-cardiosurgeon.avif',
		type: 'image/avif'
	}
};

export const Section_Title_Text_List_Par_Par_Data = derived(t, ($t) => ({
	title: $t('cardiac_surgeon.three_title'),
	subtitle: $t('cardiac_surgeon.three_subtitle'),
	text: $t('cardiac_surgeon.three_text'),
	list: [
		{ text: $t('cardiac_surgeon.three_list_one') },
		{ text: $t('cardiac_surgeon.three_list_two') },
		{ text: $t('cardiac_surgeon.three_list_three') },
		{ text: $t('cardiac_surgeon.three_list_four') }
	],
	paragraph__one: $t('cardiac_surgeon.three_par_one'),
	paragraph__two: $t('cardiac_surgeon.three_par_two')
}));

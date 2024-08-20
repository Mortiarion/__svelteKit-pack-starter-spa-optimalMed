import type { Section_Image_Type } from '$lib/types';
import { derived } from 'svelte/store';
import { t } from '$lib/i18n';

export const Bredcrumbs_Data = derived(t, ($t) => ({
	bredCrumbsHead: $t('breadcrumbs.title'),
	bredCrumbsCategories: $t('rehabilitation.breadcrumbs_categories')
}));

export const Section_Title_Par_Data = derived(t, ($t) => ({
	title: $t('rehabilitation.section_one_title'),
	subtitle: $t('rehabilitation.section_one_sub'),
	paragraph: $t('rehabilitation.section_one_par')
}));

export const Section_Title_Par_Text_List_Par_Data = derived(t, ($t) => ({
	title: $t('rehabilitation.section_two_title'),
	subtitle: $t('rehabilitation.section_two_sub'),
	paragraph__one: $t('rehabilitation.section_two_par_one'),
	text: $t('rehabilitation.section_two_text'),
	list: [
		{ text: $t('rehabilitation.section_two_list_one') },
		{ text: $t('rehabilitation.section_two_list_two') },
		{ text: $t('rehabilitation.section_two_list_three') },
		{ text: $t('rehabilitation.section_two_list_four') },
		{ text: $t('rehabilitation.section_two_list_five') }
	],
	paragraph__two: $t('rehabilitation.section_two_par_two')
}));

export const Section_Image_Data: Section_Image_Type = {
	image: {
		src: '/img/all-article-web-page-content-img/article-reabilitologist.jpg',
		alt: 'article-reabilitologist'
	},
	source: {
		srcset: '/img/all-article-web-page-content-img/article-reabilitologist.jpg',
		type: 'image/webp'
	},
	source1: {
		srcset: '/img/all-article-web-page-content-img/article-reabilitologist.jpg',
		type: 'image/avif'
	}
};

export const Section_Title_Text_List_Par_Par_Par_Data = derived(t, ($t) => ({
	title: $t('rehabilitation.section_three_title'),
	subtitle: $t('rehabilitation.section_three_sub'),
	text: $t('rehabilitation.section_three_text'),
	list: [
		{ text: $t('rehabilitation.section_three_list_one') },
		{ text: $t('rehabilitation.section_three_list_two') },
		{ text: $t('rehabilitation.section_three_list_three') },
		{ text: $t('rehabilitation.section_three_list_four') }
	],
	paragraph_one: $t('rehabilitation.section_three_par_one'),
	paragraph_two: $t('rehabilitation.section_three_par_two'),
	paragraph_three: $t('rehabilitation.section_three_par_three')
}));

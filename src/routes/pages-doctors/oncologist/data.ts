import type { Section_Image_Type } from '$lib/types';
import { derived } from 'svelte/store';
import { t } from '$lib/i18n';

export const Bredcrumbs_Data = derived(t, ($t) => ({
	bredCrumbsHead: $t('breadcrumbs.title'),
	bredCrumbsCategories: $t('oncologist.breadcrumbs_categories')
}));

export const Section_Title_Par_Par_Data = derived(t, ($t) => ({
	title: $t('oncologist.section_one_title'),
	subtitle: $t('oncologist.section_one_subtitle'),
	paragraph__one: $t('oncologist.section_one_par_one'),
	paragraph__two: $t('oncologist.section_one_par_two')
}));

export const Section_Title_Text_List_Par_Data = derived(t, ($t) => ({
	title: $t('oncologist.section_two_title'),
	subtitle: $t('oncologist.section_two_subtitle'),
	text: $t('oncologist.section_two_text'),
	list: [
		{ text: $t('oncologist.section_two_list_one') },
		{ text: $t('oncologist.section_two_list_two') },
		{ text: $t('oncologist.section_two_list_three') },
		{ text: $t('oncologist.section_two_list_four') },
		{ text: $t('oncologist.section_two_list_five') },
		{ text: $t('oncologist.section_two_list_six') }
	],
	paragraph: $t('oncologist.section_two_par')
}));

export const Section_Image_Data: Section_Image_Type = {
	image: {
		src: '/img/all-article-web-page-content-img/article-oncologist.jpg',
		alt: 'article-oncologist'
	},
	source: {
		srcset: '/img/all-article-web-page-content-img/article-oncologist.webp',
		type: 'image/webp'
	},
	source1: {
		srcset: '/img/all-article-web-page-content-img/article-oncologist.avif',
		type: 'image/avif'
	}
};

export const Section_Title_Text_List_Par_Par_Data = derived(t, ($t) => ({
	title: $t('oncologist.section_three_title'),
	subtitle: $t('oncologist.section_three_subtitle'),
	text: $t('oncologist.section_three_text'),
	list: [
		{ text: $t('oncologist.section_three_list_one') },
		{ text: $t('oncologist.section_three_list_two') },
		{ text: $t('oncologist.section_three_list_three') },
		{ text: $t('oncologist.section_three_list_four') },
		{ text: $t('oncologist.section_three_list_five') }
	],
	paragraph__one: $t('oncologist.section_three_par_one'),
	paragraph__two: $t('oncologist.section_three_par_two')
}));

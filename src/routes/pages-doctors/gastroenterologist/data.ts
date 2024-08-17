import type {
	Section_Image_Type,
} from '$lib/types';

import { t } from '$lib/i18n';
import { derived } from 'svelte/store';

export const Breadcrumb_Data = derived(t, ($t) => ({
	bredCrumbsHead: $t('breadcrumbs.title'),
	bredCrumbsCategories: $t('gastroenterologist.breadcrumbs_subtitle')
}));

export const Section_Title_Par_Par_Data = derived(t, ($t) => ({
	title: $t('gastroenterologist.section_one_title'),
	subtitle: $t('gastroenterologist.section_one_subtitle'),
	paragraph__one: $t('gastroenterologist.section_one_par_one'),
	paragraph__two: $t('gastroenterologist.section_one_par_two')
}));

export const Section_Title_Text_List_Par_Par_Par_Data = derived(t, ($t) => ({
	title: $t('gastroenterologist.section_two_title'),
	subtitle: $t('gastroenterologist.section_two_subtitle'),
	text: $t('gastroenterologist.section_two_text'),
	list: [
		{ text: $t('gastroenterologist.section_two_list_one') },
		{ text: $t('gastroenterologist.section_two_list_two') },
		{ text: $t('gastroenterologist.section_two_list_three') },
		{ text: $t('gastroenterologist.section_two_list_four') },
		{ text: $t('gastroenterologist.section_two_list_five') }
	],
	paragraph_one: $t('gastroenterologist.section_two_par_one'),
	paragraph_two: $t('gastroenterologist.section_two_par_two'),
	paragraph_three: $t('gastroenterologist.section_two_par_three')
}));

export const Section_Image_Data: Section_Image_Type = {
	image: {
		src: '/img/all-article-web-page-content-img/article-gastroenterologist.jpg',
		alt: 'article-gastroenterologist'
	},
	source: {
		srcset: '/img/all-article-web-page-content-img/article-gastroenterologist.webp',
		type: 'image/webp'
	},
	source1: {
		srcset: '/img/all-article-web-page-content-img/article-gastroenterologist.avif',
		type: 'image/avif'
	}
};

export const Section_Title_Text_List_Par_Data = derived(t, ($t) => ({
	title: $t('gastroenterologist.section_three_title'),
	subtitle: $t('gastroenterologist.section_three_subtitle'),
	text: $t('gastroenterologist.section_three_text'),
	list: [
		{ text: $t('gastroenterologist.section_three_list_one') },
		{ text: $t('gastroenterologist.section_three_list_two') },
		{ text: $t('gastroenterologist.section_three_list_three') },
		{ text: $t('gastroenterologist.section_three_list_four') },
		{ text: $t('gastroenterologist.section_three_list_five') }
	],
	paragraph: $t('gastroenterologist.section_three_par')
}));

import type { Section_Image_Type } from '$lib/types';
import { derived } from 'svelte/store';
import { t } from '$lib/i18n';

export const Bredcrumb_Data = derived(t, ($t) => ({
	bredCrumbsHead: $t('breadcrumbs.title'),
	bredCrumbsCategories: $t('ortodontist.breadcrumbs_categories')
}));

export const Section_Title_Par_Data = derived(t, ($t) => ({
	title: $t('ortodontist.section_one_title'),
	subtitle: $t('ortodontist.section_one_subtitle'),
	paragraph: $t('ortodontist.section_one_par')
}));

export const Section_Title_Text_List_Par_Data = derived(t, ($t) => ({
	title: $t('ortodontist.section_two_title'),
	subtitle: $t('ortodontist.section_two_subtitle'),
	text: $t('ortodontist.section_two_text'),
	list: [
		{ text: $t('ortodontist.section_two_list_one') },
		{ text: $t('ortodontist.section_two_list_two') },
		{ text: $t('ortodontist.section_two_list_three') },
		{ text: $t('ortodontist.section_two_list_four') },
		{ text: $t('ortodontist.section_two_list_five') },
		{ text: $t('ortodontist.section_two_list_six') }
	],
	paragraph: $t('ortodontist.section_two_par')
}));

export const Section_Image_Data: Section_Image_Type = {
	image: {
		src: '/img/all-article-web-page-content-img/article-ortodontist.jpg',
		alt: 'article-ortodontist'
	},
	source: {
		srcset: '/img/all-article-web-page-content-img/article-ortodontist.webp',
		type: 'image/webp'
	},
	source1: {
		srcset: '/img/all-article-web-page-content-img/article-ortodontist.avif',
		type: 'image/avif'
	}
};

export const Section_Title_Text_List_Par_Data_Two = derived(t, ($t) => ({
	title: $t('ortodontist.section_three_title'),
	subtitle: $t('ortodontist.section_three_subtitle'),
	text: $t('ortodontist.section_three_text'),
	list: [
		{ text: $t('ortodontist.section_three_list_one') },
		{ text: $t('ortodontist.section_three_list_two') },
		{ text: $t('ortodontist.section_three_list_three') },
		{ text: $t('ortodontist.section_three_list_four') },
		{ text: $t('ortodontist.section_three_list_five') }
	],
	paragraph: $t('ortodontist.section_three_par')
}));

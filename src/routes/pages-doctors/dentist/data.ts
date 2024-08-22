import type { Section_Image_Type } from '$lib/types';
import { derived } from 'svelte/store';
import { t } from '$lib/i18n';

export const Bredcrumb_Data = derived(t, ($t) => ({
	bredCrumbsHead: $t('breadcrumbs.title'),
	bredCrumbsCategories: $t('dentist.breadcrumbs_cat')
}));

export const Section_Title_Par_Par_Data = derived(t, ($t) => ({
	title: $t('dentist.section_one_title'),
	subtitle: $t('dentist.section_one_sub'),
	paragraph__one: $t('dentist.section_one_par_one'),
	paragraph__two: $t('dentist.section_one_par_two')
}));

export const Section_Title_Text_List_Par_Par_Data = derived(t, ($t) => ({
	title: $t('dentist.section_two_title'),
	subtitle: $t('dentist.section_two_sub'),
	text: $t('dentist.section_two_text'),
	list: [
		{ text: $t('dentist.section_two_list_one') },
		{ text: $t('dentist.section_two_list_two') },
		{ text: $t('dentist.section_two_list_three') },
		{ text: $t('dentist.section_two_list_four') }
	],
	paragraph__one: $t('dentist.section_two_par_one'),
	paragraph__two: $t('dentist.section_two_par_two')
}));

export const Section_Image_Data: Section_Image_Type = {
	image: {
		src: '/img/all-article-web-page-content-img/article-stomatologist.jpg',
		alt: 'article-stomatologist'
	},
	source: {
		srcset: '/img/all-article-web-page-content-img/article-stomatologist.webp',
		type: 'image/webp'
	},
	source1: {
		srcset: '/img/all-article-web-page-content-img/article-stomatologist.avif',
		type: 'image/avif'
	}
};

export const Section_Title_Text_List_Par_Data = derived(t, ($t) => ({
	title: $t('dentist.section_three_title'),
	subtitle: $t('dentist.section_three_sub'),
	text: $t('dentist.section_three_text'),
	list: [
		{ text: $t('dentist.section_three_list_one') },
		{ text: $t('dentist.section_three_list_two') },
		{ text: $t('dentist.section_three_list_three') },
		{ text: $t('dentist.section_three_list_four') },
		{ text: $t('dentist.section_three_list_five') }
	],
	paragraph: $t('dentist.section_three_par')
}));

export const Section_Title_Text_List_Par_Data_Two = derived(t, ($t) => ({
	title: $t('dentist.section_four_title'),
	subtitle: $t('dentist.section_four_sub'),
	text: $t('dentist.section_four_text'),
	list: [
		{ text: $t('dentist.section_four_list_one') },
		{ text: $t('dentist.section_four_list_two') },
		{ text: $t('dentist.section_four_list_three') }
	],
	paragraph: $t('dentist.section_four_par')
}));

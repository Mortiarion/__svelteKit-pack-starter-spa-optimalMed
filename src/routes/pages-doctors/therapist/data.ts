import type { Section_Image_Type } from '$lib/types';
import { derived } from 'svelte/store';
import { t } from '$lib/i18n';

export const Bredcrumbs_Data = derived(t, ($t) => ({
	bredCrumbsHead: $t('breadcrumbs.title'),
	bredCrumbsCategories: $t('terapist.breadcrumbs_cat')
}));

export const Section_Title_Par_Par_Data = derived(t, ($t) => ({
	title: $t('terapist.section_one_titel'),
	subtitle: $t('terapist.section_one_sub'),
	paragraph__one: $t('terapist.section_one_par_one'),
	paragraph__two: $t('terapist.section_one_par_two')
}));

export const Section_Title_Par_Text_List_Par_Data = derived(t, ($t) => ({
	title: $t('terapist.section_two_title'),
	subtitle: $t('terapist.section_two_sub'),
	paragraph__one: $t('terapist.section_two_par_one'),
	text: $t('terapist.section_two_text'),
	list: [
		{ text: $t('terapist.section_two_list_one') },
		{ text: $t('terapist.section_two_list_two') },
		{ text: $t('terapist.section_two_list_three') },
		{ text: $t('terapist.section_two_list_four') },
		{ text: $t('terapist.section_two_list_five') },
		{ text: $t('terapist.section_two_list_six') }
	],
	paragraph__two: $t('terapist.section_two_par_two')
}));

export const Section_Image_Data: Section_Image_Type = {
	image: {
		src: '/img/all-article-web-page-content-img/article-terapevtist.jpg',
		alt: 'article-terapevtist'
	},
	source: {
		srcset: '/img/all-article-web-page-content-img/article-terapevtist.webp',
		type: 'image/webp'
	},
	source1: {
		srcset: '/img/all-article-web-page-content-img/article-terapevtist.avif',
		type: 'avif'
	}
};

export const Section_Title_Text_List_Par_Par_Par_Data = derived(t, ($t) => ({
	title: $t('terapist.section_three_title'),
	subtitle: $t('terapist.section_three_sub'),
	text: $t('terapist.section_three_text'),
	list: [
		{ text: $t('terapist.section_three_list_one') },
		{ text: $t('terapist.section_three_list_two') },
		{ text: $t('terapist.section_three_list_three') },
		{ text: $t('terapist.section_three_list_four') }
	],
	paragraph_one: $t('terapist.section_three_par_one'),
	paragraph_two: $t('terapist.section_three_par_two'),
	paragraph_three: $t('terapist.section_three_par_three')
}));

import type { Section_Image_Type } from '$lib/types';
import { derived } from 'svelte/store';
import { t } from '$lib/i18n';

export const Bredcrumbs_Data = derived(t, ($t) => ({
	bredCrumbsHead: $t('breadcrumbs.title'),
	bredCrumbsCategories: $t('cardiologist.breadcrumbs_categories')
}));

export const Section_Title_Par_Par_Data = derived(t, ($t) => ({
	title: $t('cardiologist.section_one_title'),
	subtitle: $t('cardiologist.section_one_subtitle'),
	paragraph__one: $t('cardiologist.section_one_par_one'),
	paragraph__two: $t('cardiologist.section_one_pat_two')
}));

export const Section_Title_Text_List_Par_Data = derived(t, ($t) => ({
	title: $t('cardiologist.section_two_title'),
	subtitle: $t('cardiologist.section_two_subtitle'),
	text: $t('cardiologist.section_two_text'),
	list: [
		{ text: $t('cardiologist.section_two_list_one') },
		{ text: $t('cardiologist.section_two_list_two') },
		{ text: $t('cardiologist.section_two_list_three') },
		{ text: $t('cardiologist.section_two_list_four') },
		{ text: $t('cardiologist.section_two_list_five') }
	],
	paragraph: $t('cardiologist.section_two_par')
}));

export const Section_Image_Data: Section_Image_Type = {
	image: {
		src: '/img/all-article-web-page-content-img/article-cardiologist.jpg',
		alt: 'article-cardiologist'
	},
	source: {
		srcset: '/img/all-article-web-page-content-img/article-cardiologist.webp',
		type: 'image/webp'
	},
	source1: {
		srcset: '/img/all-article-web-page-content-img/article-cardiologist.avif',
		type: 'image/avif'
	}
};

export const Section_Title_Text_List_Par_Par_Data = derived(t, ($t) => ({
	title: $t('cardiologist.section_three_title'),
	subtitle: $t('cardiologist.section_three_subtitle'),
	text: $t('cardiologist.section_three_text'),
	list: [
		{ text: $t('cardiologist.section_three_list_one') },
		{ text: $t('cardiologist.section_three_list_two') },
		{ text: $t('cardiologist.section_three_list_three') },
		{ text: $t('cardiologist.section_three_list_four') },
		{ text: $t('cardiologist.section_three_list_five') }
	],
	paragraph__one: $t('cardiologist.section_three_par_one'),
	paragraph__two: $t('cardiologist.section_three_par_two')
}));

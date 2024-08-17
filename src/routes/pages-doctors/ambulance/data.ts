import type { Section_Image_Type } from '$lib/types';
import { derived } from 'svelte/store';
import { t } from '$lib/i18n';

export const Bredcrumbs_Data = derived(t, ($t) => ({
	bredCrumbsHead: $t('breadcrumbs.title'),
	bredCrumbsCategories: $t('ambulance.breadcrumbs_categories')
}));

export const Section_Title_Par_Par_Data = derived(t, ($t) => ({
	title: $t('ambulance.section_one_title'),
	subtitle: $t('ambulance.section_one_subtitle'),
	paragraph__one: $t('ambulance.section_one_par_one'),
	paragraph__two: $t('ambulance.section_one_par_two')
}));

export const Section_Title_Text_List_Par_Data = derived(t, ($t) => ({
	title: $t('ambulance.section_two_title'),
	subtitle: $t('ambulance.section_two_subtitle'),
	text: $t('ambulance.section_two_text'),
	list: [
		{ text: $t('ambulance.section_two_list_one') },
		{ text: $t('ambulance.section_two_list_two') },
		{ text: $t('ambulance.section_two_list_three') },
		{ text: $t('ambulance.section_two_list_four') }
	],
	paragraph: $t('ambulance.section_two_par_one')
}));

export const Section_Image_Data: Section_Image_Type = {
	image: {
		src: '/img/all-article-web-page-content-img/article-ambulance.jpg',
		alt: 'article-ambulance'
	},
	source: {
		srcset: '/img/all-article-web-page-content-img/article-ambulance.webp',
		type: 'image/webp'
	},
	source1: {
		srcset: '/img/all-article-web-page-content-img/article-ambulance.avif',
		type: 'image/avif'
	}
};

export const Section_Title_Five_Par_Data = derived(t, ($t) => ({
	title: $t('ambulance.section_three_title'),
	subtitle: $t('ambulance.section_three_subtitle'),
	paragraph__one: $t('ambulance.section_three_par_one'),
	paragraph__two: $t('ambulance.section_three_par_two'),
	paragraph__three: $t('ambulance.section_three_par_three'),
	paragraph__four: $t('ambulance.section_three_par_four'),
	paragraph__five: $t('ambulance.section_three_par_five')
}));

export const Section_Title_Par_Par_Data_Two = derived(t, ($t) => ({
	title: $t('ambulance.section_four_title'),
	subtitle: $t('ambulance.section_four_subtitle'),
	paragraph__one: $t('ambulance.section_four_par_one'),
	paragraph__two: $t('ambulance.section_four_par_two')
}));

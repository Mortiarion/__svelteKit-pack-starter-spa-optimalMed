import type { Section_Image_Type } from '$lib/types';
import { derived } from 'svelte/store';
import { t } from '$lib/i18n';

export const Bredcrumbs_Data = derived(t, ($t) => ({
	bredCrumbsHead: $t('breadcrumbs.title'),
	bredCrumbsCategories: $t('pediatrician.breadcrumbs_categories')
}));

export const Section_Title_Par_Par_Data = derived(t, ($t) => ({
	title: $t('pediatrician.section_one_title'),
	subtitle: $t('pediatrician.section_one_subtitle'),
	paragraph__one: $t('pediatrician.section_one_par_one'),
	paragraph__two: $t('pediatrician.section_one_par_two')
}));

export const Section_Title_Text_List_Par_Par_Data = derived(t, ($t) => ({
	title: $t('pediatrician.section_two_title'),
	subtitle: $t('pediatrician.section_two_subtitle'),
	text: $t('pediatrician.section_two_text'),
	list: [
		{ text: $t('pediatrician.section_two_list_one') },
		{ text: $t('pediatrician.section_two_list_two') },
		{ text: $t('pediatrician.section_two_list_three') },
		{ text: $t('pediatrician.section_two_list_four') },
		{ text: $t('pediatrician.section_two_list_five') },
		{ text: $t('pediatrician.section_two_list_six') }
	],
	paragraph__one: $t('pediatrician.section_two_par_one'),
	paragraph__two: $t('pediatrician.section_two_par_two')
}));

export const Section_Image_Data: Section_Image_Type = {
	image: {
		src: '/img/all-article-web-page-content-img/article-pediatrist.jpg',
		alt: 'article-pediatrist'
	},
	source: {
		srcset: '/img/all-article-web-page-content-img/article-pediatrist.webp',
		type: 'image/webp'
	},
	source1: {
		srcset: '/img/all-article-web-page-content-img/article-pediatrist.avif',
		type: 'image/avif'
	}
};

export const Section_Title_Par_Par_Par_Text_List_Par_Data = derived(t, ($t) => ({
	title: $t('pediatrician.section_three_title'),
	subtitle: $t('pediatrician.section_three_subtitle'),
	paragraph_one: $t('pediatrician.section_three_par_one'),
	paragraph_two: $t('pediatrician.section_three_par_two'),
	paragraph_three: $t('pediatrician.section_three_par_three'),
	text: $t('pediatrician.section_three_text'),
	list: [
		{ text: $t('pediatrician.section_three_list_one') },
		{ text: $t('pediatrician.section_three_list_two') },
		{ text: $t('pediatrician.section_three_list_three') },
		{ text: $t('pediatrician.section_three_list_four') }
	],
	paragraph_four: $t('pediatrician.section_three_par_four')
}));

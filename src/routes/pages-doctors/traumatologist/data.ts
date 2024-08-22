import type { Section_Image_Type } from '$lib/types';
import { derived } from 'svelte/store';
import { t } from '$lib/i18n';

export const Bredcrumbs_Data = derived(t, ($t) => ({
	bredCrumbsHead: $t('breadcrumbs.title'),
	bredCrumbsCategories: $t('traumatologist.breadcumbs_cat')
}));

export const Section_Title_Par_Data = derived(t, ($t) => ({
	title: $t('traumatologist.section_one_title'),
	subtitle: $t('traumatologist.section_one_sub'),
	paragraph: $t('traumatologist.section_one_par')
}));

export const Section_Title_Par_Text_List_Par_Par_Data = derived(t, ($t) => ({
	title: $t('traumatologist.section_two_title'),
	subtitle: $t('traumatologist.section_two_sub'),
	paragraph_one: $t('traumatologist.section_two_par_one'),
	text: $t('traumatologist.section_two_text'),
	list: [
		{ text: $t('traumatologist.section_two_list_one') },
		{ text: $t('traumatologist.section_two_list_two') },
		{ text: $t('traumatologist.section_two_list_three') },
		{ text: $t('traumatologist.section_two_list_four') },
		{ text: $t('traumatologist.section_two_list_five') }
	],
	paragraph_two: $t('traumatologist.section_two_par_two'),
	paragraph_three: $t('traumatologist.section_two_par_three')
}));

export const Section_Image_Data: Section_Image_Type = {
	image: {
		src: '/img/all-article-web-page-content-img/article-traumatologist.jpg',
		alt: 'article-traumatologist'
	},
	source: {
		srcset: '/img/all-article-web-page-content-img/article-traumatologist.webp',
		type: 'image/webp'
	},
	source1: {
		srcset: '/img/all-article-web-page-content-img/article-traumatologist.avif',
		type: 'image/avif'
	}
};

export const Section_Title_Text_List_Par_Par_Data = derived(t, ($t) => ({
	title: $t('traumatologist.section_three_title'),
	subtitle: $t('traumatologist.section_three_sub'),
	text: $t('traumatologist.section_three_text'),
	list: [
		{ text: $t('traumatologist.section_three_list_one') },
		{ text: $t('traumatologist.section_three_list_two') },
		{ text: $t('traumatologist.section_three_list_three') },
		{ text: $t('traumatologist.section_three_list_four') }
	],
	paragraph__one: $t('traumatologist.section_three_par_one'),
	paragraph__two: $t('traumatologist.section_three_par_two')
}));

export const Section_Title_Four_Par_Data = derived(t, ($t) => ({
	title: $t('traumatologist.section_four_title'),
	subtitle: $t('traumatologist.section_four_sub'),
	paragraph_one: $t('traumatologist.section_four_par_one'),
	paragraph_two: $t('traumatologist.section_four_par_two'),
	paragraph_three: $t('traumatologist.section_four_par_three'),
	paragraph_four: $t('traumatologist.section_four_par_four')
}));

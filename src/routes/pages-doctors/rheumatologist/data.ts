import type { Section_Image_Type } from '$lib/types';
import { derived } from 'svelte/store';
import { t } from '$lib/i18n';

export const Bredcrumbs_Data = derived(t, ($t) => ({
	bredCrumbsHead: $t('breadcrumbs.title'),
	bredCrumbsCategories: $t('rheumatologist.breadcrumbs_categories')
}));

export const Section_Title_Par_Data = derived(t, ($t) => ({
	title: $t('rheumatologist.section_one_title'),
	subtitle: $t('rheumatologist.section_one_sub'),
	paragraph: $t('rheumatologist.section_one_par')
}));

export const Section_Title_Text_List_Par_Par_Data = derived(t, ($t) => ({
	title: $t('rheumatologist.section_two_title'),
	subtitle: $t('rheumatologist.section_two_sub'),
	text: $t('rheumatologist.section_two_text'),
	list: [
		{ text: $t('rheumatologist.section_two_list_one') },
		{ text: $t('rheumatologist.section_two_list_two') },
		{ text: $t('rheumatologist.section_two_list_three') }
	],
	paragraph__one: $t('rheumatologist.section_two_par_one'),
	paragraph__two: $t('rheumatologist.section_two_par_two')
}));

export const Section_Image_Data: Section_Image_Type = {
	image: {
		src: '/img/all-article-web-page-content-img/article-reumatologist.jpg',
		alt: 'article-reumatologist'
	},
	source: {
		srcset: '/img/all-article-web-page-content-img/article-reumatologist.webp',
		type: 'image/webp'
	},
	source1: {
		srcset: '/img/all-article-web-page-content-img/article-reumatologist.avif',
		type: 'image/avif'
	}
};

export const Section_Title_Text_List_Par_Data = derived(t, ($t) => ({
	title: $t('rheumatologist.section_three_title'),
	subtitle: $t('rheumatologist.section_three_sub'),
	text: $t('rheumatologist.section_three_text'),
	list: [
		{ text: $t('rheumatologist.section_three_list_one') },
		{ text: $t('rheumatologist.section_three_list_two') },
		{ text: $t('rheumatologist.section_three_list_three') },
		{ text: $t('rheumatologist.section_three_list_four') }
	],
	paragraph: $t('rheumatologist.section_three_par')
}));

export const Section_Title_Par_Text_List_Par_Data = derived(t, ($t) => ({
	title: $t('rheumatologist.section_four_title'),
	subtitle: $t('rheumatologist.section_four_sub'),
	paragraph__one: $t('rheumatologist.section_four_par_one'),
	text: $t('rheumatologist.section_four_text'),
	list: [
		{ text: $t('rheumatologist.section_four_list_one') },
		{ text: $t('rheumatologist.section_four_list_two') },
		{ text: $t('rheumatologist.section_four_list_three') },
		{ text: $t('rheumatologist.section_four_list_four') },
		{ text: $t('rheumatologist.section_four_list_five') },
		{ text: $t('rheumatologist.section_four_list_six') },
		{ text: $t('rheumatologist.section_four_list_seven') }
	],
	paragraph__two: $t('rheumatologist.section_four_par_two')
}));

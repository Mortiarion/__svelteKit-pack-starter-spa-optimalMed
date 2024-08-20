import type { Section_Image_Type } from '$lib/types';
import { t } from '$lib/i18n';
import { derived } from 'svelte/store';

export const Bredcrumbs_Data = derived(t, ($t) => ({
	bredCrumbsHead: $t('breadcrumbs.title'),
	bredCrumbsCategories: $t('ophthalmologist.breadcrumbs_categories')
}));

export const Section_Title_Par_Par_Data = derived(t, ($t) => ({
	title: $t('ophthalmologist.section_one_title'),
	subtitle: $t('ophthalmologist.section_one_subtitle'),
	paragraph__one: $t('ophthalmologist.section_one_par_one'),
	paragraph__two: $t('ophthalmologist.section_one_par_two')
}));

export const Section_Title_Text_List_Par_Data = derived(t, ($t) => ({
	title: $t('ophthalmologist.section_two_title'),
	subtitle: $t('ophthalmologist.section_two_subtitle'),
	text: $t('ophthalmologist.section_two_text'),
	list: [
		{ text: $t('ophthalmologist.section_two_list_one') },
		{ text: $t('ophthalmologist.section_two_list_two') },
		{ text: $t('ophthalmologist.section_two_list_three') },
		{ text: $t('ophthalmologist.section_two_list_four') },
		{ text: $t('ophthalmologist.section_two_list_five') }
	],
	paragraph: $t('ophthalmologist.section_two_par')
}));

export const Section_Image_Data: Section_Image_Type = {
	image: {
		src: '/img/all-article-web-page-content-img/article-oftalmologist.jpg',
		alt: 'article-oftalmologist'
	},
	source: {
		srcset: '/img/all-article-web-page-content-img/article-oftalmologist.webp',
		type: 'image/webp'
	},
	source1: {
		srcset: '/img/all-article-web-page-content-img/article-oftalmologist.avif',
		type: 'image/avif'
	}
};

export const Section_Title_Text_List_Par_Par_Data = derived(t, ($t) => ({
	title: $t('ophthalmologist.section_three_title'),
	subtitle: $t('ophthalmologist.section_three_subtitle'),
	text: $t('ophthalmologist.section_three_text'),
	list: [
		{ text: $t('ophthalmologist.section_three_list_one') },
		{ text: $t('ophthalmologist.section_three_list_two') },
		{ text: $t('ophthalmologist.section_three_list_three') },
		{ text: $t('ophthalmologist.section_three_list_four') }
	],
	paragraph__one: $t('ophthalmologist.section_three_par_one'),
	paragraph__two: $t('ophthalmologist.section_three_par_two')
}));

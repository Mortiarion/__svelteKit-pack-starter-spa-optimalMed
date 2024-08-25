import { t } from '$lib/i18n';
import { derived } from 'svelte/store';
import type { Section_Image_Type } from '$lib/types';

export const Breadcrumb_Data = derived(t, ($t) => ({
	bredCrumbsHead: $t('breadcrumbs.title'),
	bredCrumbsCategories: $t('salary.breadcrumbs_cat')
}));

export const Section_Title_Par_Data = derived(t, ($t) => ({
	title: $t('salary.section_one_title'),
	subtitle: $t('salary.section_one_sub'),
	paragraph: $t('salary.section_one_par')
}));

export const Section_Title_Par_Par_Data = derived(t, ($t) => ({
	title: $t('salary.section_two_title'),
	subtitle: $t('salary.section_two_sub'),
	paragraph__one: $t('salary.section_two_par_one'),
	paragraph__two: $t('salary.section_two_par_two')
}));

export const Section_Image_Data: Section_Image_Type = {
	image: {
		src: '/img/all-article-web-page-content-img/doctor-salary.jpg',
		alt: 'doctor-salary'
	},
	source: {
		srcset: '/img/all-article-web-page-content-img/doctor-salary.webp',
		type: 'image/webp'
	},
	source1: {
		srcset: '/img/all-article-web-page-content-img/doctor-salary.avif',
		type: 'image/avif'
	}
};

export const Section_Three_Data = derived(t, ($t) => ({
	par_one: $t('salary.section_three_par_one'),
	list_one: [
		{
			text: $t('salary.section_three_list_one_one')
		},
		{
			text: $t('salary.section_three_list_one_two')
		},
		{
			text: $t('salary.section_three_list_one_three')
		}
	],
	title_one: $t('salary.section_three_title_one'),
	subtitle: $t('salary.section_three_sub'),
	list_two: [
		{
			text: $t('salary.section_three_list_two_one')
		},
		{
			text: $t('salary.section_three_list_two_two')
		},
		{
			text: $t('salary.section_three_list_two_three')
		}
	],
	par_two: $t('salary.section_three_par_two'),
	title_two: $t('salary.section_three_title_two'),
	text: $t('salary.section_three_text'),
	list_three: [
		{
			text: $t('salary.section_three_list_three_one')
		},
		{
			text: $t('salary.section_three_list_three_two')
		},
		{
			text: $t('salary.section_three_list_three_three')
		}
	],
	par_three: $t('salary.section_three_par_three'),
	par_four: $t('salary.section_three_par_four'),
	par_five: $t('salary.section_three_par_five'),
	par_six: $t('salary.section_three_par_six'),
	par_seven: $t('salary.section_three_par_seven')
}));

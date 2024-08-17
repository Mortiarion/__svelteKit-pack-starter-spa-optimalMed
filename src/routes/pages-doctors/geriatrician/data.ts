import type { Section_Image_Type } from '$lib/types';

import { t } from '$lib/i18n';
import { derived } from 'svelte/store';

export const Bredcrumb_Data = derived(t, ($t) => ({
	bredCrumbsHead: $t('breadcrumbs.title'),
	bredCrumbsCategories: $t('geriatrician.categories')
}));

export const Section_Title_Par_Par_Data = derived(t, ($t) => ({
	title: $t('geriatrician.section_one_title'),
	subtitle: $t('geriatrician.section_one_subtitle'),
	paragraph__one: $t('geriatrician.section_one_par_one'),
	paragraph__two: $t('geriatrician.section_one_par_two')
}));

export const Section_Title_Par_Text_List_Par_Data = derived(t, ($t) => ({
	title: $t('geriatrician.section_two_title'),
	subtitle: $t('geriatrician.section_two_subtitle'),
	paragraph__one: $t('geriatrician.section_two_par_one'),
	text: $t('geriatrician.section_two_text'),
	list: [
		{ text: $t('geriatrician.section_two_list_one') },
		{ text: $t('geriatrician.section_two_list_two') },
		{ text: $t('geriatrician.section_two_list_three') },
		{ text: $t('geriatrician.section_two_list_four') }
	],
	paragraph__two: $t('geriatrician.section_two_par_two')
}));

export const Section_Image_Data: Section_Image_Type = {
	image: {
		src: '/img/all-article-web-page-content-img/article-geriatricist.jpg',
		alt: 'article-geriatricist'
	},
	source: {
		srcset: '/img/all-article-web-page-content-img/article-geriatricist.webp',
		type: 'image/webp'
	},
	source1: {
		srcset: '/img/all-article-web-page-content-img/article-geriatricist.avif',
		type: 'image/avif'
	}
};

export const Section_Title_Text_List_Par_Par_Par_Data = derived(t, ($t) => ({
	title: $t('geriatrician.section_three_title'),
	subtitle: $t('geriatrician.section_three_subtitle'),
	text: $t('geriatrician.section_three_text'),
	list: [
		{
			text: $t('geriatrician.section_three_list_one')
		},
		{
			text: $t('geriatrician.section_three_list_two')
		},
		{ text: $t('geriatrician.section_three_list_three') },
		{ text: $t('geriatrician.section_three_list_four') }
	],
	paragraph_one: $t('geriatrician.section_three_par_one'),
	paragraph_two: $t('geriatrician.section_three_par_two'),
	paragraph_three: $t('geriatrician.section_three_par_three')
}));

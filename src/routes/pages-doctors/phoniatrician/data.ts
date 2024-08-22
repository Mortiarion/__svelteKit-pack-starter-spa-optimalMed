import { t } from '$lib/i18n';
import type { Section_Image_Type } from '$lib/types';
import { derived } from 'svelte/store';

export const Bredcrumbs_Data = derived(t, ($t) => ({
	bredCrumbsHead: $t('breadcrumbs.title'),
	bredCrumbsCategories: $t('phoniatrician.breadcrumbs_cat')
}));

export const Section_Title_Par_Par_Data = derived(t, ($t) => ({
	title: $t('phoniatrician.section_one_title'),
	subtitle: $t('phoniatrician.section_one_sub'),
	paragraph__one: $t('phoniatrician.section_one_par_one'),
	paragraph__two: $t('phoniatrician.section_one_par_two')
}));

export const Section_Title_Text_List_Par_Data = derived(t, ($t) => ({
	title: $t('phoniatrician.section_two_title'),
	subtitle: $t('phoniatrician.section_two_sub'),
	text: $t('phoniatrician.section_two_text'),
	list: [
		{ text: $t('phoniatrician.section_two_list_one') },
		{ text: $t('phoniatrician.section_two_list_two') },
		{ text: $t('phoniatrician.section_two_list_three') },
		{ text: $t('phoniatrician.section_two_list_four') },
		{ text: $t('phoniatrician.section_two_list_five') }
	],
	paragraph: $t('phoniatrician.section_two_par')
}));

export const Section_Image_Data: Section_Image_Type = {
	image: {
		src: '/img/all-article-web-page-content-img/article-foniatrist.jpg',
		alt: 'article-phoniatrician'
	},
	source: {
		srcset: '/img/all-article-web-page-content-img/article-foniatrist.webp',
		type: 'image/webp'
	},
	source1: {
		srcset: '/img/all-article-web-page-content-img/article-foniatrist.avif',
		type: 'image/avif'
	}
};

export const Section_Title_Par_Par_Data_Two = derived(t, ($t) => ({
	title: $t('phoniatrician.section_three_titel'),
	subtitle: $t('phoniatrician.section_three_sub'),
	paragraph__one: $t('phoniatrician.section_three_par_one'),
	paragraph__two: $t('phoniatrician.section_three_par_two')
}));

export const Section_Title_Text_List_Par_Par_Data = derived(t, ($t) => ({
	title: $t('phoniatrician.section_four_title'),
	subtitle: $t('phoniatrician.section_four_sub'),
	text: $t('phoniatrician.section_four_text'),
	list: [
		{ text: $t('phoniatrician.section_four_list_one') },
		{ text: $t('phoniatrician.section_four_list_two') },
		{ text: $t('phoniatrician.section_four_list_three') },
		{ text: $t('phoniatrician.section_four_list_four') }
	],
	paragraph__one: $t('phoniatrician.section_four_par_one'),
	paragraph__two: $t('phoniatrician.section_four_par_two')
}));

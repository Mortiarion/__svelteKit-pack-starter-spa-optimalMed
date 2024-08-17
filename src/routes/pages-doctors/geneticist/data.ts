import type { Section_Image_Type } from '$lib/types';

import { t } from '$lib/i18n';
import { derived } from 'svelte/store';

export const Breadcrumb_Data = derived(t, ($t) => ({
	bredCrumbsHead: $t('breadcrumbs.title'),
	bredCrumbsCategories: $t('geneticist.categories')
}));

export const Section_Title_Par_Data = derived(t, ($t) => ({
	title: $t('geneticist.section_one_title'),
	subtitle: $t('geneticist.section_one_subtitle'),
	paragraph: $t('geneticist.section_one_paragraph')
}));

export const Section_Title_Text_List_Par_Par_Par_Data = derived(t, ($t) => ({
	title: $t('geneticist.section_two_title'),
	subtitle: $t('geneticist.section_two_subtitle'),
	text: $t('geneticist.section_two_text'),
	list: [
		{ text: $t('geneticist.section_two_list_one') },
		{ text: $t('geneticist.section_two_list_two') },
		{ text: $t('geneticist.section_two_list_three') },
		{ text: $t('geneticist.section_two_list_four') },
		{ text: $t('geneticist.section_two_list_five') }
	],
	paragraph_one: $t('geneticist.section_two_par_one'),
	paragraph_two: $t('geneticist.section_two_par_two'),
	paragraph_three: $t('geneticist.section_two_par_three')
}));

export const Section_Image_Data: Section_Image_Type = {
	image: {
		src: '/img/all-article-web-page-content-img/article-geneticist.jpg',
		alt: 'article-geneticist'
	},
	source: {
		srcset: '/img/all-article-web-page-content-img/article-geneticist.webp',
		type: 'image/webp'
	},
	source1: {
		srcset: '/img/all-article-web-page-content-img/article-geneticist.avif',
		type: 'image/avif'
	}
};

export const Section_Title_Text_List_Par_Par_Par_Data_Two = derived(t, ($t) => ({
	title: $t('geneticist.section_three_title'),
	subtitle: $t('geneticist.section_three_subtitle'),
	text: $t('geneticist.section_three_text'),
	list: [
		{ text: $t('geneticist.section_three_list_one') },
		{ text: $t('geneticist.section_three_list_two') },
		{ text: $t('geneticist.section_three_list_three') },
		{ text: $t('geneticist.section_three_list_four') },
		{ text: $t('geneticist.section_three_list_five') },
		{ text: $t('geneticist.section_three_list_six') }
	],
	paragraph_one: $t('geneticist.section_three_par_one'),
	paragraph_two: $t('geneticist.section_three_par_two'),
	paragraph_three: $t('geneticist.section_three_par_three')
}));

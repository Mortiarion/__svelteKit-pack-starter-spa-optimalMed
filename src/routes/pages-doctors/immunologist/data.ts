import type { Section_Image_Type } from '$lib/types';
import { t } from '$lib/i18n';
import { derived } from 'svelte/store';

export const Bredcrumbs_Data = derived(t, ($t) => ({
	bredCrumbsHead: $t('breadcrumbs.title'),
	bredCrumbsCategories: $t('immunologist.breadcrumbs_categories')
}));

export const Section_Title_Par_Par_Data = derived(t, ($t) => ({
	title: $t('immunologist.section_one_title'),
	subtitle: $t('immunologist.section_one_subtitle'),
	paragraph__one: $t('immunologist.section_one_par_one'),
	paragraph__two: $t('immunologist.section_one_par_two')
}));

export const Section_Title_Text_List_Par_Par_Data = derived(t, ($t) => ({
	title: $t('immunologist.section_two_title'),
	subtitle: $t('immunologist.section_two_subtitle'),
	text: $t('immunologist.section_two_text'),
	list: [
		{ text: $t('immunologist.section_two_list_one') },
		{ text: $t('immunologist.section_two_list_two') },
		{
			text: $t('immunologist.section_two_list_three')
		},
		{ text: $t('immunologist.section_two_list_four') },
		{ text: $t('immunologist.section_two_list_five') }
	],
	paragraph__one: $t('immunologist.section_two_par_one'),
	paragraph__two: $t('immunologist.section_two_par_two')
}));

export const Section_Image_Data: Section_Image_Type = {
	image: {
		src: '/img/all-article-web-page-content-img/article-imunologist.jpg',
		alt: 'article-imunologist'
	},
	source: {
		srcset: '/img/all-article-web-page-content-img/article-imunologist.webp',
		type: 'image/webp'
	},
	source1: {
		srcset: '/img/all-article-web-page-content-img/article-imunologist.avif',
		type: 'image/avif'
	}
};

export const Section_Title_Text_List_Par_Data = derived(t, ($t) => ({
	title: $t('immunologist.section_three_title'),
	subtitle: $t('immunologist.section_three_subtitle'),
	text: $t('immunologist.section_three_text'),
	list: [
		{ text: $t('immunologist.section_three_list_one') },
		{ text: $t('immunologist.section_three_list_two') },
		{ text: $t('immunologist.section_three_list_three') },
		{ text: $t('immunologist.section_three_list_four') }
	],
	paragraph: $t('immunologist.section_three_par_one')
}));

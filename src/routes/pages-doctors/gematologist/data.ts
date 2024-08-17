import type {
	Section_Image_Type
} from '$lib/types';

import { t } from '$lib/i18n';
import { derived } from 'svelte/store';

export const Breadcrumb_Data = derived(t, ($t) => ({
	bredCrumbsHead: $t('breadcrumbs.title'),
	bredCrumbsCategories: $t('gematologist.breadcrumbs_categories')
}));

export const Section_Title_Par_Par_Data = derived(t, ($t) => ({
	title: $t('gematologist.section_one_title'),
	subtitle: $t('gematologist.section_one_subtitle'),
	paragraph__one: $t('gematologist.section_one_par_one'),
	paragraph__two: $t('gematologist.section_one_par_two')
}));

export const Section_Title_Par_Text_List_Par_Data = derived(t, ($t) => ({
	title: $t('gematologist.section_two_title'),
	subtitle: $t('gematologist.section_two_subtitle'),
	paragraph__one: $t('gematologist.section_two_par_one'),
	text: $t('gematologist.section_two_text'),
	list: [
		{ text: $t('gematologist.section_two_list_one') },
		{ text: $t('gematologist.section_two_list_two') },
		{ text: $t('gematologist.section_two_list_three') },
		{ text: $t('gematologist.section_two_list_four') },
		{ text: $t('gematologist.section_two_list_five') },
		{ text: $t('gematologist.section_two_list_six') }
	],
	paragraph__two: $t('gematologist.section_two_par_two')
}));

export const Section_Image_Data: Section_Image_Type = {
	image: {
		src: '/img/all-article-web-page-content-img/article-gematologist.jpg',
		alt: 'article-gematologist'
	},
	source: {
		srcset: '/img/all-article-web-page-content-img/article-gematologist.webp',
		type: 'image/webp'
	},
	source1: {
		srcset: '/img/all-article-web-page-content-img/article-gematologist.avif',
		type: 'image/avif'
	}
};

export const Section_Title_Text_List_Par_Par_Data = derived(t, ($t) => ({
	title: $t('gematologist.section_three_title'),
	subtitle: $t('gematologist.section_three_subtitle'),
	text: $t('gematologist.section_three_text'),
	list: [
		{ text: $t('gematologist.section_three_list_one') },
		{ text: $t('gematologist.section_three_list_two') },
		{ text: $t('gematologist.section_three_three') },
		{ text: $t('gematologist.section_three_four') },
		{ text: $t('gematologist.section_three_five') }
	],
	paragraph__one: $t('gematologist.section_three_par_one'),
	paragraph__two: $t('gematologist.section_three_par_two')
}));

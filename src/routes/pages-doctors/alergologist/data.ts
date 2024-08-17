import type { Section_Image_Type } from '$lib/types';

import { t } from '$lib/i18n';
import { derived } from 'svelte/store';

export const Breadcrumb_Data = derived(t, ($t) => ({
	bredCrumbsHead: $t('breadcrumbs.title'),
	bredCrumbsCategories: $t('breadcrumbs.name_pages')
}));

export const Section_Title_Par_Par_Data = derived(t, ($t) => ({
	title: $t('alergolog.title'),
	subtitle: $t('alergolog.subtitle'),
	paragraph__one: $t('alergolog.paragraph_one'),
	paragraph__two: $t('alergolog.paragraph_two')
}));

export const Section_Image_Data: Section_Image_Type = {
	image: {
		src: '/img/all-article-web-page-content-img/article-alergologist.jpg',
		alt: 'article-anestesiologist'
	},
	source: {
		srcset: '/img/all-article-web-page-content-img/article-alergologist.webp',
		type: 'image/webp'
	},
	source1: {
		srcset: '/img/all-article-web-page-content-img/article-alergologist.avif',
		type: 'image/avif'
	}
};

export const Section_Title_Par_Text_List_Par_Data = derived(t, ($t) => ({
	title: $t('alergolog.block_two_title'),
	subtitle: $t('alergolog.block_two_subtitle'),
	paragraph__one: $t('alergolog.block_two_title_paragraph'),
	text: $t('alergolog.block_two_text'),
	list: [
		{
			text: $t('alergolog.block_two_list_one')
		},
		{
			text: $t('alergolog.block_two_list_two')
		},
		{
			text: $t('alergolog.block_two_list_three')
		},
		{
			text: $t('alergolog.block_two_list_four')
		},
		{
			text: $t('alergolog.block_two_list_five')
		}
	],
	paragraph__two: $t('alergolog.block_two_list_six')
}));

export const Section_Title_Par_List_Par_Par_Data_Two = derived(t, ($t) => ({
	title: $t('alergolog.block_three_one'),
	subtitle: $t('alergolog.block_three_two'),
	text: $t('alergolog.block_three_three'),
	list: [
		{
			text: $t('alergolog.block_three_four')
		},
		{
			text: $t('alergolog.block_three_five')
		},
		{
			text: $t('alergolog.block_three_six')
		}
	],
	paragraph__one: $t('alergolog.block_three_seven'),
	paragraph__two: $t('alergolog.block_three_eight')
}));

export const Section_Title_Text_List_Par_Par_Data = derived(t, ($t) => ({
	title: $t('alergolog.block_four_one'),
	subtitle: $t('alergolog.block_four_two'),
	text: $t('alergolog.block_four_three'),
	list: [
		{
			text: $t('alergolog.block_four_four')
		},
		{
			text: $t('alergolog.block_four_five')
		},
		{
			text: $t('alergolog.block_four_six')
		},
		{
			text: $t('alergolog.block_four_seven')
		},
		{
			text: $t('alergolog.block_four_eight')
		}
	],
	paragraph__one: $t('alergolog.block_four_nine'),
	paragraph__two: $t('alergolog.block_four_ten')
}));

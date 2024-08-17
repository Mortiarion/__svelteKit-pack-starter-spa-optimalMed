import { t } from '$lib/i18n';
import { derived } from 'svelte/store';

export const Breadcrumb_Data = derived(t, ($t) => ({
	bredCrumbsHead: $t('breadcrumbs.title'),
	bredCrumbsCategories: $t('anestesiologist.breadcrumbs_subtitle')
}));

export const Section_Title_Par_Par_Data = derived(t, ($t) => ({
	title: $t('anestesiologist.section_one_title'),
	subtitle: $t('anestesiologist.section_one_subtitle'),
	paragraph__one: $t('anestesiologist.section_one_par_one'),
	paragraph__two: $t('anestesiologist.section_one_par_two')
}));

export const Section_Title_Text_List_Img_Par_Par_Data = derived(t, ($t) => ({
	title: $t('anestesiologist.section_two_title'),
	subtitle: $t('anestesiologist.section_two_subtitle'),
	text: $t('anestesiologist.section_two_text'),
	list: [
		{
			text: $t('anestesiologist.section_two_list_one')
		},
		{
			text: $t('anestesiologist.section_two_list_two')
		},
		{
			text: $t('anestesiologist.section_two_list_three')
		},
		{
			text: $t('anestesiologist.section_two_list_four')
		},
		{
			text: $t('anestesiologist.section_two_list_five')
		},
		{
			text: $t('anestesiologist.section_two_list_six')
		},
		{
			text: $t('anestesiologist.section_two_list_seven')
		},
		{
			text: $t('anestesiologist.section_two_list_eight')
		},
		{
			text: $t('anestesiologist.section_two_list_nine')
		}
	],
	img: {
		img: '/img/all-article-web-page-content-img/article-anestesiologist.jpg',
		alt: 'article-anestesiologist',
		srcset_one: '/img/all-article-web-page-content-img/article-anestesiologist.webp',
		type_one: 'image/webp',
		srcset_two: '/img/all-article-web-page-content-img/article-anestesiologist.avif',
		type_two: 'image/avif'
	},
	paragraph__one: $t('anestesiologist.section_two_par_one'),
	paragraph__two: $t('anestesiologist.section_two_par_two')
}));

export const Section_Title_Text_List_Par_Data = derived(t, ($t) => ({
	title: $t('anestesiologist.section_three_title'),
	subtitle: $t('anestesiologist.section_three_subtitle'),
	text: $t('anestesiologist.section_three_text'),
	list: [
		{ text: $t('anestesiologist.section_three_list_one') },
		{ text: $t('anestesiologist.section_three_list_two') },
		{ text: $t('anestesiologist.section_three_list_three') },
		{ text: $t('anestesiologist.section_three_list_four') },
		{ text: $t('anestesiologist.section_three_list_five') },
		{ text: $t('anestesiologist.section_three_list_six') }
	],
	paragraph: $t('anestesiologist.section_three_par')
}));

export const Section_Title_Text_List_Par_Data_Two = derived(t, ($t) => ({
	title: $t('anestesiologist.section_four_title'),
	subtitle: $t('anestesiologist.section_four_subtitle'),
	text: $t('anestesiologist.section_four_text'),
	list: [
		{
			text: $t('anestesiologist.section_four_list_one')
		},
		{
			text: $t('anestesiologist.section_four_list_two')
		},
		{
			text: $t('anestesiologist.section_four_list_three')
		},
		{
			text: $t('anestesiologist.section_four_list_four')
		},
		{
			text: $t('anestesiologist.section_four_list_five')
		},
		{
			text: $t('anestesiologist.section_four_list_six')
		}
	],
	paragraph: $t('anestesiologist.section_four_par')
}));

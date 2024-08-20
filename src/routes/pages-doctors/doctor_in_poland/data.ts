import type { Section_Image_Type } from '$lib/types';
import { derived } from 'svelte/store';
import { t } from '$lib/i18n';

export const Bredcrumbs_Data = derived(t, ($t) => ({
	bredCrumbsHead: $t('breadcrumbs.title'),
	bredCrumbsCategories: $t('doctor_in_poland.breadcrumbs_categories')
}));

export const Section_Title_Par_Data = derived(t, ($t) => ({
	title: $t('doctor_in_poland.section_one_title'),
	subtitle: $t('doctor_in_poland.section_one_sub'),
	paragraph: $t('doctor_in_poland.section_one_par')
}));

export const Section_Title_Par_Text_List_Par_Data = derived(t, ($t) => ({
	title: $t('doctor_in_poland.section_two_title'),
	subtitle: $t('doctor_in_poland.section_two_sub'),
	paragraph__one: $t('doctor_in_poland.section_two_par_one'),
	text: $t('doctor_in_poland.section_two_text'),
	list: [
		{ text: $t('doctor_in_poland.section_two_list_one') },
		{ text: $t('doctor_in_poland.section_two_list_two') },
		{ text: $t('doctor_in_poland.section_two_list_three') },
		{ text: $t('doctor_in_poland.section_two_list_four') },
		{ text: $t('doctor_in_poland.section_two_list_five') },
		{ text: $t('doctor_in_poland.section_two_list_six') },
		{ text: $t('doctor_in_poland.section_two_list_seven') },
		{ text: $t('doctor_in_poland.section_two_list_eight') },
		{ text: $t('doctor_in_poland.section_two_list_nine') },
		{ text: $t('doctor_in_poland.section_two_list_ten') },
		{ text: $t('doctor_in_poland.section_two_list_eleven') },
		{ text: $t('doctor_in_poland.section_two_list_twelve') },
		{ text: $t('doctor_in_poland.section_two_list_thirteen') },
		{ text: $t('doctor_in_poland.section_two_list_fourteen') },
		{ text: $t('doctor_in_poland.section_two_list_fiveteen') },
		{ text: $t('doctor_in_poland.section_two_list_sixteen') }
	],
	paragraph__two: $t('doctor_in_poland.section_two_par_two')
}));

export const Section_Image_Data: Section_Image_Type = {
	image: {
		src: '/img/all-article-web-page-content-img/article-prospekts.jpg',
		alt: 'article-prospekts'
	},
	source: {
		srcset: '/img/all-article-web-page-content-img/article-prospekts.webp',
		type: 'image/webp'
	},
	source1: {
		srcset: '/img/all-article-web-page-content-img/article-prospekts.avif',
		type: 'image/avif'
	}
};

export const Section_Title_Six_Par_Data = derived(t, ($t) => ({
	title: $t('doctor_in_poland.section_three_title'),
	subtitle: $t('doctor_in_poland.section_three_sub'),
	paragraph__one: $t('doctor_in_poland.section_three_par_one'),
	paragraph__two: $t('doctor_in_poland.section_three_par_two'),
	paragraph__three: $t('doctor_in_poland.section_three_par_three'),
	paragraph__four: $t('doctor_in_poland.section_three_par_four'),
	paragraph__five: $t('doctor_in_poland.section_three_par_five'),
	paragraph__six: $t('doctor_in_poland.section_three_par_six')
}));

export const Section_Title_Par_Par_Text_List_Par_Text_List_Par_Par_Data = derived(t, ($t) => ({
	title: $t('doctor_in_poland.section_four_title'),
	subtitle: $t('doctor_in_poland.section_four_sub'),
	paragraph_one: $t('doctor_in_poland.section_four_par_one'),
	paragraph_two: $t('doctor_in_poland.section_four_par_two'),
	text_one: $t('doctor_in_poland.section_four_text_one'),
	list_one: [
		{ text: $t('doctor_in_poland.section_four_list_one') },
		{ text: $t('doctor_in_poland.section_four_list_two') },
		{ text: $t('doctor_in_poland.section_four_list_three') }
	],
	paragraph__three: $t('doctor_in_poland.section_four_par_three'),
	text_two: $t('doctor_in_poland.section_four_text_two'),
	list_two: [
		{ text: $t('doctor_in_poland.section_four_list_two_one') },
		{ text: $t('doctor_in_poland.section_four_list_two_two') },
		{ text: $t('doctor_in_poland.section_four_list_two_three') }
	],
	paragraph__four: $t('doctor_in_poland.section_four_par_four'),
	paragraph__five: $t('doctor_in_poland.section_four_par_five')
}));

export const Section_Image_Data_Two: Section_Image_Type = {
	image: {
		src: '/img/all-article-web-page-content-img/article-prospektss.jpg',
		alt: 'article-prospektss'
	},
	source: {
		srcset: '/img/all-article-web-page-content-img/article-prospektss.webp',
		type: 'image/webp'
	},
	source1: {
		srcset: '/img/all-article-web-page-content-img/article-prospektss.avif',
		type: 'image/avif'
	}
};

export const Section_Title_Par_Par_Par_Par_Par_Text_List_Par_Par_Data = derived(t, ($t) => ({
	title: $t('doctor_in_poland.section_five_title'),
	subtitle: $t('doctor_in_poland.section_five_sub'),
	paragraph_one: $t('doctor_in_poland.section_five_par_one'),
	paragraph_two: $t('doctor_in_poland.section_five_par_two'),
	paragraph_three: $t('doctor_in_poland.section_five_par_three'),
	paragraph_four: $t('doctor_in_poland.section_five_par_four'),
	paragraph_five: $t('doctor_in_poland.section_five_par_five'),
	text: $t('doctor_in_poland.section_five_text'),
	list: [
		{ text: $t('doctor_in_poland.section_five_list_one') },
		{ text: $t('doctor_in_poland.section_five_list_two') },
		{ text: $t('doctor_in_poland.section_five_list_three') },
		{ text: $t('doctor_in_poland.section_five_list_four') },
		{ text: $t('doctor_in_poland.section_five_list_five') }
	],
	paragraph_six: $t('doctor_in_poland.section_five_par_six'),
	paragraph_seven: $t('doctor_in_poland.section_five_par_seven')
}));

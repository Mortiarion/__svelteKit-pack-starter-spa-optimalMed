import type {
	Breadcrumb_Type,
	Section_Title_Par_Type,
	Section_Title_Par_Text_List_Par_Type,
	Section_Image_Type,
	Section_Text_List_Par_Text_List_Par_Type
} from '$lib/types';

export const Bredcrumbs_Data: Breadcrumb_Type = {
	bredCrumbsHead: 'Головна',
	bredCrumbsCategories: 'Робота трансфузіологом у Польщі - вигідні умови для іноземних фахівців'
};

export const Section_Title_Par_Data: Section_Title_Par_Type = {
	title: 'Робота трансфузіологом у Польщі -',
	subtitle: 'вигідні умови для іноземних фахівців',
	paragraph:
		'Трансфузіолог - досить рідкісна спеціалізація в медицині в принципі. А в країнах, які відчувають дефіцит медичних кадрів загалом, затребуваність у таких фахівцях тим більше висока. Тому робота трансфузіологом у Польщі для вихідців із пострадянських країн - це можливість порівняно легко отримати перспективну посаду з високою грошовою винагородою.'
};

export const Section_Title_Par_Text_List_Par_Data: Section_Title_Par_Text_List_Par_Type = {
	title: 'Чим займається',
	subtitle: 'лікар-трансфузіолог?',
	paragraph__one:
		'Обов`язки такого фахівця окреслюються вивченням і дослідженням крові, її захворювань, а також проведенням трансфузій. Трансфузіологи працюють, здебільшого, в медичних закладах стаціонарного типу, хоча можуть практикувати і в амбулаторних кабінетах трансфузіотерапії, а також у центрах переливання крові.',
	text: 'Лікарі цієї спеціалізації виконують такі завдання:',
	list: [
		{
			text: 'здійснюють усі види переливання крові - пряме, непряме, обмінне, аутогемотрансфузію, реінфузію;'
		},
		{ text: 'борються з ускладненнями, спричиненими згаданою процедурою;' },
		{ text: 'розробляють алгоритми обстежень потенційних донорів крові;' },
		{
			text: 'у симбіозі з іншими фахівцями беруть участь у лікуванні отруєнь, кишкових інфекцій, опіків, кровотеч, порушень водно-електролітного балансу, відхилень від норми основних показників крові.'
		}
	],
	paragraph__two:
		'Залежно від того, в якому з напрямків кандидат має потрібний досвід, він може претендувати на роботу трансфузіологом у Польщі з урахуванням вузької спеціалізації - трансфузій в акушерстві, токсикології, трансплантології тощо.'
};

export const Section_Image_Data: Section_Image_Type = {
	image: {
		src: '/img/all-article-web-page-content-img/article-transfusiologist.jpg',
		alt: 'article-transfusiologist'
	},
	source: {
		srcset: '/img/all-article-web-page-content-img/article-transfusiologist.webp',
		type: 'image/webp'
	},
	source1: {
		srcset: '/img/all-article-web-page-content-img/article-transfusiologist.avif',
		type: 'image/avif'
	}
};

export const Section_Text_List_Par_Text_List_Par_Data: Section_Text_List_Par_Text_List_Par_Type = {
	title: 'Головні вимоги',
	subtitle: 'до лікарів-іноземців у Польщі',
	text_one:
		'Вихідцям з України та Білорусі доступний спрощений формат працевлаштування в польські клініки. Для цього їм достатньо:',
	list_one: [
		{
			text: 'пред`явити диплом про закінчення медичного ВНЗ і сертифікат про отримання спеціалізації "трансфузіолог";'
		},
		{
			text: 'мати документи, що підтверджують стаж роботи трансфузіологом не менше 3 років протягом останніх 5 років;'
		},
		{ text: 'успішно скласти іспит на володіння польською мовою з медичним ухилом;' },
		{ text: 'отримати дозвіл на здійснення професійної діяльності.' }
	],
	paragraph_one:
		'Зверніть увагу: на сьогодні вимогу нострифікації документа про освіту до початку роботи для вищезгаданих кандидатів нівельовано: цю процедуру можна пройти вже після працевлаштування.',
	text_two:
		'За досить м`яких вимог до кандидата польська охорона здоров`я гарантує йому гідні умови праці. Це, зокрема:',
	list_two: [
		{
			text: 'адекватна зарплата, розмір якої у 2023 році стартує від 7500 злотих брутто на місяць;'
		},
		{
			text: 'нормований стандартний робочий день і оплата переробок, чергувань, додаткових консультацій;'
		},
		{ text: 'робота в сучасних медичних закладах із прогресивним оснащенням;' },
		{
			text: 'ідеальні умови для самовдосконалення, здобуття нових знань і навичок, підвищення кваліфікації та кар`єрного зростання.'
		}
	],
	paragraph_two:
		'Вас зацікавила можливість отримання роботи трансфузіологом у Польщі? Звертайтеся: підберемо відповідну вакансію і надамо допомогу на кожному етапі шляху до працевлаштування!'
};

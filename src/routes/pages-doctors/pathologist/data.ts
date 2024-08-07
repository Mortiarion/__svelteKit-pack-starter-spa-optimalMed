import type {
	Breadcrumb_Type,
	Section_Title_Par_Par_Type,
	Section_Title_Text_List_Par_Par_Type,
	Section_Image_Type
} from '$lib/types';

export const Bredcrumbs_Data: Breadcrumb_Type = {
	bredCrumbsHead: 'Головна',
	bredCrumbsCategories: 'Робота паталогоанатомом у Польщі'
};

export const Section_Title_Par_Par_Data: Section_Title_Par_Par_Type = {
	title: 'Робота',
	subtitle: 'паталогоанатомом у Польщі',
	paragraph__one:
		'Паталогічна анатомія - досить специфічна галузь медицини, досвідчені фахівці в ній - буквально на вагу золота. Вони дуже затребувані в країнах Західної Європи, куди масово виїжджають працювати, зокрема, з Польщі. Сьогодні в цій країні спостерігається критичний дефіцит таких лікарів. І це відкриває широкі можливості для іноземців із пострадянських держав - українців і білорусів, які шукають роботу паталогоанатомом у Польщі.',
	paragraph__two:
		'Наша компанія надає таким фахівцям реальну дієву допомогу в працевлаштуванні, допомагає з вибором вакансії, вивченням мови, розв`язанням побутових питань і супроводжує іноземних претендентів стільки, скільки їм буде потрібно.'
};

export const Section_Title_Text_List_Par_Par_Data: Section_Title_Text_List_Par_Par_Type = {
	title: 'Чим займається паталогоанатом і',
	subtitle: 'які особисті якості потрібні в професії?',
	text: 'Лікар цієї спеціалізації відрізняється від лікарів у звичному обивателю сенсі. Він не лікує пацієнтів і не комунікує з ними. В обов`язки патанатома входить:',
	list: [
		{
			text: 'розтин трупів для визначення причини смерті, виявлення помилок діагностики та лікування;'
		},
		{
			text: 'цитологічне та гістологічне дослідження тканин живих пацієнтів у лабораторних умовах з метою виявлення патологій (в основному, онкологічних);'
		},
		{ text: 'ведення відповідної медичної документації.' }
	],
	paragraph__one: 'Місцем роботи таких лікарів є морги та спеціальні дослідницькі лабораторії.',
	paragraph__two:
		'З огляду на специфіку професійної діяльності, претендент на роботу паталогоанатомом у Польщі повинен володіти не тільки профільними знаннями, а й певним складом характеру: бути зібраним, стресостійким, негидким, не мати некрофобічних проявів. Така робота ідеально підійде флегматикам-інтровертам, оскільки передбачає розмірений робочий ритм і мінімум спілкування з іншими людьми.'
};

export const Section_Image_Data: Section_Image_Type = {
	image: {
		src: '/img/all-article-web-page-content-img/article-patanatomist.jpg',
		alt: 'article-patanatomist'
	},
	source: {
		srcset: '/img/all-article-web-page-content-img/article-patanatomist.webp',
		type: 'image/webp'
	},
	source1: {
		srcset: '/img/all-article-web-page-content-img/article-patanatomist.avif',
		type: 'image/avif'
	}
};

export const Section_Title_Text_List_Par_Par_Data_Two: Section_Title_Text_List_Par_Par_Type = {
	title: 'Вимоги до лікаря-паталогоанатома',
	subtitle: 'для працевлаштування в Польщі',
	text: 'Тим, хто бажає отримати посаду паталогоанатома в польському медичному закладі, слід подбати про:',
	list: [
		{
			text: 'наявності диплома про вищу медичну освіту;'
		},
		{
			text: 'наявності сертифіката за спеціалізацією паталогоанатома або судмедексперта;'
		},
		{
			text: 'наявності професійного досвіду, який виражається у стажі роботи за фахом від 3 років протягом останніх 5 років;'
		},
		{ text: 'впевнене володіння польською мовою, включно зі специфічними термінами та поняттями;' },
		{ text: 'отримання дозволу та ліцензії на здійснення лікарської діяльності.' }
	],
	paragraph__one:
		'Перелік вимог досить лояльний, при цьому кандидат на роботу паталогоанатомом у Польщі, який їм відповідає, може розраховувати на стартову заробітну плату від 7500 злотих до відрахування податків щомісяця, премії, доплати та надбавки, а також виплати за понадстрокову роботу. У міру збільшення медичного стажу зарплата також відчутно зростатиме.',
	paragraph__two:
		'Є й інші значущі преференції для польських лікарів-паталогоанатомів, наприклад, відтермінування нострифікації документа про освіту і не тільки. Хочете дізнатися про них більше? Звертайтеся - ми розповімо!'
};

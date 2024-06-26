import type {
	Breadcrumb_Type,
	Section_Title_Par_Par_Type,
	Section_Title_Text_List_Par_Par_Par_Type,
	Section_Image_Type,
	Section_Title_Text_List_Par_Type
} from '$lib/types';

export const Breadcrumb_Data: Breadcrumb_Type = {
	bredCrumbsHead: 'Головна',
	bredCrumbsCategories: 'Робота гастроентерологом у Польщі'
};

export const Section_Title_Par_Par_Data: Section_Title_Par_Par_Type = {
	title: 'Робота',
	subtitle: 'гастроентерологом у Польщі',
	paragraph__one:
		'Наша компанія пропонує допомогу українцям і білорусам, які бажають отримати роботу гастроентерологом у Польщі на комфортних умовах. Наразі лікарі цієї спеціальності вкрай затребувані - польська влада готова створювати вихідцям із пострадянських країн максимально прийнятні умови, щоб зменшити дефіцит кваліфікованих медичних кадрів, який постійно зростає.',
	paragraph__two:
		'Ситуація, що склалася, відкриває широкі можливості для іноземців, які шукають перспективні варіанти релокації в європейську країну, що активно розвивається. Тут лікарям пропонують гідну зарплату, можливість зростати в професії та інші приємні преференції.'
};

export const Section_Title_Text_List_Par_Par_Par_Data: Section_Title_Text_List_Par_Par_Par_Type = {
	title: 'Чим займаються',
	subtitle: 'польські гастроентерологи?',
	text: 'Гастроентерологія - досить широка сфера медичної діяльності, що містить у собі кілька вужчих напрямів, наприклад:',
	list: [
		{ text: 'дитячу гастроентерологію;' },
		{ text: 'гастроентерологічну хірургію;' },
		{ text: 'онкогастрологію;' },
		{ text: 'проктологію та колопроктологію;' },
		{ text: 'гепатологію.' }
	],
	paragraph_one:
		'Залежно від напряму у фокус уваги лікаря потрапляють різні органи шлунково-кишкового тракту - кишечник, шлунок, печінка, жовчний міхур. Гастроентерологи займаються порушеннями травлення, новоутвореннями в травному тракті, дитячими патологіями, усуненням наявних проблем за допомогою оперативного втручання або консервативного лікування.',
	paragraph_two:
		'В обов`язки фахівця, який отримав роботу гастроентерологом у Польщі, входять амбулаторний прийом, опитування, огляд і обстеження пацієнта, постановка діагнозу, підбір індивідуальної схеми лікування, спостереження, а також профілактичні заходи та оформлення медичної документації.',
	paragraph_three:
		'Працюють польські гастроентерологи в державних і приватних клініках амбулаторного та стаціонарного типу, а також у профільних санаторіях та інших оздоровчих закладах.'
};

export const Section_Image_Data: Section_Image_Type = {
	image: {
		src: '/img/all-article-web-page-content-img/article-gastroenterologist.jpg',
		alt: 'article-gastroenterologist'
	},
	source: {
		srcset: '/img/all-article-web-page-content-img/article-gastroenterologist.webp',
		type: 'image/webp'
	},
	source1: {
		srcset: '/img/all-article-web-page-content-img/article-gastroenterologist.avif',
		type: 'image/avif'
	}
};

export const Section_Title_Text_List_Par_Data: Section_Title_Text_List_Par_Type = {
	title: 'Вимоги та',
	subtitle: 'умови',
	text: 'Претендувати на описувану вакансію можуть претенденти:',
	list: [
		{
			text: 'ті, хто має диплом медичного ВНЗ і сертифікат перепідготовки за вузькою спеціалізацією. Отримати нострифікацію можна після працевлаштування;'
		},
		{
			text: 'отримали досвід роботи за фахом у своїй країні від 3 років протягом останніх 5 років;'
		},
		{ text: 'добре володіють польською мовою, зокрема специфічними термінами;' },
		{ text: 'успішно пройшли процедуру отримання дозволу в польському МОЗ;' },
		{
			text: 'мають відповідні особисті та професійні якості - прагнення до набуття нових знань і навичок, комунікабельність, відповідальність, пунктуальність, організованість, сумлінність, здатність у будь-якій ситуації дотримуватися лікарської етики.'
		}
	],
	paragraph:
		'Таким кандидатам на роботу гастроентерологом у Польщі роботодавці пропонують заробітну плату від 7500 злотих брутто на місяць і вище, нормований робочий день, доплати за понаднормову роботу, забезпечення уніформою, розхідними матеріалами, інструментами та обладнанням. А ще - солідні соціальні гарантії та можливість працювати, орієнтуючись на високі стандарти сучасної європейської медицини.'
};

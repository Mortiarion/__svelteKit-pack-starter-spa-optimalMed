import type {
	Breadcrumb_Type,
	Section_Title_Par_Par_Type,
	Section_Title_Par_Text_List_Par_Type,
	Section_Image_Type,
	Section_Title_Text_List_Par_Par_Par_Type
} from '$lib/types';

export const Bredcrumbs_Data: Breadcrumb_Type = {
	bredCrumbsHead: 'Головна',
	bredCrumbsCategories: 'Як іноземцю почати працювати терапевтом у Польщі?'
};

export const Section_Title_Par_Par_Data: Section_Title_Par_Par_Type = {
	title: 'Як іноземцю почати працювати',
	subtitle: 'терапевтом у Польщі?',
	paragraph__one:
		'Терапія є однією з найпоширеніших спеціальностей у медицині. Лікарі з такою спеціалізацією працюють у державних і приватних амбулаторіях і лікарнях, хоспісах, санаторіях, пансіонатах та інших подібних закладах. Наявність великої кількості пропозицій роботи терапевтом у Польщі пояснюється ще й тим, що нині в цій країні спостерігається кадрова криза в медичній сфері. І виправляти ситуацію уряд вирішив шляхом залучення фахівців з інших країн, насамперед пострадянських.',
	paragraph__two:
		'Наша компанія бере безпосередню участь у цьому процесі, підшукуючи претендентам з України та Білорусі гідну роботу лікарем-терапевтом у Польщі з гарантією стабільної зарплати і широкими можливостями для просування кар`єрними сходами.'
};

export const Section_Title_Par_Text_List_Par_Data: Section_Title_Par_Text_List_Par_Type = {
	title: 'Перелік обов`язків',
	subtitle: 'польського терапевта',
	paragraph__one:
		'Таких лікарів не дарма вважають фахівцями широкого профілю. Саме терапевт є лікарем першого контакту, займається профілактикою та ранньою діагностикою захворювань, а також первинним обстеженням пацієнта і направленням його до вузького спеціаліста.',
	text: 'Виходячи з вищесказаного, робота терапевтом у Польщі передбачає:',
	list: [
		{
			text: 'збір анамнезу за допомогою візуального огляду та опитування пацієнта, а також вивчення історії хвороби;'
		},
		{
			text: 'направлення на лабораторні, інструментальні та апаратні обстеження для попередньої постановки діагнозу;'
		},
		{ text: 'перенаправлення для подальшого лікування до відповідного профільного фахівця;' },
		{ text: 'визначення ризиків розвитку хронічних патологій;' },
		{ text: 'проведення з пацієнтом бесід на тему профілактики хвороб, зокрема, вакцинації;' },
		{ text: 'оформлення направлення на стаціонарне лікування.' }
	],
	paragraph__two:
		'Крім цього, терапевт призначає і виписує рецепти на медичні препарати, направляє пацієнтів на реабілітацію, фізіотерапію, санаторне лікування, а також оформляє лікарняні листи.'
};

export const Section_Image_Data: Section_Image_Type = {
	image: {
		src: '/img/all-article-web-page-content-img/article-terapevtist.jpg',
		alt: 'article-terapevtist'
	},
	source: {
		srcset: '/img/all-article-web-page-content-img/article-terapevtist.webp',
		type: 'image/webp'
	},
	source1: {
		srcset: '/img/all-article-web-page-content-img/article-terapevtist.avif',
		type: 'avif'
	}
};

export const Section_Title_Text_List_Par_Par_Par_Data: Section_Title_Text_List_Par_Par_Par_Type = {
	title: 'Хто може працювати',
	subtitle: 'терапевтом у медичних закладах Польщі?',
	text: 'Такий широкий пул професійних обов`язків вимагає від лікаря фундаментальних медичних знань і достатнього досвіду роботи за фахом. Тому до претендентів на цю вакансію висуваються такі вимоги:',
	list: [
		{ text: 'наявність документа про вищу медичну освіту;' },
		{
			text: 'стаж роботи на посаді лікаря загальної практики не менше 3 років протягом останніх 5 років. Це може бути робота як терапевтом, так і сімейним лікарем;'
		},
		{ text: 'вільне володіння польською мовою, зокрема, у професійній сфері;' },
		{
			text: 'відповідні особисті якості - доброзичливість, комунікабельність, відповідальність, сумлінність, бажання і прагнення працювати на благо пацієнтів та інші.'
		}
	],
	paragraph_one:
		'Тим, хто задається питанням необхідності нострифікації диплома, роз`яснюємо: її можна здійснити після працевлаштування. Ми готові допомагати лікарям-іноземцям у швидкому проходженні цієї процедури.',
	paragraph_two:
		'Одразу після влаштування в польський медичний заклад лікар-терапевт може розраховувати на мінімальну заробітну плату. У 2023 році вона становить 7500 злотих так званими "брудними" на місяць. У міру збільшення польського стажу ця сума зростатиме.',
	paragraph_three:
		'Крім того, іноземець, який потрапив на роботу лікарем-терапевтом у Польщі, отримує доплати за добові чергування, додаткові зміни і тому подібні переробітки, що перевищують встановлені законодавством 8 робочих годин. Додайте до цього соціальні гарантії, відмінне технічне забезпечення, безкоштовну уніформу - і ви зможете гідно оцінити високі стандарти ставлення до цінних фахівців у польській медицині.'
};

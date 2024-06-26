import type {
	Breadcrumb_Type,
	Section_Title_Par_Par_Type,
	Section_Image_Type,
	Section_Title_Par_Text_List_Par_Type,
	Section_Title_Text_List_Par_Par_Type
} from '$lib/types';

export const Breadcrumb_Data: Breadcrumb_Type = {
	bredCrumbsHead: 'Головна',
	bredCrumbsCategories: 'Робота алергологом у Польщі'
};

export const Section_Title_Par_Par_Data: Section_Title_Par_Par_Type = {
	title: 'Робота',
	subtitle: 'алергологом у Польщі',
	paragraph__one:
		'Як відомо, алергічні реакції безпосередньо пов`язані з роботою імунної системи. І чим нижчий імунітет популяції, тим частіше у дітей і дорослих проявляються різного роду алергічні реакції. У зв`язку з цим, а також з урахуванням масової робочої міграції фахівців до країн Західної Європи, робота алергологом у Польщі для іноземців сьогодні більш доступна, ніж будь-коли.',
	paragraph__two:
		'Ми займаємося працевлаштуванням іноземних лікарів, переважно, українців і білорусів, у польські медичні заклади впродовж кількох років. У нашому багажі - великий пул успішних кейсів і постійно оновлювана база актуальних вакансій. Знайдемо для вас роботу алергологом у Польщі з хорошою заробітною платою і комфортними умовами. А крім цього - надамо комплексну підтримку у вивченні мови, релокації, пошуку житла, оформленні документів.'
};

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

export const Section_Title_Par_Text_List_Par_Data: Section_Title_Par_Text_List_Par_Type = {
	title: 'Обов`язки',
	subtitle: 'польського алерголога',
	paragraph__one:
		'Завдання такого фахівця - діагностика і лікування різного роду надмірно чутливих реакцій на зовнішні подразники. Це можуть бути шкірні реакції, проблеми з боку дихальної системи, кон`юнктивіти, інші патології.',
	text: 'В обов`язки алерголога входить:',
	list: [
		{
			text: 'огляд та опитування пацієнта, вивчення анамнезу;'
		},
		{
			text: 'проведення клінічних і лабораторних обстежень;'
		},
		{
			text: 'постановка діагнозу і пошук причин виникнення захворювання;'
		},
		{
			text: 'призначення та коригування лікування за індивідуальною схемою;'
		},
		{
			text: 'ведення медичної документації.'
		}
	],
	paragraph__two:
		'Також алергологи за результатами обстеження пацієнтів оформляють допуск або недопуск до вакцинації.'
};

export const Section_Title_Par_List_Par_Par_Data_Two: Section_Title_Text_List_Par_Par_Type = {
	title: 'Порядок отримання',
	subtitle: 'дозволу на виконання лікарської практики',
	text: 'Будь-який лікар з України чи Білорусі може отримати право на практику в Польщі. Перевагу надають медичним фахівцям, які працювали за професією безперервно. МОЗ поділяє медичних працівників, яким видає ліцензію на заняття професією, на три категорії:',
	list: [
		{
			text: 'лікарі, які мають тільки диплом, що підтверджує вищу освіту в галузі медицини або медицини та стоматології'
		},
		{ text: 'лікарі з дипломом спеціаліста' },
		{
			text: 'лікарі з медичним дипломом, дипломом, що підтверджує отримання звання фахівця, стажем роботи за професією фахівця не менше ніж 3 роки, а також декларують знання польської мови'
		}
	],
	paragraph__one:
		'Кожна з перерахованих вище категорій осіб може отримати умовне право на заняття діяльністю. Усе в руках майбутнього медичного закладу, від якого залежить його поточна потреба в кадрах. Умовою отримання права на заняття професією є подання відповідної заяви, завірених перекладів дипломів та відповідних заяв. Після отримання умовного права на заняття професією лікар звертається у воєводський медичний центр за отриманням дозволу на медичну практику або практику лікаря-стоматолога. Час отримання всіх дозволів становить від 3 до 4-5 місяців.',
	paragraph__two:
		'Працюють лікарі-алергологи в державних і комерційних амбулаторіях або в стаціонарах загального профілю.'
};

export const Section_Title_Text_List_Par_Par_Data: Section_Title_Text_List_Par_Par_Type = {
	title: 'Вимоги',
	subtitle: 'до кандидатів',
	text: 'Для того, щоб отримати роботу алерголога в Польщі, здобувач повинен:',
	list: [
		{
			text: 'мати диплом вищого медичного навчального закладу (на цьому етапі можна без нострифікації);'
		},
		{ text: 'підтвердити спеціалізацію відповідним сертифікатом;' },
		{
			text: 'мати професійний досвід, отримання якого підтверджує мінімум трирічний стаж роботи за останні 5 років;'
		},
		{ text: 'вільно володіти польською мовою, в тому числі, медичними термінами;' },
		{
			text: 'мати дозвіл від МОЗ Республіки Польща та ліцензію на роботу лікарем від місцевих органів влади.'
		}
	],
	paragraph__one:
		'Таким претендентам, якщо вони, до того ж, володіють відповідальністю, сумлінністю, доброзичливістю, неконфліктністю, комунікабельністю, умінням працювати в команді та іншими значущими професійними й особистими якостями, роботодавець пропонує вигідні умови. Це і зарплата в 7500 злотих брутто на місяць одразу ж після працевлаштування, і восьмигодинний робочий день, і доплати за чергування та перепрацювання, і комфортний соціальний пакет.',
	paragraph__two:
		'А ще - забезпечення всім необхідним для ефективної роботи, професійного зростання, розширення кола знань, поліпшення навичок і компетенцій, а також високий рівень всебічної підтримки тих, хто демонструє бажання затриматися на місці якомога довше.'
};

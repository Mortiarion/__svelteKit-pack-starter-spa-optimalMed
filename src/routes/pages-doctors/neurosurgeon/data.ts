import type {
	Breadcrumb_Type,
	Section_Title_Par_Type,
	Section_Title_Par_Text_List_Par_Type,
	Section_Image_Type,
	Section_Title_Text_List_Par_Par_Type
} from '$lib/types';

export const Bredcrumbs_Data: Breadcrumb_Type = {
	bredCrumbsHead: 'Головна',
	bredCrumbsCategories: 'Особливості роботи нейрохірургом у Польщі для іноземців'
};

export const Section_Title_Par_Data: Section_Title_Par_Type = {
	title: 'Особливості роботи нейрохірургом',
	subtitle: 'у Польщі для іноземців',
	paragraph:
		'Нейрохірурги - фахівці, які завжди і всюди на вагу золота. Особливо гострою є потреба в них у сучасній Польщі: лікарі молодого та середнього віку масово виїжджають на роботу до країн Західної Європи, а літні лікарі, хоча й мають за плечима солідний досвід, не можуть здійснювати складні тонкі операції просто через вік. Завдяки цьому активно вивільняються місця для іноземців, які шукають роботу нейрохірургами в Польщі. І найреальнішими претендентами стають вихідці з України та Білорусі, готові переїхати в іншу країну заради вищих зарплат, комфортніших умов і більш виразних перспектив.'
};

export const Section_Title_Par_Text_List_Par_Data: Section_Title_Par_Text_List_Par_Type = {
	title: 'Чим займається нейрохірург',
	subtitle: 'у польській клініці?',
	paragraph__one:
		'Сфера компетенцій такого лікаря - захворювання головного та спинного мозку, периферичної нервової системи, деякі судинні патології та психічні відхилення, спричинені органічними ураженнями мозку. У нейрохірургії існує також додаткова внутрішня спеціалізація - дитяча, функціональна, септична, спінальна, травматична та інші.',
	text: 'Працюють такі лікарі у вузькопрофільних стаціонарах або в клініках широкого профілю - у відділеннях нейрохірургії. Залежно від специфіки закладу, їхні обов`язки можуть дещо відрізнятися, проте майже завжди вони включають у себе:',
	list: [
		{ text: 'огляд і обстеження пацієнта, постановку діагнозу;' },
		{ text: 'складання плану лікування;' },
		{ text: 'проведення планових та ургентних оперативних втручань;' },
		{
			text: 'призначення медичних препаратів для консервативного лікування, післяопераційної терапії, купірування больового синдрому;'
		},
		{ text: 'підбір фізіотерапевтичних процедур, вправ та інших методів реабілітації.' }
	],
	paragraph__two:
		'Крім цього, робота нейрохірургом у Польщі передбачає ведення медичної документації. Природно, польською мовою, знання якої є необхідною умовою.'
};

export const Section_Image_Data: Section_Image_Type = {
	image: {
		src: '/img/all-article-web-page-content-img/article-neurosurgeon.jpg',
		alt: 'article-neurosurgeon'
	},
	source: {
		srcset: '/img/all-article-web-page-content-img/article-neurosurgeon.webp',
		type: 'image/webp'
	},
	source1: {
		srcset: '/img/all-article-web-page-content-img/article-neurosurgeon.avif',
		type: 'image/avif'
	}
};

export const Section_Title_Text_List_Par_Par_Data: Section_Title_Text_List_Par_Par_Type = {
	title: 'Що отримує лікар-мігрант',
	subtitle: 'і що для цього потрібно?',
	text: 'Іноземний фахівець, який отримав місце нейрохірурга в польській клініці, може розраховувати на:',
	list: [
		{ text: 'заробітну плату від 7500 злотих брутто на місяць;' },
		{ text: 'нормований робочий день;' },
		{ text: 'доплати за чергування та понаднормову роботу;' },
		{ text: 'забезпечення всім необхідним для ефективного виконання обов`язків;' },
		{ text: 'соціальні гарантії та можливість професійного і кар`єрного зростання;' },
		{
			text: 'відстрочену нострифікацію диплома - її отримання допустиме вже після працевлаштування.'
		}
	],
	paragraph__one:
		'Для того, щоб отримати все перераховане, на старті потрібно не так багато. Влаштуватися на роботу нейрохірургом у Польщі можуть ті, хто має диплом про закінчення медичного вишу в Україні або Білорусі та сертифікат за фахом "нейрохірургія", упевнено володіє "медичною" польською мовою, працював за фахом у своїй країні хоча б 3 роки за останні 5 років і отримав дозвіл від МОЗ Польщі.',
	paragraph__two:
		'Зацікавили описані можливості та перспективи? Звертайтеся: підберемо вакансію, допоможемо з вивченням мови, оформленням документів, переїздом і облаштуванням!'
};

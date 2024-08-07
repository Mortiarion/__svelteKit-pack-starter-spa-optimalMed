import type {
	Breadcrumb_Type,
	Section_Title_Par_Par_Type,
	Section_Title_Text_List_Par_Type,
	Section_Image_Type,
	Section_Title_Text_List_Par_Par_Type
} from '$lib/types';

export const Bredcrumbs_Data: Breadcrumb_Type = {
	bredCrumbsHead: 'Головна',
	bredCrumbsCategories: 'Як влаштуватися на роботу урологом у Польщі - умови та вимоги'
};

export const Section_Title_Par_Par_Data: Section_Title_Par_Par_Type = {
	title: 'Як влаштуватися на роботу урологом',
	subtitle: 'у Польщі - умови та вимоги',
	paragraph__one:
		'Плануєте вирушити на пошуки роботи урологом до Польщі і не знаєте, з чого почати? Зверніться в нашу компанію - підкажемо, проконсультуємо, запропонуємо кілька вакансій на вибір, посприяємо швидкому працевлаштуванню.',
	paragraph__two:
		'Чому ми впевнені, що вакансій буде кілька? Річ у тім, що сьогодні в Польщі спостерігається критичний брак компетентних лікарів різних спеціалізацій. І спеціальність уролога - одна з найбільш дефіцитних. А отже, саме сьогодні лікарі з пострадянських країн, особливо, України та Білорусі, отримують унікальний шанс змінити своє життя.'
};

export const Section_Title_Text_List_Par_Data: Section_Title_Text_List_Par_Type = {
	title: 'Що має робити лікар-уролог у',
	subtitle: 'польському медичному закладі?',
	text: 'Сферою діяльності уролога є чоловіча і жіноча сечостатева система, а також нирки, наднирники і передміхурова залоза. Професійний уролог:',
	list: [
		{
			text: 'спостерігає пацієнтів, підбирає оптимальне консервативне та хірургічне лікування згідно з європейськими протоколами;'
		},
		{ text: 'проводить хірургічні втручання і супроводжує пацієнта в післяопераційному періоді;' },
		{ text: 'аналізує та оцінює результати аналізів;' },
		{ text: 'надає екстрену допомогу;' },
		{
			text: 'консультує лікарів інших спеціальностей - андрологів, гінекологів, ендокринологів, онкологів.'
		}
	],
	paragraph: 'Також посада уролога передбачає ведення супутньої медичної документації.'
};

export const Section_Image_Data: Section_Image_Type = {
	image: {
		src: '/img/all-article-web-page-content-img/article-urologist.jpg',
		alt: 'article-urologist'
	},
	source: {
		srcset: '/img/all-article-web-page-content-img/article-urologist.webp',
		type: 'image/webp'
	},
	source1: {
		srcset: '/img/all-article-web-page-content-img/article-urologist.avif',
		type: 'image/avif'
	}
};

export const Section_Title_Text_List_Par_Par_Data: Section_Title_Text_List_Par_Par_Type = {
	title: 'Основні вимоги до уролога',
	subtitle: 'з боку польських клінік',
	text: 'Прагнення і завдання будь-якого роботодавця - отримання в штат кваліфікованого і відповідального фахівця. Крім того, норми працевлаштування у сфері медицини регулюються польським законодавством. Тому від претендентів на роботу лікарем-урологом у Польщі очікують:',
	list: [
		{
			text: 'наявності диплома про вищу освіту зі спеціалізацією "уролог". Питання його нострифікації в Польщі постане вже після того, як ви почнете працювати й отримувати зарплату;'
		},
		{
			text: 'досвіду роботи за фахом - мінімум 3 роки протягом останніх 5 років. Українці на сьогодні можуть працевлаштовуватися без дотримання цього пункту;'
		},
		{
			text: 'знання польської мови на рівні, що дає змогу вільно спілкуватися з колегами і пацієнтами, вивчати медичну літературу, вести спеціалізовану документацію;'
		},
		{ text: 'наявності дозволу та ліцензії на здійснення лікарської діяльності;' },
		{
			text: 'відповідних особистих якостей. Насамперед лікар має вміти комунікувати з пацієнтами та колегами, бути відповідальним, прагнути здобувати новий досвід і знання.'
		}
	],
	paragraph__one:
		'Тим, хто відповідає перерахованим вимогам, пропонується висока заробітна плата - від 7500 злотих брутто на місяць за стандартний восьмигодинний робочий день, доплати і премії за якісну роботу, переробки і чергування, соціальні гарантії, допомога в пошуку житла та інші преференції.',
	paragraph__two:
		'Зацікавила можливість переїхати до Польщі на роботу урологом у сучасній клініці на комфортних умовах? Зв`яжіться з нашими консультантами - підкажемо, з чого почати і як пройти весь процес без проблем і зайвих зусиль.'
};

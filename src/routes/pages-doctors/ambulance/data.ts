import type {
	Breadcrumb_Type,
	Section_Title_Par_Par_Type,
	Section_Title_Text_List_Par_Type,
	Section_Image_Type,
	Section_Title_Five_Par_Type
} from '$lib/types';

export const Bredcrumbs_Data: Breadcrumb_Type = {
	bredCrumbsHead: 'Головна',
	bredCrumbsCategories: 'Робота на швидкій допомозі в Польщі'
};

export const Section_Title_Par_Par_Data: Section_Title_Par_Par_Type = {
	title: 'Робота',
	subtitle: 'на швидкій допомозі в Польщі',
	paragraph__one:
		'У польських бригадах швидкої допомоги присутній дефіцит кадрів усіх рівнів. Однак найбільш затребуваними є лікарі. Тому кваліфікованому лікарю-іноземцю знайти роботу на швидкій допомозі в Польщі не складе труднощів.',
	paragraph__two:
		'Для того, щоб увесь процес - від пошуку підходящої вакансії до початку роботи - забрав у вихідця з іншої країни мінімум часу, сил і коштів, ми пропонуємо реальну дієву допомогу в працевлаштуванні фахівцям з пострадянських держав, зокрема, України та Білорусі.'
};

export const Section_Title_Text_List_Par_Data: Section_Title_Text_List_Par_Type = {
	title: 'Куди можна влаштуватися працювати в',
	subtitle: 'польській системі надання швидкої допомоги?',
	text: 'Відповідь на це питання залежить від кваліфікації претендента. З 2010 року в Польщі функціонують 4 типи бригад:',
	list: [
		{
			text: 'спеціалізовані - позначаються літерою S. У них обов`язково має бути присутній лікар. Залежно від спеціалізації це може бути терапевт, реаніматолог, травматолог, педіатр, кардіолог, психіатр та інші;'
		},
		{
			text: 'базові - позначаються буквою Р. Такі бригади обслуговують нескладні виклики і обходяться без лікаря;'
		},
		{
			text: 'транспортні - маркуються літерою Т, займаються перевезенням пацієнтів, які не потребують постійного моніторингу стану в дорозі і також функціонують без лікаря;'
		},
		{ text: 'повітряні, так звана санавіація з фахівцем із невідкладної допомоги в бригаді.' }
	],
	paragraph:
		'Знайти роботу на швидкій у Польщі можна як у державних і приватних виїзних бригадах, так і у відділеннях невідкладної допомоги, що функціонують при стаціонарах (SOR).'
};

export const Section_Image_Data: Section_Image_Type = {
	image: {
		src: '/img/all-article-web-page-content-img/article-ambulance.jpg',
		alt: 'article-ambulance'
	},
	source: {
		srcset: '/img/all-article-web-page-content-img/article-ambulance.webp',
		type: 'image/webp'
	},
	source1: {
		srcset: '/img/all-article-web-page-content-img/article-ambulance.avif',
		type: 'image/avif'
	}
};

export const Section_Title_Five_Par_Data: Section_Title_Five_Par_Type = {
	title: 'Умови роботи на',
	subtitle: 'швидкій у Польщі',
	paragraph__one:
		'Іноземні лікарі, які вже встигли познайомитися з цією сферою, відгукуються про неї виключно позитивно.',
	paragraph__two:
		'По-перше, лікарі в Польщі, зокрема й ті, які працюють у системі швидкої та невідкладної допомоги, отримують гідні заробітні плати - від 7500 злотих брутто на місяць на старті, далі - більше. Нічні чергування і додаткові робочі дні оплачуються окремо.',
	paragraph__three:
		'Зарплати середнього медичного персоналу, безумовно, поступаються лікарським, але значно перевищують пропозиції на батьківщині здобувачів.',
	paragraph__four:
		'По-друге, забезпечення препаратами, інструментами та сезонною уніформою перебуває на високому рівні. Як і оснащення автомобілів, яке оновлюється кожні 5 років. При цьому іноземні фахівці відзначають надійність і зручність польських машин медичної допомоги.',
	paragraph__five:
		'По-третє, на підстанціях для бригад облаштовано комфортні та функціональні зони відпочинку між викликами.'
};

export const Section_Title_Par_Par_Data_Two: Section_Title_Par_Par_Type = {
	title: 'Що потрібно,',
	subtitle: 'щоб отримати роботу на польській швидкій?',
	paragraph__one:
		'Для роботи на швидкій допомозі в Польщі необхідно мати диплом медичного навчального закладу у своїй країні, досвід на відповідній посаді від 3 років протягом останніх 5 років, а також дозвіл на роботу в польській медичній сфері та ліцензію лікаря швидкої допомоги.',
	paragraph__two:
		'Крім того, доведеться офіційно підтвердити знання польської мови з орієнтацією на медичну специфіку. А ось проходити процедуру нострифікації диплома заздалегідь немає потреби - це можна зробити після працевлаштування та отримання першої зарплати.'
};

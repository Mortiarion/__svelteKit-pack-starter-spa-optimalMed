<script lang="ts">
	import Section from '$lib/base-components/Section.svelte';
	import Container from '$lib/base-components/Container.svelte';
	import Heading from '$lib/base-components/Heading.svelte';
	import Text from '$lib/base-components/Text.svelte';
	import List_Link from '$lib/base-components/List_Link.svelte';

	import type { Section_Page_Type } from '$lib/types';

	let items: Section_Page_Type = [
		{ href: '/pages-doctors/alergologist', text: 'Алерголог' },
		{ href: '/pages-doctors/anestesiologist', text: 'Анестезіолог' },
		{ href: '/pages-doctors/virusologist', text: 'Вірусолог' },
		{ href: '/pages-doctors/gastroenterologist', text: 'Гастроентеролог' },
		{ href: '/pages-doctors/gematologist', text: 'Гематолог' },
		{ href: '/pages-doctors/geneticist', text: 'Генетик' },
		{ href: '/pages-doctors/geriatrician', text: 'Геріатр' },
		{ href: '/pages-doctors/gynecologist', text: 'Гінеколог' },
		{ href: '/pages-doctors/ambulance', text: 'Швидка допомога' }
	];

	let items_two: Section_Page_Type = [
		{ href: '/pages-doctors/dermatologist', text: 'Дерматолог' },
		{ href: '/pages-doctors/immunologist', text: 'Імунолог' },
		{ href: '/pages-doctors/cardiologist', text: 'Карділолог' },
		{ href: '/pages-doctors/cardiac_surgeon', text: 'Кардіо-хірург' },
		{ href: '/pages-doctors/narcologist', text: 'Нарколог' },
		{ href: '/pages-doctors/neurologist', text: 'Невролог' },
		{ href: '/pages-doctors/neurosurgeon', text: 'Нейрохірург' },
		{ href: '/pages-doctors/oncologist', text: 'Онколог' },
		{ href: '/pages-doctors/urologist', text: 'Уролог' }
	];

	let items_three: Section_Page_Type = [
		{ href: '/pages-doctors/orthodontist', text: 'Ортодонт' },
		{ href: '/pages-doctors/otolaryngologist', text: 'Отоларинголог' },
		{ href: '/pages-doctors/ophthalmologist', text: 'Офтальмолог' },
		{ href: '/pages-doctors/pathologist', text: 'Патологоанатом' },
		{ href: '/pages-doctors/pediatrician', text: 'Педіатр' },
		{ href: '/pages-doctors/radiologist', text: 'Радіолог' },
		{ href: '/pages-doctors/rehabilitation_specialist', text: 'Реабілітолог' },
		{ href: '/pages-doctors/rheumatologist', text: 'Ревматолог' },
		{ href: '/', text: 'Лікар в Польщі' }
	];

	let items_four: Section_Page_Type = [
		{ href: '/', text: 'Стоматолог' },
		{ href: '/', text: 'Травматолог' },
		{ href: '/', text: 'Трансфузіолог' },
		{ href: '/', text: 'Терапевт' },
		{ href: '/', text: 'Трансплантолог' },
		{ href: '/', text: 'Фоніатр' },
		{ href: '/', text: 'Хіміотерапевт' },
		{ href: '/', text: 'Хірург' }
	];
</script>

<Section>
	<Container>
		<div class="px-5 xl:px-14 2xl:px-32">
			<Heading
				level="h2"
				classes="my-5 text-3xl font-semibold text-biruza lg:max-w-[600px] lg:mb-10  xl:text-4xl 2xl:max-w-[700px] 2xl:mt-20"
			>
				Отримання права на виконання
				<Text classes="text-main">лікарської діяльності</Text>
			</Heading>

			<div
				class=" mb-10 grid grid-cols-2 justify-items-start gap-x-8 md:mb-16 lg:grid-cols-4 xl:mb-20"
			>
				<List_Link {items} />

				<List_Link items={items_two} />

				<List_Link items={items_three} />

				<List_Link items={items_four} />
			</div>
		</div>
	</Container>
</Section>

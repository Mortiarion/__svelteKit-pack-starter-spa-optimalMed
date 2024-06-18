<script lang="ts">
	import Section from '$lib/base-components/Section.svelte';
	import Container from '$lib/base-components/Container.svelte';
	import Heading from '$lib/base-components/Heading.svelte';
	import Text from '$lib/base-components/Text.svelte';
	import Paragraph from '$lib/base-components/Paragraph.svelte';
	import Main_Button from '$lib/components/header/Main_button.svelte';

	export let items = [
		{ number: '01/', text: 'Консультація нашого рекрутера телефоном або в офісі фірми' },
		{ number: '02/', text: 'Підписання договору на надання послуг' },
		{ number: '03/', text: 'Навчання польської мови' },
		{
			number: '04/',
			text: 'Отримання згоди міністра та дозволу на роботу в Окружній Раді Лікарів'
		},
		{ number: '05/', text: 'Пошук медичного закладу' },
		{ number: '06/', text: 'Організація переїзду лікаря та його сім`ї, допомога в адаптації' },
		{ number: '07/', text: 'Початок роботи лікарем у Польщі' },
		{ number: '08/', text: 'Допомога в підтвердженні диплома (нострифікації) та спеціалізації' }
	];
</script>

<Section id="scheme">
	<Container classes="px-5 mb-8 lg:px-8 lg:mb-14 2xl:px-32">
		<Heading level="h4" classes="text-3xl text-main font-semibold my-12 xl:text-[38px] lg:w-[30%]">
			<Text classes="text-biruza">Схема</Text>
			нашої співпраці
		</Heading>

		<div class="flex flex-col gap-8 lg:grid lg:grid-cols-3 lg:grid-rows-3 lg:items-start xl:grid-cols-4 xl:grid-rows-2 xl:mb-10">
			{#each items as item}
				<div class="flex lg:flex-col gap-3">
					<Text classes="text-biruza font-semibold text-base">
						{item.number}
					</Text>
					<Paragraph classes="text-main font-semibold">
						{item.text}
					</Paragraph>
				</div>
			{/each}
			<Main_Button classes="xl:hidden py-6 lg:w-full" />
		</div>
		<Main_Button classes="hidden xl:block xl:mx-auto 2xl:py-6" >Подати заявку</Main_Button>
	</Container>
</Section>

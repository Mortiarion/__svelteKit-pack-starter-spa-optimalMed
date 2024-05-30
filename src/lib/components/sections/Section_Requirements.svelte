<script lang="ts">
	import Section from '$lib/base-components/Section.svelte';
	import Container from '$lib/base-components/Container.svelte';
	import Heading from '$lib/base-components/Heading.svelte';
	import Text from '$lib/base-components/Text.svelte';
	import Paragraph from '$lib/base-components/Paragraph.svelte';
	import MainButton from '../header/Main_button.svelte';

	export let items = [
		{
			number: '01/',
			title: 'Нострифікація диплома не є обов`язковою',
			paragraph: 'за бажання буде можливість нострифікувати диплом уже в Польщі під час роботи.'
		},
		{
			number: '02/',
			title: 'Диплом про вищу медичну освіту та сертифікат про проходження інтернатури',
			paragraph: ''
		},
		{
			number: '03/',
			title: 'Бажання працевлаштуватися на термін на роботу',
			paragraph: '(перший контракт максимально на 5 років)'
		},
		{
			number: '04/',
			title: 'Бажання вчитися польської мови',
			paragraph: '(знання мови вітається)'
		}
	];
</script>

<Section>
	<Container classes="2xl:max-w-screen-2xl">
		<div class="gradient px-3 pb-10 pt-20">
			<div
				class=" flex flex-col gap-8 rounded-3xl bg-white bg-doctor-men bg-right-bottom bg-no-repeat p-5 lg:bg-doctor-men-lg lg:bg-[length:232px_249px] xl:bg-[length:301px_324px] 2xl:bg-[length:350px_377px]"
			>
				<div class="doctor-men mb-8 lg:mb-0">
					<Heading level="h3" classes="text-3xl text-main font-semibold mb-7 xl:text-[38px] 2xl:w-[240px]">
						<Text classes="text-biruza">Вимоги</Text> до кандидатів
					</Heading>
					{#each items as item}
						<div class="flex flex-col gap-2 2xl:w-[280px]">
							<Text classes="text-biruza font-semibold">{item.number}</Text>
							<Heading classes="text-main font-semibold" level="h4">{item.title}</Heading>
							<Paragraph classes="text-xs italic text-grey">{item.paragraph}</Paragraph>
						</div>
					{/each}
					<MainButton classes="w-[227px] bs:hidden md:hidden lg:block lg:mt-auto" />
				</div>
				<MainButton classes="w-[227px] mb-24 md:block lg:hidden" />
			</div>
		</div>
	</Container>
</Section>

<style lang="postcss">
	.gradient {
		background: linear-gradient(180deg, rgba(172, 230, 234, 0) 0%, #ace6ea 100%);
	}
	@media (min-width: 768px) {
		.doctor-men {
			display: grid;
			padding: 60px 16px 60px;
			grid-template-columns: repeat(3, 1fr);
			grid-column-gap: 40px;
			align-items: start;
			grid-row-gap: 60px;
		}
	}
	@media (min-width: 1024px) {
		.doctor-men {
			display: grid;
			padding: 100px 34px 95px;
			grid-template-columns: repeat(3, 1fr);
			grid-column-gap: 20px;
			
			grid-row-gap: 99px;
		}
	}
</style>

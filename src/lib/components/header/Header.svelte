<script lang="ts">
	import Navigation from '$lib/components/header/Navigation.svelte';
	import Container from '$lib/base-components/Container.svelte';
	import Section from '$lib/base-components/Section.svelte';
	import Main_button from '$lib/components/header/Main_button.svelte';
	import Heading from '$lib/base-components/Heading.svelte';
	import Paragrahp from '$lib/base-components/Paragraph.svelte';
	import Text from '$lib/base-components/Text.svelte';

	let successes = [
		{ value: '100', description: 'Приватних та державних лікарень' },
		{ value: '160+', description: 'Працевлаштованих лікарів' },
		{ value: '30+', description: 'Працевлаштованих лікарів що місяця' },
		{ value: '211', description: "Згод з Міністерства охорони здоров'я Польщі" }
	];
</script>

<Section tag="header">
	<Container classes="2xl:max-w-screen-2xl">
		<div class="header-bg lg:mx-2.5 lg:mt-5 lg:rounded-t-3xl xl:h-[650px]">
			<Navigation />
			<div class="mb-8 mt-5 xl:mt-24 2xl:ml-20">
				<Heading
					level="h1"
					classes="mb-5 text-center text-3xl font-semibold lg:w-[500px] lg:text-left lg:text-4xl 2xl:w-[600px] 2xl:text-[64px]"
				>
					Робота для лікарів у Польщі
				</Heading>

				<Paragrahp
					classes="mb-8 text-center font-raleway text-sm lg:w-[457px] lg:text-left lg:text-base"
				>
					Заповни заявку і протягом 24 годин отримай унікальну пропозицію початку роботи в Польщі та
					план кар'єри на 5 років з нострифікацією диплома.
				</Paragrahp>
				<Main_button classes="py-6">Подати заявку</Main_button>
			</div>
			<div
				class="flex flex-col gap-4 pb-5 lg:grid lg:w-[372px] lg:grid-cols-2 lg:grid-rows-2 lg:gap-y-0"
			>
				{#each successes as success}
					<div
						class="header-successes-info w-40 rounded-[10px] lg:rounded-[20px] bg-white bg-opacity-50 px-3.5 py-2.5 lg:w-[180px] lg:px-5 lg:pb-6 lg:pt-4 xl:absolute"
					>
						<Text classes="text-xl font-bold text-biruza lg:text-3xl 2xl:text-4xl">
							{success.value}
						</Text>
						<Paragrahp classes="text-left font-raleway text-xs font-normal lg:text-sm 2xl:text-sm">
							{success.description}
						</Paragrahp>
					</div>
				{/each}
			</div>
		</div>
	</Container>
</Section>

<style lang="postcss">
	.header-bg {
		@apply relative rounded-b-3xl bg-biruze-light bg-doctor-womem bg-[length:250px_410px] bg-[130px_bottom] bg-no-repeat px-5 pt-5 lg:bg-[right_bottom] xl:bg-doctor-womem-1024-1440 xl:bg-[length:443px_650px] 2xl:bg-[right_100px_bottom];
	}
	@media (min-width: 768px) {
		.header-successes-info:nth-child(2) {
			margin-bottom: 20px;
		}
		.header-successes-info:nth-child(3) {
			margin-top: 20px;
		}
	}
	@media (min-width: 1024px) {
		.header-successes-info:nth-child(1) {
			top: 380px;
			right: 344px;
		}
		.header-successes-info:nth-child(2) {
			top: 169px;
			right: 30px;
		}
		.header-successes-info:nth-child(3) {
			top: 520px;
			right: 344px;
		}
		.header-successes-info:nth-child(4) {
			top: 329px;
			right: 30px;
		}
	}

	@media (min-width: 1440px) {
		.header-successes-info:nth-child(1) {
			top: 340px;
			right: 461px;
		}
		.header-successes-info:nth-child(2) {
			top: 169px;
			right: 110px;
		}
		.header-successes-info:nth-child(3) {
			top: 500px;
			right: 461px;
		}
		.header-successes-info:nth-child(4) {
			top: 329px;
			right: 110px;
		}
	}
</style>

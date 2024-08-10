<script lang="ts">
	import Navigation from '$lib/components/header/Navigation.svelte';
	import Container from '$lib/base-components/Container.svelte';
	import Section from '$lib/base-components/Section.svelte';
	import Main_button from '$lib/components/header/Main_button.svelte';
	import Heading from '$lib/base-components/Heading.svelte';
	import Paragrahp from '$lib/base-components/Paragraph.svelte';
	import Text from '$lib/base-components/Text.svelte';
	import Popup from '$lib/components/popup/Modal.svelte';

	import { t } from '$lib/i18n';

	$: successes = [
		{ value: '100', description: $t('header.block_one') },
		{ value: '160+', description: $t('header.block_two') },
		{ value: '30+', description: $t('header.block_three') },
		{ value: '211', description: $t('header.block_four') }
	];
	export let showModal = false;
</script>

<Section tag="header">
	<Container classes="2xl:max-w-screen-2xl">
		<div class="header-bg lg:mx-2.5 lg:mt-5 lg:rounded-t-3xl xl:h-[650px] 2xl:mx-5">
			<Navigation />
			<div class="mb-8 mt-5 xl:mt-32 2xl:ml-[52px] 2xl:mt-24">
				<Heading
					level="h1"
					classes="mb-5 text-center text-[32px] leading-9 font-semibold lg:w-[500px] lg:text-left lg:text-[42px] lg:leading-[48px] xl:w-[600px] xl:text-[64px] xl:leading-none "
				>
					{$t('header.main_title')}
				</Heading>

				<Paragrahp
					classes="mb-8 text-center font-raleway text-sm lg:w-[420px] lg:text-left lg:text-base"
				>
					{$t('header.subtitle')}
				</Paragrahp>

				<Main_button on:click={() => (showModal = true)} classes="py-6 lg:w-[372px] xl:w-[227px]"
					>{$t('header.main_button')}</Main_button
				>
			</div>
			<div
				class="flex flex-col gap-4 pb-5 lg:grid lg:w-[372px] lg:grid-cols-2 lg:grid-rows-2 lg:gap-y-0"
			>
				{#each successes as success}
					<div
						class="header-successes-info w-40 rounded-[10px] bg-white bg-opacity-70 px-3.5 py-2.5 lg:w-[180px] lg:rounded-[20px] lg:px-5 lg:pb-6 lg:pt-4 xl:absolute xl:flex xl:flex-col xl:gap-2.5"
					>
						<Text classes="text-xl font-bold text-biruza lg:text-[32px] 2xl:text-4xl">
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
<Popup bind:showModal />

<style lang="postcss">
	.header-bg {
		@apply relative rounded-b-3xl bg-biruze-light bg-doctor-womem bg-[length:250px_410px] bg-[130px_bottom] bg-no-repeat px-5 pt-5 md:bg-[right_bottom] lg:bg-[length:300px_480px] lg:bg-[right_bottom] xl:bg-doctor-womem-1024-1440 xl:bg-[length:443px_650px] xl:px-8 2xl:bg-[right_100px_bottom] 2xl:px-[60px];
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
			top: 360px;
			right: 344px;
		}
		.header-successes-info:nth-child(2) {
			top: 149px;
			right: 32px;
		}
		.header-successes-info:nth-child(3) {
			top: 480px;
			right: 344px;
		}
		.header-successes-info:nth-child(4) {
			top: 309px;
			right: 32px;
		}
	}

	@media (min-width: 1440px) {
		.header-successes-info:nth-child(1) {
			top: 323px;
			right: 510px;
		}
		.header-successes-info:nth-child(2) {
			top: 150px;
			right: 110px;
		}
		.header-successes-info:nth-child(3) {
			top: 460px;
			right: 510px;
		}
		.header-successes-info:nth-child(4) {
			top: 309px;
			right: 110px;
		}
	}
</style>

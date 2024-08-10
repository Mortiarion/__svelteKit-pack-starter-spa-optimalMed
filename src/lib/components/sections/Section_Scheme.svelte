<script lang="ts">
	import Section from '$lib/base-components/Section.svelte';
	import Container from '$lib/base-components/Container.svelte';
	import Heading from '$lib/base-components/Heading.svelte';
	import Text from '$lib/base-components/Text.svelte';
	import Paragraph from '$lib/base-components/Paragraph.svelte';
	import Main_Button from '$lib/components/header/Main_button.svelte';
	import Popup from '$lib/components/popup/Modal.svelte';
	import { t } from '$lib/i18n';

	$: items = [
		{ number: '01/', text: $t('section_scheme.one') },
		{ number: '02/', text: $t('section_scheme.two') },
		{ number: '03/', text: $t('section_scheme.three') },
		{
			number: '04/',
			text: $t('section_scheme.four')
		},
		{ number: '05/', text: $t('section_scheme.five') },
		{ number: '06/', text: $t('section_scheme.six') },
		{ number: '07/', text: $t('section_scheme.seven') },
		{ number: '08/', text: $t('section_scheme.eight') }
	];

	export let showModal: boolean = false;
</script>

<Section id="scheme">
	<Container classes="px-5 pb-8 pt-16 lg:px-8 lg:pb-20 2xl:px-32 2xl:py-[100px]">
		<Heading level="h4" classes="text-3xl mb-10 text-main font-semibold  xl:text-[38px] lg:w-[30%]">
			<Text classes="text-biruza">{$t('section_scheme.title')}</Text>
			{$t('section_scheme.subtitle')}
		</Heading>

		<div
			class="flex flex-col gap-8 lg:grid lg:grid-cols-3 lg:grid-rows-3 lg:items-start xl:mb-10 xl:grid-cols-4 xl:grid-rows-2"
		>
			{#each items as item}
				<div class="flex gap-3 lg:flex-col">
					<Text classes="text-biruza font-semibold text-base">
						{item.number}
					</Text>
					<Paragraph classes="text-main font-semibold">
						{item.text}
					</Paragraph>
				</div>
			{/each}
			<Main_Button on:click={() => (showModal = true)} classes="xl:hidden py-6 lg:w-full"
				>{$t('header.main_button')}</Main_Button
			>
		</div>
		<Main_Button on:click={() => (showModal = true)} classes="hidden xl:block xl:mx-auto 2xl:py-6"
			>{$t('header.main_button')}</Main_Button
		>
	</Container>
</Section>

<Popup bind:showModal />

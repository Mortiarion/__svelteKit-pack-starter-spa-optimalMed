<script lang="ts">
	import Section from '$lib/base-components/Section.svelte';
	import Text from '$lib/base-components/Text.svelte';
	import List from '$lib/base-components/List.svelte';
	import Container from '$lib/base-components/Container.svelte';
	import Heading from '$lib/base-components/Heading.svelte';
	import Paragraph from '$lib/base-components/Paragraph.svelte';

	export let data;
</script>

<Section>
	<Container classes="px-2.5 lg:px-[50px] 2xl:px-0 2xl:max-w-3xl">
		<div class="mb-5 flex flex-col 2xl:mb-[60px]">
			<Paragraph classes="font-bold text-xl text-main mb-5">{data.par_one}</Paragraph>
			<List items={data.list_one} />
			<Heading level="h1" classes="font-bold text-3xl mb-5 text-main">
				{data.title_one}
				<Text classes="text-biruza">{data.subtitle}</Text>
			</Heading>
			<List items={data.list_two} />
			<Paragraph classes="mb-5">
				{data.par_two}
			</Paragraph>
			<Heading level="h2" classes="font-bold text-xl text-main mb-5">{data.title_two}</Heading>
			<Text classes="pb-5">
				{data.text}
			</Text>
			<List items={data.list_three} />
			<div class="flex flex-col gap-5">
				<Paragraph>
					{data.par_three}
				</Paragraph>
				<Paragraph>
					{data.par_four}
				</Paragraph>
				<Paragraph>
					{data.par_five}
				</Paragraph>
				<Paragraph>
					{data.par_six}
				</Paragraph>
				<Paragraph>
					{data.par_seven}
				</Paragraph>
			</div>
		</div>
	</Container>
</Section>

<script lang="ts">
	import Section from '$lib/base-components/Section.svelte';
	import Container from '$lib/base-components/Container.svelte';
	import Text from '$lib/base-components/Text.svelte';
	import Paragraph from '$lib/base-components/Paragraph.svelte';
	import Heading from '$lib/base-components/Heading.svelte';
	import List from '$lib/base-components/List.svelte';

	export let data;
</script>

<Section>
	<Container classes="px-2.5 lg:px-[50px] 2xl:px-0 2xl:max-w-3xl">
		<div class="mb-5 flex flex-col gap-5 2xl:mb-[60px]">
			<Heading level="h3" classes="text-3xl font-bold text-center lg:text-left">
				{data.title}
				<Text classes="text-biruza">{data.subtitle}</Text>
			</Heading>
			<Text>{data.text}</Text>
			<List items={data.list} classes='mb-0'/>
			<Paragraph>{data.paragraph}</Paragraph>
		</div>
	</Container>
</Section>

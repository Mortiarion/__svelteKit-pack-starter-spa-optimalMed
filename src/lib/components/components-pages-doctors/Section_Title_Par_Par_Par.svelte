<script lang="ts">
	import Section from '$lib/base-components/Section.svelte';
	import Container from '$lib/base-components/Container.svelte';
	import Heading from '$lib/base-components/Heading.svelte';
	import Paragraph from '$lib/base-components/Paragraph.svelte';
	import Text from '$lib/base-components/Text.svelte';

	export let data;
</script>

<Section>
	<Container classes="px-2.5 lg:px-[50px] 2xl:px-0 2xl:max-w-3xl">
		<div class="mb-5 flex flex-col gap-5">
			<Heading level="h3" classes="text-3xl font-bold text-center lg:text-left">
				{data.title}
				<Text classes="text-biruza">{data.subtitle}</Text>
			</Heading>
			<Paragraph>{data.paragraph__one}</Paragraph>
			<Paragraph>{data.paragraph__two}</Paragraph>
			<Paragraph>{data.paragraph__three}</Paragraph>
		</div>
	</Container>
</Section>

<script lang="ts">
    import Section from '$lib/base-components/Section.svelte';
	import Container from '$lib/base-components/Container.svelte';
	import Heading from '$lib/base-components/Heading.svelte';
	import Text from '$lib/base-components/Text.svelte';
	import Paragraph from '$lib/base-components/Paragraph.svelte';
    import List from '$lib/base-components/List.svelte';
	import type { SectionTitleParListTwoParType } from '$lib/types';
	export let data: SectionTitleParListTwoParType;
</script>

<Section>
	<Container classes="mx-auto 2xl:max-w-3xl">
		<div class="mb-5 flex flex-col gap-5">
			<Heading level="h3" classes="text-3xl font-bold">
				{data.title}
				<Text classes="text-biruza">{data.subtitle}
				</Text>
			</Heading>
			<Paragraph>
				{data.paragraph__one}
			</Paragraph>
            <List items={data.list} />
			<Paragraph>
				{data.paragraph__two}
			</Paragraph>
			<Paragraph>
				{data.paragraph__three}
			</Paragraph>
		</div>
	</Container>
</Section>
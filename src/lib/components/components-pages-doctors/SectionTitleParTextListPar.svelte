<script lang="ts">
	import Section from '$lib/base-components/Section.svelte';
	import Container from '$lib/base-components/Container.svelte';
	import Text from '$lib/base-components/Text.svelte';
	import Heading from '$lib/base-components/Heading.svelte';
	import Paragraph from '$lib/base-components/Paragraph.svelte';
	import List from '$lib/base-components/List.svelte';

	import type { SectionTitleParTextListParType } from '$lib/types';
	export let data: SectionTitleParTextListParType;
</script>

<Section>
	<Container>
		<div class="mb-5 flex flex-col">
			<Heading level="h3" classes="text-3xl font-bold mb-5">
				{data.title}
				<Text classes="text-biruza">
					{data.subtitle}
				</Text>
			</Heading>
			<Paragraph classes="mb-5">
				{data.paragraph__one}
			</Paragraph>
			<Text>
				{data.text}
			</Text>
			<List items={data.list} />
			<Paragraph classes="mb-5">
				{data.paragraph__two}
			</Paragraph>
		</div>
	</Container>
</Section>

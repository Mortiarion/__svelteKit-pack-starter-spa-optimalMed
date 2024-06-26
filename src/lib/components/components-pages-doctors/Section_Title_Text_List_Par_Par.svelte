<script lang="ts">
	import Section from '$lib/base-components/Section.svelte';
	import Container from '$lib/base-components/Container.svelte';
	import Text from '$lib/base-components/Text.svelte';
	import Heading from '$lib/base-components/Heading.svelte';
	import Paragraph from '$lib/base-components/Paragraph.svelte';
	import List from '$lib/base-components/List.svelte';

	import type { Section_Title_Text_List_Par_Par_Type } from '$lib/types';
	export let data: Section_Title_Text_List_Par_Par_Type;
</script>

<Section>
	<Container classes="px-2.5 lg:px-[50px] 2xl:px-0 2xl:max-w-3xl">
		<div class="mb-5 flex flex-col 2xl:mb-[60px]">
			<Heading level="h3" classes="text-3xl font-bold mb-5 text-center lg:text-left">
				{data.title}
				<Text classes="text-biruza">
					{data.subtitle}
				</Text>
			</Heading>
			<Text classes='mb-5'>
				{data.text}
			</Text>
			<List items={data.list} />
			<Paragraph classes="mb-5">
				{data.paragraph__one}
			</Paragraph>
			<Paragraph>
				{data.paragraph__two}
			</Paragraph>
		</div>
	</Container>
</Section>

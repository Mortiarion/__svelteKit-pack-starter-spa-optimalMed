<script lang="ts">
	import Container from '$lib/base-components/Container.svelte';
	import Section from '$lib/base-components/Section.svelte';
	import Text from '$lib/base-components/Text.svelte';
	import Heading from '$lib/base-components/Heading.svelte';
	import Paragraph from '$lib/base-components/Paragraph.svelte';
	import List from '$lib/base-components/List.svelte';

	import type { Section_Title_Text_List_Par_Img_Text_List_Par_Par_Par_Type } from '$lib/types';
	export let data: Section_Title_Text_List_Par_Img_Text_List_Par_Par_Par_Type;
</script>

<Section>
	<Container classes="px-2.5 lg:px-[50px] 2xl:px-0 2xl:max-w-3xl">
		<div class="flex flex-col gap-5 2xl:mb-[60px]">
			<Heading level="h3" classes="text-3xl font-bold text-center lg:text-left">
				{data.title}
				<Text classes="text-biruza">
					{data.subtitle}
				</Text>
			</Heading>
			<Text>{data.text_one}</Text>
			<List items={data.list_one} />
            <Paragraph>{data.paragraph_one}</Paragraph>
		</div>
	</Container>
</Section>

<Section>
	<Container>
		<div class="mb-5 2xl:mb-[60px]">
			<picture>
				<source srcset={data.img.srcset_two} type={data.img.type_two} />
				<source srcset={data.img.srcset_one} type={data.img.type_one} />
				<img class=" w-full" src={data.img.img} alt={data.img.alt} />
			</picture>
		</div>
	</Container>
</Section>

<Section>
	<Container classes="px-2.5 lg:px-[50px] 2xl:px-0 2xl:max-w-3xl">
		<div class="flex flex-col gap-5 2xl:mb-[60px]">
			<Text>
				{data.text_two}
			</Text>
			<List items={data.list_two} />
			<Paragraph>
				{data.paragraph_two}
			</Paragraph>
			<Paragraph>
				{data.paragraph_three}
			</Paragraph>
			<Paragraph>
				{data.paragraph_four}
			</Paragraph>
		</div>
	</Container>
</Section>

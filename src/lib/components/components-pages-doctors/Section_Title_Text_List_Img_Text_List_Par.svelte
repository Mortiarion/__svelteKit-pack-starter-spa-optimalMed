<script lang="ts">
	import Container from '$lib/base-components/Container.svelte';
	import Section from '$lib/base-components/Section.svelte';
	import Text from '$lib/base-components/Text.svelte';
	import Heading from '$lib/base-components/Heading.svelte';
	import Paragraph from '$lib/base-components/Paragraph.svelte';
	import List from '$lib/base-components/List.svelte';

	export let data;
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
		<div class="flex flex-col mb-5 gap-5 2xl:mb-[60px]">
			<Text>
				{data.text_two}
			</Text>
			<List items={data.list_two} />
			<Paragraph>
				{data.paragraph}
			</Paragraph>
		</div>
	</Container>
</Section>

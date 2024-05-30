<!-- <h1>ALERGOLOGIST</h1> -->

<script lang="ts">
	import Section from '$lib/base-components/Section.svelte';
	import Container from '$lib/base-components/Container.svelte';

	import Bredcrumbs from '$lib/components/components-pages-doctors/Bredcrumbs.svelte';
	import SectionTitleTwoParagraph from '$lib/components/components-pages-doctors/SectionTitleTwoParagraph.svelte';
	import SectionImage from '$lib/components/components-pages-doctors/SectionImage.svelte';
	import SectionTitleParTextListPar from '$lib/components/components-pages-doctors/SectionTitleParTextListPar.svelte';
	import SectionTitleParListTwoPar from '$lib/components/components-pages-doctors/SectionTitleParListTwoPar.svelte';
	import SectionTitleParTextListParPar from '$lib/components/components-pages-doctors/SectionTitleParTextListParPar.svelte';

	import {
		BreadcrumbData,
		SectionTitleTwoParagraphData,
		SectionImageData,
		SectionTitleParTextListParData,
		SectionTitleParListTwoParData,
		SectionTitleParTextListParParData
	} from './data';
</script>

<Section>
	<Container classes="max-w-screen-2xl">
		<Bredcrumbs data={BreadcrumbData} />
	</Container>
</Section>

<Section>
	<Container classes="2xl:max-w-3xl">
		<SectionTitleTwoParagraph data={SectionTitleTwoParagraphData} />
	</Container>
</Section>

<Section>
	<Container classes="max-w-screen-2xl">
		<SectionImage data={SectionImageData} />
	</Container>
</Section>

<Section>
	<Container classes="2xl:max-w-3xl">
		<SectionTitleParTextListPar data={SectionTitleParTextListParData} />
	</Container>
</Section>

<Section>
	<Container classes="2xl:max-w-3xl">
		<SectionTitleParListTwoPar data={SectionTitleParListTwoParData} />
	</Container>
</Section>

<Section>
	<Container classes="2xl:max-w-3xl">
		<SectionTitleParTextListParPar data={SectionTitleParTextListParParData} />
	</Container>
</Section>

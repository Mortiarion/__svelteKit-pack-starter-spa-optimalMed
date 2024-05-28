<script lang="ts">
	import Section from '$lib/base-components/Section.svelte';
	import Container from '$lib/base-components/Container.svelte';

	import Bredcrumbs from '$lib/components/components-pages-doctors/Bredcrumbs.svelte';
	import SectionTitleTwoParagraph from '$lib/components/components-pages-doctors/SectionTitleTwoParagraph.svelte';
	import SectionTitleParListPar from '$lib/components/components-pages-doctors/SectionTitleParListPar.svelte';
	import SectionImage from '$lib/components/components-pages-doctors/SectionImage.svelte';

	import {
		BreadcrumbData,
		SectionTitleTwoParagraphData,
		SectionTitleParListTwoParData,
		SectionImageData,
		SectionTitleParListParData,
		SectionTitleParListParTypeTwoData
	} from './data';
</script>

<Section>
	<Container classes="2xl:max-w-3xl">
		<Bredcrumbs data={BreadcrumbData} />
		<SectionTitleTwoParagraph data={SectionTitleTwoParagraphData} />
		<SectionTitleParListPar data={SectionTitleParListTwoParData} />
	</Container>
</Section>

<Section>
	<Container classes="max-w-screen-2xl">
		<SectionImage data={SectionImageData} />
	</Container>
</Section>

<Section>
	<Container>
		<SectionTitleParListPar data={SectionTitleParListParData} />
	</Container>
</Section>

<Section>
	<Container>
		<SectionTitleParListPar data={SectionTitleParListParTypeTwoData} />
	</Container>
</Section>

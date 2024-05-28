<script lang="ts">
	import type { SectionImageType } from '$lib/types'
	import Section from '$lib/base-components/Section.svelte';
	import Container from '$lib/base-components/Container.svelte';

	export let data: SectionImageType;
</script>

<Section classes="mb-5">
	<Container>
		<picture >
			<source
				srcset={data.source1.srcset}
				type={data.source1.type}
			/>
			<source
				srcset={data.source.srcset}
				type={data.source.type}
			/>
			<img class=" w-full"
				src={data.image.src}
				alt={data.image.alt}
			/>
		</picture>
	</Container>
</Section>

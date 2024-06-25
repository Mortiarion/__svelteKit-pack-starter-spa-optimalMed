<script lang="ts">
	import Section from '$lib/base-components/Section.svelte';
	import Container from '$lib/base-components/Container.svelte';
	
	import type { Section_Image_Type } from '$lib/types'
	export let data: Section_Image_Type;
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

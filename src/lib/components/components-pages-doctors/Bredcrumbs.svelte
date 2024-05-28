<script lang="ts">
	import type { BreadcrumbType } from '$lib/types';
	import Section from '$lib/base-components/Section.svelte';
	import Container from '$lib/base-components/Container.svelte';
	export let data: BreadcrumbType;
</script>

<Section>
	<Container classes="my-5">
		<div class="breadcrumbs">
			<ul class="breadcrumbs__list flex px-6">
				<li><a href="/" class="text-sm text-bredcrambs">{data.bredCrumbsHead}</a></li>
				<li><span class="text-grey">{data.bredCrumbsCategories}</span></li>
			</ul>
		</div>
	</Container>
</Section>

<style lang="postcss">
	.text-bredcrambs::after {
		content: '>';
		width: 20px;
		height: 20px;
		margin: 0 10px;
		color: #080808;
	}
</style>

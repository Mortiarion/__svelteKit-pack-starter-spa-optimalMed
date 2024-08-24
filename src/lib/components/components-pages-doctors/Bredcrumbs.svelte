<script lang="ts">
	import Section from '$lib/base-components/Section.svelte';
	import Container from '$lib/base-components/Container.svelte';
	export let data;
</script>

<Section>
	<Container classes="my-5">
		<div class="breadcrumbs">
			<ul class="breadcrumbs__list flex px-6">
				<li><a href="/" class="text-sm text-bredcrambs">{data.bredCrumbsHead}</a></li>
				<li class=" overflow-hidden text-ellipsis whitespace-nowrap"><span class="text-grey">{data.bredCrumbsCategories}</span></li>
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

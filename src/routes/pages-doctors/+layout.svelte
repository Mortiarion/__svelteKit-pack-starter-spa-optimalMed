<script lang="ts">
	import Navigation from '$lib/components/header/Navigation.svelte';
	import Footer from '$lib/components/footer/Footer.svelte';
	import Section from '$lib/base-components/Section.svelte';
	import Container from '$lib/base-components/Container.svelte';
</script>

<div class="wrapper flex min-h-screen flex-col">
	<Section tag="header">
		<Container classes='max-w-screen-2xl'>
			<div
				class="mx-3 mt-3 min-h-[120px] rounded-xl bg-article-img bg-[length:100%_100%] bg-no-repeat px-3 py-3 lg:min-h-[180px] xl:min-h-[200px] 2xl:min-h-[300px] 2xl:py-5"
			>
				<Navigation />
			</div>
		</Container>
	</Section>
	<main class="flex-auto">
		<slot />
	</main>
	<Footer />
</div>

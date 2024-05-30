<script lang="ts">
	import Header from '$lib/components/header/Header.svelte';
	import Footer from '$lib/components/footer/Footer.svelte';
	import SectionPages from '$lib/components/sections/SectionPages.svelte';
	import SectionWhy from '$lib/components/sections/SectionWhy.svelte';
	import Section_Requirements from '$lib/components/sections/Section_Requirements.svelte';
</script>

<svelte:head>
	<title>Optimal Med SvelteKit</title>
</svelte:head>

<div class="flex min-h-screen flex-col">
	<Header />
	<main class="flex-auto">
		<SectionWhy />
		<Section_Requirements />
		<SectionPages />
	</main>
	<Footer />
</div>

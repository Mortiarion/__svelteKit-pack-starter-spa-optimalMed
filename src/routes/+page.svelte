<script lang="ts">
	import Header from '$lib/components/header/Header.svelte';
	import Footer from '$lib/components/footer/Footer.svelte';
	import SectionPages from '$lib/components/sections/SectionPages.svelte';
</script>

<svelte:head>
	<title>Optimal Med SvelteKit</title>
</svelte:head>

<div class="flex min-h-screen flex-col">
	<Header />
	<main class="flex-auto">
		<SectionPages />
	</main>
	<Footer />
</div>

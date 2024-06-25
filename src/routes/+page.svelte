<script lang="ts">
	import Header from '$lib/components/header/Header.svelte';
	import Footer from '$lib/components/footer/Footer.svelte';
	import SectionPages from '$lib/components/sections/SectionPages.svelte';
	import SectionWhy from '$lib/components/sections/SectionWhy.svelte';
	import Section_Requirements from '$lib/components/sections/Section_Requirements.svelte';
	import Section_Additional from '$lib/components/sections/Section_Additional.svelte';
	import Section_Scheme from '$lib/components/sections/Section_Scheme.svelte';
	import Section_Doctors_Salary from '$lib/components/sections/Section_Doctors_Salary.svelte';
	import Section_From from '$lib/components/sections/Section_From.svelte';
	import Popup from '$lib/components/popup/Modal.svelte';
	export let showModal = false;
</script>

<svelte:head>
	<title>Optimal Med SvelteKit</title>
</svelte:head>

<div class="flex min-h-screen flex-col">
	<Header />
	<!-- <button on:click={() => (showModal = true)}> show modal </button> -->
	<main class="flex-auto">
		<SectionWhy />
		<Section_Requirements />
		<Section_Additional />
		<Section_Scheme />
		<Section_Doctors_Salary />
		<Section_From />
		<SectionPages />
	</main>
	<Footer />
</div>
<Popup bind:showModal />


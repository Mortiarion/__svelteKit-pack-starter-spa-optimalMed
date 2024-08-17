<!-- Language_Swicther.svelte -->
<script lang="ts">
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import { locale, locales } from '$lib/i18n';

	let isOpenlanguageMenu = writable(false);
	let languageMenu: HTMLElement;

	onMount(() => {
		const closeList = (event: MouseEvent) => {
			if (languageMenu && !languageMenu.contains(event.target as Node)) {
				isOpenlanguageMenu.set(false);
			}
		};
		document.addEventListener('click', closeList);

		return () => {
			document.removeEventListener('click', closeList);
		};
	});

	function togglelanguageMenu() {
		isOpenlanguageMenu.update((value) => !value);
	}

	function setLocale(newLocale: string) {
		locale.set(newLocale);
	}

	$: currentLocale = $locale;
</script>

<li class="language-menu relative hidden lg:block" bind:this={languageMenu}>
	<button
		on:click={togglelanguageMenu}
		class="language-menu-button ml-10 rounded-full border px-4 py-1.5 text-xs text-main-button 2xl:m-0"
		>{currentLocale}</button
	>

	<ul
		class:active={$isOpenlanguageMenu}
		class="language-dropdown border bg-white px-4 py-1 text-main-button"
	>
		{#each locales as language}
			<li>
				<button
					on:click={togglelanguageMenu}
					type="button"
					class="text-xs text-main-button"
					on:click={() => setLocale(language)}>{language}</button
				>
			</li>
		{/each}
	</ul>
</li>

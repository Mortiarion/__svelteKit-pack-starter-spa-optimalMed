<!-- Navigation_list_main.svelte -->
<script lang="ts">
	import { t } from '$lib/i18n';

	$: items = [
		{ href: '/', text: $t('main_navigation.about_us') },
		{ href: '/', text: $t('main_navigation.requirements') },
		{ href: '/', text: $t('main_navigation.scheme') },
		{ href: '/', text: $t('main_navigation.earnings') }
	];
</script>

<ul class="flex items-center gap-4 text-sm lg:ml-auto 2xl:gap-[30px]">
	{#each items as item}
		<li class="hidden 2xl:block"><a href={item.href}>{item.text}</a></li>
	{/each}
</ul>

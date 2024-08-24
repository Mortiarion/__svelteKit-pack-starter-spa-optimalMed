<script lang="ts">
	import { t } from '$lib/i18n';
	import { scrollToSection } from '$lib/index';

	$: items = [
		{ href: '/#why', title: $t('main_navigation.title'), text: $t('main_navigation.about_us') },
		{
			href: '/#requirements',
			title: $t('main_navigation.title'),
			text: $t('main_navigation.requirements')
		},
		{ href: '/#scheme', title: $t('main_navigation.title'), text: $t('main_navigation.scheme') },
		{ href: '/#salary', title: $t('main_navigation.title'), text: $t('main_navigation.earnings') }
	];
</script>

<ul class="flex items-center gap-4 text-sm lg:ml-auto 2xl:gap-[30px]">
	{#each items as item}
		<li class="hidden 2xl:block">
			<a
				class="hover:text-main-button"
				href={item.href}
				on:click={(event) => scrollToSection(event, item.href)}
				title={item.title}>{item.text}</a
			>
		</li>
	{/each}
</ul>

<script lang="ts">
	let items = [
		{ href: '/', text: 'Про нас' },
		{ href: '/', text: 'Вимоги' },
		{ href: '/', text: 'Схема нашої співпраці' },
		{ href: '/', text: 'Заробітки' }
	];
</script>

<ul class="flex items-center gap-4 text-sm lg:ml-auto 2xl:gap-[30px]">
	{#each items as item}
		<li class="hidden 2xl:block"><a href={item.href}>{item.text}</a></li>
	{/each}
</ul>

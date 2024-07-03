<script lang="ts">
	import { cn } from '$lib/utils/cn';

	export let items: { href: string; text: string }[];
	export let classes: string = '';
</script>

<ul
	class={cn(
		'list-disc pl-3 text-sm font-semibold text-biruza underline marker:text-xs marker:text-biruza lg:pl-5',
		classes
	)}
>
	{#each items as item}
		<li class={cn('', classes)}>
			<a href={item.href} class={cn('', classes)}>{item.text}</a>
		</li>
	{/each}
</ul>

<script lang="ts">
	import { cn } from '$lib/utils/cn';

	export let items;
	export let classes: string = '';
</script>

<ul class={cn('mb-5 flex list-disc flex-col gap-2 pl-7', classes)}>
	{#each items as item}
		<li class={cn('', classes)}>
			{item.text}
		</li>
	{/each}
</ul>

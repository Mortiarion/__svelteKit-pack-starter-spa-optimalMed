<script lang="ts">
	import { cn } from '$lib/utils/cn';
	export let classes = '';
	export let type: 'submit' | 'button' = 'button';
</script>

<button
	{type}
	on:click
	class={cn(
		'w-full rounded-full bg-main-button py-5 text-base font-bold text-white lg:w-[227px]',
		classes
	)}
>
	<slot />
</button>

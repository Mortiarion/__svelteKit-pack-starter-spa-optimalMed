<script lang="ts">
	import { cn } from '$lib/utils/cn';
	export let classes = '';
</script>

<button
	class={cn(
		'w-full rounded-full bg-main-button py-5 text-base font-bold text-white lg:w-[227px]',
		classes
	)}
>
	Подати заявку
</button>

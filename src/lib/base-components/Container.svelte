<script lang="ts">
	import { cn } from '$lib/utils/cn';

    export let classes = '';
</script>

<div class={cn('mx-auto', classes)}>
    <slot />
</div>

<script lang="ts">
	import Popup_form from '$lib/components/popup/Popup_form.svelte';

	export let showModal: boolean;

	let dialog: HTMLDialogElement;

	$: if (dialog && showModal) {
		dialog.showModal();
		document.body.classList.add('no-scroll');
		window.addEventListener('scroll', preventScroll);
	} else {
		document.body.classList.remove('no-scroll');
		window.removeEventListener('scroll', preventScroll);
	}

	function preventScroll(event: Event) {
		event.preventDefault();
		window.scrollTo(0, 0);
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
	class="overflow-hidden rounded-[20px]"
	bind:this={dialog}
	on:close={() => (showModal = false)}
	on:click|self={() => dialog.close()}
>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div on:click|stopPropagation class="lg:w-[708px]">
		<Popup_form />
		<!-- svelte-ignore a11y-autofocus -->
		<button class="hidden" autofocus on:click={() => dialog.close()}>close modal</button>
	</div>
</dialog>

<style>
	dialog::backdrop {
		background: rgba(0, 0, 0, 0.3);
	}

	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}

	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}

	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}

	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	.no-scroll {
		overflow: hidden;
	}
</style>

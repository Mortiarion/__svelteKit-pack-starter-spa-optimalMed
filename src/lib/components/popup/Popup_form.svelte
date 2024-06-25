<script lang="ts">
	import Main_Button from '$lib/components/header/Main_button.svelte';
	// import { handleFormClick } from '$lib/components/popup/action';
	import Popup_filter from '$lib/components/popup/Popup_filter.svelte';
	
	let formInput = [
		{ required: 'letter', type: 'text', name: 'name', id: 'text', placeholder: "Ім'я *" },
		{ required: 'number', type: 'tel', name: 'tel', id: 'tel', placeholder: 'Телефон *' },
		{ required: 'email', type: 'email', name: 'email', id: 'email', placeholder: 'Email' }
	];
</script>
<!-- on:click={handleFormClick} -->
<form
	action=""
	name="popup"
	id="popup-form"
	class="popup-form relative flex max-w-[300px] flex-col gap-5 rounded-[20px] bg-white px-2.5 py-[30px]"
	
>
	<button type="button" class="popup-close hidden">
		<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g clip-path="url(#clip0_1245_8901)">
				<path
					d="M26.4128 11.6735C26.6842 11.4021 27.1243 11.4021 27.3957 11.6735C27.6671 11.945 27.6671 12.385 27.3957 12.6564L12.6527 27.3994C12.3813 27.6708 11.9413 27.6708 11.6699 27.3994C11.3984 27.1279 11.3984 26.6879 11.6699 26.4165L26.4128 11.6735Z"
					stroke="#461DBA"
					stroke-width="2"
				></path>
			</g>
			<g clip-path="url(#clip1_1245_8901)">
				<path
					d="M13.1497 11.6735C12.8783 11.4021 12.4382 11.4021 12.1668 11.6735C11.8954 11.945 11.8954 12.385 12.1668 12.6564L26.9098 27.3994C27.1812 27.6708 27.6212 27.6708 27.8926 27.3994C28.1641 27.1279 28.1641 26.6879 27.8926 26.4165L13.1497 11.6735Z"
					stroke="#461DBA"
					stroke-width="2"
				></path>
			</g>
			<defs>
				<clipPath>
					<rect
						width="25.0196"
						height="9.03486"
						fill="white"
						transform="translate(7.74219 25.4336) rotate(-45)"
					></rect>
				</clipPath>
				<clipPath>
					<rect
						width="25.0196"
						height="9.03486"
						fill="white"
						transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 31.8203 25.4336)"
					></rect>
				</clipPath>
			</defs>
		</svg>
	</button>
	<h4 class="popup-title text-center text-[22px] font-semibold text-main">Отправити заявку</h4>

	{#each formInput as input}
		<input
			class="w-full rounded-[10px] border border-input px-[28px] py-[19px] placeholder:text-sm placeholder:text-main"
			data-required={input.required}
			type={input.type}
			name={input.name}
			id={input.id}
			placeholder={input.placeholder}
		/>
	{/each}
	
	<Popup_filter />

	<textarea
		class="w-full resize-none rounded-[10px] border border-input px-[28px] py-[19px] placeholder:text-sm placeholder:text-main"
		name="arena"
		cols="30"
		rows="5"
		placeholder="Впишіть текст повідомлення..."
	></textarea>
	<Main_Button classes="py-[21px] px-[69px] lg:w-full" type="submit">Відправити</Main_Button>
</form>

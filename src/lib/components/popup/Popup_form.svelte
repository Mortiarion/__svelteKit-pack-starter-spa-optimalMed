<script lang="ts">
	import Main_Button from '$lib/components/header/Main_button.svelte';
	import { writable } from 'svelte/store';

	const name = writable('');
	const email = writable('');
	const phone = writable('');

	const nameError = writable(false);
	const emailError = writable(false);
	const phoneError = writable(false);
	const popupFilterError = writable(false);

	function validateEmail(email: string): boolean {
		const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return re.test(email);
	}

	function validatePhone(phone: string): boolean {
		const re = /^(?:\+380|0)?\d{9}$/;
		return re.test(phone);
	}

	function handleSubmit() {
		let valid = true;

		name.update((value) => {
			if (!value.trim()) {
				nameError.set(true);
				valid = false;
			} else {
				nameError.set(false);
			}
			return value;
		});

		email.update((value) => {
			if (!validateEmail(value)) {
				emailError.set(true);
				valid = false;
			} else {
				emailError.set(false);
			}
			return value;
		});

		phone.update((value) => {
			if (!validatePhone(value)) {
				phoneError.set(true);
				valid = false;
			} else {
				phoneError.set(false);
			}
			return value;
		});

		if (selectedSpecializations.size === 0) {
			popupFilterError.set(true);
			valid = false;
		} else {
			popupFilterError.set(false);
		}

		if (valid) {
			alert('Форма успішно відправлена');
			resetForm();
		}
	}

	function resetForm() {
		name.set('');
		email.set('');
		phone.set('');
		selectedSpecializations.clear();
		selectedCount = 0;
		filterText = '';
		showFilter = false;
		nameError.set(false);
		emailError.set(false);
		phoneError.set(false);
		popupFilterError.set(false);
	}

	let filterData = [
		{
			text: 'Аллерголог',
			value: 'allergist'
		},
		{
			text: 'Андролог',
			value: 'andrologist'
		},
		{
			text: 'Анестезіолог',
			value: 'anesthesiologist'
		},
		{
			text: 'Акушер - гінеколог',
			value: 'obstetrician-gynecologist'
		},
		{
			text: 'Вірусолог',
			value: 'virologist'
		},
		{
			text: 'Лікар без спеціалізації',
			value: 'general-practitioner'
		},
		{
			text: 'Гастроентеролог',
			value: 'gastroenterologist'
		},
		{
			text: 'Гематолог',
			value: 'hematologist'
		},
		{
			text: 'Генетик',
			value: 'genetic'
		},
		{
			text: 'Геріатр',
			value: 'geriatrician'
		},
		{
			text: 'Дерматолог',
			value: 'dermatologist'
		},
		{
			text: 'Дитячий анестезіолог',
			value: 'pediatric-anesthesiologist'
		},
		{
			text: 'Дитячий гінеколог',
			value: 'pediatric-gynecologist'
		},
		{
			text: 'Дитячий гастроентеролог',
			value: 'pediatric-gastroenterologist'
		},
		{
			text: 'Дитячий дерматолог',
			value: 'pediatric-dermatologist'
		},
		{
			text: 'Дитячий кардіолог',
			value: 'pediatric-cardiologist'
		},
		{
			text: 'Дитячий невролог',
			value: 'pediatric-neurologist'
		},
		{
			text: 'Дитячий отоларинголог',
			value: 'pediatric-otorhinolaryngologist'
		},
		{
			text: 'Дитячий травматолог - ортопед',
			value: 'pediatric-traumatologist-orthopedist'
		},
		{
			text: 'Дитячий хірург',
			value: 'pediatric-surgeon'
		},
		{
			text: 'Дитячий хірург',
			value: 'pediatric-surgeon'
		},
		{
			text: 'Дитячий пульмонолог',
			value: 'pediatric-pulmonologist'
		},
		{
			text: 'Дитячий нефролог',
			value: 'pediatric-nephrologist'
		},
		{
			text: 'Дитячий уролог',
			value: 'pediatric-urologist'
		},
		{
			text: 'Дитячий эндокринолог',
			value: 'pediatric-endocrinologist'
		},
		{
			text: 'Іммунолог',
			value: 'immunologist'
		},
		{
			text: 'Інфекціоніст',
			value: 'infectious-disease-specialist'
		},
		{
			text: 'Кардіолог',
			value: 'cardiologist'
		},
		{
			text: 'Кардіохірург',
			value: 'cardiovascular-surgeon'
		},
		{
			text: 'Лабораторна діагностика',
			value: 'laboratory-diagnostician'
		},
		{
			text: 'Маммолог',
			value: 'mammologist'
		},
		{
			text: 'Нарколог',
			value: 'narcologist'
		},
		{
			text: 'Невролог',
			value: 'neurologist'
		},
		{
			text: 'Нейрохірург',
			value: 'neurosurgeon'
		},
		{
			text: 'Неонатолог',
			value: 'neonatologist'
		},
		{
			text: 'Невідкладні стани',
			value: 'emergency-medicine'
		},
		{
			text: 'Нефролог',
			value: 'nephrologist'
		},
		{
			text: 'Онколог',
			value: 'oncologist'
		},
		{
			text: 'Отоларинголог',
			value: 'otolaryngologist'
		},
		{
			text: 'Офтальмолог',
			value: 'ophthalmologist'
		},
		{
			text: 'Патологоанатом',
			value: 'pathologist'
		},
		{
			text: 'Педіатр',
			value: 'pediatrician'
		},
		{
			text: 'Проктолог',
			value: 'proctologist'
		},
		{
			text: 'Пульмонолог',
			value: 'pulmonologist'
		},
		{
			text: 'Психіатр',
			value: 'psychiatrist'
		},
		{
			text: 'Радіолог',
			value: 'radiologist'
		},
		{
			text: 'Реабілітолог',
			value: 'rehabilitation-specialist'
		},
		{
			text: 'Судово-медичний експерт',
			value: 'forensic-medical-expert'
		},
		{
			text: 'Судинний хірург',
			value: 'vascular-surgeon'
		},
		{
			text: 'Стоматолог',
			value: 'dentist'
		},
		{
			text: 'Ревматолог',
			value: 'rheumatologist'
		},
		{
			text: 'Травматолог - ортопед',
			value: 'traumatologist-orthopedist'
		},
		{
			text: 'Терапевт',
			value: 'therapist'
		},
		{
			text: 'Токсиколог',
			value: 'toxicologist'
		},
		{
			text: 'Трансфузіолог',
			value: 'transfusiologist'
		},
		{
			text: 'Ультразвукова діагностика',
			value: 'ultrasound-diagnostician'
		},
		{
			text: 'Уролог',
			value: 'urologist'
		},
		{
			text: 'Фоніатр',
			value: 'phoniatrist'
		},
		{
			text: 'Фтизіатр',
			value: 'phthisiatrist'
		},
		{
			text: 'Хіміотерапевт',
			value: 'chemotherapist'
		},
		{
			text: 'Хірург загальний',
			value: 'general-surgeon'
		},
		{
			text: 'Хірург онколог',
			value: 'oncological-surgeon'
		},
		{
			text: 'Хірург пластичний',
			value: 'plastic-surgeon'
		},
		{
			text: 'Ендокринолог',
			value: 'endocrinologist'
		},
		{
			text: 'Ендоскопія',
			value: 'endoscopist'
		},
		{
			text: 'Епідеміолог',
			value: 'epidemiologist'
		},
		{
			text: 'Інші',
			value: 'other'
		}
	];

	export let showFilter: boolean = false;
	// export let showFilterLarge: boolean = false;

	let filterText: string = '';

	let selectedSpecializations: Set<string> = new Set();

	$: filteredData = filterData.filter((data) =>
		data.text.toLowerCase().includes(filterText.toLowerCase())
	);

	function handleInput(event: Event) {
		const inputElement = event.target as HTMLInputElement;
		filterText = inputElement.value;
	}

	function clickOutside(node: HTMLElement, callback: () => void) {
		const handleClick = (event: MouseEvent) => {
			const target = event.target as Node;
			if (!node.contains(target) && target !== buttonElement) {
				callback();
			}
			// if (!node.contains(target) && target !== buttonElementLarge) {
			// 	callback();
			// }
		};

		const buttonElement = document.querySelector('.dropdown-speciality-small-popup');
		// const buttonElementLarge = document.querySelector('.dropdown-speciality-large-filter');

		document.addEventListener('click', handleClick, true);

		return {
			destroy() {
				document.removeEventListener('click', handleClick, true);
			}
		};
	}

	$: selectedCount = selectedSpecializations.size;

	function handleCheckboxChange(event: Event) {
		const checkbox = event.target as HTMLInputElement;
		if (checkbox.checked) {
			selectedSpecializations.add(checkbox.value);
		} else {
			selectedSpecializations.delete(checkbox.value);
		}
		selectedCount = selectedSpecializations.size;
	}
</script>

<form
	on:submit|preventDefault={handleSubmit}
	action=""
	name="popup"
	id="popup-form"
	class="popup-form relative flex max-w-[300px] flex-col gap-5 rounded-[20px] bg-white px-2.5 py-[30px] sm:max-w-[340px] lg:max-w-full lg:px-[124px]"
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
	<h4 class="popup-title text-center text-[22px] font-semibold text-main">Відправити заявку</h4>

	<input
		class="w-full rounded-[10px] px-[28px] py-[19px] placeholder:text-sm placeholder:text-main {$nameError
			? 'error-border'
			: $name
				? 'success-border'
				: 'border-base'}"
		type="text"
		id="name"
		placeholder="Ім'я *"
		bind:value={$name}
	/>

	<input
		class="w-full rounded-[10px] px-[28px] py-[19px] placeholder:text-sm placeholder:text-main {$phoneError
			? 'error-border'
			: $phone
				? 'success-border'
				: 'border-base'}"
		type="tel"
		id="tel"
		placeholder="Телефон *"
		bind:value={$phone}
	/>

	<input
		class="w-full rounded-[10px] px-[28px] py-[19px] placeholder:text-sm placeholder:text-main {$emailError
			? 'error-border'
			: $email
				? 'success-border'
				: 'border-base'}"
		type="email"
		id="email"
		placeholder="Email"
		bind:value={$email}
	/>

	<!-- <Popup_filter /> -->
	<div class="form-popup-box relative">
		<input
			on:click={() => (showFilter = !showFilter)}
			data-required="select"
			value=" "
			type="button"
			class="dropdown-speciality-small-popup relative w-full cursor-pointer rounded-[10px] border border-input px-[28px] py-[19px]
				{$popupFilterError
				? 'error-border'
				: selectedSpecializations.size > 0
					? 'success-border'
					: 'border-base'}
			"
		/>
		<svg
			class="pointer-events-none absolute right-[15px] top-[30px]"
			width="11"
			height="8"
			viewBox="0 0 11 8"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M6.6286 7.06466C6.22861 7.54961 5.48567 7.54961 5.08569 7.06466L1.02083 2.13629C0.482874 1.48405 0.946818 0.5 1.79229 0.5H9.922C10.7675 0.5 11.2314 1.48404 10.6935 2.13628L6.6286 7.06466Z"
				fill="#0FA4AE"
			/>
		</svg>
		<span class="speciality-small pointer-events-none absolute left-[28px] top-[20px]"
			>Спеціалізація *
			<span class="number-selected-small-filter pointer-events-none">{selectedCount} </span>
		</span>
	</div>

	{#if showFilter}
		<div use:clickOutside={() => (showFilter = false)} class="dropdown-speciality-small-filter">
			<div class="filter-input relative bg-filter px-2 py-5">
				<input
					class="w-full rounded-[10px] border border-input px-[28px] py-[19px] placeholder:text-sm placeholder:text-main"
					type="text"
					on:input={handleInput}
				/>
				<svg
					class="absolute right-5 top-[42px]"
					width="20"
					height="20"
					viewBox="0 0 20 20"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M8.04937 16.0903C9.837 16.0904 11.5735 15.4939 12.9838 14.3955L18.3044 19.7161C18.7019 20.1 19.3353 20.089 19.7191 19.6915C20.0936 19.3038 20.0936 18.6891 19.7191 18.3014L14.3985 12.9808C17.1242 9.47199 16.4895 4.41791 12.9807 1.69215C9.47194 -1.03361 4.41791 -0.398871 1.69215 3.10991C-1.03361 6.6187 -0.398871 11.6728 3.10991 14.3985C4.52252 15.4959 6.26057 16.0912 8.04937 16.0903ZM3.77429 3.77121C6.13538 1.41008 9.96346 1.41004 12.3246 3.77113C14.6857 6.13221 14.6858 9.96029 12.3247 12.3214C9.96359 14.6826 6.13551 14.6826 3.77437 12.3215C3.77433 12.3215 3.77433 12.3215 3.77429 12.3214C1.4132 9.97754 1.39929 6.16341 3.74317 3.80233C3.75353 3.79193 3.76389 3.78157 3.77429 3.77121Z"
						fill="#0FA4AE"
					></path>
				</svg>
			</div>

			<div class="filter-container flex flex-col">
				{#each filteredData as data}
					<label class="checkbox-container-filter">
						<input
							type="checkbox"
							name="specialization"
							value={data.value}
							on:change={handleCheckboxChange}
							checked={selectedSpecializations.has(data.value)}
						/>
						<span class="checkmark"></span>{data.text}
					</label>
				{/each}
			</div>
		</div>
	{/if}

	<!-- <Popup_filter-LARGE /> -->
	<!-- <div class="form-popup-box-large relative bs:hidden xl:block">
		<input
			on:click={() => (showFilterLarge = !showFilterLarge)}
			data-required="select"
			value=" "
			type="button"
			class="dropdown-speciality-small-popup relative w-full cursor-pointer rounded-[10px] border border-input px-[28px] py-[19px]
				{$popupFilterError
				? 'error-border'
				: selectedSpecializations.size > 0
					? 'success-border'
					: 'border-base'}
			"
		/>
		<svg
			class="pointer-events-none absolute right-[15px] top-[30px]"
			width="11"
			height="8"
			viewBox="0 0 11 8"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M6.6286 7.06466C6.22861 7.54961 5.48567 7.54961 5.08569 7.06466L1.02083 2.13629C0.482874 1.48405 0.946818 0.5 1.79229 0.5H9.922C10.7675 0.5 11.2314 1.48404 10.6935 2.13628L6.6286 7.06466Z"
				fill="#0FA4AE"
			/>
		</svg>
		<span class="speciality-small pointer-events-none absolute left-[28px] top-[20px]"
			>Спеціалізація *
			<span class="number-selected-small-filter pointer-events-none">{selectedCount} </span>
		</span>
	</div>

	{#if showFilterLarge}
		<div
			use:clickOutside={() => (showFilterLarge = false)}
			class="dropdown-speciality-large-filter"
		>
			<div class="filter-container-large">
				{#each filteredData as data}
					<label class="checkbox-container-filter">
						<input
							type="checkbox"
							name="specialization"
							value={data.value}
							on:change={handleCheckboxChange}
							checked={selectedSpecializations.has(data.value)}
						/>
						<span class="checkmark"></span>{data.text}
					</label>
				{/each}
			</div>
		</div>
	{/if} -->

	<textarea
		class="border-base w-full resize-none rounded-[10px] px-[28px] py-[19px] placeholder:text-sm placeholder:text-main"
		name="arena"
		cols="30"
		rows="5"
		placeholder="Впишіть текст повідомлення..."
	></textarea>
	<Main_Button classes="py-[21px] px-[69px] lg:w-full" type="submit">Відправити</Main_Button>
</form>

<style>
	.error-border {
		border-color: red;
		border-width: 1px;
	}

	.success-border {
		border-width: 1px;
		border-color: green;
	}

	.border-base {
		border-width: 1px;
		border-style: solid;
		border-color: #ccc;
	}

	.dropdown-speciality-small-filter {
		border-radius: 10px;
		border: 1px solid rgba(85, 85, 85, 0.5);
		box-shadow:
			0px 0px 0px 0px rgba(0, 0, 0, 0.1),
			0px 3px 7px 0px rgba(0, 0, 0, 0.1),
			0px 12px 12px 0px rgba(0, 0, 0, 0.09),
			0px 27px 16px 0px rgba(0, 0, 0, 0.05),
			0px 48px 19px 0px rgba(0, 0, 0, 0.01),
			0px 75px 21px 0px rgba(0, 0, 0, 0);
		height: 280px;
		overflow-y: hidden;
		position: absolute;
		background-color: #fff;
		bottom: 10px;
		right: 10px;
		left: 10px;
	}

	.filter-container {
		height: 200px;
		overflow-y: scroll;
		padding: 15px 25px 25px;
	}

	/* .filter-container-large {
		position: fixed;
		background-color: #ccc;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
	} */

	@media (min-width: 768px) {
		.dropdown-speciality-small-filter {
			display: flex;
			flex-direction: column;
			align-items: center;
			width: 460px;
			margin: 0 auto;
		}
		.filter-container,
		.filter-input {
			width: 100%;
		}
	}
</style>

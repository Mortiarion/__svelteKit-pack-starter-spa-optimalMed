<script lang="ts">
	import Main_Button from '$lib/components/header/Main_button.svelte';
	import { writable } from 'svelte/store';
	import { t } from '$lib/i18n';

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

	$: filterData = [
		{
			text: $t('section_main_form.filter_one'),
			value: 'allergist'
		},
		{
			text: $t('section_main_form.filter_two'),
			value: 'andrologist'
		},
		{
			text: $t('section_main_form.filter_three'),
			value: 'anesthesiologist'
		},
		{
			text: $t('section_main_form.filter_four'),
			value: 'obstetrician-gynecologist'
		},
		{
			text: $t('section_main_form.filter_five'),
			value: 'virologist'
		},
		{
			text: $t('section_main_form.filter_six'),
			value: 'general-practitioner'
		},
		{
			text: $t('section_main_form.filter_seven'),
			value: 'gastroenterologist'
		},
		{
			text: $t('section_main_form.filter_eight'),
			value: 'hematologist'
		},
		{
			text: $t('section_main_form.filter_nine'),
			value: 'genetic'
		},
		{
			text: $t('section_main_form.filter_ten'),
			value: 'geriatrician'
		},
		{
			text: $t('section_main_form.filter_eleven'),
			value: 'dermatologist'
		},
		{
			text: $t('section_main_form.filter_twel'),
			value: 'pediatric-anesthesiologist'
		},
		{
			text: $t('section_main_form.filter_thirteen'),
			value: 'pediatric-gynecologist'
		},
		{
			text: $t('section_main_form.filter_fourteen'),
			value: 'pediatric-gastroenterologist'
		},
		{
			text: $t('section_main_form.filter_fiveteen'),
			value: 'pediatric-dermatologist'
		},
		{
			text: $t('section_main_form.filter_sixteen'),
			value: 'pediatric-cardiologist'
		},
		{
			text: $t('section_main_form.filter_seventeen'),
			value: 'pediatric-neurologist'
		},
		{
			text: $t('section_main_form.filter_eightteen'),
			value: 'pediatric-otorhinolaryngologist'
		},
		{
			text: $t('section_main_form.filter_nineteen'),
			value: 'pediatric-traumatologist-orthopedist'
		},
		{
			text: $t('section_main_form.filter_twenty'),
			value: 'pediatric-surgeon'
		},
		{
			text: $t('section_main_form.filter_twenty_one'),
			value: 'pediatric-pulmonologist'
		},
		{
			text: $t('section_main_form.filter_twenty_two'),
			value: 'pediatric-nephrologist'
		},
		{
			text: $t('section_main_form.filter_twenty_three'),
			value: 'pediatric-urologist'
		},
		{
			text: $t('section_main_form.filter_twenty_four'),
			value: 'pediatric-endocrinologist'
		},
		{
			text: $t('section_main_form.filter_twenty_five'),
			value: 'immunologist'
		},
		{
			text: $t('section_main_form.filter_twenty_six'),
			value: 'infectious-disease-specialist'
		},
		{
			text: $t('section_main_form.filter_twenty_seven'),
			value: 'cardiologist'
		},
		{
			text: $t('section_main_form.filter_twenty_eight'),
			value: 'cardiovascular-surgeon'
		},
		{
			text: $t('section_main_form.filter_twenty_nine'),
			value: 'laboratory-diagnostician'
		},
		{
			text: $t('section_main_form.filter_thirty'),
			value: 'mammologist'
		},
		{
			text: $t('section_main_form.filter_thirty_one'),
			value: 'narcologist'
		},
		{
			text: $t('section_main_form.filter_thirty_two'),
			value: 'neurologist'
		},
		{
			text: $t('section_main_form.filter_thirty_three'),
			value: 'neurosurgeon'
		},
		{
			text: $t('section_main_form.filter_thirty_four'),
			value: 'neonatologist'
		},
		{
			text: $t('section_main_form.filter_thirty_five'),
			value: 'emergency-medicine'
		},
		{
			text: $t('section_main_form.filter_thirty_six'),
			value: 'nephrologist'
		},
		{
			text: $t('section_main_form.filter_thirty_seven'),
			value: 'oncologist'
		},
		{
			text: $t('section_main_form.filter_thirty_eight'),
			value: 'otolaryngologist'
		},
		{
			text: $t('section_main_form.filter_thirty_nine'),
			value: 'ophthalmologist'
		},
		{
			text: $t('section_main_form.filter_fourty'),
			value: 'pathologist'
		},
		{
			text: $t('section_main_form.filter_fourty_one'),
			value: 'pediatrician'
		},
		{
			text: $t('section_main_form.filter_fourty_two'),
			value: 'proctologist'
		},
		{
			text: $t('section_main_form.filter_fourty_three'),
			value: 'pulmonologist'
		},
		{
			text: $t('section_main_form.filter_fourty_four'),
			value: 'psychiatrist'
		},
		{
			text: $t('section_main_form.filter_fourty_five'),
			value: 'radiologist'
		},
		{
			text: $t('section_main_form.filter_fourty_six'),
			value: 'rehabilitation-specialist'
		},
		{
			text: $t('section_main_form.filter_fourty_seven'),
			value: 'forensic-medical-expert'
		},
		{
			text: $t('section_main_form.filter_fourty_eight'),
			value: 'vascular-surgeon'
		},
		{
			text: $t('section_main_form.filter_fourty_nine'),
			value: 'dentist'
		},
		{
			text: $t('section_main_form.filter_fivety'),
			value: 'rheumatologist'
		},
		{
			text: $t('section_main_form.filter_fivety_one'),
			value: 'traumatologist-orthopedist'
		},
		{
			text: $t('section_main_form.filter_fivety_two'),
			value: 'therapist'
		},
		{
			text: $t('section_main_form.filter_fivety_three'),
			value: 'toxicologist'
		},
		{
			text: $t('section_main_form.filter_fivety_four'),
			value: 'transfusiologist'
		},
		{
			text: $t('section_main_form.filter_fivety_five'),
			value: 'ultrasound-diagnostician'
		},
		{
			text: $t('section_main_form.filter_fivety_six'),
			value: 'urologist'
		},
		{
			text: $t('section_main_form.filter_fivety_seven'),
			value: 'phoniatrist'
		},
		{
			text: $t('section_main_form.filter_fivety_eight'),
			value: 'phthisiatrist'
		},
		{
			text: $t('section_main_form.filter_fivety_nine'),
			value: 'chemotherapist'
		},
		{
			text: $t('section_main_form.filter_sixty'),
			value: 'general-surgeon'
		},
		{
			text: $t('section_main_form.filter_sixty_one'),
			value: 'oncological-surgeon'
		},
		{
			text: $t('section_main_form.filter_sixty_two'),
			value: 'plastic-surgeon'
		},
		{
			text: $t('section_main_form.filter_sixty_three'),
			value: 'endocrinologist'
		},
		{
			text: $t('section_main_form.filter_sixty_four'),
			value: 'endoscopist'
		},
		{
			text: $t('section_main_form.filter_sixty_five'),
			value: 'epidemiologist'
		},
		{
			text: $t('section_main_form.filter_sixty_six'),
			value: 'other'
		}
	];

	export let showFilter: boolean = false;

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
		};

		const buttonElement = document.querySelector('.dropdown-speciality-small-popup');

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
	<h4 class="popup-title text-center text-[22px] font-semibold text-main">
		{$t('popup_placeholder.title')}
	</h4>

	<input
		class="w-full rounded-[10px] px-[28px] py-[19px] placeholder:text-sm placeholder:text-main {$nameError
			? 'error-border'
			: $name
				? 'success-border'
				: 'border-base'}"
		type="text"
		id="name"
		placeholder={$t('popup_placeholder.name')}
		bind:value={$name}
	/>

	<input
		class="w-full rounded-[10px] px-[28px] py-[19px] placeholder:text-sm placeholder:text-main
		{$phoneError ? 'error-border' : $phone ? 'success-border' : 'border-base'}"
		type="tel"
		id="tel"
		placeholder={$t('popup_placeholder.tell')}
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
		placeholder={$t('popup_placeholder.email')}
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
			>{$t('section_main_form.specialisation')} *
			<span class="number-selected-small-filter pointer-events-none">{selectedCount}</span>
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

	<textarea
		class="border-base w-full resize-none rounded-[10px] px-[28px] py-[19px] placeholder:text-sm placeholder:text-main"
		name="arena"
		cols="30"
		rows="5"
		placeholder={$t('popup_placeholder.textarea')}
	></textarea>
	<Main_Button classes="py-[21px] px-[69px] lg:w-full" type="submit"
		>{$t('section_main_form.submit')}</Main_Button
	>
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

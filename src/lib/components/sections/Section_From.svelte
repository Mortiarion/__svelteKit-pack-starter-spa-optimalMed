<script lang="ts">
	import Section from '$lib/base-components/Section.svelte';
	import Container from '$lib/base-components/Container.svelte';
	import Heading from '$lib/base-components/Heading.svelte';
	import Text from '$lib/base-components/Text.svelte';
	import Link from '$lib/base-components/Link.svelte';
	import Main_Button from '$lib/components/header/Main_button.svelte';
	import { writable } from 'svelte/store';
	import { t } from '$lib/i18n';

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

	let showFilterLarge: boolean = false;
	let showFilterSmall: boolean = false;

	let selectedSpecializations: Set<string> = new Set();

	const name = writable('');
	const email = writable('');
	const phone = writable('');

	const nameError = writable(false);
	const emailError = writable(false);
	const phoneError = writable(false);
	const popupFilterError = writable(false);
	const popupFilterErrorSmall = writable(false);

	$: {
		if (showFilterLarge) {
			document.body.classList.add('no-scroll');
			window.addEventListener('scroll', preventScroll);
		} else {
			document.body.classList.remove('no-scroll');
			window.removeEventListener('scroll', preventScroll);
		}
	}

	function preventScroll(event: Event) {
		event.preventDefault();
		window.scrollTo(4000, 4000);
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

		phone.update((value) => {
			if (!validatePhone(value)) {
				phoneError.set(true);
				valid = false;
			} else {
				phoneError.set(false);
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

		if (selectedSpecializations.size === 0) {
			popupFilterError.set(true);
			popupFilterErrorSmall.set(true);

			valid = false;
		} else {
			popupFilterError.set(false);
			popupFilterErrorSmall.set(false);
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
		nameError.set(false);
		emailError.set(false);
		phoneError.set(false);
		popupFilterError.set(false);
	}

	function resetCheckBox() {
		const checkboxes = document.querySelectorAll('input[name="specialization"]');
		checkboxes.forEach((checkbox) => {
			(checkbox as HTMLInputElement).checked = false;
		});
		selectedCount = 0;
		selectedSpecializations.clear();
	}

	function validateEmail(email: string): boolean {
		const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return re.test(email);
	}

	function validatePhone(phone: string): boolean {
		const re = /^(?:\+380|0)?\d{9}$/;
		return re.test(phone);
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

	let filterText: string = '';

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

		const buttonElement = document.querySelector('.dropdown-speciality-small-filter');

		document.addEventListener('click', handleClick, true);

		return {
			destroy() {
				document.removeEventListener('click', handleClick, true);
			}
		};
	}
</script>

<Section id="form">
	<Container classes="xl:px-5">
		<div class="rounded-3xl bg-biruza px-5 py-7 text-white lg:mx-2 2xl:px-20">
			<div class="form__box lg:flex lg:gap-10 xl:px-8 2xl:gap-32">
				<div class="form__col-1 xl:w-full">
					<div class="contacts">
						<Heading level="h4" classes="text-2xl font-semibold text-center mb-8">
							{$t('section_main_form.main_title')}
						</Heading>
						<div class="flex-box flex lg:flex-col lg:gap-5 xl:mb-6 xl:flex-row">
							<div class="fb-col-1 flex min-w-[50%] flex-col">
								<Text classes="text-[10px] font-light">
									{$t('section_main_form.work_days')}
								</Text>
								<Text classes="font-raleway text-sm font-semibold mb-7">8:30 - 16:30</Text>
								<Heading level="h4" classes="text-[10px] font-light">
									{$t('section_main_form.work_adress')}
								</Heading>
								<Text classes="font-raleway text-sm font-semibold"
									>OptimalMed sp. z o.o. al. Jerozolimskie 100, Warszawa 00-807</Text
								>
							</div>
							<div class="fb-col-2 mb-7 flex min-w-[50%] flex-col">
								<Heading level="h4" classes="text-[10px] font-light">
									{$t('section_main_form.work_tell')}
								</Heading>
								<Link href="tel:+48512058549" classes="text-sm font-semibold">+48 512 058 549</Link>
								<Link href="tel:+48570501711" classes="text-sm font-semibold mb-2"
									>+48 570 501 711</Link
								>
								<Heading level="h4" classes="text-[10px] font-light">
									{$t('section_main_form.work_email')}
								</Heading>
								<Link
									classes="font-raleway text-sm font-semibold "
									href="mailto:biuro@optimuswork.pl">biuro&#64;optimalmed.pl</Link
								>
							</div>
						</div>
						<Heading level="h4" classes="text-2xl text-center font-semibold mb-5">
							{$t('section_main_form.work_call_us')}
						</Heading>
						<iframe
							title="де ми розташовані"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2444.1776446435592!2d20.974108512814624!3d52.22199027186765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecd744f02c171%3A0xd0ee228a0f63b52b!2zYWwuIEplcm96b2xpbXNraWUgMTAwLCAwMi0wMTcgV2Fyc3phd2EsINCf0L7Qu9GM0YnQsA!5e0!3m2!1suk!2sua!4v1706205653425!5m2!1suk!2sua"
							width="100%"
							height="200px"
							class="mb-8 rounded-3xl xl:mb-0 xl:h-[305px] xl:w-[438px] 2xl:h-[325px] 2xl:w-full"
							style="border:0;"
							loading="lazy"
							referrerpolicy="no-referrer-when-downgrade"
						>
						</iframe>
					</div>
				</div>
				<div class="form__col-2 xl:w-full">
					<Heading level="h4" classes="text-2xl font-semibold text-center mb-5">
						{$t('section_main_form.leave_request')}
					</Heading>
					<form
						on:submit|preventDefault={handleSubmit}
						action=""
						id="main-form"
						class="flex flex-col gap-5"
					>
						<div class="main-form-box">
							<input
								class="h-16 w-full rounded-xl px-7 text-main {$nameError
									? 'error-border'
									: $name
										? 'success-border'
										: 'border-base'}
								"
								data-required="letter"
								type="text"
								name="name"
								placeholder={$t('section_main_form.imput_name')}
								bind:value={$name}
							/>
						</div>
						<div class="main-form-box">
							<input
								class="h-16 w-full rounded-xl px-7 text-main
								{$phoneError ? 'error-border' : $phone ? 'success-border' : 'border-base'}"
								data-required="number"
								type="tel"
								name="tel"
								placeholder="Телефон *"
								bind:value={$phone}
							/>
						</div>
						<div class="main-form-box">
							<input
								class="h-16 w-full rounded-xl px-7 text-main
								{$emailError ? 'error-border' : $email ? 'success-border' : 'border-base'}
								"
								data-required="email"
								type="email"
								name="email"
								placeholder="Email *"
								bind:value={$email}
							/>
						</div>

						<div class="main-form-box drop-small relative xl:hidden">
							<input
								on:click={() => (showFilterSmall = !showFilterSmall)}
								data-required="select-small"
								value=" "
								type="button"
								class="dropdown-speciality-small h-16 w-full rounded-xl bg-white px-7
								{$popupFilterErrorSmall
									? 'error-border'
									: selectedSpecializations.size > 0
										? 'success-border'
										: 'border-base'}
								"
							/>
							<svg
								width="11"
								class="pointer-events-none absolute right-5 top-2/4"
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
							<span
								class="speciality-small pointer-events-none absolute left-0 top-[35%] px-7 text-main"
								>{$t('section_main_form.specialisation')} *
								<span class="number-selected-small">{selectedCount}</span>
							</span>
						</div>

						{#if showFilterSmall}
							<div
								use:clickOutside={() => (showFilterSmall = false)}
								class="dropdown-speciality-small-filter bs:w-[280px] sm:w-[335px] md:w-[385px] lg:w-[330px]"
							>
								<div class="filter-input relative bg-filter px-2 py-5">
									<input
										class="w-full rounded-[10px] border border-input px-[28px] py-[19px] text-main placeholder:text-sm placeholder:text-main"
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
										<label class="checkbox-container-filter text-main">
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
						<div class="form-popup-box-large relative bs:hidden xl:block">
							<input
								on:click={() => (showFilterLarge = !showFilterLarge)}
								data-required="select"
								value=" "
								type="button"
								class="dropdown-speciality-small-popup relative w-full cursor-pointer rounded-[10px] border border-input bg-white px-[28px] py-[19px]
								{$popupFilterError
									? 'error-border'
									: selectedSpecializations.size > 0
										? 'success-border'
										: 'border-base'}"
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
							<span
								class="speciality-small pointer-events-none absolute left-[28px] top-[20px] text-main"
								>{$t('section_main_form.specialisation')} *
								<span class="number-selected-small-filter pointer-events-none"
									>{selectedCount}
								</span>
							</span>
						</div>

						<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
						{#if showFilterLarge}
							<!-- svelte-ignore a11y-no-static-element-interactions -->
							<div
								on:click={() => (showFilterLarge = false)}
								class="dropdown-speciality-large-filter"
							>
								<div on:click|stopPropagation class=" rounded-3xl bg-white">
									<div class="filter-container-large relative">
										<button
											on:click={() => (showFilterLarge = false)}
											type="button"
											class="popup-close absolute right-5 top-5"
										>
											<svg
												width="40"
												height="40"
												viewBox="0 0 40 40"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
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
										{#each filterData as data}
											<label class="checkbox-container-filter text-sm">
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
									<div class="mb-10 flex justify-center gap-5">
										<button
											on:click={resetCheckBox}
											class="clear_button text-3xl text-main-button"
											type="button"
										>
											{$t('section_main_form.clear_select')}
										</button>
										<button
											on:click={() => (showFilterLarge = false)}
											class="acept_button bg-main-button text-3xl"
											type="button"
										>
											{$t('section_main_form.selected')}
										</button>
									</div>
								</div>
							</div>
						{/if}

						<textarea
							class="arena-text h-[200px] rounded-xl px-7 py-6"
							name="area"
							id="area"
							cols="30"
							rows="10"
							placeholder={$t('section_main_form.areatext')}
						></textarea>
						<Main_Button classes="xl:w-full" type="submit">
							{$t('section_main_form.submit')}
						</Main_Button>
					</form>
				</div>
			</div>
		</div>
	</Container>
</Section>

<style lang="postcss">
	#main-form *::placeholder {
		font-size: 14px;
		color: #080808;
	}

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

	.filter-container-large {
		color: #080808;
		padding: 40px 80px;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-column-gap: 40px;
		grid-row-gap: 10px;
	}

	.dropdown-speciality-large-filter {
		position: fixed;
		display: flex;
		background-color: #08080899;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		align-items: center;
		justify-content: center;
		z-index: 100;
	}

	.clear_button {
		box-shadow:
			0px 0px 0px 0px rgba(0, 0, 0, 0.1),
			0px 3px 7px 0px rgba(0, 0, 0, 0.1),
			0px 12px 12px 0px rgba(0, 0, 0, 0.09),
			0px 27px 16px 0px rgba(0, 0, 0, 0.05),
			0px 48px 19px 0px rgba(0, 0, 0, 0.01),
			0px 75px 21px 0px rgba(0, 0, 0, 0);
		border-radius: 35px;
		text-align: center;
		font-size: 16px;
		font-weight: 700;
		line-height: 28px;
		width: 380px;
		padding: 21px 0;
	}

	.acept_button {
		width: 380px;
		padding: 21px 0;
		border-radius: 35px;
		font-size: 16px;
		font-weight: 700;
		line-height: 28px;
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
		bottom: 45px;
		z-index: 2;
	}

	.filter-container {
		height: 200px;
		overflow-y: scroll;
		padding: 15px 25px 25px;
	}

	.no-scroll {
		overflow: hidden;
	}

	@media (min-width: 768px) {
		.dropdown-speciality-small-filter {
			display: flex;
			flex-direction: column;
		}
		.filter-container,
		.filter-input {
			width: 100%;
		}
	}
</style>

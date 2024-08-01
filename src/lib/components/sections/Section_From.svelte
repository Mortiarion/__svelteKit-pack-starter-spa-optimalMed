<script lang="ts">
	import Section from '$lib/base-components/Section.svelte';
	import Container from '$lib/base-components/Container.svelte';
	import Heading from '$lib/base-components/Heading.svelte';
	import Text from '$lib/base-components/Text.svelte';
	import Link from '$lib/base-components/Link.svelte';
	import Main_Button from '$lib/components/header/Main_button.svelte';
	import { writable } from 'svelte/store';

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

	let showFilterLarge: boolean = true;

	let selectedSpecializations: Set<string> = new Set();

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

	const name = writable('');
	const email = writable('');
	const phone = writable('');

	const nameError = writable(false);
	const emailError = writable(false);
	const phoneError = writable(false);
	const popupFilterError = writable(false);

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
		// filterText = '';
		// showFilter = false;
		nameError.set(false);
		emailError.set(false);
		phoneError.set(false);
		popupFilterError.set(false);
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
</script>

<Section id="form">
	<Container classes="xl:px-5">
		<div class="rounded-3xl bg-biruza px-5 py-7 text-white lg:mx-2 2xl:px-20">
			<div class="form__box lg:flex lg:gap-10 xl:px-8 2xl:gap-32">
				<div class="form__col-1 xl:w-full">
					<div class="contacts">
						<Heading level="h4" classes="text-2xl font-semibold text-center mb-8">Контакти:</Heading
						>
						<div class="flex-box flex lg:flex-col lg:gap-5 xl:mb-6 xl:flex-row">
							<div class="fb-col-1 flex min-w-[50%] flex-col">
								<Text classes="text-[10px] font-light">Понеділок - п'ятниця</Text>
								<Text classes="font-raleway text-sm font-semibold mb-7">8:30 - 16:30</Text>
								<Heading level="h4" classes="text-[10px] font-light">Адреса:</Heading>
								<Text classes="font-raleway text-sm font-semibold"
									>OptimalMed sp. z o.o. al. Jerozolimskie 100, Warszawa 00-807</Text
								>
							</div>
							<div class="fb-col-2 mb-7 flex min-w-[50%] flex-col">
								<Heading level="h4" classes="text-[10px] font-light">Телефони:</Heading>
								<Link href="tel:+48512058549" classes="text-sm font-semibold">+48 512 058 549</Link>
								<Link href="tel:+48570501711" classes="text-sm font-semibold mb-2"
									>+48 570 501 711</Link
								>
								<Heading level="h4" classes="text-[10px] font-light">Пошта:</Heading>
								<Link
									classes="font-raleway text-sm font-semibold "
									href="mailto:biuro@optimuswork.pl">biuro&#64;optimalmed.pl</Link
								>
							</div>
						</div>
						<Heading level="h4" classes="text-2xl text-center font-semibold mb-5"
							>Зв'яжіться з нами</Heading
						>
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
					<Heading level="h4" classes="text-2xl font-semibold text-center mb-5"
						>Оставте заявку</Heading
					>
					<form
						on:submit|preventDefault={handleSubmit}
						action=""
						id="main-form"
						class="flex flex-col gap-5"
					>
						<div class="main-form-box">
							<input
								class=" h-16 w-full rounded-xl px-7 {$nameError
									? 'error-border'
									: $name
										? 'success-border'
										: 'border-base'}
								"
								data-required="letter"
								type="text"
								name="name"
								placeholder="Ім'я *"
								bind:value={$name}
							/>
						</div>
						<div class="main-form-box">
							<input
								class=" h-16 w-full rounded-xl px-7
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
								class=" h-16 w-full rounded-xl px-7
								{$emailError ? 'error-border' : $email ? 'success-border' : 'border-base'}
								"
								data-required="email"
								type="email"
								name="email"
								placeholder="Email *"
								bind:value={$email}
							/>
						</div>

						<!-- <div class="main-form-box drop-small relative">
							<input
								data-required="select-small"
								value=" "
								type="button"
								class="dropdown-speciality-small h-16 w-full rounded-xl bg-white px-7"
							/>
							<svg
								width="11"
								class="absolute right-5 top-2/4"
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
							<span class="speciality-small absolute left-0 top-[35%] px-7 text-main"
								>Спеціалізація *
								<span class="number-selected-small"></span>
							</span>
						</div> -->

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
								>Спеціалізація *
								<span class="number-selected-small-filter pointer-events-none"
									>{selectedCount}
								</span>
							</span>
						</div>

						{#if showFilterLarge}
							<div
								use:clickOutside={() => (showFilterLarge = false)}
								class="dropdown-speciality-large-filter"
							>
								<div class=" bg-white rounded-3xl">
									<div class="filter-container-large">
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
										<button class="clear_button text-3xl text-main-button" type="button"
											>Очистить выбор</button
										>
										<button class="acept_button bg-main-button text-3xl" type="button"
											>Выбрать</button
										>
									</div>
								</div>
							</div>
						{/if}

						<!-- <div class="dropdown-speciality-small-filter-main hidden">
							<div class="filter-input">
								<input type="text" />
								<svg
									width="20"
									height="20"
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M8.04937 16.0903C9.837 16.0904 11.5735 15.4939 12.9838 14.3955L18.3044 19.7161C18.7019 20.1 19.3353 20.089 19.7191 19.6915C20.0936 19.3038 20.0936 18.6891 19.7191 18.3014L14.3985 12.9808C17.1242 9.47199 16.4895 4.41791 12.9807 1.69215C9.47194 -1.03361 4.41791 -0.398871 1.69215 3.10991C-1.03361 6.6187 -0.398871 11.6728 3.10991 14.3985C4.52252 15.4959 6.26057 16.0912 8.04937 16.0903ZM3.77429 3.77121C6.13538 1.41008 9.96346 1.41004 12.3246 3.77113C14.6857 6.13221 14.6858 9.96029 12.3247 12.3214C9.96359 14.6826 6.13551 14.6826 3.77437 12.3215C3.77433 12.3215 3.77433 12.3215 3.77429 12.3214C1.4132 9.97754 1.39929 6.16341 3.74317 3.80233C3.75353 3.79193 3.76389 3.78157 3.77429 3.77121Z"
										fill="#0FA4AE"
									/>
								</svg>
							</div>
							<div class="filter-container">
								<label class="checkbox-container-filter">
									<input type="checkbox" name="specialization" value="allergist" />
									<span class="checkmark"></span>Аллерголог
								</label>
								<label class="checkbox-container-filter">
									<input type="checkbox" name="specialization" value="andrologist" />
									<span class="checkmark"></span>Андролог
								</label>
								<label class="checkbox-container-filter">
									<input type="checkbox" name="specialization" value="anesthesiologist" />
									<span class="checkmark"></span>Анестезіолог
								</label>
								<label class="checkbox-container-filter">
									<input type="checkbox" name="specialization" value="obstetrician-gynecologist" />
									<span class="checkmark"></span>Акушер - гінеколог
								</label>
								<label class="checkbox-container-filter">
									<input type="checkbox" name="specialization" value="virologist" />
									<span class="checkmark"></span>Вірусолог
								</label>
								<label class="checkbox-container-filter">
									<input type="checkbox" name="specialization" value="general-practitioner" />
									<span class="checkmark"></span>Лікар без спеціалізації
								</label>
								<label class="checkbox-container-filter">
									<input type="checkbox" name="specialization" value="gastroenterologist" />
									<span class="checkmark"></span>Гастроентеролог
								</label>
								<label class="checkbox-container-filter">
									<input type="checkbox" name="specialization" value="hematologist" />
									<span class="checkmark"></span>Гематолог
								</label>
								<label class="checkbox-container-filter">
									<input type="checkbox" name="specialization" value="allergist" />
									<span class="checkmark"></span>Генетик
								</label>
								<label class="checkbox-container-filter">
									<input type="checkbox" name="specialization" value="geriatrician" />
									<span class="checkmark"></span>Геріатр
								</label>
								<label class="checkbox-container-filter">
									<input type="checkbox" name="specialization" value="dermatologist" />
									<span class="checkmark"></span>Дерматолог
								</label>
								<label class="checkbox-container-filter">
									<input type="checkbox" name="specialization" value="pediatric-anesthesiologist" />
									<span class="checkmark"></span>Дитячий анестезіолог
								</label>
								<label class="checkbox-container-filter">
									<input type="checkbox" name="specialization" value="pediatric-gynecologist" />
									<span class="checkmark"></span>Дитячий гінеколог
								</label>
								<label class="checkbox-container-filter">
									<input
										type="checkbox"
										name="specialization"
										value="pediatric-gastroenterologist"
									/>
									<span class="checkmark"></span>Дитячий гастроентеролог
								</label>
								<label class="checkbox-container-filter">
									<input type="checkbox" name="specialization" value="pediatric-dermatologist" />
									<span class="checkmark"></span>Дитячий дерматолог
								</label>
								<label class="checkbox-container-filter">
									<input type="checkbox" name="specialization" value="pediatric-cardiologist" />
									<span class="checkmark"></span>Дитячий кардіолог
								</label>
								<label class="checkbox-container-filter">
									<input type="checkbox" name="specialization" value="pediatric-neurologist" />
									<span class="checkmark"></span>Дитячий невролог
								</label>
								<label class="checkbox-container-filter">
									<input
										type="checkbox"
										name="specialization"
										value="pediatric-otorhinolaryngologist"
									/>
									<span class="checkmark"></span>Дитячий отоларинголог
								</label>
								<label class="checkbox-container-filter">
									<input
										type="checkbox"
										name="specialization"
										value="pediatric-traumatologist-orthopedist"
									/>
									<span class="checkmark"></span>Дитячий травматолог - ортопед
								</label>
								<label class="checkbox-container-filter">
									<input type="checkbox" name="specialization" value="pediatric-surgeon" />
									<span class="checkmark"></span>Дитячий хірург
								</label>
								<label class="checkbox-container-filter">
									<input type="checkbox" name="specialization" value="pediatric-pulmonologist" />
									<span class="checkmark"></span>Дитячий пульмонолог
								</label>
								<label class="checkbox-container-filter">
									<input type="checkbox" name="specialization" value="pediatric-nephrologist" />
									<span class="checkmark"></span>Дитячий нефролог
								</label>
								<label class="checkbox-container-filter">
									<input type="checkbox" name="specialization" value="pediatric-urologist" />
									<span class="checkmark"></span>Дитячий уролог
								</label>
								<label class="checkbox-container-filter">
									<input type="checkbox" name="specialization" value="pediatric-endocrinologist" />
									<span class="checkmark"></span>Дитячий ендокринолог
								</label>
								<label class="checkbox-container-filter">
									<input type="checkbox" name="specialization" value="immunologist" />
									<span class="checkmark"></span>Іммунолог
								</label>
								<label class="checkbox-container-filter">
									<input
										type="checkbox"
										name="specialization"
										value="infectious-disease-specialist"
									/>
									<span class="checkmark"></span>Інфекціоніст
								</label>
								<label class="checkbox-container-filter">
									<input type="checkbox" name="specialization" value="cardiologist" />
									<span class="checkmark"></span>Кардіолог
								</label>
								<label class="checkbox-container-filter">
									<input type="checkbox" name="specialization" value="cardiovascular-surgeon" />
									<span class="checkmark"></span>Кардіохірург
								</label>
								<label class="checkbox-container-filter">
									<input type="checkbox" name="specialization" value="laboratory-diagnostician" />
									<span class="checkmark"></span>Лабораторна діагностика
								</label>
								<label class="checkbox-container-filter">
									<input type="checkbox" name="specialization" value="mammologist" />
									<span class="checkmark"></span>Маммолог
								</label>
								<label class="checkbox-container-filter">
									<input type="checkbox" name="specialization" value="narcologist" />
									<span class="checkmark"></span>Нарколог
								</label>
								<label class="checkbox-container-filter">
									<input type="checkbox" name="specialization" value="neurologist" />
									<span class="checkmark"></span>Невролог
								</label>
								<label class="checkbox-container-filter">
									<input type="checkbox" name="specialization" value="neurosurgeon" />
									<span class="checkmark"></span>Нейрохірург
								</label>
								<label class="checkbox-container-filter">
									<input type="checkbox" name="specialization" value="neonatologist" />
									<span class="checkmark"></span>Неонатолог
								</label>
								<label class="checkbox-container-filter">
									<input type="checkbox" name="specialization" value="emergency-medicine" />
									<span class="checkmark"></span>Невідкладні стани
								</label>
								<label class="checkbox-container-filter">
									<input type="checkbox" name="specialization" value="nephrologist" />
									<span class="checkmark"></span>Нефролог
								</label>
								<label class="checkbox-container-filter">
									<input type="checkbox" name="specialization" value="oncologist" />
									<span class="checkmark"></span>Онколог
								</label>
								<label class="checkbox-container-filter">
									<input type="checkbox" name="specialization" value="otolaryngologist" />
									<span class="checkmark"></span>Отоларинголог
								</label>
								<label class="checkbox-container-filter">
									<input type="checkbox" name="specialization" value="ophthalmologist" />
									<span class="checkmark"></span>Офтальмолог
								</label>
								<label class="checkbox-container-filter">
									<input type="checkbox" name="specialization" value="pathologist" />
									<span class="checkmark"></span>Патологоанатом
								</label>
								<label class="checkbox-container-filter">
									<input type="checkbox" name="specialization" value="pediatrician" />
									<span class="checkmark"></span>Педіатр
								</label>
								<label class="checkbox-container-filter">
									<input type="checkbox" name="specialization" value="proctologist" />
									<span class="checkmark"></span>Проктолог
								</label>
								<label class="checkbox-container-filter">
									<input type="checkbox" name="specialization" value="pulmonologist" />
									<span class="checkmark"></span>Пульмонолог
								</label>
								<label class="checkbox-container-filter">
									<input type="checkbox" name="specialization" value="psychiatrist" />
									<span class="checkmark"></span>Психіатр
								</label>
								<label class="checkbox-container-filter">
									<input type="checkbox" name="specialization" value="radiologist" />
									<span class="checkmark"></span>Радіолог
								</label>
								<label class="checkbox-container-filter">
									<input type="checkbox" name="specialization" value="rehabilitation-specialist" />
									<span class="checkmark"></span>Реабілітолог
								</label>
								<label class="checkbox-container-filter">
									<input type="checkbox" name="specialization" value="forensic-medical-expert" />
									<span class="checkmark"></span>Судово-медичний експерт
								</label>
								<label class="checkbox-container-filter">
									<input type="checkbox" name="specialization" value="vascular-surgeon" />
									<span class="checkmark"></span>Судинний хірург
								</label>
								<label class="checkbox-container-filter">
									<input type="checkbox" name="specialization" value="dentist" />
									<span class="checkmark"></span>Стоматолог
								</label>
								<label class="checkbox-container-filter">
									<input type="checkbox" name="specialization" value="rheumatologist" />
									<span class="checkmark"></span>Ревматолог
								</label>
								<label class="checkbox-container-filter">
									<input type="checkbox" name="specialization" value="traumatologist-orthopedist" />
									<span class="checkmark"></span>Травматолог - ортопед
								</label>
								<label class="checkbox-container-filter">
									<input type="checkbox" name="specialization" value="therapist" />
									<span class="checkmark"></span>Терапевт
								</label>
								<label class="checkbox-container-filter">
									<input type="checkbox" name="specialization" value="toxicologist" />
									<span class="checkmark"></span>Токсиколог
								</label>
								<label class="checkbox-container-filter">
									<input type="checkbox" name="specialization" value="transfusiologist" />
									<span class="checkmark"></span>Трансфузіолог
								</label>
								<label class="checkbox-container-filter">
									<input type="checkbox" name="specialization" value="ultrasound-diagnostician" />
									<span class="checkmark"></span>Ультразвукова діагностика
								</label>
								<label class="checkbox-container-filter">
									<input type="checkbox" name="specialization" value="urologist" />
									<span class="checkmark"></span>Уролог
								</label>
								<label class="checkbox-container-filter">
									<input type="checkbox" name="specialization" value="phoniatrist" />
									<span class="checkmark"></span>Фоніатр
								</label>
								<label class="checkbox-container-filter">
									<input type="checkbox" name="specialization" value="phthisiatrist" />
									<span class="checkmark"></span>Фтізіатр
								</label>
								<label class="checkbox-container-filter">
									<input type="checkbox" name="specialization" value="chemotherapist" />
									<span class="checkmark"></span>Хіміотерапевт
								</label>
								<label class="checkbox-container-filter">
									<input type="checkbox" name="specialization" value="general-surgeon" />
									<span class="checkmark"></span>Хірург загальний
								</label>
								<label class="checkbox-container-filter">
									<input type="checkbox" name="specialization" value="oncological-surgeon" />
									<span class="checkmark"></span>Хірург онколог
								</label>
								<label class="checkbox-container-filter">
									<input type="checkbox" name="specialization" value="plastic-surgeon" />
									<span class="checkmark"></span>Хірург пластичний
								</label>
								<label class="checkbox-container-filter">
									<input type="checkbox" name="specialization" value="endocrinologist" />
									<span class="checkmark"></span>Ендокринолог
								</label>
								<label class="checkbox-container-filter">
									<input type="checkbox" name="specialization" value="endoscopist" />
									<span class="checkmark"></span>Ендоскопія
								</label>
								<label class="checkbox-container-filter">
									<input type="checkbox" name="specialization" value="epidemiologist" />
									<span class="checkmark"></span>Епідеміолог
								</label>
								<label class="checkbox-container-filter">
									<input type="checkbox" name="specialization" value="other" />
									<span class="checkmark"></span>Інші
								</label>
							</div>
						</div> -->
						<textarea
							class="arena-text h-[200px] rounded-xl px-7 py-6"
							name="area"
							id="area"
							cols="30"
							rows="10"
							placeholder="Впишіть текст повідомлення..."
						></textarea>
						<Main_Button classes="xl:w-full" type="submit">Відправити</Main_Button>
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
		/* position: fixed; */
		color: #080808;
		/* position: absolute; */
		/* background-color: #fff; */
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
		/* opacity: 1; */
		/* drop-filter: blur(0.2px); */
		align-items: center;
		justify-content: center;
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
</style>

<script lang="ts">
	import Section from '$lib/base-components/Section.svelte';
	import Container from '$lib/base-components/Container.svelte';
	import Heading from '$lib/base-components/Heading.svelte';
	import Text from '$lib/base-components/Text.svelte';
	import Link from '$lib/base-components/Link.svelte';
	import Main_Button from '$lib/components/header/Main_button.svelte';
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
					<form action="" id="main-form" class="flex flex-col gap-5">
						<div class="main-form-box">
							<input
								class=" h-16 w-full rounded-xl px-7"
								data-required="letter"
								type="text"
								name="name"
								placeholder="Ім'я *"
							/>
						</div>
						<div class="main-form-box">
							<input
								class=" h-16 w-full rounded-xl px-7"
								data-required="number"
								type="tel"
								name="tel"
								placeholder="Телефон *"
							/>
						</div>
						<div class="main-form-box">
							<input
								class=" h-16 w-full rounded-xl px-7"
								data-required="email"
								type="email"
								name="email"
								placeholder="Email *"
							/>
						</div>
						<div class="main-form-box drop-big hidden">
							<input
								type="button"
								value=" "
								data-required="select"
								id="dropdown-speciality"
								class="dropdown-speciality"
							/>
							<svg
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
							<span class="speciality"
								>Спеціалізація *
								<span class="number-selected"></span>
							</span>
						</div>
						<div class="main-form-box drop-small relative">
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
						</div>
						<div class="dropdown-speciality-small-filter-main hidden">
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
						</div>
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
</style>

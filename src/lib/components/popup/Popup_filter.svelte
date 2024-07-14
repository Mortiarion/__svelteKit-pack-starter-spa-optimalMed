<script lang="ts">
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

	let filter: HTMLElement;
	export let showFilter = false;
</script>

<div class="form-popup-box relative">
	<input
		on:click={() => (showFilter = !showFilter)}
		data-required="select"
		value=" "
		type="button"
		class="dropdown-speciality-small-popup relative w-full cursor-pointer rounded-[10px] border border-input px-[28px] py-[19px]"
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
		<span class="number-selected-small-filter"></span>
	</span>
</div>

{#if showFilter}
	<div class="dropdown-speciality-small-filter">
		<div class="filter-input relative bg-filter px-2 py-5">
			<input
				class="w-full rounded-[10px] border border-input px-[28px] py-[19px] placeholder:text-sm placeholder:text-main"
				type="text"
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
			{#each filterData as data}
				<label class="checkbox-container-filter">
					<input type="checkbox" name="specialization" value={data.value} />
					<span class="checkmark"></span>{data.text}
				</label>
			{/each}
		</div>
	</div>
{/if}

<style lang="postcss">
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
		padding: 15px 25px;
	}
</style>

<script lang="ts">
	import Section from '$lib/base-components/Section.svelte';
	import Container from '$lib/base-components/Container.svelte';
	import Heading from '$lib/base-components/Heading.svelte';
	import Text from '$lib/base-components/Text.svelte';
	import Paragraph from '$lib/base-components/Paragraph.svelte';
	let badgePng = '/img/main-page-img/badge.png';
	let badgeAvif = '/img/main-page-img/badge.avif';
	let badgeWebp = '/img/main-page-img/badge.webp';

	let whyItems = [
		{
			value: 'Лікарі починають роботу на 63% швидше',
			description: 'ніж колеги, які не користуються нашими послугами'
		},
		{
			value: 'Поєднуємо роль агентства',
			description: 'з працевлаштування та медичного закладу, який працевлаштовує лікарів у Польщі.'
		},
		{
			value: 'Офіс у Варшаві',
			description: "щодня подаємо документи до Міністерства Здоров'я Польщі."
		},
		{
			value: 'Член асоціації польських медичних установ',
			description: 'це дає нам можливість співпрацювати з найкращими лікарнями в Польщі'
		},
		{
			value: 'Інвестуємо в наших лікарів',
			description:
				'оплачуючи їхні курси польської мови, присяжні переклади та курси підвищення кваліфікації'
		},
		{ value: 'Знаходимо можливості', description: 'для наших лікарів заробляти більше' },
		{
			value: 'Допомагаємо підтвердити диплом і спеціалізацію',
			description: 'протягом 5 років роботи в Польщі'
		}
	];
</script>

<Section id="why">
	<Container classes="px-5 2xl:px-32 2xl:max-w-screen-2xl">
		<div class="why__content">
			<Heading
				classes="flex flex-col text-3xl font-semibold text-center my-8 lg:text-5xl lg:text-left xl:text-6xl"
			>
				Чому саме
				<Text classes="text-biruza">Optimal Med</Text>
			</Heading>
			<div class="parent">
				{#each whyItems as item, index}
					<div class={`div${index + 1} mb-6`}>
						<div class=" mb-3 h-px w-20 bg-biruza"></div>
						<Heading level="h4" classes="font-semibold mb-2">
							{item.value}
						</Heading>
						<Paragraph classes="text-sm text-grey font-raleway lg:text-base">
							{item.description}
						</Paragraph>
					</div>
				{/each}
				<div class="badge grid-8 md:w-[334px]">
					<picture class="flex justify-center">
						<source srcset={badgeAvif} type="image/avif" />
						<source srcset={badgeWebp} type="image/webp" />
						<img src={badgePng} alt="badge-png" />
					</picture>
					<div class="flex items-center md:justify-between">
						<Heading classes="text-xl font-semibold md:w-52  lg:w-52"
							>Розпочни медичну кар'єру в Польщі!</Heading
						>
						<a href="./index.html#form">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="53"
								height="28"
								viewBox="0 0 53 28"
								fill="none"
							>
								<rect
									x="0.5"
									y="1.34204"
									width="51.8947"
									height="25.4474"
									rx="12.7237"
									stroke="#0FA4AE"
								/>
								<path
									d="M36.2549 14.0658L30.8315 19.3553L29.7171 18.2765L33.2364 14.8281H16.75V13.3036H33.2364L29.7171 9.85521L30.8315 8.77637L36.2549 14.0658Z"
									fill="#0FA4AE"
								/>
							</svg>
						</a>
					</div>
				</div>
			</div>
		</div>
	</Container>
</Section>

<style lang="postcss">
	@media (min-width: 768px) {
		.parent {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			grid-template-rows: repeat(5, 1fr);
			grid-column-gap: 20px;
		}
		.grid-1 {
			grid-area: 1 / 1 / 2 / 2;
		}
		.grid-2 {
			grid-area: 2 / 1 / 3 / 2;
		}
		.grid-3 {
			grid-area: 3 / 1 / 4 / 2;
		}
		.grid-4 {
			grid-area: 4 / 1 / 5 / 2;
		}
		.grid-5 {
			grid-area: 5 / 1 / 6 / 2;
		}
		.grid-6 {
			grid-area: 1 / 2 / 2 / 3;
		}
		.grid-7 {
			grid-area: 2 / 2 / 3 / 3;
		}
		.grid-8 {
			grid-area: 3 / 2 / 6 / 3;
		}
	}
	@media (min-width: 1024px) {
		.badge {
			transform: translateY(-70px);
		}
		.parent {
			grid-template-columns: repeat(3, 1fr);
			grid-template-rows: repeat(3, 1fr);
			grid-column-gap: 50px;
			grid-row-gap: 30px;
		}
		.grid-8 {
			grid-area: 4 / 3 / 2 / 3;
		}
	}
	@media (min-width: 1440px) {
		.badge {
			width: 380px;
		}
	}
	.badge {
		padding: 0 15px 20px 20px;
		border-radius: 20px;
		box-shadow:
			0px 128px 51px rgba(0, 0, 0, 0.01),
			0px 72px 43px rgba(0, 0, 0, 0.05),
			0px 32px 32px rgba(0, 0, 0, 0.09),
			0px 8px 18px rgba(0, 0, 0, 0.1),
			0px 0px 0px rgba(0, 0, 0, 0.1);

		background-color: var(--white-color);
		& .badge__box {
			display: flex;
			gap: 8px;
			align-items: center;
		}
		& img {
			width: 225px;
			height: 278px;
		}
	}
</style>

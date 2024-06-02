<script lang="ts">
	import Section from '$lib/base-components/Section.svelte';
	import Container from '$lib/base-components/Container.svelte';
	import Heading from '$lib/base-components/Heading.svelte';
	import Text from '$lib/base-components/Text.svelte';
	import Paragraph from '$lib/base-components/Paragraph.svelte';
	import Link from '$lib/base-components/Link.svelte';
</script>

<Section>
	<Container classes="px-5 lg:px-8 xl:px-14 2xl:px-32">
		<div class="mb-10">
			<Heading classes="text-3xl font-semibold text-main mb-5 lg:max-w-[60%]">
				<Text classes="text-biruza">Зарплата лікаря в Польщі:</Text>
				скільки заробляють іноземні фахівці
			</Heading>
			<div>
				<picture class="mb-5 block lg:hidden">
					<source srcset="./img/main-page-img/surgeon-team.avif" type="image/avif" />
					<source srcset="./img/main-page-img/surgeon-team.webp" type="image/webp" />
					<img src="./img/main-page-img/surgeon-team.jpg" alt="surgeon-team" />
				</picture>
			</div>
			<div
				class=" font-raleway text-sm text-main lg:flex lg:flex-row-reverse lg:gap-5 xl:justify-between"
			>
				<div class="lg:max-h-full lg:max-w-[30%]">
					<picture class="hidden lg:mb-5 lg:block xl:mb-0">
						<source srcset="./img/main-page-img/team-surgeon-768.avif" type="image/avif" />
						<source srcset="./img/main-page-img/team-surgeon-768.webp" type="image/webp" />
						<img
							class="min-w-[212px] xl:min-w-[275px] xl:max-h-[434px]"
							src="./img/main-page-img/team-surgeon-768.jpg"
							alt="surgeon-768"
						/>
					</picture>
				</div>
				<div class="lg:flex lg:max-w-[70%] lg:flex-col lg:gap-5 xl:text-base">
					<Paragraph>
						Медичних фахівців з України, Білорусі та інших пострадянських країн, які розглядають
						можливість переїзду в іншу країну, прогнозовано цікавить інформація про зарплату лікаря
						в Польщі. Одразу зазначимо, що питання це досить багатогранне - залежно від низки
						обставин і умов різниця в зарплатах лікарів у Польщі може обчислюватися десятками тисяч
						злотих. Однак із деякими загальними тенденціями ми постараємося ознайомити всіх
						зацікавлених.
					</Paragraph>
					<Paragraph>Фактори, що впливають на розмір заробітної плати польського лікаря</Paragraph>
					<Paragraph classes="mb-2.5">
						Насамперед, оклад залежить від спеціальності лікаря. Найбільш високооплачуваними
						напрямками на сьогодні вважаються естетична хірургія, офтальмологія, ортопедія,
						анестезіологія. Складність полягає в тому, що іноземці, які працевлаштовуються за
						спрощеним алгоритмом, спочатку прирівнюються до лікарів без спеціалізації. Такі
						співробітники можуть розраховувати на мінімальну зарплату лікаря в Польщі. Станом на
						сьогодні вона становить близько 7500 злотих до вирахування податків щомісяця.
					</Paragraph>
					<div class="hidden items-center gap-5 lg:flex">
						<Paragraph classes="text-sm text-biruza font-semibold">читати повністю</Paragraph>
						<Link href="#">
							<svg
								width="80"
								height="40"
								viewBox="0 0 80 40"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g>
									<rect
										x="0.5"
										y="0.5"
										width="79"
										height="39"
										rx="19.5"
										fill="white"
										stroke="#0FA4AE"
									/>
									<path
										d="M51.125 20L44.9731 26L43.7089 24.7762L47.701 20.8646H29V19.1354H47.701L43.7089 15.2238L44.9731 14L51.125 20Z"
										fill="#0FA4AE"
									/>
								</g>
							</svg>
						</Link>
					</div>
				</div>
			</div>
			<div class="flex items-center gap-5 lg:hidden">
				<Paragraph classes="text-sm text-biruza font-semibold">читати повністю</Paragraph>
				<Link href="#">
					<svg
						width="80"
						height="40"
						viewBox="0 0 80 40"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g>
							<rect
								x="0.5"
								y="0.5"
								width="79"
								height="39"
								rx="19.5"
								fill="white"
								stroke="#0FA4AE"
							/>
							<path
								d="M51.125 20L44.9731 26L43.7089 24.7762L47.701 20.8646H29V19.1354H47.701L43.7089 15.2238L44.9731 14L51.125 20Z"
								fill="#0FA4AE"
							/>
						</g>
					</svg>
				</Link>
			</div>
		</div>
	</Container>
</Section>

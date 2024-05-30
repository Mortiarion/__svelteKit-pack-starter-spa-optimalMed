<script lang="ts">
	import Section from '$lib/base-components/Section.svelte';
	import Container from '$lib/base-components/Container.svelte';
	import Heading from '$lib/base-components/Heading.svelte';
	import Text from '$lib/base-components/Text.svelte';
</script>

<Section>
	<Container classes="2xl:max-w-screen-2xl">
		<div class="px-5 xl:px-14 2xl:px-32">
			<Heading level="h2" classes="mb-5 text-3xl font-semibold text-biruza lg:max-w-[600px] lg:mb-10  xl:text-4xl">
				Отримання права на виконання
				<Text classes="text-main">лікарської діяльності</Text>
			</Heading>

			<div class=" grid grid-cols-2 justify-items-start gap-x-8 lg:grid-cols-4 mb-10 md:mb-16 xl:mb-20">
				<ul
					class="list-disc pl-3 text-sm font-semibold text-biruza underline marker:text-xs marker:text-biruza lg:pl-5"
				>
					<li><a class='text-' href="/pages-doctors/alergologist">Алерголог</a></li>
					<li>
						<a href="/pages-doctors/anestesiologist">Анестезіолог</a>
					</li>
					<li><a href="/">Вірусолог</a></li>
					<li><a href="/">Гастроентеролог</a></li>
					<li><a href="/">Гематолог</a></li>
					<li><a href="/">Генетик</a></li>
					<li><a href="/">Геріатр</a></li>
					<li><a href="/">Гінеколог</a></li>
					<li><a href="/">Швидка допомога</a></li>
				</ul>
				<ul
					class="list-disc pl-3 text-sm font-semibold text-biruza underline marker:text-xs marker:text-biruza lg:pl-5"
				>
					<li><a href="/">Дерматолог</a></li>
					<li><a href="/">Імунолог</a></li>
					<li><a href="/">Карділолог</a></li>
					<li><a href="/">Кардіо-хірург</a></li>
					<li><a href="/">Нарколог</a></li>
					<li><a href="/">Невролог</a></li>
					<li><a href="/">Нейрохірург</a></li>
					<li><a href="/">Онколог</a></li>
					<li><a href="/">Уролог</a></li>
				</ul>
				<ul
					class="list-disc pl-3 text-sm font-semibold text-biruza underline marker:text-xs marker:text-biruza lg:pl-5"
				>
					<li><a href="/">Ортодонт</a></li>
					<li><a href="/">Отоларинголог</a></li>
					<li><a href="/">Офтальмолог</a></li>
					<li><a href="/">Патологоанатом</a></li>
					<li><a href="/">Педіатр</a></li>
					<li><a href="/">Радіолог</a></li>
					<li><a href="/">Реабілітолог</a></li>
					<li><a href="/">Ревматолог</a></li>
					<li><a href="/">Лікар в Польщі</a></li>
				</ul>
				<ul
					class="list-disc pl-3 text-sm font-semibold text-biruza underline marker:text-xs marker:text-biruza lg:pl-5"
				>
					<li><a href="/">Стоматолог</a></li>
					<li><a href="/">Травматолог</a></li>
					<li><a href="/">Трансфузіолог</a></li>
					<li><a href="/">Терапевт</a></li>
					<li><a href="/">Фоніатр</a></li>
					<li><a href="/">Хіміотерапевт</a></li>
					<li><a href="/">Хірург</a></li>
				</ul>
			</div>
		</div>
	</Container>
</Section>

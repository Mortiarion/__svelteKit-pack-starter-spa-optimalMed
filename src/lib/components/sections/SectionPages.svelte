<script lang="ts">
	import Section from '$lib/base-components/Section.svelte';
	import Container from '$lib/base-components/Container.svelte';
	import Heading from '$lib/base-components/Heading.svelte';
	import Text from '$lib/base-components/Text.svelte';
	import List_Link from '$lib/base-components/List_Link.svelte';

	import { t } from '$lib/i18n';

	$: items = [
		{ href: '/pages-doctors/alergologist', text: $t('section_doctor_pages.special_one') },
		{ href: '/pages-doctors/anestesiologist', text: $t('section_doctor_pages.special_two') },
		{ href: '/pages-doctors/virusologist', text: $t('section_doctor_pages.special_three') },
		{ href: '/pages-doctors/gastroenterologist', text: $t('section_doctor_pages.special_four') },
		{ href: '/pages-doctors/gematologist', text: $t('section_doctor_pages.special_five') },
		{ href: '/pages-doctors/geneticist', text: $t('section_doctor_pages.special_six') },
		{ href: '/pages-doctors/geriatrician', text: $t('section_doctor_pages.special_seven') },
		{ href: '/pages-doctors/gynecologist', text: $t('section_doctor_pages.special_eight') },
		{ href: '/pages-doctors/ambulance', text: $t('section_doctor_pages.special_nine') }
	];

	$: items_two = [
		{ href: '/pages-doctors/dermatologist', text: $t('section_doctor_pages.special_eleven') },
		{ href: '/pages-doctors/immunologist', text: $t('section_doctor_pages.special_twenteen') },
		{ href: '/pages-doctors/cardiologist', text: $t('section_doctor_pages.special_thirteen') },
		{ href: '/pages-doctors/cardiac_surgeon', text: $t('section_doctor_pages.special_fourteen') },
		{ href: '/pages-doctors/narcologist', text: $t('section_doctor_pages.special_fiveteen') },
		{ href: '/pages-doctors/neurologist', text: $t('section_doctor_pages.special_sixteen') },
		{ href: '/pages-doctors/neurosurgeon', text: $t('section_doctor_pages.special_seventeen') },
		{ href: '/pages-doctors/oncologist', text: $t('section_doctor_pages.special_eightteen') },
		{ href: '/pages-doctors/urologist', text: $t('section_doctor_pages.special_nineteen') }
	];

	$: items_three = [
		{ href: '/pages-doctors/orthodontist', text: $t('section_doctor_pages.special_twenty') },
		{
			href: '/pages-doctors/otolaryngologist',
			text: $t('section_doctor_pages.special_twenty_one')
		},
		{ href: '/pages-doctors/ophthalmologist', text: $t('section_doctor_pages.special_twenty_two') },
		{ href: '/pages-doctors/pathologist', text: $t('section_doctor_pages.special_twenty_three') },
		{ href: '/pages-doctors/pediatrician', text: $t('section_doctor_pages.special_twenty_four') },
		{ href: '/pages-doctors/radiologist', text: $t('section_doctor_pages.special_twenty_five') },
		{
			href: '/pages-doctors/rehabilitation_specialist',
			text: $t('section_doctor_pages.special_twenty_six')
		},
		{
			href: '/pages-doctors/rheumatologist',
			text: $t('section_doctor_pages.special_twenty_seven')
		},
		{
			href: '/pages-doctors/doctor_in_poland',
			text: $t('section_doctor_pages.special_twenty_eight')
		}
	];

	$: items_four = [
		{ href: '/pages-doctors/dentist', text: $t('section_doctor_pages.special_twenty_nine') },
		{ href: '/pages-doctors/traumatologist', text: $t('section_doctor_pages.special_thirty') },
		{
			href: '/pages-doctors/transfusiologist',
			text: $t('section_doctor_pages.special_thirty_one')
		},
		{ href: '/pages-doctors/therapist', text: $t('section_doctor_pages.special_thirty_two') },
		{
			href: '/pages-doctors/transplantologist',
			text: $t('section_doctor_pages.special_thirty_three')
		},
		{ href: '/pages-doctors/phoniatrician', text: $t('section_doctor_pages.special_thirty_four') },
		{ href: '/pages-doctors/chemotherapist', text: $t('section_doctor_pages.special_thirty_five') },
		{ href: '/pages-doctors/surgeon', text: $t('section_doctor_pages.special_thirty_six') }
	];
</script>

<Section>
	<Container>
		<div class="px-5 xl:px-14 2xl:px-32">
			<Heading
				level="h2"
				classes="my-5 text-3xl font-semibold text-biruza lg:max-w-[600px] lg:mb-10  xl:text-4xl 2xl:max-w-[700px] 2xl:mt-20"
			>
				{$t('section_doctor_pages.title')}
				<Text classes="text-main">{$t('section_doctor_pages.subtitle')}</Text>
			</Heading>

			<div
				class=" mb-10 grid grid-cols-2 justify-items-start gap-x-8 md:mb-16 lg:grid-cols-4 xl:mb-20"
			>
				<List_Link {items} />

				<List_Link items={items_two} />

				<List_Link items={items_three} />

				<List_Link items={items_four} />
			</div>
		</div>
	</Container>
</Section>

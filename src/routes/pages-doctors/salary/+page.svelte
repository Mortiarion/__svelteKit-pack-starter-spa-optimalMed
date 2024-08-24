<script lang="ts">
	import Breadcrumbs from '$lib/components/components-pages-doctors/Bredcrumbs.svelte';
    import Section_Title_Par from '$lib/components/components-pages-doctors/Section_Title_Par.svelte'
    import Section_Title_Par_Par from '$lib/components/components-pages-doctors/Section_Title_Par_Par.svelte'
	import Section_Image from '$lib/components/components-pages-doctors/Section_Image.svelte';

	import {
		Breadcrumb_Data,
        Section_Title_Par_Data,
        Section_Title_Par_Par_Data,
        Section_Image_Data,
	} from './data';
</script>

<Breadcrumbs data={$Breadcrumb_Data} />

<Section_Title_Par data={$Section_Title_Par_Data} />

<Section_Title_Par_Par data={$Section_Title_Par_Par_Data} />

<Section_Image data={Section_Image_Data} />



<script lang="ts">
	import Bredcrumbs from '$lib/components/components-pages-doctors/Bredcrumbs.svelte';
	import Section_Title_Par_Par from '$lib/components/components-pages-doctors/Section_Title_Par_Par.svelte';
	import Section_Title_Text_List_Par from '$lib/components/components-pages-doctors/Section_Title_Text_List_Par.svelte';
	import Section_Image from '$lib/components/components-pages-doctors/Section_Image.svelte';
	import Section_Title_Text_List_Par_Par from '$lib/components/components-pages-doctors/Section_Title_Text_List_Par_Par.svelte';

	import {
		Bredcrumbs_Data,
		Section_Title_Par_Par_Data,
		Section_Title_Text_List_Par_Data,
		Section_Image_Data,
		Section_Title_Par_Par_Data_Two,
		Section_Title_Text_List_Par_Par_Data
	} from './data';
</script>

<Bredcrumbs data={$Bredcrumbs_Data} />

<Section_Title_Par_Par data={$Section_Title_Par_Par_Data} />

<Section_Title_Text_List_Par data={$Section_Title_Text_List_Par_Data} />

<Section_Image data={Section_Image_Data} />

<Section_Title_Par_Par data={$Section_Title_Par_Par_Data_Two} />

<Section_Title_Text_List_Par_Par data={$Section_Title_Text_List_Par_Par_Data} />

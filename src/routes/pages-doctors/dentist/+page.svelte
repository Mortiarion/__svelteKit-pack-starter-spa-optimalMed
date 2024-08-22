<script lang="ts">
	import Bredcrumbs from '$lib/components/components-pages-doctors/Bredcrumbs.svelte';
	import Section_Title_Par_Par from '$lib/components/components-pages-doctors/Section_Title_Par_Par.svelte';
	import Section_Title_Text_List_Par_Par from '$lib/components/components-pages-doctors/Section_Title_Text_List_Par_Par.svelte';
	import Section_Image from '$lib/components/components-pages-doctors/Section_Image.svelte';
	import Section_Title_Text_List_Par from '$lib/components/components-pages-doctors/Section_Title_Text_List_Par.svelte';

	import {
		Bredcrumb_Data,
		Section_Title_Par_Par_Data,
		Section_Title_Text_List_Par_Par_Data,
		Section_Image_Data,
		Section_Title_Text_List_Par_Data,
		Section_Title_Text_List_Par_Data_Two
	} from './data';
</script>

<Bredcrumbs data={$Bredcrumb_Data} />

<Section_Title_Par_Par data={$Section_Title_Par_Par_Data} />

<Section_Title_Text_List_Par_Par data={$Section_Title_Text_List_Par_Par_Data} />

<Section_Image data={Section_Image_Data} />

<Section_Title_Text_List_Par data={$Section_Title_Text_List_Par_Data} />

<Section_Title_Text_List_Par data={$Section_Title_Text_List_Par_Data_Two} />

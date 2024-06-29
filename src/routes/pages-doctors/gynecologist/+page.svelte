<script land="ts">
	import Bredcrumbs from '$lib/components/components-pages-doctors/Bredcrumbs.svelte';
	import Section_Title_Par_Par from '$lib/components/components-pages-doctors/Section_Title_Par_Par.svelte';
	import Section_Title_Text_List_Par_Img_Text_List_Par_Par_Par from '$lib/components/components-pages-doctors/Section_Title_Text_List_Par_Img_Text_List_Par_Par_Par.svelte';
    import Section_Title_Text_List_Par_Par from '$lib/components/components-pages-doctors/Section_Title_Text_List_Par_Par.svelte'

	import {
		Bredcrumbs_Data,
		Section_Title_Par_Par_Data,
		Section_Title_Text_List_Par_Img_Text_List_Par_Par_Par_Data,
        Section_Title_Text_List_Par_Par_Data,
        Section_Title_Text_List_Par_Par_Data_Two
	} from './data';
</script>

<Bredcrumbs data={Bredcrumbs_Data} />

<Section_Title_Par_Par data={Section_Title_Par_Par_Data} />

<Section_Title_Text_List_Par_Img_Text_List_Par_Par_Par data={Section_Title_Text_List_Par_Img_Text_List_Par_Par_Par_Data} />

<Section_Title_Text_List_Par_Par data={Section_Title_Text_List_Par_Par_Data} />

<Section_Title_Text_List_Par_Par data={Section_Title_Text_List_Par_Par_Data_Two} />
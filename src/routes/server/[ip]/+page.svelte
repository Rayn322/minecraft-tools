<script lang="ts">
	import Server from '$lib/components/Server.svelte';
	import ServerSelector from '$lib/components/ServerSelector.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	$: ({ response } = data);
</script>

<ServerSelector />
<Server {response} />

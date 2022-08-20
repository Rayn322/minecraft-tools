<script lang="ts">
	// Suggestion (check code before using, and possibly convert to data.X access later):
	// import type { PageData } from './$types';
	// export let data: PageData;
	// $: ({ response } = data);

	import type { JavaStatusResponse } from 'minecraft-server-util';
	import Server from '$lib/components/Server.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	$: ({ response } = data);
</script>

<Server {response} />

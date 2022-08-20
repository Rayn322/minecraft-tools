<script lang="ts">
	import Server from '$lib/components/Server.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	$: ({ response } = data);
</script>

<Server {response} />

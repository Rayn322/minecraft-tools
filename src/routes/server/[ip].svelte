<script lang="ts">
	import type { JavaStatusResponse } from 'minecraft-server-util';
	import Server from '$lib/components/Server.svelte';

	export let response: JavaStatusResponse;
</script>

<Server {response} />

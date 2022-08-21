<script lang="ts">
	import { page } from '$app/stores';
	import Server from '$lib/components/Server.svelte';
	import ServerSelector from '$lib/components/ServerSelector.svelte';

	$: ip = $page.params.ip;
</script>

<ServerSelector />
<Server {ip} />

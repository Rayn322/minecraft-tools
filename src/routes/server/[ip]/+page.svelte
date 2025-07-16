<script lang="ts">
	import Server from '$lib/components/Server.svelte';
	import ServerSelector from '$lib/components/ServerSelector.svelte';

	let { data } = $props();
</script>

<ServerSelector />
<Server status={data.response} />

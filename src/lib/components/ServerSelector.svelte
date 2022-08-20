<script lang="ts">
	import { goto } from '$app/navigation';

	let text = '';
	let loading = false;

	function onSubmit() {
		loading = true;
		goto(`/server/${text}`);
	}
</script>

<form on:submit|preventDefault={onSubmit}>
	<label for="ip">Enter server IP</label>
	<input type="text" name="ip" id="ip" bind:value={text} disabled={loading} />
</form>

{#if loading}
	<p>loading</p>
{/if}

<script lang="ts">
	import { goto } from '$app/navigation';

	let text = $state('');
	let loading = false;

	function onSubmit(event: SubmitEvent) {
		event.preventDefault();
		loading = true;
		goto(`/server/${text}`);
	}
</script>

<form onsubmit={onSubmit}>
	<label for="ip">Enter server IP</label>
	<input type="text" name="ip" id="ip" bind:value={text} />
</form>

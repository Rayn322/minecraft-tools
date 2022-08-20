<script lang="ts">
	// Suggestion (check code before using, and possibly convert to data.X access later):
	// import type { PageData } from './$types';
	//
	// $: ({ response } = data);

	import type { JavaStatusResponse } from 'minecraft-server-util';
	import type { PageData } from './$types';

	// export let response: JavaStatusResponse;
	export let data: PageData;
	$: ({ response } = data);
</script>

<div class="server">
	<img src={response.favicon} alt="Server Icon" />
	<div class="details">
		<div class="top">
			<span class="name">Minecraft server</span>
			<span class="ping">{response.players.online}/{response.players.max}</span>
		</div>
		<div class="motd">
			{@html response.motd.html.replaceAll('\n', '<br>')}
		</div>
	</div>
</div>

<style>
	@font-face {
		font-family: 'Minecraft';
		font-weight: 400;
		font-style: normal;
		src: url('/fonts/Minecraftia-Regular.ttf') format('truetype');
	}

	.server {
		display: flex;
		background-color: #41330e;
		padding: 0.5em;
		width: 40em;
		height: 5em;
		font-family: 'Minecraft', sans-serif;
		white-space: pre-wrap;
		line-height: 1.2em;
	}

	.details {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 100%;
		height: 64px;
		margin-top: 0.3em;
	}

	.top {
		display: flex;
		justify-content: space-between;
		color: white;
	}

	.ping {
		color: #d4d4d4;
	}

	.motd {
		margin-top: 0;
		height: 3em;
	}

	.server img {
		width: 64px;
		height: 64px;
		margin-right: 1em;
	}
</style>

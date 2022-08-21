<script lang="ts">
	import { page } from '$app/stores';

	import type { JavaStatusResponse } from 'minecraft-server-util';

	export let ip: string;
	$: status = getServerStatus(ip);
	let style = '';

	async function getServerStatus(ip: string): Promise<JavaStatusResponse> {
		console.log($page.url.hostname);

		let json: JavaStatusResponse;
		let res = await fetch(`https://${$page.url.hostname}:${$page.url.port}/api/server/${ip}`);
		json = await res.json();

		if (json.favicon) {
			style = `background-image: url(${json.favicon}), url('/images/background.png')`;
		}

		return json;
	}
</script>

{#await status}
	<p>Loading</p>
{:then serverStatus}
	<div class="server" id="server" {style}>
		<div class="details">
			<span class="name">Minecraft Server</span>
			<span class="ping">
				{serverStatus.players.online}<span class="slash">/</span>{serverStatus.players.max}
				<img class="icon" src="/images/download.png" alt="ping icon" />
			</span>
		</div>
		<span class="motd">
			{@html serverStatus.motd.html.replaceAll('\n', '<br>')}
		</span>
	</div>
{/await}

<style>
	@font-face {
		font-family: 'Minecraft';
		font-weight: 400;
		font-style: normal;
		src: url('/fonts/Minecraftia-Regular.ttf') format('truetype');
	}

	.server {
		background-image: url('/images/unknown_server64.png'), url('/images/background.png');
		background-repeat: no-repeat, repeat;
		background-position: 0.25em 0.25em;
		font-family: 'Minecraft', sans-serif;
		color: white;
		padding: 0.25em 0.25em 0.25em 4.75em;
		height: 4em;
		width: 33.75em;
		margin: 0 auto;
		line-height: 1.25em;
	}

	.details {
		margin-top: 0.25em;
	}

	.ping {
		float: right;
		color: #aaaaaa;
	}

	.icon {
		position: relative;
		top: -0.4em;
	}

	.slash {
		color: #555555;
	}

	.motd {
		white-space: pre-wrap;
	}
</style>

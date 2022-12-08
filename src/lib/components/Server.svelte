<script lang="ts">
	import type { StatusResponse } from '$lib/validators';

	export let status: StatusResponse;
	$: style = getBackgroundStyle(status.favicon);

	function getBackgroundStyle(favicon: string | null) {
		if (favicon) {
			return `background-image: url(${status.favicon}), url('/images/background.png')`;
		} else {
			return '';
		}
	}

	function getParsedMotd(html: string) {
		let lines = html.split('\n');
		lines = lines.map((line) => `<div class="line">${line}</div>`);
		return lines.join('');
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
		{#if serverStatus.motd.clean.startsWith(' ')}
			<div class="centered">
				{@html getParsedMotd(serverStatus.motd.html)}
			</div>
		{:else}
			<div class="motd">
				{@html serverStatus.motd.html}
			</div>
		{/if}
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

	.centered {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 90%;
	}
</style>

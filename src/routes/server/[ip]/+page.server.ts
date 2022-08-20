import { status, type JavaStatusResponse } from 'minecraft-server-util';

/** @type {import('@sveltejs/kit').PageServerLoad} */
export async function load({ params }: { params: { ip: string } }) {
	return {
		response: await pingServer(params.ip)
	};
}

async function pingServer(server: string): Promise<JavaStatusResponse> {
	let pingResult: JavaStatusResponse = {
		version: {
			name: 'No version',
			protocol: -1
		},
		players: {
			online: -1,
			max: -1,
			sample: null
		},
		motd: {
			raw: 'Server not found',
			clean: 'Server not found',
			html: 'Server not found'
		},
		favicon: null,
		srvRecord: null,
		roundTripLatency: -1
	};

	try {
		pingResult = await status(server);
	} catch (error) {
		// ignore
	}

	return pingResult;
}

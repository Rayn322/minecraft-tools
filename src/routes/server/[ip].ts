import { status, type JavaStatusResponse } from 'minecraft-server-util';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET({ params }: { params: { ip: string } }) {
	return {
		status: 200,
		headers: {
			'access-control-allow-origin': '*'
		},
		body: {
			response: await pingServer(params.ip)
		}
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

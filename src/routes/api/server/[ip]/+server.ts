import type { RequestHandler } from './$types';
import { status } from 'minecraft-server-util';
import { statusResponse, type StatusResponse } from '$lib/validators';

export const GET: RequestHandler = async ({ params }) => {
	return new Response(JSON.stringify(await pingServer(params.ip)));
};

async function pingServer(server: string): Promise<StatusResponse> {
	const errorResult: StatusResponse = {
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
		const result = await status(server);
		return statusResponse.parse(result);
	} catch (error) {
		return errorResult;
	}
}

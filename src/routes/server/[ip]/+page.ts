import type { PageLoad } from './$types';
import type { JavaStatusResponse } from 'minecraft-server-util';

export const load: PageLoad = async ({ fetch, params }) => {
	const res = await fetch(`/api/server/${params.ip}`);
	const json: JavaStatusResponse = await res.json();

	return {
		response: json
	};
};

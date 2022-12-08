import type { PageLoad } from './$types';
import type { StatusResponse } from '$lib/validators';

export const load: PageLoad = async ({ fetch, params }) => {
	const res = await fetch(`/api/server/${params.ip}`);
	const json: StatusResponse = await res.json();

	return {
		response: json
	};
};

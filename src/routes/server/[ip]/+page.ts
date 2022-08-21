import type { LoadEvent } from '@sveltejs/kit';
import type { JavaStatusResponse } from 'minecraft-server-util';

/** @type {import('./$types').PageLoad} */
export async function load(page: LoadEvent) {
	const res = await page.fetch(`/api/server/${page.params.ip}`);
	const json: JavaStatusResponse = await res.json();

	return {
		response: json
	};
}

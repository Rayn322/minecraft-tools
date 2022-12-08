import z from 'zod';

export type StatusResponse = z.infer<typeof statusResponse>;

export const statusResponse = z.object({
	version: z.object({
		name: z.string(),
		protocol: z.number()
	}),
	players: z.object({
		online: z.number(),
		max: z.number(),
		sample: z
			.array(
				z.object({
					name: z.string(),
					id: z.string()
				})
			)
			.nullable()
	}),
	motd: z.object({
		raw: z.string(),
		clean: z.string(),
		html: z.string()
	}),
	favicon: z.string().nullable(),
	srvRecord: z
		.object({
			host: z.string(),
			port: z.number()
		})
		.nullable(),
	roundTripLatency: z.number()
});

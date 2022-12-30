import ticketSchema from '../../database/models/tickets.js';
import ticketChannels from '../../database/models/ticketChannels.js';

import { CommandOptions, Context } from '@thereallonewolf/amethystframework';
import { AeonaBot } from '../../extras/index.js';
export default {
	name: 'deleteticket',
	description: 'Delete ticket',
	commandType: ['application', 'message'],
	category: 'tickets',
	args: [],
	userGuildPermissions: ['MANAGE_MESSAGES'],
	async execute(client: AeonaBot, ctx: Context) {
		if (!ctx.guild || !ctx.user || !ctx.channel) return console.log(ctx.guild + ' ' + ctx.channel + ' ' + ctx.user);

		const type = 'reply';

		ticketSchema.findOne({ Guild: ctx.guild!.id }, async (err, data) => {
			if (data) {
				const ticketCategory = await client.helpers.getChannel(data.Category);

				if (ticketCategory == undefined) {
					return client.extras.errNormal(
						{
							error: 'Do the ticket setup!',
							type: type,
						},
						ctx,
					);
				}

				if (ctx.channel!.parentId == ticketCategory.id) {
					client.extras
						.simpleEmbed(
							{
								desc: `Delete this ticket in **5s**`,
								type: type,
							},
							ctx,
						)
						.then((_msg) =>
							setTimeout(async () => {
								await client.helpers.deleteChannel(ctx.channel!.id);
								ticketChannels.findOne(
									{
										Guild: ctx.guild!.id,
										channelID: ctx.channel!.id,
									},
									async (err, data) => {
										if (data) {
											await ticketChannels.deleteOne({
												Guild: ctx.guild!.id,
												channelID: ctx.channel!.id,
											});
										}
									},
								);
							}, 5000),
						);
				} else {
					client.extras.errNormal(
						{
							error: 'This is not a ticket!',
							type: type,
						},
						ctx,
					);
				}
			} else {
				return client.extras.errNormal(
					{
						error: 'Do the ticket setup!',
						type: type,
					},
					ctx,
				);
			}
		});
	},
} as CommandOptions;

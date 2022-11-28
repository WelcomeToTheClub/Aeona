import { AmethystBot, Context } from '@thereallonewolf/amethystframework';
import wrapper from '../../lib/popcat.js';
export default {
	name: 'roast',
	description: 'Roast a user.',
	commandType: ['application', 'message'],
	category: 'fun',
	args: [
		{
			name: 'user',
			description: 'The user',
			required: true,
			type: 'User',
		},
		{
			name: 'user2',
			description: 'The user',
			required: false,
			type: 'User',
		},
	],
	async execute(client: AmethystBot, ctx: Context) {
		if (!ctx.guild || !ctx.user || !ctx.channel) return console.log(ctx.guild + ' ' + ctx.channel + ' ' + ctx.user);
		const user = await ctx.options.getUser('user', true);
		const user2 = (await ctx.options.getUser('user', false)) ?? ctx.user;

		const url = wrapper.ship(
			client.helpers.getAvatarURL(user.id, user.discriminator, { avatar: user.avatar, format: 'png' }),
			client.helpers.getAvatarURL(user2.id, user2.discriminator, { avatar: user.avatar, format: 'png' }),
		);

		client.extras.embed({
			title: `${user.username}x${user2.username}`,
			image: url,
		});
	},
};

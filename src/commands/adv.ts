import { CommandInteraction, SlashCommandBuilder } from "discord.js";
import { rollD6s } from "src/commands/helpers/rollDie";

export const adv = {
  execute: async (interaction: CommandInteraction) => {
    const [low, mid, high] = rollD6s(3);
    interaction.reply(`${mid} + ${high} = ${mid + high} (${low} dropped)`);
  },
  data: new SlashCommandBuilder()
    .setName("adv")
    .setDescription("Get the sum of a 2 dice roll with advantage"),
};

import { CommandInteraction, SlashCommandBuilder } from "discord.js";
import { rollD6s } from "src/commands/helpers/rollDie";

export const dis = {
  execute: async (interaction: CommandInteraction) => {
    const [low, mid, high] = rollD6s(3);
    interaction.reply(`${low} + ${mid} = ${low + mid} (${high} dropped)`);
  },
  data: new SlashCommandBuilder()
    .setName("dis")
    .setDescription("Get the sum of a 2 dice roll with disadvantage"),
};

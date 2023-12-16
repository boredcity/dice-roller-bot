import { CommandInteraction, SlashCommandBuilder } from "discord.js";
import { rollD6s } from "src/commands/helpers/rollDie";

export const r = {
  execute: async (interaction: CommandInteraction) => {
    const [d1, d2] = rollD6s(2);
    interaction.reply(`${d1} + ${d2} = ${d1 + d2}`);
  },
  data: new SlashCommandBuilder()
    .setName("r")
    .setDescription("Get the sum of a 2 dice roll"),
};

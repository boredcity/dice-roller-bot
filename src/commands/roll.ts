import { CommandInteraction, SlashCommandBuilder } from "discord.js";
import { rollD6s } from "src/commands/helpers/rollDie";
import {
  diceCountOptionsBuilder,
} from "src/commands/helpers/diceCountOption";
import { slashCommandsLocalization } from "src/localization/slashCommands";

export const roll = {
  execute: async (interaction: CommandInteraction) => {
    const count = interaction.options.get(slashCommandsLocalization.how_many.optionName.default)?.value;
    if (typeof count == "number") {
      interaction.reply(
        rollD6s(count)
          .sort((a, b) => a - b)
          // .map((num) => diceChars[num]) // increase font size
          .join(" "),
      );
    }
  },
  data: new SlashCommandBuilder()
    .setName("roll")
    .addIntegerOption(diceCountOptionsBuilder)
    .setDescription("Roll N dice"),
};

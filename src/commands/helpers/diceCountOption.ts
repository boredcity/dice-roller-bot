import { Locale, SlashCommandIntegerOption } from "discord.js";
import { slashCommandsLocalization } from "src/localization/slashCommands";
export interface LocalizationWithDefault
  extends Partial<Record<Locale, string>> {
  default: string;
}

export const getIntegerOptionsBuilder =
  ({
    name,
    description,
    minValue,
    maxValue,
    isRequired = false,
  }: {
    name: LocalizationWithDefault;
    description: LocalizationWithDefault;
    minValue?: number;
    maxValue?: number;
    isRequired?: boolean;
  }) =>
  (option: SlashCommandIntegerOption) => {
    const { default: nameValue, ...nameLocalizations } = name;
    const { default: descriptionValue, ...descriptionLocalizations } =
      description;
    let result = option
      .setName(nameValue)
      .setNameLocalizations(nameLocalizations)
      .setDescription(descriptionValue)
      .setDescriptionLocalizations(descriptionLocalizations);

    if (minValue !== undefined) {
      result = result.setMinValue(minValue);
    }
    if (maxValue !== undefined) {
      result = result.setMaxValue(maxValue);
    }
    if (isRequired) {
      result = result.setRequired(true);
    }
    return result;
  };

export const diceCountOptionsBuilder = getIntegerOptionsBuilder({
  name: slashCommandsLocalization.how_many.optionName,
  description: slashCommandsLocalization.how_many.description,
  minValue: 1,
  maxValue: 30,
  isRequired: true,
});

const rollD6 = () => Math.floor(Math.random() * 6) + 1;
/** Returns sorted result of a roll */
export const rollD6s = (n: number) =>
  Array.from({ length: n })
    .map((_) => rollD6())
    .sort((a, b) => a - b);

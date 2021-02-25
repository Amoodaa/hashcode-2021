import { readFileSync } from "fs";

const format = (txt: string): Input => {};

export const read = (filename: string) => {
  const data = readFileSync(filename);
  return format(data.toString());
};

import { writeFileSync, mkdirSync, existsSync } from "fs";
const { join } = require("path");

export const writeSolution = (output) => {
  if (existsSync(join(__dirname, "output"))) mkdirSync("output");

  writeFileSync(
    join(__dirname, "..", "output", `${process.argv[2].split("_")[0]}_out.txt`),
    output,
    { flag: "w" }
  );
};

import { writeSolution } from "./write";
import { read } from "./read";
import { solution } from "./solution";
import { join } from "path";

const input = read(join(__dirname, "..", "input", process.argv[2] + ".txt"));
const output = solution(input);
writeSolution(output);

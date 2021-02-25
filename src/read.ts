import { readFileSync } from "fs";
import { Input, Street } from "./types";

const format = (txt: string): Input => {
  const [firstLine, ...restOfLines] = txt.split("\n");
  const [
    time,
    intersNo,
    streetsNo,
    carsNo,
    bonusForCarsThatReachEnd,
  ] = firstLine.split(" ");
  let i = 0;
  // parse streets
  const streets: Record<string, Street> = {};
  for (i = 0; ; i++) {
    const line = restOfLines[i];
    if (!Number.isInteger(+line[line.length - 1])) break;
    const [startInter, endInter, streetName, streetTime] = line.split(" ");
    streets[streetName] = {
      start: +startInter,
      end: +endInter,
      stName: streetName,
      time: +streetTime,
    };
  }
  // parse cars
  const cars = [];
  for (; i < restOfLines.length; i++) {
    const line = restOfLines[i];
    if (!line) break;
    const [numberOfStreetsCarWillTake, ...streetsToPass] = line.split(" ");
    cars.push({
      streetsNo: +numberOfStreetsCarWillTake,
      path: streetsToPass,
    });
  }

  return {
    time: +time,
    intersNo: +intersNo,
    streetsNo: +streetsNo,
    carsNo: +carsNo,
    bonusForCarsThatReachEnd: +bonusForCarsThatReachEnd,
    cars,
    streets,
  };
};

export const read = (filename: string) => {
  const data = readFileSync(filename);
  console.log(format(data.toString()));
  return format(data.toString());
};

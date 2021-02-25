import { Car, Input, Output, Street } from "./types";

export const solution = ({ time, cars, streets }: Input): Output => {
  // put all cars in their starting position
  cars.forEach((car) => {
    const streetName = car.paths.pop();
    streets[streetName].queue.push(car);
  });

  // populating carsPaths with info

  const simulate = () => {
    console.log(streets);
  };
  let i = 0;
  while (i < time) simulate();
  return "";
};

export type Input = {
  time: number;
  intersNo: number;
  streetsNo: number;
  carsNo: number;
  bonusForCarsThatReachEnd: number;
  streets: Record<string, Street>;
  cars: Car[];
};

export type Output = any;

export type Street = {
  start: number;
  end: number;
  stName: string;
  time: number;
};

export type Car = {
  streetsNo: number;
  path: string[];
};

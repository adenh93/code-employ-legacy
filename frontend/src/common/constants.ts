export const yearlySalary = [
  50000,
  70000,
  90000,
  110000,
  130000,
  150000,
  170000,
  190000
];

export const monthlySalary = yearlySalary.map(
  val => Math.round(val / 12 / 1000) * 1000
);

export const fortnightlySalary = monthlySalary.map(
  val => Math.round(val / 2 / 1000) * 1000
);

export const weeklySalary = monthlySalary.map(
  val => Math.round(val / 4 / 100) * 100
);

export const dailySalary = weeklySalary.map(
  val => Math.round(val / 5 / 50) * 50
);

export const hourlySalary = dailySalary.map(val => Math.round(val / 8 / 5) * 5);

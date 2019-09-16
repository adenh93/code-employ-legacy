export type JobPositionTypes = 1 | 2 | 3 | 4 | 5 | 6;
export type JobListingTypes = 1 | 2 | 3 | 4;
export type SalaryFrequencyTypes = 1 | 2 | 3 | 4 | 5 | 6;
export type NotificationTypes = "success" | "error" | "warning" | "info";

export const JobListingState = {
  DRAFT: 1 as JobPositionTypes,
  PREPUBLISH: 2 as JobPositionTypes,
  PUBLISH: 3 as JobPositionTypes,
  EXPIRED: 4 as JobPositionTypes,
  CLOSED: 5 as JobPositionTypes,
  ARCHIVED: 6 as JobPositionTypes
};

export const JobPositionType = {
  CASUAL: 1 as JobListingTypes,
  CONTRACT: 2 as JobListingTypes,
  PARTTIME: 3 as JobListingTypes,
  FULLTIME: 4 as JobListingTypes
};

export const SalaryFrequencyType = {
  PERHOUR: 1 as SalaryFrequencyTypes,
  PERDAY: 2 as SalaryFrequencyTypes,
  PERWEEK: 3 as SalaryFrequencyTypes,
  PERFORTNIGHT: 4 as SalaryFrequencyTypes,
  PERMONTH: 5 as SalaryFrequencyTypes,
  PERYEAR: 6 as SalaryFrequencyTypes
};

export const NotificationType = {
  SUCCESS: "success" as NotificationTypes,
  ERROR: "error" as NotificationTypes,
  WARNING: "warning" as NotificationTypes,
  INFO: "info" as NotificationTypes
};

export const EnumLabelDictionary = {
  DRAFT: "Draft",
  PREPUBLISH: "Queued for publish",
  PUBLISHED: "Published",
  EXPIRED: "Published",
  CLOSED: "Expired",
  ARCHIVED: "Archived",

  CASUAL: "Casual",
  CONTRACT: "Contract",
  PARTTIME: "Part-time",
  FULLTIME: "Full-time",

  PERHOUR: "Per-hour",
  PERDAY: "Per-day",
  PERWEEK: "Per-week",
  PERFORTNIGHT: "Per-fortnight",
  PERMONTH: "Per-month",
  PERYEAR: "Per-year",
  get: function(type: any, value: any) {
    return this[Object.keys(type).find(key => type[key] === value)];
  }
};

export const GetEnumList = (type: any) => {
  return Object.keys(type).map(k => type[k]);
};

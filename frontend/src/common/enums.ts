export type JobListingStateTypes =
  | "DRAFT"
  | "PREPUBLISH"
  | "PUBLISH"
  | "EXPIRED"
  | "CLOSED"
  | "ARCHIVED";

export type JobListingTypes = "CASUAL" | "CONTRACT" | "PARTTIME" | "FULLTIME";

export type SalaryFrequencyTypes =
  | "PERHOUR"
  | "PERDAY"
  | "PERWEEK"
  | "PERFORTNIGHT"
  | "PERMONTH"
  | "PERYEAR";

export const JobListingState = {
  DRAFT: "DRAFT" as JobListingStateTypes,
  PREPUBLISH: "PREPUBLISH" as JobListingStateTypes,
  PUBLISH: "PUBLISH" as JobListingStateTypes,
  EXPIRED: "EXPIRED" as JobListingStateTypes,
  CLOSED: "CLOSED" as JobListingStateTypes,
  ARCHIVED: "ARCHIVED" as JobListingStateTypes
};

export const JobListingType = {
  CASUAL: "CASUAL" as JobListingTypes,
  CONTRACT: "CONTRACT" as JobListingTypes,
  PARTTIME: "PARTTIME" as JobListingTypes,
  FULLTIME: "FULLTIME" as JobListingTypes
};

export const SalaryFrequencyTypes = {
  PERHOUR: "PERHOUR" as SalaryFrequencyTypes,
  PERDAY: "PERDAY" as SalaryFrequencyTypes,
  PERWEEK: "PERWEEK" as SalaryFrequencyTypes,
  PERFORTNIGHT: "PERFORTNIGHT" as SalaryFrequencyTypes,
  PERMONTH: "PERMONTH" as SalaryFrequencyTypes,
  PERYEAR: "PERYEAR" as SalaryFrequencyTypes
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
  get: function(type: any, key: any) {
    return this[type + key];
  }
};

import {
  LOAD_LOOKUP_CODES,
  LOAD_LOOKUP_CODES_SUCCESS,
  LookupCodeActionTypes
} from "./types";
import { LookupCodeList } from "../../common/types";

export const loadLookupCodesSuccess = (
  lookupCodes: LookupCodeList
): LookupCodeActionTypes => {
  return {
    type: LOAD_LOOKUP_CODES_SUCCESS,
    lookupCodes
  };
};

export const loadLookupCodes = (): LookupCodeActionTypes => {
  return {
    type: LOAD_LOOKUP_CODES
  };
};

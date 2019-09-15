import { LookupCodeList } from "../../common/types";

export const LOAD_LOOKUP_CODES = "LOAD_LOOKUP_CODES";
export const LOAD_LOOKUP_CODES_SUCCESS = "LOAD_LOOKUP_CODES_SUCCESS";

export interface LookupCodesState {
  lookupCodes: LookupCodeList;
}

export interface LoadLookupCodesAction {
  type: typeof LOAD_LOOKUP_CODES;
}

export interface LoadLookupCodesSuccessAction {
  type: typeof LOAD_LOOKUP_CODES_SUCCESS;
  lookupCodes: LookupCodeList;
}

export type LookupCodeActionTypes =
  | LoadLookupCodesAction
  | LoadLookupCodesSuccessAction;

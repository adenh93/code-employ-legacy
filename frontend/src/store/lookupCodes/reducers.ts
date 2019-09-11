import {
  LookupCodeActionTypes,
  LookupCodesState,
  LOAD_LOOKUP_CODES_SUCCESS
} from "./types";

const initialState: LookupCodesState = {
  lookupCodes: {
    programmingLanguages: [],
    countries: []
  }
};

export default function lookupCodesReducer(
  state: LookupCodesState = initialState,
  action: LookupCodeActionTypes
): LookupCodesState {
  switch (action.type) {
    case LOAD_LOOKUP_CODES_SUCCESS:
      return {
        lookupCodes: action.lookupCodes
      };
    default:
      return state;
  }
}

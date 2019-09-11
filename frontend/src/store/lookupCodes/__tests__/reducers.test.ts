import lookupCodesReducer from "../reducers";
import * as actions from "../actions";
import { LookupCodeList, LocationCountryCode } from "../../../common/types";
import { LookupCodesState } from "../types";

it("should return a list of lookup codes when passed LOAD_LOOKUP_CODES_SUCCESS", () => {
  const initialState: LookupCodesState = {
    lookupCodes: {
      programmingLanguages: [],
      countries: []
    }
  };

  const lookupCodes: LookupCodeList = {
    programmingLanguages: [{ id: 1, name: "A" }],
    countries: <LocationCountryCode[]>[{ name: "B" }]
  };

  const action = actions.loadLookupCodesSuccess(lookupCodes);
  const newState = lookupCodesReducer(initialState, action);

  expect(newState.lookupCodes.programmingLanguages.length).toEqual(1);
  expect(newState.lookupCodes.programmingLanguages[0].name).toEqual("A");
  expect(newState.lookupCodes.countries.length).toEqual(1);
  expect(newState.lookupCodes.countries[0].name).toEqual("B");
});

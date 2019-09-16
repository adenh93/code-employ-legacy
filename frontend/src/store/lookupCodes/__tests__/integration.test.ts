import { createStore } from "redux";
import { rootReducer } from "../..";
import * as actions from "../actions";
import {
  LookupCodeList,
  ProgrammingLanguage,
  LocationCountryCode
} from "../../../common/types";

it("should handle loading lookup codes", () => {
  const store = createStore(rootReducer);
  const lookupCodes: LookupCodeList = {
    programmingLanguages: <ProgrammingLanguage[]>[{ name: "A" }],
    countries: <LocationCountryCode[]>[{ name: "A" }]
  };

  const action = actions.loadLookupCodesSuccess(lookupCodes);
  store.dispatch(action);

  const newState = store.getState().lookupCodes.lookupCodes;
  expect(newState).toEqual(lookupCodes);
});

import * as jobListingFilterSagas from "./jobListingFilter/sagas";
import * as jobListingSagas from "./jobListings/sagas";
import * as lookupCodeSagas from "./lookupCodes/sagas";
import { SagaMiddleware } from "@redux-saga/core";

const sagas = {
  ...jobListingFilterSagas,
  ...jobListingSagas,
  ...lookupCodeSagas
};

export const initSagas = (sagaMiddleware: SagaMiddleware) => {
  Object.values(sagas).forEach(sagaMiddleware.run.bind(sagaMiddleware));
};

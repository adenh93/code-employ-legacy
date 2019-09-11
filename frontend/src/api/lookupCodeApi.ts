import { getApi } from "./apiUtils";
import { LookupCodeList } from "../common/types";

const baseUrl = process.env.API_URL + "/common/codes";

export async function getLookupCodes(): Promise<LookupCodeList> {
  return await getApi<LookupCodeList>(`${baseUrl}/all`).catch(error => {
    throw error;
  });
}

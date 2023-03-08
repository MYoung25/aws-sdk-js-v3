// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListPlaceIndexesCommand,
  ListPlaceIndexesCommandInput,
  ListPlaceIndexesCommandOutput,
} from "../commands/ListPlaceIndexesCommand";
import { LocationClient } from "../LocationClient";
import { LocationPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: LocationClient,
  input: ListPlaceIndexesCommandInput,
  ...args: any
): Promise<ListPlaceIndexesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPlaceIndexesCommand(input), ...args);
};
export async function* paginateListPlaceIndexes(
  config: LocationPaginationConfiguration,
  input: ListPlaceIndexesCommandInput,
  ...additionalArguments: any
): Paginator<ListPlaceIndexesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListPlaceIndexesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof LocationClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Location | LocationClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}

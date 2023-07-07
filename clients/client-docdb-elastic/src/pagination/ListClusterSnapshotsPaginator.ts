// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListClusterSnapshotsCommand,
  ListClusterSnapshotsCommandInput,
  ListClusterSnapshotsCommandOutput,
} from "../commands/ListClusterSnapshotsCommand";
import { DocDBElasticClient } from "../DocDBElasticClient";
import { DocDBElasticPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: DocDBElasticClient,
  input: ListClusterSnapshotsCommandInput,
  ...args: any
): Promise<ListClusterSnapshotsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListClusterSnapshotsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListClusterSnapshots(
  config: DocDBElasticPaginationConfiguration,
  input: ListClusterSnapshotsCommandInput,
  ...additionalArguments: any
): Paginator<ListClusterSnapshotsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListClusterSnapshotsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof DocDBElasticClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected DocDBElastic | DocDBElasticClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}

// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { CodeCatalystClient } from "../CodeCatalystClient";
import {
  ListProjectsCommand,
  ListProjectsCommandInput,
  ListProjectsCommandOutput,
} from "../commands/ListProjectsCommand";
import { CodeCatalystPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: CodeCatalystClient,
  input: ListProjectsCommandInput,
  ...args: any
): Promise<ListProjectsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListProjectsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListProjects(
  config: CodeCatalystPaginationConfiguration,
  input: ListProjectsCommandInput,
  ...additionalArguments: any
): Paginator<ListProjectsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListProjectsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof CodeCatalystClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CodeCatalyst | CodeCatalystClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}

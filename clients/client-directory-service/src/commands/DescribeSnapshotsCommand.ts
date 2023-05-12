// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { DescribeSnapshotsRequest, DescribeSnapshotsResult } from "../models/models_0";
import { de_DescribeSnapshotsCommand, se_DescribeSnapshotsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link DescribeSnapshotsCommand}.
 */
export interface DescribeSnapshotsCommandInput extends DescribeSnapshotsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSnapshotsCommand}.
 */
export interface DescribeSnapshotsCommandOutput extends DescribeSnapshotsResult, __MetadataBearer {}

/**
 * @public
 * <p>Obtains information about the directory snapshots that belong to this account.</p>
 *          <p>This operation supports pagination with the use of the <i>NextToken</i> request and
 *          response parameters. If more results are available, the <i>DescribeSnapshots.NextToken</i>
 *          member contains a token that you pass in the next call to <a>DescribeSnapshots</a> to
 *          retrieve the next set of items.</p>
 *          <p>You can also specify a maximum number of return results with the <i>Limit</i>
 *          parameter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, DescribeSnapshotsCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, DescribeSnapshotsCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const input = { // DescribeSnapshotsRequest
 *   DirectoryId: "STRING_VALUE",
 *   SnapshotIds: [ // SnapshotIds
 *     "STRING_VALUE",
 *   ],
 *   NextToken: "STRING_VALUE",
 *   Limit: Number("int"),
 * };
 * const command = new DescribeSnapshotsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSnapshotsResult
 * //   Snapshots: [ // Snapshots
 * //     { // Snapshot
 * //       DirectoryId: "STRING_VALUE",
 * //       SnapshotId: "STRING_VALUE",
 * //       Type: "Auto" || "Manual",
 * //       Name: "STRING_VALUE",
 * //       Status: "Creating" || "Completed" || "Failed",
 * //       StartTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeSnapshotsRequest - {@link DescribeSnapshotsRequest}
 * @returns {@link DescribeSnapshotsResult}
 * @see {@link DescribeSnapshotsCommandInput} for command's `input` shape.
 * @see {@link DescribeSnapshotsCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for DirectoryServiceClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>A client exception has occurred.</p>
 *
 * @throws {@link EntityDoesNotExistException} (client fault)
 *  <p>The specified entity could not be found.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The <code>NextToken</code> value is not valid.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>An exception has occurred in Directory Service.</p>
 *
 * @throws {@link DirectoryServiceServiceException}
 * <p>Base exception class for all service exceptions from DirectoryService service.</p>
 *
 */
export class DescribeSnapshotsCommand extends $Command<
  DescribeSnapshotsCommandInput,
  DescribeSnapshotsCommandOutput,
  DirectoryServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: DescribeSnapshotsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DirectoryServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeSnapshotsCommandInput, DescribeSnapshotsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeSnapshotsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectoryServiceClient";
    const commandName = "DescribeSnapshotsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: DescribeSnapshotsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeSnapshotsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeSnapshotsCommandOutput> {
    return de_DescribeSnapshotsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

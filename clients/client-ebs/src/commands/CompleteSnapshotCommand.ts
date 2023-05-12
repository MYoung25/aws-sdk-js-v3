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

import { EBSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EBSClient";
import { CompleteSnapshotRequest, CompleteSnapshotResponse } from "../models/models_0";
import { de_CompleteSnapshotCommand, se_CompleteSnapshotCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link CompleteSnapshotCommand}.
 */
export interface CompleteSnapshotCommandInput extends CompleteSnapshotRequest {}
/**
 * @public
 *
 * The output of {@link CompleteSnapshotCommand}.
 */
export interface CompleteSnapshotCommandOutput extends CompleteSnapshotResponse, __MetadataBearer {}

/**
 * @public
 * <p>Seals and completes the snapshot after all of the required blocks of data have been
 *             written to it. Completing the snapshot changes the status to <code>completed</code>. You
 *             cannot write new blocks to a snapshot after it has been completed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EBSClient, CompleteSnapshotCommand } from "@aws-sdk/client-ebs"; // ES Modules import
 * // const { EBSClient, CompleteSnapshotCommand } = require("@aws-sdk/client-ebs"); // CommonJS import
 * const client = new EBSClient(config);
 * const input = { // CompleteSnapshotRequest
 *   SnapshotId: "STRING_VALUE", // required
 *   ChangedBlocksCount: Number("int"), // required
 *   Checksum: "STRING_VALUE",
 *   ChecksumAlgorithm: "STRING_VALUE",
 *   ChecksumAggregationMethod: "STRING_VALUE",
 * };
 * const command = new CompleteSnapshotCommand(input);
 * const response = await client.send(command);
 * // { // CompleteSnapshotResponse
 * //   Status: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CompleteSnapshotRequest - {@link CompleteSnapshotRequest}
 * @returns {@link CompleteSnapshotResponse}
 * @see {@link CompleteSnapshotCommandInput} for command's `input` shape.
 * @see {@link CompleteSnapshotCommandOutput} for command's `response` shape.
 * @see {@link EBSClientResolvedConfig | config} for EBSClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error has occurred.</p>
 *
 * @throws {@link RequestThrottledException} (client fault)
 *  <p>The number of API requests has exceed the maximum allowed API request throttling
 *             limit.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Your current service quotas do not allow you to perform this action.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints of the EBS direct APIs.</p>
 *
 * @throws {@link EBSServiceException}
 * <p>Base exception class for all service exceptions from EBS service.</p>
 *
 */
export class CompleteSnapshotCommand extends $Command<
  CompleteSnapshotCommandInput,
  CompleteSnapshotCommandOutput,
  EBSClientResolvedConfig
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
  constructor(readonly input: CompleteSnapshotCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EBSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CompleteSnapshotCommandInput, CompleteSnapshotCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CompleteSnapshotCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EBSClient";
    const commandName = "CompleteSnapshotCommand";
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
  private serialize(input: CompleteSnapshotCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CompleteSnapshotCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CompleteSnapshotCommandOutput> {
    return de_CompleteSnapshotCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

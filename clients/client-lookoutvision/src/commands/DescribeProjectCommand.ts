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

import { LookoutVisionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutVisionClient";
import { DescribeProjectRequest, DescribeProjectResponse } from "../models/models_0";
import { de_DescribeProjectCommand, se_DescribeProjectCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link DescribeProjectCommand}.
 */
export interface DescribeProjectCommandInput extends DescribeProjectRequest {}
/**
 * @public
 *
 * The output of {@link DescribeProjectCommand}.
 */
export interface DescribeProjectCommandOutput extends DescribeProjectResponse, __MetadataBearer {}

/**
 * @public
 * <p>Describes an Amazon Lookout for Vision project.</p>
 *          <p>This operation requires permissions to perform the
 *          <code>lookoutvision:DescribeProject</code> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutVisionClient, DescribeProjectCommand } from "@aws-sdk/client-lookoutvision"; // ES Modules import
 * // const { LookoutVisionClient, DescribeProjectCommand } = require("@aws-sdk/client-lookoutvision"); // CommonJS import
 * const client = new LookoutVisionClient(config);
 * const input = { // DescribeProjectRequest
 *   ProjectName: "STRING_VALUE", // required
 * };
 * const command = new DescribeProjectCommand(input);
 * const response = await client.send(command);
 * // { // DescribeProjectResponse
 * //   ProjectDescription: { // ProjectDescription
 * //     ProjectArn: "STRING_VALUE",
 * //     ProjectName: "STRING_VALUE",
 * //     CreationTimestamp: new Date("TIMESTAMP"),
 * //     Datasets: [ // DatasetMetadataList
 * //       { // DatasetMetadata
 * //         DatasetType: "STRING_VALUE",
 * //         CreationTimestamp: new Date("TIMESTAMP"),
 * //         Status: "CREATE_IN_PROGRESS" || "CREATE_COMPLETE" || "CREATE_FAILED" || "UPDATE_IN_PROGRESS" || "UPDATE_COMPLETE" || "UPDATE_FAILED_ROLLBACK_IN_PROGRESS" || "UPDATE_FAILED_ROLLBACK_COMPLETE" || "DELETE_IN_PROGRESS" || "DELETE_COMPLETE" || "DELETE_FAILED",
 * //         StatusMessage: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeProjectRequest - {@link DescribeProjectRequest}
 * @returns {@link DescribeProjectResponse}
 * @see {@link DescribeProjectCommandInput} for command's `input` shape.
 * @see {@link DescribeProjectCommandOutput} for command's `response` shape.
 * @see {@link LookoutVisionClientResolvedConfig | config} for LookoutVisionClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to perform the action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The update or deletion of a resource caused an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Amazon Lookout for Vision experienced a service issue. Try your call again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Amazon Lookout for Vision is temporarily unable to process the request. Try your call again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An input validation error occured. For example, invalid characters in a project name,
 *       or if a pagination token is invalid.</p>
 *
 * @throws {@link LookoutVisionServiceException}
 * <p>Base exception class for all service exceptions from LookoutVision service.</p>
 *
 */
export class DescribeProjectCommand extends $Command<
  DescribeProjectCommandInput,
  DescribeProjectCommandOutput,
  LookoutVisionClientResolvedConfig
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
  constructor(readonly input: DescribeProjectCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LookoutVisionClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeProjectCommandInput, DescribeProjectCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeProjectCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LookoutVisionClient";
    const commandName = "DescribeProjectCommand";
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
  private serialize(input: DescribeProjectCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeProjectCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeProjectCommandOutput> {
    return de_DescribeProjectCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

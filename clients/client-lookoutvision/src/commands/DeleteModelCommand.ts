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
import {
  DeleteModelRequest,
  DeleteModelRequestFilterSensitiveLog,
  DeleteModelResponse,
  DeleteModelResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DeleteModelCommand,
  serializeAws_restJson1DeleteModelCommand,
} from "../protocols/Aws_restJson1";

/**
 * The input for {@link DeleteModelCommand}.
 */
export interface DeleteModelCommandInput extends DeleteModelRequest {}
/**
 * The output of {@link DeleteModelCommand}.
 */
export interface DeleteModelCommandOutput extends DeleteModelResponse, __MetadataBearer {}

/**
 * <p>Deletes an Amazon Lookout for Vision model. You can't delete a running model. To stop a running model,
 *       use the <a>StopModel</a> operation.</p>
 *          <p>It might take a few seconds to delete a model. To determine if a model has been deleted, call
 *          <a>ListModels</a> and check if the version of the model (<code>ModelVersion</code>) is in the
 *          <code>Models</code> array. </p>
 *          <p></p>
 *          <p>This operation requires permissions to perform the
 *          <code>lookoutvision:DeleteModel</code> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutVisionClient, DeleteModelCommand } from "@aws-sdk/client-lookoutvision"; // ES Modules import
 * // const { LookoutVisionClient, DeleteModelCommand } = require("@aws-sdk/client-lookoutvision"); // CommonJS import
 * const client = new LookoutVisionClient(config);
 * const command = new DeleteModelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteModelCommandInput} for command's `input` shape.
 * @see {@link DeleteModelCommandOutput} for command's `response` shape.
 * @see {@link LookoutVisionClientResolvedConfig | config} for LookoutVisionClient's `config` shape.
 *
 */
export class DeleteModelCommand extends $Command<
  DeleteModelCommandInput,
  DeleteModelCommandOutput,
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

  constructor(readonly input: DeleteModelCommandInput) {
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
  ): Handler<DeleteModelCommandInput, DeleteModelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DeleteModelCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LookoutVisionClient";
    const commandName = "DeleteModelCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteModelRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteModelResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteModelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteModelCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteModelCommandOutput> {
    return deserializeAws_restJson1DeleteModelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

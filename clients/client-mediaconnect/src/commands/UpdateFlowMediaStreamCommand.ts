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

import { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient";
import {
  UpdateFlowMediaStreamRequest,
  UpdateFlowMediaStreamRequestFilterSensitiveLog,
  UpdateFlowMediaStreamResponse,
  UpdateFlowMediaStreamResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1UpdateFlowMediaStreamCommand,
  serializeAws_restJson1UpdateFlowMediaStreamCommand,
} from "../protocols/Aws_restJson1";

/**
 * The input for {@link UpdateFlowMediaStreamCommand}.
 */
export interface UpdateFlowMediaStreamCommandInput extends UpdateFlowMediaStreamRequest {}
/**
 * The output of {@link UpdateFlowMediaStreamCommand}.
 */
export interface UpdateFlowMediaStreamCommandOutput extends UpdateFlowMediaStreamResponse, __MetadataBearer {}

/**
 * Updates an existing media stream.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, UpdateFlowMediaStreamCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, UpdateFlowMediaStreamCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * const client = new MediaConnectClient(config);
 * const command = new UpdateFlowMediaStreamCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateFlowMediaStreamCommandInput} for command's `input` shape.
 * @see {@link UpdateFlowMediaStreamCommandOutput} for command's `response` shape.
 * @see {@link MediaConnectClientResolvedConfig | config} for MediaConnectClient's `config` shape.
 *
 */
export class UpdateFlowMediaStreamCommand extends $Command<
  UpdateFlowMediaStreamCommandInput,
  UpdateFlowMediaStreamCommandOutput,
  MediaConnectClientResolvedConfig
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

  constructor(readonly input: UpdateFlowMediaStreamCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateFlowMediaStreamCommandInput, UpdateFlowMediaStreamCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateFlowMediaStreamCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaConnectClient";
    const commandName = "UpdateFlowMediaStreamCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateFlowMediaStreamRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateFlowMediaStreamResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateFlowMediaStreamCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateFlowMediaStreamCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateFlowMediaStreamCommandOutput> {
    return deserializeAws_restJson1UpdateFlowMediaStreamCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

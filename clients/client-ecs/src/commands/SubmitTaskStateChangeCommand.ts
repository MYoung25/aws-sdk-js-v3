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

import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import {
  SubmitTaskStateChangeRequest,
  SubmitTaskStateChangeRequestFilterSensitiveLog,
  SubmitTaskStateChangeResponse,
  SubmitTaskStateChangeResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1SubmitTaskStateChangeCommand,
  serializeAws_json1_1SubmitTaskStateChangeCommand,
} from "../protocols/Aws_json1_1";

/**
 * The input for {@link SubmitTaskStateChangeCommand}.
 */
export interface SubmitTaskStateChangeCommandInput extends SubmitTaskStateChangeRequest {}
/**
 * The output of {@link SubmitTaskStateChangeCommand}.
 */
export interface SubmitTaskStateChangeCommandOutput extends SubmitTaskStateChangeResponse, __MetadataBearer {}

/**
 * <note>
 *             <p>This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent.</p>
 *          </note>
 *          <p>Sent to acknowledge that a task changed states.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, SubmitTaskStateChangeCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, SubmitTaskStateChangeCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new SubmitTaskStateChangeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SubmitTaskStateChangeCommandInput} for command's `input` shape.
 * @see {@link SubmitTaskStateChangeCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for ECSClient's `config` shape.
 *
 */
export class SubmitTaskStateChangeCommand extends $Command<
  SubmitTaskStateChangeCommandInput,
  SubmitTaskStateChangeCommandOutput,
  ECSClientResolvedConfig
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

  constructor(readonly input: SubmitTaskStateChangeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ECSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SubmitTaskStateChangeCommandInput, SubmitTaskStateChangeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SubmitTaskStateChangeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECSClient";
    const commandName = "SubmitTaskStateChangeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SubmitTaskStateChangeRequestFilterSensitiveLog,
      outputFilterSensitiveLog: SubmitTaskStateChangeResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SubmitTaskStateChangeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1SubmitTaskStateChangeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SubmitTaskStateChangeCommandOutput> {
    return deserializeAws_json1_1SubmitTaskStateChangeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

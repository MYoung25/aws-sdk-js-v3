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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  RegisterInstanceEventNotificationAttributesRequest,
  RegisterInstanceEventNotificationAttributesRequestFilterSensitiveLog,
  RegisterInstanceEventNotificationAttributesResult,
  RegisterInstanceEventNotificationAttributesResultFilterSensitiveLog,
} from "../models/models_6";
import {
  deserializeAws_ec2RegisterInstanceEventNotificationAttributesCommand,
  serializeAws_ec2RegisterInstanceEventNotificationAttributesCommand,
} from "../protocols/Aws_ec2";

/**
 * The input for {@link RegisterInstanceEventNotificationAttributesCommand}.
 */
export interface RegisterInstanceEventNotificationAttributesCommandInput
  extends RegisterInstanceEventNotificationAttributesRequest {}
/**
 * The output of {@link RegisterInstanceEventNotificationAttributesCommand}.
 */
export interface RegisterInstanceEventNotificationAttributesCommandOutput
  extends RegisterInstanceEventNotificationAttributesResult,
    __MetadataBearer {}

/**
 * <p>Registers a set of tag keys to include in scheduled event notifications for your resources.
 *    		</p>
 *          <p>To remove tags, use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeregisterInstanceEventNotificationAttributes.html">DeregisterInstanceEventNotificationAttributes</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, RegisterInstanceEventNotificationAttributesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, RegisterInstanceEventNotificationAttributesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new RegisterInstanceEventNotificationAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterInstanceEventNotificationAttributesCommandInput} for command's `input` shape.
 * @see {@link RegisterInstanceEventNotificationAttributesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class RegisterInstanceEventNotificationAttributesCommand extends $Command<
  RegisterInstanceEventNotificationAttributesCommandInput,
  RegisterInstanceEventNotificationAttributesCommandOutput,
  EC2ClientResolvedConfig
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

  constructor(readonly input: RegisterInstanceEventNotificationAttributesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    RegisterInstanceEventNotificationAttributesCommandInput,
    RegisterInstanceEventNotificationAttributesCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        RegisterInstanceEventNotificationAttributesCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "RegisterInstanceEventNotificationAttributesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RegisterInstanceEventNotificationAttributesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: RegisterInstanceEventNotificationAttributesResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: RegisterInstanceEventNotificationAttributesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2RegisterInstanceEventNotificationAttributesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RegisterInstanceEventNotificationAttributesCommandOutput> {
    return deserializeAws_ec2RegisterInstanceEventNotificationAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

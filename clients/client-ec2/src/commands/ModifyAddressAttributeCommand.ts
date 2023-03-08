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
import { ModifyAddressAttributeRequest, ModifyAddressAttributeRequestFilterSensitiveLog } from "../models/models_5";
import { ModifyAddressAttributeResult, ModifyAddressAttributeResultFilterSensitiveLog } from "../models/models_6";
import {
  deserializeAws_ec2ModifyAddressAttributeCommand,
  serializeAws_ec2ModifyAddressAttributeCommand,
} from "../protocols/Aws_ec2";

/**
 * The input for {@link ModifyAddressAttributeCommand}.
 */
export interface ModifyAddressAttributeCommandInput extends ModifyAddressAttributeRequest {}
/**
 * The output of {@link ModifyAddressAttributeCommand}.
 */
export interface ModifyAddressAttributeCommandOutput extends ModifyAddressAttributeResult, __MetadataBearer {}

/**
 * <p>Modifies an attribute of the specified Elastic IP address. For requirements, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html#Using_Elastic_Addressing_Reverse_DNS">Using reverse DNS for email applications</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyAddressAttributeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyAddressAttributeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifyAddressAttributeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyAddressAttributeCommandInput} for command's `input` shape.
 * @see {@link ModifyAddressAttributeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class ModifyAddressAttributeCommand extends $Command<
  ModifyAddressAttributeCommandInput,
  ModifyAddressAttributeCommandOutput,
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

  constructor(readonly input: ModifyAddressAttributeCommandInput) {
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
  ): Handler<ModifyAddressAttributeCommandInput, ModifyAddressAttributeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyAddressAttributeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ModifyAddressAttributeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyAddressAttributeRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ModifyAddressAttributeResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ModifyAddressAttributeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2ModifyAddressAttributeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyAddressAttributeCommandOutput> {
    return deserializeAws_ec2ModifyAddressAttributeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

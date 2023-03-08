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

import { InternetMonitorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InternetMonitorClient";
import {
  GetHealthEventInput,
  GetHealthEventInputFilterSensitiveLog,
  GetHealthEventOutput,
  GetHealthEventOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetHealthEventCommand,
  serializeAws_restJson1GetHealthEventCommand,
} from "../protocols/Aws_restJson1";

/**
 * The input for {@link GetHealthEventCommand}.
 */
export interface GetHealthEventCommandInput extends GetHealthEventInput {}
/**
 * The output of {@link GetHealthEventCommand}.
 */
export interface GetHealthEventCommandOutput extends GetHealthEventOutput, __MetadataBearer {}

/**
 * <p>Gets information the Amazon CloudWatch Internet Monitor has created and stored about a health event for a specified monitor. This information includes the impacted locations,
 * 			and all of the information related to the event by location.</p>
 *          <p>The information returned includes the performance, availability, and round-trip time impact, information about the network providers, the event type,
 * 			and so on.</p>
 *          <p>Information rolled up at the global traffic level is also returned, including the impact type and total traffic impact.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InternetMonitorClient, GetHealthEventCommand } from "@aws-sdk/client-internetmonitor"; // ES Modules import
 * // const { InternetMonitorClient, GetHealthEventCommand } = require("@aws-sdk/client-internetmonitor"); // CommonJS import
 * const client = new InternetMonitorClient(config);
 * const command = new GetHealthEventCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetHealthEventCommandInput} for command's `input` shape.
 * @see {@link GetHealthEventCommandOutput} for command's `response` shape.
 * @see {@link InternetMonitorClientResolvedConfig | config} for InternetMonitorClient's `config` shape.
 *
 */
export class GetHealthEventCommand extends $Command<
  GetHealthEventCommandInput,
  GetHealthEventCommandOutput,
  InternetMonitorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
    };
  }

  constructor(readonly input: GetHealthEventCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: InternetMonitorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetHealthEventCommandInput, GetHealthEventCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetHealthEventCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "InternetMonitorClient";
    const commandName = "GetHealthEventCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetHealthEventInputFilterSensitiveLog,
      outputFilterSensitiveLog: GetHealthEventOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetHealthEventCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetHealthEventCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetHealthEventCommandOutput> {
    return deserializeAws_restJson1GetHealthEventCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

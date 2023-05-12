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

import {
  DescribeEmailMonitoringConfigurationRequest,
  DescribeEmailMonitoringConfigurationResponse,
} from "../models/models_0";
import {
  de_DescribeEmailMonitoringConfigurationCommand,
  se_DescribeEmailMonitoringConfigurationCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";

/**
 * @public
 *
 * The input for {@link DescribeEmailMonitoringConfigurationCommand}.
 */
export interface DescribeEmailMonitoringConfigurationCommandInput extends DescribeEmailMonitoringConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeEmailMonitoringConfigurationCommand}.
 */
export interface DescribeEmailMonitoringConfigurationCommandOutput
  extends DescribeEmailMonitoringConfigurationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Describes the current email monitoring configuration for a specified organization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, DescribeEmailMonitoringConfigurationCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, DescribeEmailMonitoringConfigurationCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const input = { // DescribeEmailMonitoringConfigurationRequest
 *   OrganizationId: "STRING_VALUE", // required
 * };
 * const command = new DescribeEmailMonitoringConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeEmailMonitoringConfigurationResponse
 * //   RoleArn: "STRING_VALUE",
 * //   LogGroupArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeEmailMonitoringConfigurationRequest - {@link DescribeEmailMonitoringConfigurationRequest}
 * @returns {@link DescribeEmailMonitoringConfigurationResponse}
 * @see {@link DescribeEmailMonitoringConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeEmailMonitoringConfigurationCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for WorkMailClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link OrganizationNotFoundException} (client fault)
 *  <p>An operation received a valid organization identifier that either doesn't belong or
 *          exist in the system.</p>
 *
 * @throws {@link OrganizationStateException} (client fault)
 *  <p>The organization must have a valid state to perform certain
 *          operations on the organization or its members.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource cannot be found.</p>
 *
 * @throws {@link WorkMailServiceException}
 * <p>Base exception class for all service exceptions from WorkMail service.</p>
 *
 */
export class DescribeEmailMonitoringConfigurationCommand extends $Command<
  DescribeEmailMonitoringConfigurationCommandInput,
  DescribeEmailMonitoringConfigurationCommandOutput,
  WorkMailClientResolvedConfig
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
  constructor(readonly input: DescribeEmailMonitoringConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkMailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeEmailMonitoringConfigurationCommandInput, DescribeEmailMonitoringConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeEmailMonitoringConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkMailClient";
    const commandName = "DescribeEmailMonitoringConfigurationCommand";
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
  private serialize(
    input: DescribeEmailMonitoringConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeEmailMonitoringConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeEmailMonitoringConfigurationCommandOutput> {
    return de_DescribeEmailMonitoringConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

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
  CreateDatalakeExceptionsSubscriptionRequest,
  CreateDatalakeExceptionsSubscriptionRequestFilterSensitiveLog,
  CreateDatalakeExceptionsSubscriptionResponse,
  CreateDatalakeExceptionsSubscriptionResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateDatalakeExceptionsSubscriptionCommand,
  serializeAws_restJson1CreateDatalakeExceptionsSubscriptionCommand,
} from "../protocols/Aws_restJson1";
import { SecurityLakeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityLakeClient";

export interface CreateDatalakeExceptionsSubscriptionCommandInput extends CreateDatalakeExceptionsSubscriptionRequest {}
export interface CreateDatalakeExceptionsSubscriptionCommandOutput
  extends CreateDatalakeExceptionsSubscriptionResponse,
    __MetadataBearer {}

/**
 * <p>Creates the specified notification subscription in Security Lake. Creates the specified
 *          subscription notifications in the specified organization. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityLakeClient, CreateDatalakeExceptionsSubscriptionCommand } from "@aws-sdk/client-securitylake"; // ES Modules import
 * // const { SecurityLakeClient, CreateDatalakeExceptionsSubscriptionCommand } = require("@aws-sdk/client-securitylake"); // CommonJS import
 * const client = new SecurityLakeClient(config);
 * const command = new CreateDatalakeExceptionsSubscriptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDatalakeExceptionsSubscriptionCommandInput} for command's `input` shape.
 * @see {@link CreateDatalakeExceptionsSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link SecurityLakeClientResolvedConfig | config} for SecurityLakeClient's `config` shape.
 *
 */
export class CreateDatalakeExceptionsSubscriptionCommand extends $Command<
  CreateDatalakeExceptionsSubscriptionCommandInput,
  CreateDatalakeExceptionsSubscriptionCommandOutput,
  SecurityLakeClientResolvedConfig
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

  constructor(readonly input: CreateDatalakeExceptionsSubscriptionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SecurityLakeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateDatalakeExceptionsSubscriptionCommandInput, CreateDatalakeExceptionsSubscriptionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateDatalakeExceptionsSubscriptionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityLakeClient";
    const commandName = "CreateDatalakeExceptionsSubscriptionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateDatalakeExceptionsSubscriptionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateDatalakeExceptionsSubscriptionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CreateDatalakeExceptionsSubscriptionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateDatalakeExceptionsSubscriptionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateDatalakeExceptionsSubscriptionCommandOutput> {
    return deserializeAws_restJson1CreateDatalakeExceptionsSubscriptionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

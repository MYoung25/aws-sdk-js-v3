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
  LexModelBuildingServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LexModelBuildingServiceClient";
import {
  GetBotAliasesRequest,
  GetBotAliasesRequestFilterSensitiveLog,
  GetBotAliasesResponse,
  GetBotAliasesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetBotAliasesCommand,
  serializeAws_restJson1GetBotAliasesCommand,
} from "../protocols/Aws_restJson1";

/**
 * The input for {@link GetBotAliasesCommand}.
 */
export interface GetBotAliasesCommandInput extends GetBotAliasesRequest {}
/**
 * The output of {@link GetBotAliasesCommand}.
 */
export interface GetBotAliasesCommandOutput extends GetBotAliasesResponse, __MetadataBearer {}

/**
 * <p>Returns a list of aliases for a specified Amazon Lex bot.</p>
 *          <p>This operation requires permissions for the
 *         <code>lex:GetBotAliases</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, GetBotAliasesCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, GetBotAliasesCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * const client = new LexModelBuildingServiceClient(config);
 * const command = new GetBotAliasesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetBotAliasesCommandInput} for command's `input` shape.
 * @see {@link GetBotAliasesCommandOutput} for command's `response` shape.
 * @see {@link LexModelBuildingServiceClientResolvedConfig | config} for LexModelBuildingServiceClient's `config` shape.
 *
 */
export class GetBotAliasesCommand extends $Command<
  GetBotAliasesCommandInput,
  GetBotAliasesCommandOutput,
  LexModelBuildingServiceClientResolvedConfig
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

  constructor(readonly input: GetBotAliasesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LexModelBuildingServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetBotAliasesCommandInput, GetBotAliasesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetBotAliasesCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelBuildingServiceClient";
    const commandName = "GetBotAliasesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetBotAliasesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetBotAliasesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetBotAliasesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetBotAliasesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetBotAliasesCommandOutput> {
    return deserializeAws_restJson1GetBotAliasesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

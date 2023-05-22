// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@aws-sdk/types";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { SerdeContext as __SerdeContext } from "@smithy/types";

import { Inspector2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Inspector2Client";
import { GetDelegatedAdminAccountRequest, GetDelegatedAdminAccountResponse } from "../models/models_0";
import { de_GetDelegatedAdminAccountCommand, se_GetDelegatedAdminAccountCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetDelegatedAdminAccountCommand}.
 */
export interface GetDelegatedAdminAccountCommandInput extends GetDelegatedAdminAccountRequest {}
/**
 * @public
 *
 * The output of {@link GetDelegatedAdminAccountCommand}.
 */
export interface GetDelegatedAdminAccountCommandOutput extends GetDelegatedAdminAccountResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves information about the Amazon Inspector delegated administrator for your
 *          organization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, GetDelegatedAdminAccountCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, GetDelegatedAdminAccountCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * const client = new Inspector2Client(config);
 * const input = {};
 * const command = new GetDelegatedAdminAccountCommand(input);
 * const response = await client.send(command);
 * // { // GetDelegatedAdminAccountResponse
 * //   delegatedAdmin: { // DelegatedAdmin
 * //     accountId: "STRING_VALUE",
 * //     relationshipStatus: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetDelegatedAdminAccountCommandInput - {@link GetDelegatedAdminAccountCommandInput}
 * @returns {@link GetDelegatedAdminAccountCommandOutput}
 * @see {@link GetDelegatedAdminAccountCommandInput} for command's `input` shape.
 * @see {@link GetDelegatedAdminAccountCommandOutput} for command's `response` shape.
 * @see {@link Inspector2ClientResolvedConfig | config} for Inspector2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed due to an internal failure of the Amazon Inspector service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The operation tried to access an invalid resource. Make sure the resource is specified correctly.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has failed validation due to missing required fields or having invalid
 *          inputs.</p>
 *
 * @throws {@link Inspector2ServiceException}
 * <p>Base exception class for all service exceptions from Inspector2 service.</p>
 *
 */
export class GetDelegatedAdminAccountCommand extends $Command<
  GetDelegatedAdminAccountCommandInput,
  GetDelegatedAdminAccountCommandOutput,
  Inspector2ClientResolvedConfig
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
  constructor(readonly input: GetDelegatedAdminAccountCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Inspector2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDelegatedAdminAccountCommandInput, GetDelegatedAdminAccountCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetDelegatedAdminAccountCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Inspector2Client";
    const commandName = "GetDelegatedAdminAccountCommand";
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
  private serialize(input: GetDelegatedAdminAccountCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetDelegatedAdminAccountCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDelegatedAdminAccountCommandOutput> {
    return de_GetDelegatedAdminAccountCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

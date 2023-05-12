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

import { Inspector2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Inspector2Client";
import { ListUsageTotalsRequest, ListUsageTotalsResponse } from "../models/models_0";
import { de_ListUsageTotalsCommand, se_ListUsageTotalsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link ListUsageTotalsCommand}.
 */
export interface ListUsageTotalsCommandInput extends ListUsageTotalsRequest {}
/**
 * @public
 *
 * The output of {@link ListUsageTotalsCommand}.
 */
export interface ListUsageTotalsCommandOutput extends ListUsageTotalsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists the Amazon Inspector usage totals over the last 30 days.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, ListUsageTotalsCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, ListUsageTotalsCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * const client = new Inspector2Client(config);
 * const input = { // ListUsageTotalsRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   accountIds: [ // UsageAccountIdList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new ListUsageTotalsCommand(input);
 * const response = await client.send(command);
 * // { // ListUsageTotalsResponse
 * //   nextToken: "STRING_VALUE",
 * //   totals: [ // UsageTotalList
 * //     { // UsageTotal
 * //       accountId: "STRING_VALUE",
 * //       usage: [ // UsageList
 * //         { // Usage
 * //           type: "STRING_VALUE",
 * //           total: Number("double"),
 * //           estimatedMonthlyCost: Number("double"),
 * //           currency: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListUsageTotalsRequest - {@link ListUsageTotalsRequest}
 * @returns {@link ListUsageTotalsResponse}
 * @see {@link ListUsageTotalsCommandInput} for command's `input` shape.
 * @see {@link ListUsageTotalsCommandOutput} for command's `response` shape.
 * @see {@link Inspector2ClientResolvedConfig | config} for Inspector2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed due to an internal failure of the Amazon Inspector service.</p>
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
export class ListUsageTotalsCommand extends $Command<
  ListUsageTotalsCommandInput,
  ListUsageTotalsCommandOutput,
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
  constructor(readonly input: ListUsageTotalsCommandInput) {
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
  ): Handler<ListUsageTotalsCommandInput, ListUsageTotalsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListUsageTotalsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Inspector2Client";
    const commandName = "ListUsageTotalsCommand";
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
  private serialize(input: ListUsageTotalsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListUsageTotalsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListUsageTotalsCommandOutput> {
    return de_ListUsageTotalsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

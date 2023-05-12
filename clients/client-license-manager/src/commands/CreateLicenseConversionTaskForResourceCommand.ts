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

import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient";
import {
  CreateLicenseConversionTaskForResourceRequest,
  CreateLicenseConversionTaskForResourceResponse,
} from "../models/models_0";
import {
  de_CreateLicenseConversionTaskForResourceCommand,
  se_CreateLicenseConversionTaskForResourceCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link CreateLicenseConversionTaskForResourceCommand}.
 */
export interface CreateLicenseConversionTaskForResourceCommandInput
  extends CreateLicenseConversionTaskForResourceRequest {}
/**
 * @public
 *
 * The output of {@link CreateLicenseConversionTaskForResourceCommand}.
 */
export interface CreateLicenseConversionTaskForResourceCommandOutput
  extends CreateLicenseConversionTaskForResourceResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Creates a new license conversion task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, CreateLicenseConversionTaskForResourceCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, CreateLicenseConversionTaskForResourceCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const input = { // CreateLicenseConversionTaskForResourceRequest
 *   ResourceArn: "STRING_VALUE", // required
 *   SourceLicenseContext: { // LicenseConversionContext
 *     UsageOperation: "STRING_VALUE",
 *   },
 *   DestinationLicenseContext: {
 *     UsageOperation: "STRING_VALUE",
 *   },
 * };
 * const command = new CreateLicenseConversionTaskForResourceCommand(input);
 * const response = await client.send(command);
 * // { // CreateLicenseConversionTaskForResourceResponse
 * //   LicenseConversionTaskId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateLicenseConversionTaskForResourceRequest - {@link CreateLicenseConversionTaskForResourceRequest}
 * @returns {@link CreateLicenseConversionTaskForResourceResponse}
 * @see {@link CreateLicenseConversionTaskForResourceCommandInput} for command's `input` shape.
 * @see {@link CreateLicenseConversionTaskForResourceCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for LicenseManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to resource denied.</p>
 *
 * @throws {@link AuthorizationException} (client fault)
 *  <p>The Amazon Web Services user account does not have permission to perform the action. Check the IAM
 *          policy associated with this account.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameter values are not valid.</p>
 *
 * @throws {@link RateLimitExceededException} (client fault)
 *  <p>Too many requests have been submitted. Try again after a brief wait.</p>
 *
 * @throws {@link ServerInternalException} (server fault)
 *  <p>The server experienced an internal error. Try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The provided input is not valid. Try your request again.</p>
 *
 * @throws {@link LicenseManagerServiceException}
 * <p>Base exception class for all service exceptions from LicenseManager service.</p>
 *
 */
export class CreateLicenseConversionTaskForResourceCommand extends $Command<
  CreateLicenseConversionTaskForResourceCommandInput,
  CreateLicenseConversionTaskForResourceCommandOutput,
  LicenseManagerClientResolvedConfig
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
  constructor(readonly input: CreateLicenseConversionTaskForResourceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LicenseManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateLicenseConversionTaskForResourceCommandInput, CreateLicenseConversionTaskForResourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateLicenseConversionTaskForResourceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LicenseManagerClient";
    const commandName = "CreateLicenseConversionTaskForResourceCommand";
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
    input: CreateLicenseConversionTaskForResourceCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_CreateLicenseConversionTaskForResourceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateLicenseConversionTaskForResourceCommandOutput> {
    return de_CreateLicenseConversionTaskForResourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

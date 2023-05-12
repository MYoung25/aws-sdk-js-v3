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

import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { UpdateStreamRequest, UpdateStreamResponse } from "../models/models_2";
import { de_UpdateStreamCommand, se_UpdateStreamCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link UpdateStreamCommand}.
 */
export interface UpdateStreamCommandInput extends UpdateStreamRequest {}
/**
 * @public
 *
 * The output of {@link UpdateStreamCommand}.
 */
export interface UpdateStreamCommandOutput extends UpdateStreamResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates an existing stream. The stream version will be incremented by one.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateStream</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, UpdateStreamCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, UpdateStreamCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // UpdateStreamRequest
 *   streamId: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   files: [ // StreamFiles
 *     { // StreamFile
 *       fileId: Number("int"),
 *       s3Location: { // S3Location
 *         bucket: "STRING_VALUE",
 *         key: "STRING_VALUE",
 *         version: "STRING_VALUE",
 *       },
 *     },
 *   ],
 *   roleArn: "STRING_VALUE",
 * };
 * const command = new UpdateStreamCommand(input);
 * const response = await client.send(command);
 * // { // UpdateStreamResponse
 * //   streamId: "STRING_VALUE",
 * //   streamArn: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   streamVersion: Number("int"),
 * // };
 *
 * ```
 *
 * @param UpdateStreamRequest - {@link UpdateStreamRequest}
 * @returns {@link UpdateStreamResponse}
 * @see {@link UpdateStreamCommandInput} for command's `input` shape.
 * @see {@link UpdateStreamCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You are not authorized to perform this operation.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 */
export class UpdateStreamCommand extends $Command<
  UpdateStreamCommandInput,
  UpdateStreamCommandOutput,
  IoTClientResolvedConfig
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
  constructor(readonly input: UpdateStreamCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateStreamCommandInput, UpdateStreamCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UpdateStreamCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "UpdateStreamCommand";
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
  private serialize(input: UpdateStreamCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateStreamCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateStreamCommandOutput> {
    return de_UpdateStreamCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

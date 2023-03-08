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

import { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import {
  DisassociateSourceServersRequest,
  DisassociateSourceServersRequestFilterSensitiveLog,
  DisassociateSourceServersResponse,
  DisassociateSourceServersResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DisassociateSourceServersCommand,
  serializeAws_restJson1DisassociateSourceServersCommand,
} from "../protocols/Aws_restJson1";

/**
 * The input for {@link DisassociateSourceServersCommand}.
 */
export interface DisassociateSourceServersCommandInput extends DisassociateSourceServersRequest {}
/**
 * The output of {@link DisassociateSourceServersCommand}.
 */
export interface DisassociateSourceServersCommandOutput extends DisassociateSourceServersResponse, __MetadataBearer {}

/**
 * <p>Disassociate source servers from application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, DisassociateSourceServersCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, DisassociateSourceServersCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * const client = new MgnClient(config);
 * const command = new DisassociateSourceServersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateSourceServersCommandInput} for command's `input` shape.
 * @see {@link DisassociateSourceServersCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for MgnClient's `config` shape.
 *
 */
export class DisassociateSourceServersCommand extends $Command<
  DisassociateSourceServersCommandInput,
  DisassociateSourceServersCommandOutput,
  MgnClientResolvedConfig
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

  constructor(readonly input: DisassociateSourceServersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MgnClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisassociateSourceServersCommandInput, DisassociateSourceServersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisassociateSourceServersCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MgnClient";
    const commandName = "DisassociateSourceServersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateSourceServersRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DisassociateSourceServersResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DisassociateSourceServersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DisassociateSourceServersCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateSourceServersCommandOutput> {
    return deserializeAws_restJson1DisassociateSourceServersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

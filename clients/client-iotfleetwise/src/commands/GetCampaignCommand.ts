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

import { IoTFleetWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTFleetWiseClient";
import { GetCampaignRequest, GetCampaignResponse } from "../models/models_0";
import { de_GetCampaignCommand, se_GetCampaignCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetCampaignCommand}.
 */
export interface GetCampaignCommandInput extends GetCampaignRequest {}
/**
 * @public
 *
 * The output of {@link GetCampaignCommand}.
 */
export interface GetCampaignCommandOutput extends GetCampaignResponse, __MetadataBearer {}

/**
 * @public
 * <p> Retrieves information about a campaign. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTFleetWiseClient, GetCampaignCommand } from "@aws-sdk/client-iotfleetwise"; // ES Modules import
 * // const { IoTFleetWiseClient, GetCampaignCommand } = require("@aws-sdk/client-iotfleetwise"); // CommonJS import
 * const client = new IoTFleetWiseClient(config);
 * const input = { // GetCampaignRequest
 *   name: "STRING_VALUE", // required
 * };
 * const command = new GetCampaignCommand(input);
 * const response = await client.send(command);
 * // { // GetCampaignResponse
 * //   name: "STRING_VALUE",
 * //   arn: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   signalCatalogArn: "STRING_VALUE",
 * //   targetArn: "STRING_VALUE",
 * //   status: "STRING_VALUE",
 * //   startTime: new Date("TIMESTAMP"),
 * //   expiryTime: new Date("TIMESTAMP"),
 * //   postTriggerCollectionDuration: Number("long"),
 * //   diagnosticsMode: "STRING_VALUE",
 * //   spoolingMode: "STRING_VALUE",
 * //   compression: "STRING_VALUE",
 * //   priority: Number("int"),
 * //   signalsToCollect: [ // SignalInformationList
 * //     { // SignalInformation
 * //       name: "STRING_VALUE", // required
 * //       maxSampleCount: Number("long"),
 * //       minimumSamplingIntervalMs: Number("long"),
 * //     },
 * //   ],
 * //   collectionScheme: { // CollectionScheme Union: only one key present
 * //     timeBasedCollectionScheme: { // TimeBasedCollectionScheme
 * //       periodMs: Number("long"), // required
 * //     },
 * //     conditionBasedCollectionScheme: { // ConditionBasedCollectionScheme
 * //       expression: "STRING_VALUE", // required
 * //       minimumTriggerIntervalMs: Number("long"),
 * //       triggerMode: "STRING_VALUE",
 * //       conditionLanguageVersion: Number("int"),
 * //     },
 * //   },
 * //   dataExtraDimensions: [ // DataExtraDimensionNodePathList
 * //     "STRING_VALUE",
 * //   ],
 * //   creationTime: new Date("TIMESTAMP"),
 * //   lastModificationTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetCampaignCommandInput - {@link GetCampaignCommandInput}
 * @returns {@link GetCampaignCommandOutput}
 * @see {@link GetCampaignCommandInput} for command's `input` shape.
 * @see {@link GetCampaignCommandOutput} for command's `response` shape.
 * @see {@link IoTFleetWiseClientResolvedConfig | config} for IoTFleetWiseClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permission to perform this action.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource wasn't found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request couldn't be completed due to throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request couldn't be completed because the server temporarily failed.</p>
 *
 * @throws {@link IoTFleetWiseServiceException}
 * <p>Base exception class for all service exceptions from IoTFleetWise service.</p>
 *
 */
export class GetCampaignCommand extends $Command<
  GetCampaignCommandInput,
  GetCampaignCommandOutput,
  IoTFleetWiseClientResolvedConfig
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
  constructor(readonly input: GetCampaignCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTFleetWiseClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetCampaignCommandInput, GetCampaignCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetCampaignCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTFleetWiseClient";
    const commandName = "GetCampaignCommand";
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
  private serialize(input: GetCampaignCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetCampaignCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetCampaignCommandOutput> {
    return de_GetCampaignCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

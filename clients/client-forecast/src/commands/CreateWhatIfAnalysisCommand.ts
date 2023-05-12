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

import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import {
  CreateWhatIfAnalysisRequest,
  CreateWhatIfAnalysisRequestFilterSensitiveLog,
  CreateWhatIfAnalysisResponse,
} from "../models/models_0";
import { de_CreateWhatIfAnalysisCommand, se_CreateWhatIfAnalysisCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link CreateWhatIfAnalysisCommand}.
 */
export interface CreateWhatIfAnalysisCommandInput extends CreateWhatIfAnalysisRequest {}
/**
 * @public
 *
 * The output of {@link CreateWhatIfAnalysisCommand}.
 */
export interface CreateWhatIfAnalysisCommandOutput extends CreateWhatIfAnalysisResponse, __MetadataBearer {}

/**
 * @public
 * <p>What-if analysis is a scenario modeling technique where you make a hypothetical change to a time series and
 *       compare the forecasts generated by these changes against the baseline, unchanged time series. It is important to
 *       remember that the purpose of a what-if analysis is to understand how a forecast can change given different
 *       modifications to the baseline time series.</p>
 *          <p>For example, imagine you are a clothing retailer who is considering an end of season sale
 *       to clear space for new styles. After creating a baseline forecast, you can use a what-if
 *       analysis to investigate how different sales tactics might affect your goals.</p>
 *          <p>You could create a scenario where everything is given a 25% markdown, and another where
 *       everything is given a fixed dollar markdown. You could create a scenario where the sale lasts for one week and
 *       another where the sale lasts for one month.
 *       With a what-if analysis, you can compare many different scenarios against each other.</p>
 *          <p>Note that a what-if analysis is meant to display what the forecasting model has learned and how it will behave in the scenarios that you are evaluating. Do not blindly use the results of the what-if analysis to make business decisions. For instance, forecasts might not be accurate for novel scenarios where there is no reference available to determine whether a forecast is good.</p>
 *          <p>The <a>TimeSeriesSelector</a> object defines the items that you want in the what-if analysis.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, CreateWhatIfAnalysisCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, CreateWhatIfAnalysisCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const input = { // CreateWhatIfAnalysisRequest
 *   WhatIfAnalysisName: "STRING_VALUE", // required
 *   ForecastArn: "STRING_VALUE", // required
 *   TimeSeriesSelector: { // TimeSeriesSelector
 *     TimeSeriesIdentifiers: { // TimeSeriesIdentifiers
 *       DataSource: { // DataSource
 *         S3Config: { // S3Config
 *           Path: "STRING_VALUE", // required
 *           RoleArn: "STRING_VALUE", // required
 *           KMSKeyArn: "STRING_VALUE",
 *         },
 *       },
 *       Schema: { // Schema
 *         Attributes: [ // SchemaAttributes
 *           { // SchemaAttribute
 *             AttributeName: "STRING_VALUE",
 *             AttributeType: "string" || "integer" || "float" || "timestamp" || "geolocation",
 *           },
 *         ],
 *       },
 *       Format: "STRING_VALUE",
 *     },
 *   },
 *   Tags: [ // Tags
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateWhatIfAnalysisCommand(input);
 * const response = await client.send(command);
 * // { // CreateWhatIfAnalysisResponse
 * //   WhatIfAnalysisArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateWhatIfAnalysisRequest - {@link CreateWhatIfAnalysisRequest}
 * @returns {@link CreateWhatIfAnalysisResponse}
 * @see {@link CreateWhatIfAnalysisCommandInput} for command's `input` shape.
 * @see {@link CreateWhatIfAnalysisCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for ForecastClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>We can't process the request because it includes an invalid value or a value that exceeds
 *       the valid range.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The limit on the number of resources per account has been exceeded.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>There is already a resource with this name. Try again with a different name.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The specified resource is in use.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>We can't find a resource with that Amazon Resource Name (ARN). Check the ARN and try
 *       again.</p>
 *
 * @throws {@link ForecastServiceException}
 * <p>Base exception class for all service exceptions from Forecast service.</p>
 *
 */
export class CreateWhatIfAnalysisCommand extends $Command<
  CreateWhatIfAnalysisCommandInput,
  CreateWhatIfAnalysisCommandOutput,
  ForecastClientResolvedConfig
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
  constructor(readonly input: CreateWhatIfAnalysisCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ForecastClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateWhatIfAnalysisCommandInput, CreateWhatIfAnalysisCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateWhatIfAnalysisCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ForecastClient";
    const commandName = "CreateWhatIfAnalysisCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateWhatIfAnalysisRequestFilterSensitiveLog,
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
  private serialize(input: CreateWhatIfAnalysisCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateWhatIfAnalysisCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateWhatIfAnalysisCommandOutput> {
    return de_CreateWhatIfAnalysisCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

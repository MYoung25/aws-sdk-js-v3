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

import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import {
  CalculateRouteMatrixRequest,
  CalculateRouteMatrixRequestFilterSensitiveLog,
  CalculateRouteMatrixResponse,
  CalculateRouteMatrixResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_CalculateRouteMatrixCommand, se_CalculateRouteMatrixCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link CalculateRouteMatrixCommand}.
 */
export interface CalculateRouteMatrixCommandInput extends CalculateRouteMatrixRequest {}
/**
 * @public
 *
 * The output of {@link CalculateRouteMatrixCommand}.
 */
export interface CalculateRouteMatrixCommandOutput extends CalculateRouteMatrixResponse, __MetadataBearer {}

/**
 * @public
 * <p>
 *             <a href="https://docs.aws.amazon.com/location/latest/developerguide/calculate-route-matrix.html"> Calculates a route
 *                 matrix</a> given the following required parameters:
 *                 <code>DeparturePositions</code> and <code>DestinationPositions</code>.
 *                 <code>CalculateRouteMatrix</code> calculates routes and returns the travel time and
 *             travel distance from each departure position to each destination position in the
 *             request. For example, given departure positions A and B, and destination positions X and
 *             Y, <code>CalculateRouteMatrix</code> will return time and distance for routes from A to
 *             X, A to Y, B to X, and B to Y (in that order). The number of results returned (and
 *             routes calculated) will be the number of <code>DeparturePositions</code> times the
 *             number of <code>DestinationPositions</code>.</p>
 *          <note>
 *             <p>Your account is charged for each route calculated, not the number of
 *                 requests.</p>
 *          </note>
 *          <p>Requires that you first <a href="https://docs.aws.amazon.com/location-routes/latest/APIReference/API_CreateRouteCalculator.html">create a
 *                 route calculator resource</a>.</p>
 *          <p>By default, a request that doesn't specify a departure time uses the best time of day
 *             to travel with the best traffic conditions when calculating routes.</p>
 *          <p>Additional options include:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/location/latest/developerguide/departure-time.html"> Specifying a
 *                         departure time</a> using either <code>DepartureTime</code> or
 *                         <code>DepartNow</code>. This calculates routes based on predictive traffic
 *                     data at the given time. </p>
 *                <note>
 *                   <p>You can't specify both <code>DepartureTime</code> and
 *                             <code>DepartNow</code> in a single request. Specifying both parameters
 *                         returns a validation error.</p>
 *                </note>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/location/latest/developerguide/travel-mode.html">Specifying a travel
 *                         mode</a> using TravelMode sets the transportation mode used to calculate
 *                     the routes. This also lets you specify additional route preferences in
 *                         <code>CarModeOptions</code> if traveling by <code>Car</code>, or
 *                         <code>TruckModeOptions</code> if traveling by <code>Truck</code>.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, CalculateRouteMatrixCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, CalculateRouteMatrixCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const input = { // CalculateRouteMatrixRequest
 *   CalculatorName: "STRING_VALUE", // required
 *   DeparturePositions: [ // PositionList // required
 *     [ // Position
 *       Number("double"),
 *     ],
 *   ],
 *   DestinationPositions: [ // required
 *     [
 *       Number("double"),
 *     ],
 *   ],
 *   TravelMode: "STRING_VALUE",
 *   DepartureTime: new Date("TIMESTAMP"),
 *   DepartNow: true || false,
 *   DistanceUnit: "STRING_VALUE",
 *   CarModeOptions: { // CalculateRouteCarModeOptions
 *     AvoidFerries: true || false,
 *     AvoidTolls: true || false,
 *   },
 *   TruckModeOptions: { // CalculateRouteTruckModeOptions
 *     AvoidFerries: true || false,
 *     AvoidTolls: true || false,
 *     Dimensions: { // TruckDimensions
 *       Length: Number("double"),
 *       Height: Number("double"),
 *       Width: Number("double"),
 *       Unit: "STRING_VALUE",
 *     },
 *     Weight: { // TruckWeight
 *       Total: Number("double"),
 *       Unit: "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new CalculateRouteMatrixCommand(input);
 * const response = await client.send(command);
 * // { // CalculateRouteMatrixResponse
 * //   RouteMatrix: [ // RouteMatrix // required
 * //     [ // RouteMatrixRow
 * //       { // RouteMatrixEntry
 * //         Distance: Number("double"),
 * //         DurationSeconds: Number("double"),
 * //         Error: { // RouteMatrixEntryError
 * //           Code: "STRING_VALUE", // required
 * //           Message: "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //   ],
 * //   SnappedDeparturePositions: [ // PositionList
 * //     [ // Position
 * //       Number("double"),
 * //     ],
 * //   ],
 * //   SnappedDestinationPositions: [
 * //     [
 * //       Number("double"),
 * //     ],
 * //   ],
 * //   Summary: { // CalculateRouteMatrixSummary
 * //     DataSource: "STRING_VALUE", // required
 * //     RouteCount: Number("int"), // required
 * //     ErrorCount: Number("int"), // required
 * //     DistanceUnit: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param CalculateRouteMatrixRequest - {@link CalculateRouteMatrixRequest}
 * @returns {@link CalculateRouteMatrixResponse}
 * @see {@link CalculateRouteMatrixCommandInput} for command's `input` shape.
 * @see {@link CalculateRouteMatrixCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied because of insufficient access or permissions. Check with an
 *       administrator to verify your permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed to process because of an unknown server error, exception, or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource that you've entered was not found in your AWS account.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because of request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input failed to meet the constraints specified by the AWS service. </p>
 *
 * @throws {@link LocationServiceException}
 * <p>Base exception class for all service exceptions from Location service.</p>
 *
 */
export class CalculateRouteMatrixCommand extends $Command<
  CalculateRouteMatrixCommandInput,
  CalculateRouteMatrixCommandOutput,
  LocationClientResolvedConfig
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
  constructor(readonly input: CalculateRouteMatrixCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LocationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CalculateRouteMatrixCommandInput, CalculateRouteMatrixCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CalculateRouteMatrixCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LocationClient";
    const commandName = "CalculateRouteMatrixCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CalculateRouteMatrixRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CalculateRouteMatrixResponseFilterSensitiveLog,
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
  private serialize(input: CalculateRouteMatrixCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CalculateRouteMatrixCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CalculateRouteMatrixCommandOutput> {
    return de_CalculateRouteMatrixCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

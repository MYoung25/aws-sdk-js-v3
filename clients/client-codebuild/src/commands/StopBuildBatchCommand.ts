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

import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { StopBuildBatchInput, StopBuildBatchOutput } from "../models/models_0";
import { de_StopBuildBatchCommand, se_StopBuildBatchCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link StopBuildBatchCommand}.
 */
export interface StopBuildBatchCommandInput extends StopBuildBatchInput {}
/**
 * @public
 *
 * The output of {@link StopBuildBatchCommand}.
 */
export interface StopBuildBatchCommandOutput extends StopBuildBatchOutput, __MetadataBearer {}

/**
 * @public
 * <p>Stops a running batch build.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, StopBuildBatchCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, StopBuildBatchCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const input = { // StopBuildBatchInput
 *   id: "STRING_VALUE", // required
 * };
 * const command = new StopBuildBatchCommand(input);
 * const response = await client.send(command);
 * // { // StopBuildBatchOutput
 * //   buildBatch: { // BuildBatch
 * //     id: "STRING_VALUE",
 * //     arn: "STRING_VALUE",
 * //     startTime: new Date("TIMESTAMP"),
 * //     endTime: new Date("TIMESTAMP"),
 * //     currentPhase: "STRING_VALUE",
 * //     buildBatchStatus: "STRING_VALUE",
 * //     sourceVersion: "STRING_VALUE",
 * //     resolvedSourceVersion: "STRING_VALUE",
 * //     projectName: "STRING_VALUE",
 * //     phases: [ // BuildBatchPhases
 * //       { // BuildBatchPhase
 * //         phaseType: "STRING_VALUE",
 * //         phaseStatus: "STRING_VALUE",
 * //         startTime: new Date("TIMESTAMP"),
 * //         endTime: new Date("TIMESTAMP"),
 * //         durationInSeconds: Number("long"),
 * //         contexts: [ // PhaseContexts
 * //           { // PhaseContext
 * //             statusCode: "STRING_VALUE",
 * //             message: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //     source: { // ProjectSource
 * //       type: "STRING_VALUE", // required
 * //       location: "STRING_VALUE",
 * //       gitCloneDepth: Number("int"),
 * //       gitSubmodulesConfig: { // GitSubmodulesConfig
 * //         fetchSubmodules: true || false, // required
 * //       },
 * //       buildspec: "STRING_VALUE",
 * //       auth: { // SourceAuth
 * //         type: "STRING_VALUE", // required
 * //         resource: "STRING_VALUE",
 * //       },
 * //       reportBuildStatus: true || false,
 * //       buildStatusConfig: { // BuildStatusConfig
 * //         context: "STRING_VALUE",
 * //         targetUrl: "STRING_VALUE",
 * //       },
 * //       insecureSsl: true || false,
 * //       sourceIdentifier: "STRING_VALUE",
 * //     },
 * //     secondarySources: [ // ProjectSources
 * //       {
 * //         type: "STRING_VALUE", // required
 * //         location: "STRING_VALUE",
 * //         gitCloneDepth: Number("int"),
 * //         gitSubmodulesConfig: {
 * //           fetchSubmodules: true || false, // required
 * //         },
 * //         buildspec: "STRING_VALUE",
 * //         auth: {
 * //           type: "STRING_VALUE", // required
 * //           resource: "STRING_VALUE",
 * //         },
 * //         reportBuildStatus: true || false,
 * //         buildStatusConfig: {
 * //           context: "STRING_VALUE",
 * //           targetUrl: "STRING_VALUE",
 * //         },
 * //         insecureSsl: true || false,
 * //         sourceIdentifier: "STRING_VALUE",
 * //       },
 * //     ],
 * //     secondarySourceVersions: [ // ProjectSecondarySourceVersions
 * //       { // ProjectSourceVersion
 * //         sourceIdentifier: "STRING_VALUE", // required
 * //         sourceVersion: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     artifacts: { // BuildArtifacts
 * //       location: "STRING_VALUE",
 * //       sha256sum: "STRING_VALUE",
 * //       md5sum: "STRING_VALUE",
 * //       overrideArtifactName: true || false,
 * //       encryptionDisabled: true || false,
 * //       artifactIdentifier: "STRING_VALUE",
 * //       bucketOwnerAccess: "STRING_VALUE",
 * //     },
 * //     secondaryArtifacts: [ // BuildArtifactsList
 * //       {
 * //         location: "STRING_VALUE",
 * //         sha256sum: "STRING_VALUE",
 * //         md5sum: "STRING_VALUE",
 * //         overrideArtifactName: true || false,
 * //         encryptionDisabled: true || false,
 * //         artifactIdentifier: "STRING_VALUE",
 * //         bucketOwnerAccess: "STRING_VALUE",
 * //       },
 * //     ],
 * //     cache: { // ProjectCache
 * //       type: "STRING_VALUE", // required
 * //       location: "STRING_VALUE",
 * //       modes: [ // ProjectCacheModes
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     environment: { // ProjectEnvironment
 * //       type: "STRING_VALUE", // required
 * //       image: "STRING_VALUE", // required
 * //       computeType: "STRING_VALUE", // required
 * //       environmentVariables: [ // EnvironmentVariables
 * //         { // EnvironmentVariable
 * //           name: "STRING_VALUE", // required
 * //           value: "STRING_VALUE", // required
 * //           type: "STRING_VALUE",
 * //         },
 * //       ],
 * //       privilegedMode: true || false,
 * //       certificate: "STRING_VALUE",
 * //       registryCredential: { // RegistryCredential
 * //         credential: "STRING_VALUE", // required
 * //         credentialProvider: "STRING_VALUE", // required
 * //       },
 * //       imagePullCredentialsType: "STRING_VALUE",
 * //     },
 * //     serviceRole: "STRING_VALUE",
 * //     logConfig: { // LogsConfig
 * //       cloudWatchLogs: { // CloudWatchLogsConfig
 * //         status: "STRING_VALUE", // required
 * //         groupName: "STRING_VALUE",
 * //         streamName: "STRING_VALUE",
 * //       },
 * //       s3Logs: { // S3LogsConfig
 * //         status: "STRING_VALUE", // required
 * //         location: "STRING_VALUE",
 * //         encryptionDisabled: true || false,
 * //         bucketOwnerAccess: "STRING_VALUE",
 * //       },
 * //     },
 * //     buildTimeoutInMinutes: Number("int"),
 * //     queuedTimeoutInMinutes: Number("int"),
 * //     complete: true || false,
 * //     initiator: "STRING_VALUE",
 * //     vpcConfig: { // VpcConfig
 * //       vpcId: "STRING_VALUE",
 * //       subnets: [ // Subnets
 * //         "STRING_VALUE",
 * //       ],
 * //       securityGroupIds: [ // SecurityGroupIds
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     encryptionKey: "STRING_VALUE",
 * //     buildBatchNumber: Number("long"),
 * //     fileSystemLocations: [ // ProjectFileSystemLocations
 * //       { // ProjectFileSystemLocation
 * //         type: "STRING_VALUE",
 * //         location: "STRING_VALUE",
 * //         mountPoint: "STRING_VALUE",
 * //         identifier: "STRING_VALUE",
 * //         mountOptions: "STRING_VALUE",
 * //       },
 * //     ],
 * //     buildBatchConfig: { // ProjectBuildBatchConfig
 * //       serviceRole: "STRING_VALUE",
 * //       combineArtifacts: true || false,
 * //       restrictions: { // BatchRestrictions
 * //         maximumBuildsAllowed: Number("int"),
 * //         computeTypesAllowed: [ // ComputeTypesAllowed
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       timeoutInMins: Number("int"),
 * //       batchReportMode: "STRING_VALUE",
 * //     },
 * //     buildGroups: [ // BuildGroups
 * //       { // BuildGroup
 * //         identifier: "STRING_VALUE",
 * //         dependsOn: [ // Identifiers
 * //           "STRING_VALUE",
 * //         ],
 * //         ignoreFailure: true || false,
 * //         currentBuildSummary: { // BuildSummary
 * //           arn: "STRING_VALUE",
 * //           requestedOn: new Date("TIMESTAMP"),
 * //           buildStatus: "STRING_VALUE",
 * //           primaryArtifact: { // ResolvedArtifact
 * //             type: "STRING_VALUE",
 * //             location: "STRING_VALUE",
 * //             identifier: "STRING_VALUE",
 * //           },
 * //           secondaryArtifacts: [ // ResolvedSecondaryArtifacts
 * //             {
 * //               type: "STRING_VALUE",
 * //               location: "STRING_VALUE",
 * //               identifier: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //         priorBuildSummaryList: [ // BuildSummaries
 * //           {
 * //             arn: "STRING_VALUE",
 * //             requestedOn: new Date("TIMESTAMP"),
 * //             buildStatus: "STRING_VALUE",
 * //             primaryArtifact: {
 * //               type: "STRING_VALUE",
 * //               location: "STRING_VALUE",
 * //               identifier: "STRING_VALUE",
 * //             },
 * //             secondaryArtifacts: [
 * //               "<ResolvedArtifact>",
 * //             ],
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //     debugSessionEnabled: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param StopBuildBatchInput - {@link StopBuildBatchInput}
 * @returns {@link StopBuildBatchOutput}
 * @see {@link StopBuildBatchCommandInput} for command's `input` shape.
 * @see {@link StopBuildBatchCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for CodeBuildClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input value that was provided is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified Amazon Web Services resource cannot be found.</p>
 *
 * @throws {@link CodeBuildServiceException}
 * <p>Base exception class for all service exceptions from CodeBuild service.</p>
 *
 */
export class StopBuildBatchCommand extends $Command<
  StopBuildBatchCommandInput,
  StopBuildBatchCommandOutput,
  CodeBuildClientResolvedConfig
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
  constructor(readonly input: StopBuildBatchCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeBuildClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StopBuildBatchCommandInput, StopBuildBatchCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StopBuildBatchCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeBuildClient";
    const commandName = "StopBuildBatchCommand";
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
  private serialize(input: StopBuildBatchCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StopBuildBatchCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StopBuildBatchCommandOutput> {
    return de_StopBuildBatchCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

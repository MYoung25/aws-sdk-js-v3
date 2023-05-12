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

import { ChimeSDKMeetingsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKMeetingsClient";
import { StartMeetingTranscriptionRequest } from "../models/models_0";
import { de_StartMeetingTranscriptionCommand, se_StartMeetingTranscriptionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link StartMeetingTranscriptionCommand}.
 */
export interface StartMeetingTranscriptionCommandInput extends StartMeetingTranscriptionRequest {}
/**
 * @public
 *
 * The output of {@link StartMeetingTranscriptionCommand}.
 */
export interface StartMeetingTranscriptionCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Starts transcription for the specified <code>meetingId</code>. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/meeting-transcription.html">
 *             Using Amazon Chime SDK live transcription
 *         </a> in the <i>Amazon Chime SDK Developer Guide</i>.</p>
 *          <p>If you specify an invalid configuration, a <code>TranscriptFailed</code> event will be sent with the contents of the <code>BadRequestException</code> generated by Amazon Transcribe.
 *             For more information on each parameter and which combinations are valid, refer to the
 *             <a href="https://docs.aws.amazon.com/transcribe/latest/APIReference/API_streaming_StartStreamTranscription.html">StartStreamTranscription</a> API in the
 *             <i>Amazon Transcribe Developer Guide</i>.</p>
 *          <important>
 *             <p>Amazon Chime SDK live transcription is powered by Amazon Transcribe. Use of Amazon Transcribe is subject to the
 *             <a href="https://aws.amazon.com/service-terms/">AWS Service Terms</a>, including the terms specific to the AWS Machine Learning and Artificial Intelligence Services.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMeetingsClient, StartMeetingTranscriptionCommand } from "@aws-sdk/client-chime-sdk-meetings"; // ES Modules import
 * // const { ChimeSDKMeetingsClient, StartMeetingTranscriptionCommand } = require("@aws-sdk/client-chime-sdk-meetings"); // CommonJS import
 * const client = new ChimeSDKMeetingsClient(config);
 * const input = { // StartMeetingTranscriptionRequest
 *   MeetingId: "STRING_VALUE", // required
 *   TranscriptionConfiguration: { // TranscriptionConfiguration
 *     EngineTranscribeSettings: { // EngineTranscribeSettings
 *       LanguageCode: "en-US" || "en-GB" || "es-US" || "fr-CA" || "fr-FR" || "en-AU" || "it-IT" || "de-DE" || "pt-BR" || "ja-JP" || "ko-KR" || "zh-CN" || "th-TH" || "hi-IN",
 *       VocabularyFilterMethod: "remove" || "mask" || "tag",
 *       VocabularyFilterName: "STRING_VALUE",
 *       VocabularyName: "STRING_VALUE",
 *       Region: "us-east-2" || "us-east-1" || "us-west-2" || "ap-northeast-2" || "ap-southeast-2" || "ap-northeast-1" || "ca-central-1" || "eu-central-1" || "eu-west-1" || "eu-west-2" || "sa-east-1" || "auto" || "us-gov-west-1",
 *       EnablePartialResultsStabilization: true || false,
 *       PartialResultsStability: "low" || "medium" || "high",
 *       ContentIdentificationType: "PII",
 *       ContentRedactionType: "PII",
 *       PiiEntityTypes: "STRING_VALUE",
 *       LanguageModelName: "STRING_VALUE",
 *       IdentifyLanguage: true || false,
 *       LanguageOptions: "STRING_VALUE",
 *       PreferredLanguage: "en-US" || "en-GB" || "es-US" || "fr-CA" || "fr-FR" || "en-AU" || "it-IT" || "de-DE" || "pt-BR" || "ja-JP" || "ko-KR" || "zh-CN" || "th-TH" || "hi-IN",
 *       VocabularyNames: "STRING_VALUE",
 *       VocabularyFilterNames: "STRING_VALUE",
 *     },
 *     EngineTranscribeMedicalSettings: { // EngineTranscribeMedicalSettings
 *       LanguageCode: "en-US", // required
 *       Specialty: "PRIMARYCARE" || "CARDIOLOGY" || "NEUROLOGY" || "ONCOLOGY" || "RADIOLOGY" || "UROLOGY", // required
 *       Type: "CONVERSATION" || "DICTATION", // required
 *       VocabularyName: "STRING_VALUE",
 *       Region: "us-east-1" || "us-east-2" || "us-west-2" || "ap-southeast-2" || "ca-central-1" || "eu-west-1" || "auto",
 *       ContentIdentificationType: "PHI",
 *     },
 *   },
 * };
 * const command = new StartMeetingTranscriptionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StartMeetingTranscriptionRequest - {@link StartMeetingTranscriptionRequest}
 * @returns {@link Unit}
 * @see {@link StartMeetingTranscriptionCommandInput} for command's `input` shape.
 * @see {@link StartMeetingTranscriptionCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKMeetingsClientResolvedConfig | config} for ChimeSDKMeetingsClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request exceeds the resource limit.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>One or more of the resources in the request does not exist in the system.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The service encountered an unexpected error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of customer requests exceeds the request rate limit.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>The user isn't authorized to request a resource.</p>
 *
 * @throws {@link UnprocessableEntityException} (client fault)
 *  <p>The request was well-formed but was unable to be followed due to semantic errors.</p>
 *
 * @throws {@link ChimeSDKMeetingsServiceException}
 * <p>Base exception class for all service exceptions from ChimeSDKMeetings service.</p>
 *
 */
export class StartMeetingTranscriptionCommand extends $Command<
  StartMeetingTranscriptionCommandInput,
  StartMeetingTranscriptionCommandOutput,
  ChimeSDKMeetingsClientResolvedConfig
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
  constructor(readonly input: StartMeetingTranscriptionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeSDKMeetingsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartMeetingTranscriptionCommandInput, StartMeetingTranscriptionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartMeetingTranscriptionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeSDKMeetingsClient";
    const commandName = "StartMeetingTranscriptionCommand";
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
  private serialize(input: StartMeetingTranscriptionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartMeetingTranscriptionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartMeetingTranscriptionCommandOutput> {
    return de_StartMeetingTranscriptionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

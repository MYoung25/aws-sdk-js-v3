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

import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { TagOpenIDConnectProviderRequest } from "../models/models_0";
import { de_TagOpenIDConnectProviderCommand, se_TagOpenIDConnectProviderCommand } from "../protocols/Aws_query";

/**
 * @public
 *
 * The input for {@link TagOpenIDConnectProviderCommand}.
 */
export interface TagOpenIDConnectProviderCommandInput extends TagOpenIDConnectProviderRequest {}
/**
 * @public
 *
 * The output of {@link TagOpenIDConnectProviderCommand}.
 */
export interface TagOpenIDConnectProviderCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Adds one or more tags to an OpenID Connect (OIDC)-compatible identity provider. For
 *       more information about these providers, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_oidc.html">About web identity federation</a>. If
 *       a tag with the same key name already exists, then that tag is overwritten with the new
 *       value.</p>
 *          <p>A tag consists of a key name and an associated value. By assigning tags to your
 *       resources, you can do the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Administrative grouping and discovery</b> - Attach
 *           tags to resources to aid in organization and search. For example, you could search for all
 *           resources with the key name <i>Project</i> and the value
 *             <i>MyImportantProject</i>. Or search for all resources with the key name
 *             <i>Cost Center</i> and the value <i>41200</i>. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Access control</b> - Include tags in IAM identity-based
 *           and resource-based policies. You can use tags to restrict access to only an OIDC provider
 *           that has a specified tag attached. For examples of policies that show how to use tags to
 *           control access, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Control access using IAM tags</a> in the
 *           <i>IAM User Guide</i>.</p>
 *             </li>
 *          </ul>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request
 *    fails and the resource is not created. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
 *       <i>IAM User Guide</i>.</p>
 *                </li>
 *                <li>
 *                   <p>Amazon Web Services always interprets the tag <code>Value</code> as a single string. If you
 *             need to store an array, you can store comma-separated values in the string. However, you
 *             must interpret the value in your code.</p>
 *                </li>
 *             </ul>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, TagOpenIDConnectProviderCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, TagOpenIDConnectProviderCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const input = { // TagOpenIDConnectProviderRequest
 *   OpenIDConnectProviderArn: "STRING_VALUE", // required
 *   Tags: [ // tagListType // required
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new TagOpenIDConnectProviderCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param TagOpenIDConnectProviderRequest - {@link TagOpenIDConnectProviderRequest}
 * @returns {@link Unit}
 * @see {@link TagOpenIDConnectProviderCommandInput} for command's `input` shape.
 * @see {@link TagOpenIDConnectProviderCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>The request was rejected because multiple requests to change this object were submitted
 *       simultaneously. Wait a few minutes and submit your request again.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because an invalid or out-of-range value was supplied for an
 *       input parameter.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current
 *       Amazon Web Services account limits. The error message describes the limit exceeded.</p>
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *  <p>The request was rejected because it referenced a resource entity that does not exist. The
 *       error message describes the resource.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 */
export class TagOpenIDConnectProviderCommand extends $Command<
  TagOpenIDConnectProviderCommandInput,
  TagOpenIDConnectProviderCommandOutput,
  IAMClientResolvedConfig
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
  constructor(readonly input: TagOpenIDConnectProviderCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<TagOpenIDConnectProviderCommandInput, TagOpenIDConnectProviderCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, TagOpenIDConnectProviderCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "TagOpenIDConnectProviderCommand";
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
  private serialize(input: TagOpenIDConnectProviderCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_TagOpenIDConnectProviderCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<TagOpenIDConnectProviderCommandOutput> {
    return de_TagOpenIDConnectProviderCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

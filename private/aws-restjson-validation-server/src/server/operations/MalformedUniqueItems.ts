// smithy-typescript generated code
import {
  generateValidationMessage as __generateValidationMessage,
  generateValidationSummary as __generateValidationSummary,
  httpbinding,
  InternalFailureException as __InternalFailureException,
  isFrameworkException as __isFrameworkException,
  Mux as __Mux,
  Operation as __Operation,
  OperationInput as __OperationInput,
  OperationOutput as __OperationOutput,
  OperationSerializer as __OperationSerializer,
  SerializationException as __SerializationException,
  ServerSerdeContext as __ServerSerdeContext,
  ServerSerdeContext,
  ServiceException as __BaseException,
  ServiceException as __ServiceException,
  ServiceHandler as __ServiceHandler,
  SmithyFrameworkException as __SmithyFrameworkException,
  ValidationCustomizer as __ValidationCustomizer,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { NodeHttpHandler, streamCollector } from "@smithy/node-http-handler";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { fromBase64, toBase64 } from "@smithy/util-base64";
import { fromUtf8, toUtf8 } from "@smithy/util-utf8";

import { MalformedUniqueItemsInput, ValidationException } from "../../models/models_0";
import {
  deserializeMalformedUniqueItemsRequest,
  serializeFrameworkException,
  serializeMalformedUniqueItemsResponse,
  serializeValidationExceptionError,
} from "../../protocols/Aws_restJson1";
import { RestJsonValidationService } from "../RestJsonValidationService";

export type MalformedUniqueItems<Context> = __Operation<
  MalformedUniqueItemsServerInput,
  MalformedUniqueItemsServerOutput,
  Context
>;

export interface MalformedUniqueItemsServerInput extends MalformedUniqueItemsInput {}
export namespace MalformedUniqueItemsServerInput {
  /**
   * @internal
   */
  export const validate: (obj: Parameters<typeof MalformedUniqueItemsInput.validate>[0]) => __ValidationFailure[] =
    MalformedUniqueItemsInput.validate;
}
export interface MalformedUniqueItemsServerOutput {}

export type MalformedUniqueItemsErrors = ValidationException;

export class MalformedUniqueItemsSerializer
  implements __OperationSerializer<RestJsonValidationService<any>, "MalformedUniqueItems", MalformedUniqueItemsErrors>
{
  serialize = serializeMalformedUniqueItemsResponse;
  deserialize = deserializeMalformedUniqueItemsRequest;

  isOperationError(error: any): error is MalformedUniqueItemsErrors {
    const names: MalformedUniqueItemsErrors["name"][] = ["ValidationException"];
    return names.includes(error.name);
  }

  serializeError(error: MalformedUniqueItemsErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    switch (error.name) {
      case "ValidationException": {
        return serializeValidationExceptionError(error, ctx);
      }
      default: {
        throw error;
      }
    }
  }
}

export const getMalformedUniqueItemsHandler = <Context>(
  operation: __Operation<MalformedUniqueItemsServerInput, MalformedUniqueItemsServerOutput, Context>
): __ServiceHandler<Context, __HttpRequest, __HttpResponse> => {
  const mux = new httpbinding.HttpBindingMux<"RestJsonValidation", "MalformedUniqueItems">([
    new httpbinding.UriSpec<"RestJsonValidation", "MalformedUniqueItems">(
      "POST",
      [{ type: "path_literal", value: "MalformedUniqueItems" }],
      [],
      { service: "RestJsonValidation", operation: "MalformedUniqueItems" }
    ),
  ]);
  const customizer: __ValidationCustomizer<"MalformedUniqueItems"> = (ctx, failures) => {
    if (!failures) {
      return undefined;
    }
    return {
      name: "ValidationException",
      $fault: "client",
      message: __generateValidationSummary(failures),
      fieldList: failures.map((failure) => ({
        path: failure.path,
        message: __generateValidationMessage(failure),
      })),
    };
  };
  return new MalformedUniqueItemsHandler(
    operation,
    mux,
    new MalformedUniqueItemsSerializer(),
    serializeFrameworkException,
    customizer
  );
};

const serdeContextBase = {
  base64Encoder: toBase64,
  base64Decoder: fromBase64,
  utf8Encoder: toUtf8,
  utf8Decoder: fromUtf8,
  streamCollector: streamCollector,
  requestHandler: new NodeHttpHandler(),
  disableHostPrefix: true,
};
async function handle<S, O extends keyof S & string, Context>(
  request: __HttpRequest,
  context: Context,
  operationName: O,
  serializer: __OperationSerializer<S, O, __ServiceException>,
  operation: __Operation<__OperationInput<S[O]>, __OperationOutput<S[O]>, Context>,
  serializeFrameworkException: (e: __SmithyFrameworkException, ctx: __ServerSerdeContext) => Promise<__HttpResponse>,
  validationFn: (input: __OperationInput<S[O]>) => __ValidationFailure[],
  validationCustomizer: __ValidationCustomizer<O>
): Promise<__HttpResponse> {
  let input;
  try {
    input = await serializer.deserialize(request, {
      endpoint: () => Promise.resolve(request),
      ...serdeContextBase,
    });
  } catch (error: unknown) {
    if (__isFrameworkException(error)) {
      return serializeFrameworkException(error, serdeContextBase);
    }
    return serializeFrameworkException(new __SerializationException(), serdeContextBase);
  }
  try {
    const validationFailures = validationFn(input);
    if (validationFailures && validationFailures.length > 0) {
      const validationException = validationCustomizer({ operation: operationName }, validationFailures);
      if (validationException) {
        return serializer.serializeError(validationException, serdeContextBase);
      }
    }
    const output = await operation(input, context);
    return serializer.serialize(output, serdeContextBase);
  } catch (error: unknown) {
    if (serializer.isOperationError(error)) {
      return serializer.serializeError(error, serdeContextBase);
    }
    console.log("Received an unexpected error", error);
    return serializeFrameworkException(new __InternalFailureException(), serdeContextBase);
  }
}
export class MalformedUniqueItemsHandler<Context> implements __ServiceHandler<Context> {
  private readonly operation: __Operation<MalformedUniqueItemsServerInput, MalformedUniqueItemsServerOutput, Context>;
  private readonly mux: __Mux<"RestJsonValidation", "MalformedUniqueItems">;
  private readonly serializer: __OperationSerializer<
    RestJsonValidationService<Context>,
    "MalformedUniqueItems",
    MalformedUniqueItemsErrors
  >;
  private readonly serializeFrameworkException: (
    e: __SmithyFrameworkException,
    ctx: __ServerSerdeContext
  ) => Promise<__HttpResponse>;
  private readonly validationCustomizer: __ValidationCustomizer<"MalformedUniqueItems">;
  /**
   * Construct a MalformedUniqueItems handler.
   * @param operation The {@link __Operation} implementation that supplies the business logic for MalformedUniqueItems
   * @param mux The {@link __Mux} that verifies which service and operation are being invoked by a given {@link __HttpRequest}
   * @param serializer An {@link __OperationSerializer} for MalformedUniqueItems that
   *                   handles deserialization of requests and serialization of responses
   * @param serializeFrameworkException A function that can serialize {@link __SmithyFrameworkException}s
   * @param validationCustomizer A {@link __ValidationCustomizer} for turning validation failures into {@link __SmithyFrameworkException}s
   */
  constructor(
    operation: __Operation<MalformedUniqueItemsServerInput, MalformedUniqueItemsServerOutput, Context>,
    mux: __Mux<"RestJsonValidation", "MalformedUniqueItems">,
    serializer: __OperationSerializer<
      RestJsonValidationService<Context>,
      "MalformedUniqueItems",
      MalformedUniqueItemsErrors
    >,
    serializeFrameworkException: (e: __SmithyFrameworkException, ctx: __ServerSerdeContext) => Promise<__HttpResponse>,
    validationCustomizer: __ValidationCustomizer<"MalformedUniqueItems">
  ) {
    this.operation = operation;
    this.mux = mux;
    this.serializer = serializer;
    this.serializeFrameworkException = serializeFrameworkException;
    this.validationCustomizer = validationCustomizer;
  }
  async handle(request: __HttpRequest, context: Context): Promise<__HttpResponse> {
    const target = this.mux.match(request);
    if (target === undefined) {
      console.log(
        "Received a request that did not match aws.protocoltests.restjson.validation#RestJsonValidation.MalformedUniqueItems. This indicates a misconfiguration."
      );
      return this.serializeFrameworkException(new __InternalFailureException(), serdeContextBase);
    }
    return handle(
      request,
      context,
      "MalformedUniqueItems",
      this.serializer,
      this.operation,
      this.serializeFrameworkException,
      MalformedUniqueItemsServerInput.validate,
      this.validationCustomizer
    );
  }
}

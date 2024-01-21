/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import Long = require("long");

export const protobufPackage = "product";

export interface GenericResponse {
  code: number;
  message: string;
}

export interface CreateProductRequest {
  name: string;
  description: string;
  price: string;
  category: string;
}

export interface CreateProductResponse {
  id: string;
  responseInfo: GenericResponse | undefined;
}

function createBaseGenericResponse(): GenericResponse {
  return { code: 0, message: "" };
}

export const GenericResponse = {
  encode(message: GenericResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int64(message.code);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenericResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenericResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.code = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.message = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GenericResponse {
    return {
      code: isSet(object.code) ? globalThis.Number(object.code) : 0,
      message: isSet(object.message) ? globalThis.String(object.message) : "",
    };
  },

  toJSON(message: GenericResponse): unknown {
    const obj: any = {};
    if (message.code !== 0) {
      obj.code = Math.round(message.code);
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GenericResponse>, I>>(base?: I): GenericResponse {
    return GenericResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GenericResponse>, I>>(object: I): GenericResponse {
    const message = createBaseGenericResponse();
    message.code = object.code ?? 0;
    message.message = object.message ?? "";
    return message;
  },
};

function createBaseCreateProductRequest(): CreateProductRequest {
  return { name: "", description: "", price: "", category: "" };
}

export const CreateProductRequest = {
  encode(message: CreateProductRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.price !== "") {
      writer.uint32(26).string(message.price);
    }
    if (message.category !== "") {
      writer.uint32(34).string(message.category);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateProductRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateProductRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.price = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.category = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateProductRequest {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      price: isSet(object.price) ? globalThis.String(object.price) : "",
      category: isSet(object.category) ? globalThis.String(object.category) : "",
    };
  },

  toJSON(message: CreateProductRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.price !== "") {
      obj.price = message.price;
    }
    if (message.category !== "") {
      obj.category = message.category;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateProductRequest>, I>>(base?: I): CreateProductRequest {
    return CreateProductRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateProductRequest>, I>>(object: I): CreateProductRequest {
    const message = createBaseCreateProductRequest();
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.price = object.price ?? "";
    message.category = object.category ?? "";
    return message;
  },
};

function createBaseCreateProductResponse(): CreateProductResponse {
  return { id: "", responseInfo: undefined };
}

export const CreateProductResponse = {
  encode(message: CreateProductResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.responseInfo !== undefined) {
      GenericResponse.encode(message.responseInfo, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateProductResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateProductResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.responseInfo = GenericResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateProductResponse {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      responseInfo: isSet(object.responseInfo) ? GenericResponse.fromJSON(object.responseInfo) : undefined,
    };
  },

  toJSON(message: CreateProductResponse): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.responseInfo !== undefined) {
      obj.responseInfo = GenericResponse.toJSON(message.responseInfo);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateProductResponse>, I>>(base?: I): CreateProductResponse {
    return CreateProductResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateProductResponse>, I>>(object: I): CreateProductResponse {
    const message = createBaseCreateProductResponse();
    message.id = object.id ?? "";
    message.responseInfo = (object.responseInfo !== undefined && object.responseInfo !== null)
      ? GenericResponse.fromPartial(object.responseInfo)
      : undefined;
    return message;
  },
};

export interface ProductService {
  CreateProduct(request: CreateProductRequest): Promise<CreateProductResponse>;
}

export const ProductServiceServiceName = "product.ProductService";
export class ProductServiceClientImpl implements ProductService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || ProductServiceServiceName;
    this.rpc = rpc;
    this.CreateProduct = this.CreateProduct.bind(this);
  }
  CreateProduct(request: CreateProductRequest): Promise<CreateProductResponse> {
    const data = CreateProductRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateProduct", data);
    return promise.then((data) => CreateProductResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(globalThis.Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

// @generated by protoc-gen-es v1.5.1 with parameter "target=ts,import_extension="
// @generated from file redpanda/api/dataplane/v1alpha1/acl.proto (package redpanda.api.dataplane.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message redpanda.api.dataplane.v1alpha1.ACL
 */
export class ACL extends Message<ACL> {
  constructor(data?: PartialMessage<ACL>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "redpanda.api.dataplane.v1alpha1.ACL";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ACL {
    return new ACL().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ACL {
    return new ACL().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ACL {
    return new ACL().fromJsonString(jsonString, options);
  }

  static equals(a: ACL | PlainMessage<ACL> | undefined, b: ACL | PlainMessage<ACL> | undefined): boolean {
    return proto3.util.equals(ACL, a, b);
  }
}

/**
 * @generated from enum redpanda.api.dataplane.v1alpha1.ACL.ResourceType
 */
export enum ACL_ResourceType {
  /**
   * @generated from enum value: RESOURCE_TYPE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: RESOURCE_TYPE_ANY = 1;
   */
  ANY = 1,

  /**
   * @generated from enum value: RESOURCE_TYPE_TOPIC = 2;
   */
  TOPIC = 2,

  /**
   * @generated from enum value: RESOURCE_TYPE_GROUP = 3;
   */
  GROUP = 3,

  /**
   * @generated from enum value: RESOURCE_TYPE_CLUSTER = 4;
   */
  CLUSTER = 4,

  /**
   * @generated from enum value: RESOURCE_TYPE_TRANSACTIONAL_ID = 5;
   */
  TRANSACTIONAL_ID = 5,

  /**
   * @generated from enum value: RESOURCE_TYPE_DELEGATION_TOKEN = 6;
   */
  DELEGATION_TOKEN = 6,

  /**
   * @generated from enum value: RESOURCE_TYPE_USER = 7;
   */
  USER = 7,
}
// Retrieve enum metadata with: proto3.getEnumType(ACL_ResourceType)
proto3.util.setEnumType(ACL_ResourceType, "redpanda.api.dataplane.v1alpha1.ACL.ResourceType", [
  { no: 0, name: "RESOURCE_TYPE_UNSPECIFIED" },
  { no: 1, name: "RESOURCE_TYPE_ANY" },
  { no: 2, name: "RESOURCE_TYPE_TOPIC" },
  { no: 3, name: "RESOURCE_TYPE_GROUP" },
  { no: 4, name: "RESOURCE_TYPE_CLUSTER" },
  { no: 5, name: "RESOURCE_TYPE_TRANSACTIONAL_ID" },
  { no: 6, name: "RESOURCE_TYPE_DELEGATION_TOKEN" },
  { no: 7, name: "RESOURCE_TYPE_USER" },
]);

/**
 * @generated from enum redpanda.api.dataplane.v1alpha1.ACL.ResourcePatternType
 */
export enum ACL_ResourcePatternType {
  /**
   * @generated from enum value: RESOURCE_PATTERN_TYPE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: RESOURCE_PATTERN_TYPE_ANY = 1;
   */
  ANY = 1,

  /**
   * @generated from enum value: RESOURCE_PATTERN_TYPE_MATCH = 2;
   */
  MATCH = 2,

  /**
   * @generated from enum value: RESOURCE_PATTERN_TYPE_LITERAL = 3;
   */
  LITERAL = 3,

  /**
   * @generated from enum value: RESOURCE_PATTERN_TYPE_PREFIXED = 4;
   */
  PREFIXED = 4,
}
// Retrieve enum metadata with: proto3.getEnumType(ACL_ResourcePatternType)
proto3.util.setEnumType(ACL_ResourcePatternType, "redpanda.api.dataplane.v1alpha1.ACL.ResourcePatternType", [
  { no: 0, name: "RESOURCE_PATTERN_TYPE_UNSPECIFIED" },
  { no: 1, name: "RESOURCE_PATTERN_TYPE_ANY" },
  { no: 2, name: "RESOURCE_PATTERN_TYPE_MATCH" },
  { no: 3, name: "RESOURCE_PATTERN_TYPE_LITERAL" },
  { no: 4, name: "RESOURCE_PATTERN_TYPE_PREFIXED" },
]);

/**
 * @generated from enum redpanda.api.dataplane.v1alpha1.ACL.Operation
 */
export enum ACL_Operation {
  /**
   * @generated from enum value: OPERATION_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: OPERATION_ANY = 1;
   */
  ANY = 1,

  /**
   * @generated from enum value: OPERATION_ALL = 2;
   */
  ALL = 2,

  /**
   * @generated from enum value: OPERATION_READ = 3;
   */
  READ = 3,

  /**
   * @generated from enum value: OPERATION_WRITE = 4;
   */
  WRITE = 4,

  /**
   * @generated from enum value: OPERATION_CREATE = 5;
   */
  CREATE = 5,

  /**
   * @generated from enum value: OPERATION_DELETE = 6;
   */
  DELETE = 6,

  /**
   * @generated from enum value: OPERATION_ALTER = 7;
   */
  ALTER = 7,

  /**
   * @generated from enum value: OPERATION_DESCRIBE = 8;
   */
  DESCRIBE = 8,

  /**
   * @generated from enum value: OPERATION_CLUSTER_ACTION = 9;
   */
  CLUSTER_ACTION = 9,

  /**
   * @generated from enum value: OPERATION_DESCRIBE_CONFIGS = 10;
   */
  DESCRIBE_CONFIGS = 10,

  /**
   * @generated from enum value: OPERATION_ALTER_CONFIGS = 11;
   */
  ALTER_CONFIGS = 11,

  /**
   * @generated from enum value: OPERATION_IDEMPOTENT_WRITE = 12;
   */
  IDEMPOTENT_WRITE = 12,

  /**
   * @generated from enum value: OPERATION_CREATE_TOKENS = 13;
   */
  CREATE_TOKENS = 13,

  /**
   * @generated from enum value: OPERATION_DESCRIBE_TOKENS = 14;
   */
  DESCRIBE_TOKENS = 14,
}
// Retrieve enum metadata with: proto3.getEnumType(ACL_Operation)
proto3.util.setEnumType(ACL_Operation, "redpanda.api.dataplane.v1alpha1.ACL.Operation", [
  { no: 0, name: "OPERATION_UNSPECIFIED" },
  { no: 1, name: "OPERATION_ANY" },
  { no: 2, name: "OPERATION_ALL" },
  { no: 3, name: "OPERATION_READ" },
  { no: 4, name: "OPERATION_WRITE" },
  { no: 5, name: "OPERATION_CREATE" },
  { no: 6, name: "OPERATION_DELETE" },
  { no: 7, name: "OPERATION_ALTER" },
  { no: 8, name: "OPERATION_DESCRIBE" },
  { no: 9, name: "OPERATION_CLUSTER_ACTION" },
  { no: 10, name: "OPERATION_DESCRIBE_CONFIGS" },
  { no: 11, name: "OPERATION_ALTER_CONFIGS" },
  { no: 12, name: "OPERATION_IDEMPOTENT_WRITE" },
  { no: 13, name: "OPERATION_CREATE_TOKENS" },
  { no: 14, name: "OPERATION_DESCRIBE_TOKENS" },
]);

/**
 * @generated from enum redpanda.api.dataplane.v1alpha1.ACL.PermissionType
 */
export enum ACL_PermissionType {
  /**
   * @generated from enum value: PERMISSION_TYPE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: PERMISSION_TYPE_ANY = 1;
   */
  ANY = 1,

  /**
   * @generated from enum value: PERMISSION_TYPE_DENY = 2;
   */
  DENY = 2,

  /**
   * @generated from enum value: PERMISSION_TYPE_ALLOW = 3;
   */
  ALLOW = 3,
}
// Retrieve enum metadata with: proto3.getEnumType(ACL_PermissionType)
proto3.util.setEnumType(ACL_PermissionType, "redpanda.api.dataplane.v1alpha1.ACL.PermissionType", [
  { no: 0, name: "PERMISSION_TYPE_UNSPECIFIED" },
  { no: 1, name: "PERMISSION_TYPE_ANY" },
  { no: 2, name: "PERMISSION_TYPE_DENY" },
  { no: 3, name: "PERMISSION_TYPE_ALLOW" },
]);

/**
 * @generated from message redpanda.api.dataplane.v1alpha1.ACL.Filter
 */
export class ACL_Filter extends Message<ACL_Filter> {
  /**
   * @generated from field: redpanda.api.dataplane.v1alpha1.ACL.ResourceType resource_type = 1;
   */
  resourceType = ACL_ResourceType.UNSPECIFIED;

  /**
   * @generated from field: optional string resource_name = 2;
   */
  resourceName?: string;

  /**
   * @generated from field: redpanda.api.dataplane.v1alpha1.ACL.ResourcePatternType resource_pattern_type = 3;
   */
  resourcePatternType = ACL_ResourcePatternType.UNSPECIFIED;

  /**
   * @generated from field: optional string principal = 4;
   */
  principal?: string;

  /**
   * @generated from field: optional string host = 5;
   */
  host?: string;

  /**
   * @generated from field: redpanda.api.dataplane.v1alpha1.ACL.Operation operation = 6;
   */
  operation = ACL_Operation.UNSPECIFIED;

  /**
   * @generated from field: redpanda.api.dataplane.v1alpha1.ACL.PermissionType permission_type = 7;
   */
  permissionType = ACL_PermissionType.UNSPECIFIED;

  constructor(data?: PartialMessage<ACL_Filter>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "redpanda.api.dataplane.v1alpha1.ACL.Filter";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "resource_type", kind: "enum", T: proto3.getEnumType(ACL_ResourceType) },
    { no: 2, name: "resource_name", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 3, name: "resource_pattern_type", kind: "enum", T: proto3.getEnumType(ACL_ResourcePatternType) },
    { no: 4, name: "principal", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 5, name: "host", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 6, name: "operation", kind: "enum", T: proto3.getEnumType(ACL_Operation) },
    { no: 7, name: "permission_type", kind: "enum", T: proto3.getEnumType(ACL_PermissionType) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ACL_Filter {
    return new ACL_Filter().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ACL_Filter {
    return new ACL_Filter().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ACL_Filter {
    return new ACL_Filter().fromJsonString(jsonString, options);
  }

  static equals(a: ACL_Filter | PlainMessage<ACL_Filter> | undefined, b: ACL_Filter | PlainMessage<ACL_Filter> | undefined): boolean {
    return proto3.util.equals(ACL_Filter, a, b);
  }
}

/**
 * @generated from message redpanda.api.dataplane.v1alpha1.ListACLsRequest
 */
export class ListACLsRequest extends Message<ListACLsRequest> {
  /**
   * @generated from field: redpanda.api.dataplane.v1alpha1.ACL.Filter filter = 1;
   */
  filter?: ACL_Filter;

  /**
   * @generated from field: int32 page_size = 2;
   */
  pageSize = 0;

  /**
   * Value of the next_page_token field returned by the previous response.
   * If not provided, the system assumes the first page is requested.
   *
   * @generated from field: string page_token = 3;
   */
  pageToken = "";

  constructor(data?: PartialMessage<ListACLsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "redpanda.api.dataplane.v1alpha1.ListACLsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "filter", kind: "message", T: ACL_Filter },
    { no: 2, name: "page_size", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "page_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListACLsRequest {
    return new ListACLsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListACLsRequest {
    return new ListACLsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListACLsRequest {
    return new ListACLsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ListACLsRequest | PlainMessage<ListACLsRequest> | undefined, b: ListACLsRequest | PlainMessage<ListACLsRequest> | undefined): boolean {
    return proto3.util.equals(ListACLsRequest, a, b);
  }
}

/**
 * @generated from message redpanda.api.dataplane.v1alpha1.ListACLsResponse
 */
export class ListACLsResponse extends Message<ListACLsResponse> {
  /**
   * @generated from field: repeated redpanda.api.dataplane.v1alpha1.ListACLsResponse.Resource resources = 1;
   */
  resources: ListACLsResponse_Resource[] = [];

  constructor(data?: PartialMessage<ListACLsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "redpanda.api.dataplane.v1alpha1.ListACLsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "resources", kind: "message", T: ListACLsResponse_Resource, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListACLsResponse {
    return new ListACLsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListACLsResponse {
    return new ListACLsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListACLsResponse {
    return new ListACLsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ListACLsResponse | PlainMessage<ListACLsResponse> | undefined, b: ListACLsResponse | PlainMessage<ListACLsResponse> | undefined): boolean {
    return proto3.util.equals(ListACLsResponse, a, b);
  }
}

/**
 * @generated from message redpanda.api.dataplane.v1alpha1.ListACLsResponse.Policy
 */
export class ListACLsResponse_Policy extends Message<ListACLsResponse_Policy> {
  /**
   * @generated from field: string principal = 1;
   */
  principal = "";

  /**
   * @generated from field: string host = 2;
   */
  host = "";

  /**
   * @generated from field: redpanda.api.dataplane.v1alpha1.ACL.Operation operation = 3;
   */
  operation = ACL_Operation.UNSPECIFIED;

  /**
   * @generated from field: redpanda.api.dataplane.v1alpha1.ACL.PermissionType permission_type = 4;
   */
  permissionType = ACL_PermissionType.UNSPECIFIED;

  constructor(data?: PartialMessage<ListACLsResponse_Policy>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "redpanda.api.dataplane.v1alpha1.ListACLsResponse.Policy";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "principal", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "host", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "operation", kind: "enum", T: proto3.getEnumType(ACL_Operation) },
    { no: 4, name: "permission_type", kind: "enum", T: proto3.getEnumType(ACL_PermissionType) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListACLsResponse_Policy {
    return new ListACLsResponse_Policy().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListACLsResponse_Policy {
    return new ListACLsResponse_Policy().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListACLsResponse_Policy {
    return new ListACLsResponse_Policy().fromJsonString(jsonString, options);
  }

  static equals(a: ListACLsResponse_Policy | PlainMessage<ListACLsResponse_Policy> | undefined, b: ListACLsResponse_Policy | PlainMessage<ListACLsResponse_Policy> | undefined): boolean {
    return proto3.util.equals(ListACLsResponse_Policy, a, b);
  }
}

/**
 * @generated from message redpanda.api.dataplane.v1alpha1.ListACLsResponse.Resource
 */
export class ListACLsResponse_Resource extends Message<ListACLsResponse_Resource> {
  /**
   * @generated from field: redpanda.api.dataplane.v1alpha1.ACL.ResourceType resource_type = 1;
   */
  resourceType = ACL_ResourceType.UNSPECIFIED;

  /**
   * @generated from field: string resource_name = 2;
   */
  resourceName = "";

  /**
   * @generated from field: redpanda.api.dataplane.v1alpha1.ACL.ResourcePatternType resource_pattern_type = 3;
   */
  resourcePatternType = ACL_ResourcePatternType.UNSPECIFIED;

  /**
   * @generated from field: repeated redpanda.api.dataplane.v1alpha1.ListACLsResponse.Policy acls = 4;
   */
  acls: ListACLsResponse_Policy[] = [];

  constructor(data?: PartialMessage<ListACLsResponse_Resource>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "redpanda.api.dataplane.v1alpha1.ListACLsResponse.Resource";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "resource_type", kind: "enum", T: proto3.getEnumType(ACL_ResourceType) },
    { no: 2, name: "resource_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "resource_pattern_type", kind: "enum", T: proto3.getEnumType(ACL_ResourcePatternType) },
    { no: 4, name: "acls", kind: "message", T: ListACLsResponse_Policy, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListACLsResponse_Resource {
    return new ListACLsResponse_Resource().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListACLsResponse_Resource {
    return new ListACLsResponse_Resource().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListACLsResponse_Resource {
    return new ListACLsResponse_Resource().fromJsonString(jsonString, options);
  }

  static equals(a: ListACLsResponse_Resource | PlainMessage<ListACLsResponse_Resource> | undefined, b: ListACLsResponse_Resource | PlainMessage<ListACLsResponse_Resource> | undefined): boolean {
    return proto3.util.equals(ListACLsResponse_Resource, a, b);
  }
}

/**
 * @generated from message redpanda.api.dataplane.v1alpha1.CreateACLRequest
 */
export class CreateACLRequest extends Message<CreateACLRequest> {
  /**
   * ResourceType determines the type of the resource (Topic, ConsumerGroup etc) this
   * ACL shall target.
   *
   * @generated from field: redpanda.api.dataplane.v1alpha1.ACL.ResourceType resource_type = 1;
   */
  resourceType = ACL_ResourceType.UNSPECIFIED;

  /**
   * ResourceName is the name of the resource this acl entry will be on.
   * For requests with resource_type CLUSTER, this will default to the expected
   * value "kafka-cluster".
   *
   * @generated from field: string resource_name = 2;
   */
  resourceName = "";

  /**
   * ResourcePattern type determines the strategy how the provided resource_name
   * is matched (exact match, prefixed, ...) against the actual resource names.
   *
   * @generated from field: redpanda.api.dataplane.v1alpha1.ACL.ResourcePatternType resource_pattern_type = 3;
   */
  resourcePatternType = ACL_ResourcePatternType.UNSPECIFIED;

  /**
   * Principal is the user to apply this acl for. With the Kafka simple
   * authorizer, this must begin with "User:".
   *
   * @generated from field: string principal = 4;
   */
  principal = "";

  /**
   * Host is the host address to use for this acl. Each host to allow
   * the principal access from must be specified as a new creation.
   *
   * @generated from field: string host = 5;
   */
  host = "";

  /**
   * Operation is the operation that shall be allowed (e.g. READ).
   *
   * @generated from field: redpanda.api.dataplane.v1alpha1.ACL.Operation operation = 6;
   */
  operation = ACL_Operation.UNSPECIFIED;

  /**
   * PermissionType determines whether the operation should be allowed or denied.
   *
   * @generated from field: redpanda.api.dataplane.v1alpha1.ACL.PermissionType permission_type = 7;
   */
  permissionType = ACL_PermissionType.UNSPECIFIED;

  constructor(data?: PartialMessage<CreateACLRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "redpanda.api.dataplane.v1alpha1.CreateACLRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "resource_type", kind: "enum", T: proto3.getEnumType(ACL_ResourceType) },
    { no: 2, name: "resource_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "resource_pattern_type", kind: "enum", T: proto3.getEnumType(ACL_ResourcePatternType) },
    { no: 4, name: "principal", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "host", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "operation", kind: "enum", T: proto3.getEnumType(ACL_Operation) },
    { no: 7, name: "permission_type", kind: "enum", T: proto3.getEnumType(ACL_PermissionType) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateACLRequest {
    return new CreateACLRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateACLRequest {
    return new CreateACLRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateACLRequest {
    return new CreateACLRequest().fromJsonString(jsonString, options);
  }

  static equals(a: CreateACLRequest | PlainMessage<CreateACLRequest> | undefined, b: CreateACLRequest | PlainMessage<CreateACLRequest> | undefined): boolean {
    return proto3.util.equals(CreateACLRequest, a, b);
  }
}

/**
 * @generated from message redpanda.api.dataplane.v1alpha1.CreateACLResponse
 */
export class CreateACLResponse extends Message<CreateACLResponse> {
  constructor(data?: PartialMessage<CreateACLResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "redpanda.api.dataplane.v1alpha1.CreateACLResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateACLResponse {
    return new CreateACLResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateACLResponse {
    return new CreateACLResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateACLResponse {
    return new CreateACLResponse().fromJsonString(jsonString, options);
  }

  static equals(a: CreateACLResponse | PlainMessage<CreateACLResponse> | undefined, b: CreateACLResponse | PlainMessage<CreateACLResponse> | undefined): boolean {
    return proto3.util.equals(CreateACLResponse, a, b);
  }
}

/**
 * @generated from message redpanda.api.dataplane.v1alpha1.DeleteACLsRequest
 */
export class DeleteACLsRequest extends Message<DeleteACLsRequest> {
  /**
   * @generated from field: redpanda.api.dataplane.v1alpha1.ACL.Filter filter = 1;
   */
  filter?: ACL_Filter;

  constructor(data?: PartialMessage<DeleteACLsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "redpanda.api.dataplane.v1alpha1.DeleteACLsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "filter", kind: "message", T: ACL_Filter },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteACLsRequest {
    return new DeleteACLsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteACLsRequest {
    return new DeleteACLsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteACLsRequest {
    return new DeleteACLsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: DeleteACLsRequest | PlainMessage<DeleteACLsRequest> | undefined, b: DeleteACLsRequest | PlainMessage<DeleteACLsRequest> | undefined): boolean {
    return proto3.util.equals(DeleteACLsRequest, a, b);
  }
}

/**
 * @generated from message redpanda.api.dataplane.v1alpha1.DeleteACLsResponse
 */
export class DeleteACLsResponse extends Message<DeleteACLsResponse> {
  /**
   * @generated from field: repeated redpanda.api.dataplane.v1alpha1.DeleteACLsResponse.MatchingACL matching_acls = 1;
   */
  matchingAcls: DeleteACLsResponse_MatchingACL[] = [];

  constructor(data?: PartialMessage<DeleteACLsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "redpanda.api.dataplane.v1alpha1.DeleteACLsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "matching_acls", kind: "message", T: DeleteACLsResponse_MatchingACL, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteACLsResponse {
    return new DeleteACLsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteACLsResponse {
    return new DeleteACLsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteACLsResponse {
    return new DeleteACLsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: DeleteACLsResponse | PlainMessage<DeleteACLsResponse> | undefined, b: DeleteACLsResponse | PlainMessage<DeleteACLsResponse> | undefined): boolean {
    return proto3.util.equals(DeleteACLsResponse, a, b);
  }
}

/**
 * @generated from message redpanda.api.dataplane.v1alpha1.DeleteACLsResponse.MatchingACL
 */
export class DeleteACLsResponse_MatchingACL extends Message<DeleteACLsResponse_MatchingACL> {
  /**
   * @generated from field: redpanda.api.dataplane.v1alpha1.ACL.ResourceType resource_type = 1;
   */
  resourceType = ACL_ResourceType.UNSPECIFIED;

  /**
   * @generated from field: string resource_name = 2;
   */
  resourceName = "";

  /**
   * @generated from field: redpanda.api.dataplane.v1alpha1.ACL.ResourcePatternType resource_pattern_type = 3;
   */
  resourcePatternType = ACL_ResourcePatternType.UNSPECIFIED;

  /**
   * @generated from field: string principal = 4;
   */
  principal = "";

  /**
   * @generated from field: string host = 5;
   */
  host = "";

  /**
   * @generated from field: redpanda.api.dataplane.v1alpha1.ACL.Operation operation = 6;
   */
  operation = ACL_Operation.UNSPECIFIED;

  /**
   * @generated from field: redpanda.api.dataplane.v1alpha1.ACL.PermissionType permission_type = 7;
   */
  permissionType = ACL_PermissionType.UNSPECIFIED;

  /**
   * @generated from field: int32 error_code = 8;
   */
  errorCode = 0;

  /**
   * @generated from field: string error_message = 9;
   */
  errorMessage = "";

  constructor(data?: PartialMessage<DeleteACLsResponse_MatchingACL>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "redpanda.api.dataplane.v1alpha1.DeleteACLsResponse.MatchingACL";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "resource_type", kind: "enum", T: proto3.getEnumType(ACL_ResourceType) },
    { no: 2, name: "resource_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "resource_pattern_type", kind: "enum", T: proto3.getEnumType(ACL_ResourcePatternType) },
    { no: 4, name: "principal", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "host", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "operation", kind: "enum", T: proto3.getEnumType(ACL_Operation) },
    { no: 7, name: "permission_type", kind: "enum", T: proto3.getEnumType(ACL_PermissionType) },
    { no: 8, name: "error_code", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 9, name: "error_message", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteACLsResponse_MatchingACL {
    return new DeleteACLsResponse_MatchingACL().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteACLsResponse_MatchingACL {
    return new DeleteACLsResponse_MatchingACL().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteACLsResponse_MatchingACL {
    return new DeleteACLsResponse_MatchingACL().fromJsonString(jsonString, options);
  }

  static equals(a: DeleteACLsResponse_MatchingACL | PlainMessage<DeleteACLsResponse_MatchingACL> | undefined, b: DeleteACLsResponse_MatchingACL | PlainMessage<DeleteACLsResponse_MatchingACL> | undefined): boolean {
    return proto3.util.equals(DeleteACLsResponse_MatchingACL, a, b);
  }
}


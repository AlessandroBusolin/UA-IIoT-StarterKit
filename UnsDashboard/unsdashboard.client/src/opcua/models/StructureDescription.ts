/* tslint:disable */
/* eslint-disable */
/**
 * OPC UA REST API
 * This API provides simple REST based access to an OPC UA server.
 *
 * The version of the OpenAPI document: 0.0.1
 * Contact: office@opcfoundation.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { NodeId } from './NodeId';
import {
    NodeIdFromJSON,
    NodeIdFromJSONTyped,
    NodeIdToJSON,
} from './NodeId';
import type { QualifiedName } from './QualifiedName';
import {
    QualifiedNameFromJSON,
    QualifiedNameFromJSONTyped,
    QualifiedNameToJSON,
} from './QualifiedName';
import type { StructureDefinition } from './StructureDefinition';
import {
    StructureDefinitionFromJSON,
    StructureDefinitionFromJSONTyped,
    StructureDefinitionToJSON,
} from './StructureDefinition';

/**
 * 
 * @export
 * @interface StructureDescription
 */
export interface StructureDescription {
    /**
     * 
     * @type {StructureDefinition}
     * @memberof StructureDescription
     */
    StructureDefinition?: StructureDefinition;
    /**
     * 
     * @type {NodeId}
     * @memberof StructureDescription
     */
    DataTypeId?: NodeId;
    /**
     * 
     * @type {QualifiedName}
     * @memberof StructureDescription
     */
    Name?: QualifiedName;
}

/**
 * Check if a given object implements the StructureDescription interface.
 */
export function instanceOfStructureDescription(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function StructureDescriptionFromJSON(json: any): StructureDescription {
    return StructureDescriptionFromJSONTyped(json, false);
}

export function StructureDescriptionFromJSONTyped(json: any, ignoreDiscriminator: boolean): StructureDescription {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'StructureDefinition': !exists(json, 'StructureDefinition') ? undefined : StructureDefinitionFromJSON(json['StructureDefinition']),
        'DataTypeId': !exists(json, 'DataTypeId') ? undefined : NodeIdFromJSON(json['DataTypeId']),
        'Name': !exists(json, 'Name') ? undefined : QualifiedNameFromJSON(json['Name']),
    };
}

export function StructureDescriptionToJSON(value?: StructureDescription | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'StructureDefinition': StructureDefinitionToJSON(value.StructureDefinition),
        'DataTypeId': NodeIdToJSON(value.DataTypeId),
        'Name': QualifiedNameToJSON(value.Name),
    };
}

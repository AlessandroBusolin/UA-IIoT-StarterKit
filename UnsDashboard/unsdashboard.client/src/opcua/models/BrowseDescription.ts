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

/**
 * 
 * @export
 * @interface BrowseDescription
 */
export interface BrowseDescription {
    /**
     * 
     * @type {NodeId}
     * @memberof BrowseDescription
     */
    NodeId?: NodeId;
    /**
     * 
     * @type {number}
     * @memberof BrowseDescription
     */
    BrowseDirection?: number;
    /**
     * 
     * @type {NodeId}
     * @memberof BrowseDescription
     */
    ReferenceTypeId?: NodeId;
    /**
     * 
     * @type {boolean}
     * @memberof BrowseDescription
     */
    IncludeSubtypes?: boolean;
    /**
     * 
     * @type {number}
     * @memberof BrowseDescription
     */
    NodeClassMask?: number;
    /**
     * 
     * @type {number}
     * @memberof BrowseDescription
     */
    ResultMask?: number;
}

/**
 * Check if a given object implements the BrowseDescription interface.
 */
export function instanceOfBrowseDescription(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BrowseDescriptionFromJSON(json: any): BrowseDescription {
    return BrowseDescriptionFromJSONTyped(json, false);
}

export function BrowseDescriptionFromJSONTyped(json: any, ignoreDiscriminator: boolean): BrowseDescription {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'NodeId': !exists(json, 'NodeId') ? undefined : NodeIdFromJSON(json['NodeId']),
        'BrowseDirection': !exists(json, 'BrowseDirection') ? undefined : json['BrowseDirection'],
        'ReferenceTypeId': !exists(json, 'ReferenceTypeId') ? undefined : NodeIdFromJSON(json['ReferenceTypeId']),
        'IncludeSubtypes': !exists(json, 'IncludeSubtypes') ? undefined : json['IncludeSubtypes'],
        'NodeClassMask': !exists(json, 'NodeClassMask') ? undefined : json['NodeClassMask'],
        'ResultMask': !exists(json, 'ResultMask') ? undefined : json['ResultMask'],
    };
}

export function BrowseDescriptionToJSON(value?: BrowseDescription | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'NodeId': NodeIdToJSON(value.NodeId),
        'BrowseDirection': value.BrowseDirection,
        'ReferenceTypeId': NodeIdToJSON(value.ReferenceTypeId),
        'IncludeSubtypes': value.IncludeSubtypes,
        'NodeClassMask': value.NodeClassMask,
        'ResultMask': value.ResultMask,
    };
}


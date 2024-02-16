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
import type { DataSetMetaDataType } from './DataSetMetaDataType';
import {
    DataSetMetaDataTypeFromJSON,
    DataSetMetaDataTypeFromJSONTyped,
    DataSetMetaDataTypeToJSON,
} from './DataSetMetaDataType';
import type { ExtensionObject } from './ExtensionObject';
import {
    ExtensionObjectFromJSON,
    ExtensionObjectFromJSONTyped,
    ExtensionObjectToJSON,
} from './ExtensionObject';
import type { KeyValuePair } from './KeyValuePair';
import {
    KeyValuePairFromJSON,
    KeyValuePairFromJSONTyped,
    KeyValuePairToJSON,
} from './KeyValuePair';

/**
 * 
 * @export
 * @interface PublishedDataSetDataType
 */
export interface PublishedDataSetDataType {
    /**
     * 
     * @type {string}
     * @memberof PublishedDataSetDataType
     */
    Name?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof PublishedDataSetDataType
     */
    DataSetFolder?: Array<string>;
    /**
     * 
     * @type {DataSetMetaDataType}
     * @memberof PublishedDataSetDataType
     */
    DataSetMetaData?: DataSetMetaDataType;
    /**
     * 
     * @type {Array<KeyValuePair>}
     * @memberof PublishedDataSetDataType
     */
    ExtensionFields?: Array<KeyValuePair>;
    /**
     * 
     * @type {ExtensionObject}
     * @memberof PublishedDataSetDataType
     */
    DataSetSource?: ExtensionObject;
}

/**
 * Check if a given object implements the PublishedDataSetDataType interface.
 */
export function instanceOfPublishedDataSetDataType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PublishedDataSetDataTypeFromJSON(json: any): PublishedDataSetDataType {
    return PublishedDataSetDataTypeFromJSONTyped(json, false);
}

export function PublishedDataSetDataTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublishedDataSetDataType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'Name': !exists(json, 'Name') ? undefined : json['Name'],
        'DataSetFolder': !exists(json, 'DataSetFolder') ? undefined : json['DataSetFolder'],
        'DataSetMetaData': !exists(json, 'DataSetMetaData') ? undefined : DataSetMetaDataTypeFromJSON(json['DataSetMetaData']),
        'ExtensionFields': !exists(json, 'ExtensionFields') ? undefined : ((json['ExtensionFields'] as Array<any>).map(KeyValuePairFromJSON)),
        'DataSetSource': !exists(json, 'DataSetSource') ? undefined : ExtensionObjectFromJSON(json['DataSetSource']),
    };
}

export function PublishedDataSetDataTypeToJSON(value?: PublishedDataSetDataType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Name': value.Name,
        'DataSetFolder': value.DataSetFolder,
        'DataSetMetaData': DataSetMetaDataTypeToJSON(value.DataSetMetaData),
        'ExtensionFields': value.ExtensionFields === undefined ? undefined : ((value.ExtensionFields as Array<any>).map(KeyValuePairToJSON)),
        'DataSetSource': ExtensionObjectToJSON(value.DataSetSource),
    };
}

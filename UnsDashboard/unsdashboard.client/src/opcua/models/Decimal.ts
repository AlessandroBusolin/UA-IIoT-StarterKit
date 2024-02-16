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
/**
 * 
 * @export
 * @interface Decimal
 */
export interface Decimal {
    /**
     * 
     * @type {number}
     * @memberof Decimal
     */
    Scale?: number;
    /**
     * 
     * @type {string}
     * @memberof Decimal
     */
    Value?: string;
}

/**
 * Check if a given object implements the Decimal interface.
 */
export function instanceOfDecimal(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DecimalFromJSON(json: any): Decimal {
    return DecimalFromJSONTyped(json, false);
}

export function DecimalFromJSONTyped(json: any, ignoreDiscriminator: boolean): Decimal {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'Scale': !exists(json, 'Scale') ? undefined : json['Scale'],
        'Value': !exists(json, 'Value') ? undefined : json['Value'],
    };
}

export function DecimalToJSON(value?: Decimal | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Scale': value.Scale,
        'Value': value.Value,
    };
}

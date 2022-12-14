/* tslint:disable */
/* eslint-disable */
/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to an update), the system may or may not try to eventually evict the pod from its node.
 * @export
 * @interface V1NMStateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution
 */
export interface V1NMStateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution {
    /**
     * Required. A list of node selector terms. The terms are ORed.
     * @type {any}
     * @memberof V1NMStateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution
     */
    nodeSelectorTerms: any | null;
}

/**
 * Check if a given object implements the V1NMStateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution interface.
 */
export function instanceOfV1NMStateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "nodeSelectorTerms" in value;

    return isInstance;
}

export function V1NMStateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionFromJSON(json: any): V1NMStateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution {
    return V1NMStateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionFromJSONTyped(json, false);
}

export function V1NMStateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1NMStateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'nodeSelectorTerms': json['nodeSelectorTerms'],
    };
}

export function V1NMStateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToJSON(value?: V1NMStateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'nodeSelectorTerms': value.nodeSelectorTerms,
    };
}


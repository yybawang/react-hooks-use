import React from 'react'
import initialStore from "./initialStore";
import {namespaceParse} from "../utils/namespaceParse";
import {checkObject, checkString} from "../utils/checkType";

export default function useStore(namespace, initialValue){
    namespace = namespaceParse(namespace);
    if(initialValue !== undefined){
        checkObject(initialValue);
    }
    const {object, addObject, setObject, delObject, spliceObject} = initialStore(namespace, initialValue);
    
    function add(key, val){
        checkString(key);
        addObject(key, val);
    }
    
    function reset(){
        setObject({});
    }
    
    function reInitial(values){
        checkObject(values);
        setObject(values);
    }
    
    function del(key){
        delObject(key);
    }
    
    function splice(index, length, values){
        spliceObject(index, length, values);
    }
    
    
    
    return {
        value: object,
        add,
        reset,
        reInitial,
        del,
        splice,
    };
}

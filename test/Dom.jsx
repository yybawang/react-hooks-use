import React from 'react'
import {useArray, useBoolean, useMap, useNumber, useObject, useString} from "../src/index";
import Dom2 from "./Dom2";
import Dom3 from "./Dom3";

export default function Dom(props){
    // const test = useBoolean('test', true);
    // const test2 = useNumber('test', 22);
    // const test = useNumber('test', '22');
    // const test = useArray('test', [23]);
    const test = useString('test', '2');
    return (
        <div>
            {/*<Dom2 />*/}
            {JSON.stringify(test.value)}
            <br />
            {/*{JSON.stringify(test2.value)}*/}
            {/*<Dom3 />*/}
            {/*<button onClick={() => test.toggle()}>Toggle</button>*/}
            {/*<button onClick={() => test.reInitial({sdf: 'ss'})}>Reinit</button>*/}
            {/*<button onClick={() => test2.inc()}>Inc</button>*/}
            {/*<button onClick={() => test.reset()}>Reset</button>*/}
            <button onClick={() => test.set(() => {
                return fetch('https://randomuser.me/api/').then(response => response.json()).then((data) => {
                    return data.info.seed;
                });
            })}>Toggle</button>
            <button onClick={() => test.set(async () => {
                let res = await fetch('https://randomuser.me/api/');
                let user = await res.json();
                return user.info.version;
            })}>Promise</button>
            <button onClick={() => test.substring(4, 5)}>Toggle</button>
            <button onClick={() => test.substr(4, 5)}>Toggle</button>
            {/*<button onClick={() => test2.set('11', '11')}>Toggle</button>*/}
            {/*<button onClick={() => test.set('11')}>Toggle</button>*/}
            {/*<button onClick={() => test.add('test4', '11')}>Toggle</button>*/}
        </div>
    )
}

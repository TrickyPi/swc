import "core-js/modules/web.dom.iterable.js";
import "core-js/modules/web.immediate.js";
import "core-js/modules/web.timers.js";
const foo = {
    a: true
};
const bar = {
    ...foo,
    b: false
};
async function baz() {
    for await (const x of someAsyncThing()){
        console.log(x);
    }
}

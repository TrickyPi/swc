function deferred() {
}
class MuxAsyncIterator {
    constructor(){
        this.signal = deferred();
    }
}
const deferred1 = deferred, MuxAsyncIterator1 = MuxAsyncIterator;
console.log(deferred1, writeResponse, readRequest, MuxAsyncIterator1);
class ServerRequest {
    constructor(){
        this.done = deferred1();
    }
}
async function listenAndServe(addr, handler) {
}
console.log(ServerRequest);
async function writeResponse(w, r) {
}
async function readRequest(conn, bufr) {
}
listenAndServe({
    port: 8080
}, async (req)=>{
});

const worker = new Worker("worker work flow")
worker.postMessage("Hello worker")
worker.onmessage = function (e){
    console.log("Message from worker : ",e.data)
}
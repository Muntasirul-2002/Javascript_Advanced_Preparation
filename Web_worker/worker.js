self.onmessage = function(e){
    console.log("Message from main script : ", e.data)
    self.postMessage("Worker says hi")
}
function getCallback(name,callback){
   console.log (`Hello ${name}`);
   callback()
}

getCallback("Muntasirul", function(){
    console.log("Welcome to JS")
})
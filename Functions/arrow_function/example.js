const getData = async () =>{
    try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json()
        console.groupCollapsed(data)
    } catch (error) {
        console.error("Error fetching data:", error)
    }
}
getData()
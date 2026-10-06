//Create container object
const container = document.querySelector("#container");

//Create 16 "column" divs
for(let i = 0; i < 100; i ++){
    const column = document.createElement("div");
    column.classList.add("column");
    //Create 16 "node" divs in each column
    for(let i = 0; i < 100; i ++){
        const node = document.createElement("div");
        node.classList.add("node");
        
        column.appendChild(node);
    }
    container.appendChild(column);
}


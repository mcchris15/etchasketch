//Create container object
const container = document.querySelector("#container");
const canvas = document.createElement("div");
const sizeBtn = document.querySelector("#prompt")
canvas.setAttribute('id', 'canvas');
container.appendChild(canvas);
sizeBtn.textContent = "Canvas Size: 16 x 16";
sizeBtn.addEventListener("click", () => {
    generateGrid(prompt("Choose canvas size between 1-100:"));
})

//Create 16 "column" divs
for(let i = 0; i < 16; i ++){
    const column = document.createElement("div");
    column.classList.add("column");
    //Create 16 "node" divs in each column
    for(let i = 0; i < 16; i ++){
        const node = document.createElement("div");
        node.classList.add("node");
        column.appendChild(node);
    }
    canvas.appendChild(column);
}

function generateGrid(gridArea){
    sizeBtn.textContent = "Canvas Size: " + gridArea + " x " + gridArea;
    const canv = document.getElementById("canvas");
    while(canv.firstChild){
        canv.removeChild(canv.firstChild);
    }
    //Create as many "column" divs as prompted
    for(let i = 0; i < gridArea; i ++){
        const column = document.createElement("div");
        column.classList.add("column");
        //Create as many "node" divs as prompted in each column
        for(let i = 0; i < gridArea; i ++){
            const node = document.createElement("div");
            node.classList.add("node");
        
            column.appendChild(node);
        }
        canvas.appendChild(column);
    }

}


//Create container object
const container = document.querySelector("#container");

//Create 16 "row" divs
for(let i = 0; i < 16; i ++){
    const row = document.createElement("div");
    row.classList.add("row");
    row.textContent = ":o";
    //Create 16 "column" divs in each row
    for(let i = 0; i < 16; i ++){
        const column = document.createElement("div");
        column.classList.add("column");
        column.textContent = "!";
        row.appendChild(column);
    }
    container.appendChild(row);
}


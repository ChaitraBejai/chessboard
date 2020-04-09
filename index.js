const outerBox = document.getElementById("outer-box")

// Display boxes
for(let i = 0; i < 8; i++ ){
    // Create table row
    const row = document.createElement("tr")
    for(let j = 0; j < 8; j++ ){
        // Create table cell
        const square = document.createElement("td")
        if( (i % 2) != (j % 2) ){
            square.className = "black-box"
        }
        else{
            square.className = "white-box"
        }
        // onclick handle function
        square.onclick = () => handleClick(i, j)
        row.appendChild(square)
        outerBox.appendChild(row)
    }
}

// Function to color the diagonal boxes
handleClick = (i, j) => {
    
    //Erase the previous click
    for(let m = 0; m < 8; m++ ){
        for(let n = 0; n < 8; n++ ){
            let tableCell = document.getElementsByTagName("tr")[m].getElementsByTagName("td")[n]
            if( (m % 2) != (n % 2) ){
                tableCell.className = "black-box"
            }
            else{
                tableCell.className = "white-box"
            }
        }
    }


    // Variable x is for row, variable y and z are for left-to-right and right-to-left diagonals respectively
    for( let x = 0, y = j - i, z = j + i; x < 8; x++, y++, z--){
        let a = document.getElementsByTagName("tr")[x]
        let b = a.getElementsByTagName("td")[y]
        let c = a.getElementsByTagName("td")[z]
        
        // Paint left to right diagnal red
        if((y < 8) && (y >= 0)){
            b.className = "red-box"
            
        }
        // Paint right to left diagonal red
        if((z < 8) && (z >= 0)){
            c.className = "red-box"
        }
    }
}
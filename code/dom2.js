function createTable(rows, cells) {
    table = document.createElement('table'); // This creates a table Element.
    
    
    
    var tHeader = document.createElement('tr'); //This creates one row which later you will append to table
    //In each row you have to create 4 coloumns. So let's just create 4 cells.
    for (var i = 0; i < cells; ++i) {
        //Create the text you want to have in this cell; See the slides to know how to do that
        //Create a cell, <th> in this case because we want to have a header for our table
        var headerCell = document.createElement('th');
        //Append the text created above to this cell. See the slides to know how to do that
     //Append this cell with text to the row created outside the for loop.
     tHeader.appendChild(header);   
    }
    //Append the header to the table
    table.appendChild(tHeader);

//You have created a header row and appended it to the table. Let's create more rows and more cells in them.

    for (var i = 0; i < rows; ++i) {
        //Creates a row
        var row = document.createElement('tr');
        
        //Creates cells for each row
        for (var j = 0; j < cells; ++j) {
            var td = document.createElement('td');
            //Append this cell to row, Similar to how we have appended 'th' cells
            //Add text inside that cell
            row.cells[j].appendChild(document.createTextNode("<Add your text>"));
        }
        //Append that created row to the table. Similar to how we have appended header row.
    }
    return table;
}


//Append the table to body. Otherwise you will not be able to see anything.
document.body.appendChild(createTable(4,4)); //createTable is a function which will create the table and return it.
let table = document.querySelector("table");
let table_row = document.getElementsByClassName("table-row");
let td = document.querySelectorAll("td");
numberCell()
function numberCell(){
  var rLength = table.rows.length;
  for(i=0;i<rLength;i++){
    var oCells = table.rows.item(i).cells;
    var cellLength = oCells.length;
    for(j=0;j<cellLength;j++){
       oCells.item(j).innerHTML=parseInt(Math.random()*10);
    }
  }
}
numberCell();

function getSum(){
  var lastCol = (table.rows[0].cells.length)-1;
  var lastRow = table.rows.length;
  var oTable = document.querySelector("table");
  var rowLength = oTable.rows.length;
  var total = 0;
  for(i=0;i<rowLength;i++){
    var oCells = oTable.rows.item(i).cells;
    var cellLength = oCells.length;
    for(j=0;j<cellLength;j++){
        total = total + Number(oCells.item(j).innerHTML);
    }
  }
  
  let showTotal = document.getElementById("sum");
  showTotal.innerText= `Sum : ${total}`;
  let desc = document.getElementById("desc");
  desc.innerText = `The number of rows is ${lastRow} and number of columns is ${lastCol+1}`;
  
}

function addCol() {
    var lastrow = table.rows.length;
	var lastcol = table.rows[0].cells.length;
	var headertxt = table.rows[0].cells[lastcol-1].innerHTML;
	var headernum = headertxt.slice(headertxt.indexOf("PO")+2);
	headernum = headernum.trim();
	
	for(i=0; i<lastrow;i++)
	{
		var cell1 = table.rows[i].insertCell(lastcol);	
	}
    numberCell();
}

function addRow() {
    
    var lastrow = table.rows.length;
	var lastcol = table.rows[0].cells.length;	
	var row = table.insertRow(lastrow);	
	for(i=0; i<lastcol;i++)
	{
		var cell1 = row.insertCell(i); 
	}
  numberCell();
}


function removeRow(){
	var lastrow = table.rows.length;
	if(lastrow<2){
		alert("You have reached the minimal required rows.");
		return;
	}
	table.deleteRow(lastrow-1);
}

function removeCol(){

	var lastcol = (table.rows[0].cells.length)-1;
	var lastrow = (table.rows.length);
	if(lastcol<3){
		alert("You have reached the minimal required columns.");
		return;
	}
	
	for(i=0; i<lastrow;i++)
	{
		table.rows[i].deleteCell(lastcol);
	}
}


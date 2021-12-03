//import * as React from 'react';
import React, { useState } from 'react';
//import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { FormControlLabel, TextField, Typography, Checkbox } from '@mui/material';
import { Container } from '@mui/material';
import { Button } from '@mui/material'
import { flexbox } from '@mui/system';
import './App.css';
import { InputLabel } from '@mui/material';
import { Select } from '@mui/material';
import { MenuItem } from '@mui/material';
import { DropdownButton } from 'react-bootstrap';

import { Table, ToastBody } from "react-bootstrap";
// To make rows collapsible
import "bootstrap/js/src/collapse.js";
import { parenthesizedExpression } from '@babel/types';


export default function BasicTable() {
  const [value, setValue] = useState("");

  const handleChange = e => setValue(e.target.value);

  return (

    <div>
      <h2>Quote Table Creator</h2>

      <div>
        <table>
          <tr>
            <th>Order Details</th>
            <th>Material / OS Details</th>
            <th>Operation</th>

          </tr>
        </table>
      </div>
      <table id="myTable">

        <tr>
          <td>Options</td>
          <td>Part Number</td>
          <td>Drawing</td>
          <td>Rev</td>
          <td>Item Description</td>
          <td>Qty</td>

          <td>Operation</td>
          <td>Setup</td>
          <td>Run</td>
          <td>Risk</td>
        </tr>

      </table>

      <p />
      <p />


      <div id="form">

        <div> Part Details</div>
        <p/>
        <TextField
          id="partNumId"
          label="Part Number"
        />
        <TextField
          id="drawingId"
          label="Drawing"
        />
        <TextField
          id="revId"
          label="Rev"
        />
        <TextField
          id="itemDescId"
          label="Item Description"
        />
        <TextField
          id="qtyId"
          label="Qty"
        />




        <p />
        <div>Operation Details</div>
        <br/>

        <InputLabel id="operationSelect"></InputLabel>
        <Select
          labelId="operationSelect"
          id="operationId"
          label="Operation"
          onChange={handleChange}
          defaultValue={"Saw"}
        >
          <MenuItem value={"Saw"}>Saw</MenuItem>
          <MenuItem value={"Manuals"}>Manuals</MenuItem>
          <MenuItem value={"VTC/HCN"}>VTC/HCN</MenuItem>
          <MenuItem value={"CNC Lathes"}>CNC Lathes</MenuItem>
          <MenuItem value={"HBM"}>HBM</MenuItem>
          <MenuItem value={"QC/REC"}>QC/REC</MenuItem>
          <MenuItem value={"Braze/Weld"}>Braze/Weld</MenuItem>
          <MenuItem value={"VTL/Mega"}>VTL/Mega</MenuItem>
          <MenuItem value={"Assembly"}>Assembly</MenuItem>
        </Select>

        <TextField
          id="setupId"
          label="Setup"
        />

        <TextField
          id="runId"
          label="Run"
        />

        <Select
          labelId="riskSelect"
          id="riskId"
          label="Risk Select"
          onChange={handleChange}
          defaultValue={1}

        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>

        </Select>
        <p />
        <InputLabel id="childSelect">Child Row</InputLabel>
        <Select
          labelId="childSelect"
          id="7"
          label="Child Select"
          onChange={handleChange}
          defaultValue={"Parent"}

        >
          <MenuItem value={"Parent"}>Parent</MenuItem>
          <MenuItem value={"Child"}>Child</MenuItem>
          <MenuItem value={"Final Child"}>Final Child</MenuItem>

        </Select>



      </div>

      <Button variant="contained" onClick={() => addRow(0)}>Add Row</Button>

    </div>

  );


  function addRow(child, rowNum) {
    var table = document.getElementById("myTable");

    //Inserts rows to a specific spot if defined
    if (rowNum != undefined) {
      var row = table.insertRow(rowNum);
    }
    else {
      var row = table.insertRow(-1);
    }

    //Adds cells to the row
    var optonCell = row.insertCell(0);
    var partNumCell = row.insertCell(1);
    var drawingCell = row.insertCell(2);
    var revCell = row.insertCell(3);
    var itemDescCell = row.insertCell(4);
    var qtyCell = row.insertCell(5);
    var operationCell = row.insertCell(6);
    var setupCell = row.insertCell(7);
    var runCell = row.insertCell(8);
    var riskCell = row.insertCell(9);
    

    //Makes cell content editable
    partNumCell.contentEditable = "true";
    drawingCell.contentEditable = "true";
    revCell.contentEditable = "true";
    itemDescCell.contentEditable = "true";
    qtyCell.contentEditable = "true";
    operationCell.contentEditable = "true";
    setupCell.contentEditable = "true";
    runCell.contentEditable = "true";
    riskCell.contentEditable = "true";


    partNumCell.innerHTML = document.getElementById("partNumId").value;

    //Determines child/parent row
    if (document.getElementById("7").textContent == "Child") {
      row.className = "childbackground";
      partNumCell.className = "child";
    }
    else if (document.getElementById("7").textContent == "Final Child") {
      row.className = "childFinalBackground";
      partNumCell.className = "childFinal";
    }

    //Fills in table with input data
    drawingCell.innerHTML = document.getElementById("drawingId").value;
    revId.innerHTML = document.getElementById("revId").value;
    itemDescCell.innerHTML = document.getElementById("itemDescId").value;
    qtyCell.innerHTML = document.getElementById("qtyId").value;
    operationCell.innerHTML = (document.getElementById("operationId").textContent);
    runCell.innerHTML = document.getElementById("runId").value;
    setupCell.innerHTML = document.getElementById("setupId").value;
    riskCell.innerHTML = (document.getElementById("riskId").textContent);

    //Creates option dropdown





    var optionDiv = document.createElement("div");
    optionDiv.className = "dropdown";



    var optionButton = document.createElement("Button");
    optionButton.className = "dropbtn";
    optionButton.textContent = "Options";
    optionDiv.appendChild(optionButton);

    var optionDropdownContentDiv = document.createElement("div");
    optionDropdownContentDiv.className = "dropdown-content";
    optionDiv.appendChild(optionDropdownContentDiv);



    //Creates delete button
    var deleteButton = document.createElement("a");
    deleteButton.href = "#";
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function (e) {
      document.getElementById("myTable").deleteRow(this.parentNode.parentNode.parentNode.parentNode.rowIndex);
      console.log(" THIS = " + JSON.stringify(this.parentNode.parentNode.parentNode.parentNode.rowIndex))
    });
    optionDropdownContentDiv.appendChild(deleteButton)

    //Creates move up button
    var moveUpButton = document.createElement("a");
    moveUpButton.href = "#";
    moveUpButton.textContent = "Move Row Up"
    moveUpButton.addEventListener("click", function (e) {
      var index = this.parentNode.parentNode.parentNode.parentNode.rowIndex
      var rows = document.getElementById("myTable").rows,
        parent = rows[index].parentNode;

      if (index > 1) {
        parent.insertBefore(rows[index], rows[index - 1]);
        index--;
      }
    });
    optionDropdownContentDiv.appendChild(moveUpButton);

    //Creates move down button
    var moveDownButton = document.createElement("a");
    moveDownButton.href = "#";
    moveDownButton.textContent = "Move Row Down"
    moveDownButton.addEventListener("click", function (e) {
      var index = this.parentNode.parentNode.parentNode.parentNode.rowIndex
      var rows = document.getElementById("myTable").rows,
        parent = rows[index].parentNode;

      if (index < rows.length - 1) {
        parent.insertBefore(rows[index + 1], rows[index]);
        index++;
      }
    });
    optionDropdownContentDiv.appendChild(moveDownButton);

    //Creates add row above button
    var addRowAboveButton = document.createElement("a");
    addRowAboveButton.href = "#";
    addRowAboveButton.textContent = "Add Row Above"
    addRowAboveButton.addEventListener("click", function (e) {
      addRow(childDefine(), this.parentNode.parentNode.parentNode.parentNode.rowIndex);
    });
    optionDropdownContentDiv.appendChild(addRowAboveButton);

    //Creates add row below button
    var addRowBelowButton = document.createElement("a");
    addRowBelowButton.href = "#";
    addRowBelowButton.textContent = "Add Row Below"
    addRowBelowButton.addEventListener("click", function (e) {
      addRow(childDefine(), this.parentNode.parentNode.parentNode.parentNode.rowIndex + 1);
    });
    optionDropdownContentDiv.appendChild(addRowBelowButton);

    optonCell.appendChild(optionDiv)



    //Determines whether a new row is a child or parent
    function childDefine() {
      if (document.getElementById("7").textContent == "Parent") {
        return 0;
      }
      else if (document.getElementById("7").textContent == "Child") {
        return 1;
      }
      else {
        return 2;
      }
    }

  }

}



//Drop down for options on left side of table
//Risk assessment for operation and Full quote


//tr:nth-child(even) {
//  background-color: #dddddd;
//}

/*
          <th>Cost</th>
          <th>Discount</th>
          <td>Unit Labor Cost</td>
          <td>Unit Material Cost</td>
          <td>Total Labor Cost</td>
          <td>Total Material Cost</td>
          <td>Total Cost</td>
          <td>Sell Price at 30%</td>
          <td>Sell Price at 35%</td>
          <td>Sell Price at 40%</td>

          cell7.innerHTML = '<td><input type="button" class ="deleteButton" value="Delete"</input> </td>'
    cell7.addEventListener("click", function (e) {
      document.getElementById("myTable").deleteRow(this.parentNode.rowIndex);
    });

*/

/*
    input.addEventListener("keypress", function (event) {
      if (event.defaultPrevented) {
        return; // Do nothing if event already handled
      }

      if (event.code === "Enter") {
        event.preventDefault();

        partNumCell.contentEditable = "false";
        partNumCell.contentEditable = "true";

        drawingCell.contentEditable = "false";
        drawingCell.contentEditable = "true";

        revCell.contentEditable = "false";
        revCell.contentEditable = "true";

        itemDescCell.contentEditable = "false";
        itemDescCell.contentEditable = "true";

        qtyCell.contentEditable = "false";
        qtyCell.contentEditable = "true";

        operationCell.contentEditable = "false";
        operationCell.contentEditable = "true";

        setupCell.contentEditable = "false";
        setupCell.contentEditable = "true";

        runCell.contentEditable = "false";
        runCell.contentEditable = "true";
      }
    });



    cell8.innerHTML = '<td><button>&ShortUpArrow;</button></td>'
    cell8.addEventListener("click", function (e) {
      var index = this.parentNode.rowIndex
      var rows = document.getElementById("myTable").rows,
        parent = rows[index].parentNode;

      if (index > 1) {
        parent.insertBefore(rows[index], rows[index - 1]);
        // when the row go up the index will be equal to index - 1
        index--;
      }
    });

    cell9.innerHTML = '<td><button>&ShortDownArrow;</button></td>'p
    cell9.addEventListener("click", function (e) {
      var index = this.parentNode.rowIndex
      var rows = document.getElementById("myTable").rows,
        parent = rows[index].parentNode;

      if (index < rows.length - 1) {
        parent.insertBefore(rows[index + 1], rows[index]);
        // when the row go down the index will be equal to index + 1
        index++;
      }
    });
 cell10.innerHTML = '<td><button>&ShortUpArrow; Add Row Above</button></td>'
    cell10.addEventListener("click", function (e) {
      addRow(childDefine(), this.parentNode.rowIndex);
    });

    cell11.innerHTML = '<td><button>&ShortDownArrow; Add Row Below</button></td>'
    cell11.addEventListener("click", function (e) {
      addRow(childDefine(), this.parentNode.rowIndex + 1);
    });


<DropdownButton id="dropdown-basic-button" title="Dropdown button">
  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
</DropdownButton>



*/
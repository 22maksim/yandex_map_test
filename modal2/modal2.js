

// Get DOM Elements
const modal = document.querySelector('#my-modal');
const modalBtn = document.querySelector('#modal-btn');
const closeBtn = document.querySelector('.close');

// Events
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// Open
function openModal() {
  modal.style.display = 'block';
}

// Close
function closeModal() {
  modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal) {
  modal.style.display = 'none';
  }
}

//cell editing-----------------------------------

// const rTds = document.querySelectorAll('td');

// for (let i = 0; i < rTds.length; i++) {
//   rTds[i].addEventListener('click', function func() {
//     let input = document.createElement('input');
//     console.log(i);
//     input.value = rTds[i].innerHTML;
//     this.innerHTML = '';
//     rTds[i].appendChild(input);

//     let td = this;
//     input.addEventListener('blur', function() {
//       td.innerHTML = this.value;
//       td.addEventListener('click', func)
//     });
//     this.removeEventListener('click', func);
//   });
// }
      
//----------------------------------

let rIndex, 
    table = document.getElementById("table");

    function checkEmptyInput() {
      let isEmpty = false,
          fname = document.getElementById('fname').value,
          lname = document.getElementById('lname').value,
          age = document.getElementById('age').value;

          if (fname === "") {
            alert("First Name не имеет значения");
            isEmpty = true;
          } 
          else if (lname === "") {
            alert("Last Name не имеет значения");
            isEmpty = true;
          } 
          else if (age === '') {
            alert("Age не имеет значения");
            isEmpty = true;
          }
          return isEmpty;
    }

function addHtmlTableRow() {
  if(!checkEmptyInput()) {
  let newRow = table.insertRow(table.length),
      cell1 = newRow.insertCell(0),
      cell2 = newRow.insertCell(1),
      cell3 = newRow.insertCell(2),
      fname = document.getElementById('fname').value,
      lname = document.getElementById('lname').value,
      age = document.getElementById('age').value;

  cell1.innerHTML = fname;
  cell2.innerHTML = lname;
  cell3.innerHTML = age;

  selectedRowToInput();
  }
}

function selectedRowToInput() {
 for (let i = 1; i < table.rows.length; i++) {
  table.rows[i].onclick = function() {
    rIndex = this.rowIndex;
    document.getElementById('fname').value = this.cells[0].innerHTML;
    document.getElementById('lname').value = this.cells[1].innerHTML;
    document.getElementById('age').value = this.cells[2].innerHTML;
  }

 }
}
selectedRowToInput();

function editHtmlTableSelectedRow() {
  let fname = document.getElementById('fname').value,
      lname = document.getElementById('lname').value,
      age = document.getElementById('age').value;
  
  if(!checkEmptyInput()) {
    table.rows[rIndex].cells[0].innerHTML = fname;
    table.rows[rIndex].cells[1].innerHTML = lname;
    table.rows[rIndex].cells[2].innerHTML = age;
  }
}

function removeSelectedRow() {
  table.deleteRow(rIndex);
}
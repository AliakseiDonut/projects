const board = document.querySelector('.board');

function genBoard(){ 
    for(let i = 0; i < 9; i++){ 
        let row = document.createElement('tr'); 
        for(let j = 0; j < 9; j++){ 
            let cell = document.createElement('td');
            if ((i % 3 === 2) && (j % 3 === 2)) {
              cell.style.borderRight = '4px solid black';
              cell.style.borderBottom = '4px solid black';
            } else if (i % 3 === 2) {
              cell.style.borderBottom = '4px solid black';
            } else if (j % 3 === 2) {
              cell.style.borderRight = '4px solid black';
            }
            row.appendChild(cell); 
        } 
        board.appendChild(row); 
    } 
} 
genBoard();

const cells = document.querySelectorAll('.board td');

function getRowsMatrix() { 
    let matrix = []; 
    let row = []; 
    for (let i = 0; i < cells.length; i++) { 
      let value = cells[i].textContent; 
      row.push(value); 
      if ((i + 1) % 9 === 0) { 
        matrix.push(row); 
        row = []; 
      } 
    } 
    return matrix; 
} 
  
function getSectionsMatrix() {
  let matrix = [];
  for (let i = 0; i < 9; i += 3) {
    for (let j = 0; j < 9; j += 3) {
      let section = [];
      for (let k = i; k < i + 3; k++) {
        for (let l = j; l < j + 3; l++) {
          let value = cells[k * 9 + l].textContent;
          section.push(value);
        }
      }
      matrix.push(section);
    }
  }
  return matrix;
}

function getColumnsMatrix() {
  let matrix = [];
  for (let i = 0; i < 9; i++) {
    let column = [];
    for (let j = i; j < cells.length; j += 9) {
      let value = cells[j].textContent;
      column.push(value);
    }
    matrix.push(column);
  }
  return matrix;
}

function getActiveCellPosition() {
    let activeCell = document.querySelector('.active');
    let row = activeCell.parentNode.rowIndex;
    let column = activeCell.cellIndex;
    return [row, column];
  }

cells.forEach(element => {
    element.addEventListener('click', event => {
        cells.forEach(el => {
            el.classList.remove('active');
        });    
        event.target.classList.add('active');
        
    document.querySelector('.input tr').remove();
    let row = document.createElement('tr');
    availableValues().forEach(el => {
        let cell = document.createElement('td');
        cell.textContent = el;
        cell.addEventListener('click', event => {
          document.querySelector('.active').textContent = el;
        });
        row.append(cell);
      });
      document.querySelector('.input').append(row);
      console.log(availableValues());
    });




  });

function availableValues(){
    let arr = ['1', '2', '3', '4', '5', '6', '7', '8', '9']; 
    let res = []; 
    let y = getActiveCellPosition()[0]; 
    let x = getActiveCellPosition()[1]; 
    let row = getRowsMatrix()[y]; 
    let column = getColumnsMatrix()[x]; 
    let section = getSectionsMatrix()[Math.floor(y/3) * 3 + Math.floor(x/3)]; 

    arr.forEach(el => { 
        if(!row.includes(el) && !column.includes(el) && !section.includes(el)){ 
            res.push(el); 
        } 
    }); 
    return res; 
}
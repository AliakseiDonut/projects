const chessboard = document.querySelector('.chessboard');
const whiteInput = document.querySelector('#white-input');
const blackInput = document.querySelector('#black-input');
const numbers = document.querySelector('.numbers');
const lettersDiv = document.querySelector('.letters');

const letters = ['A', 'B', 'C', 'D', 'I', 'F', 'G', 'H'];  


const genChessboard = () => {
    for(let i = 0; i < 8; i++){
        let num = document.createElement('h1');
        num.textContent = i+1;
        numbers.append(num);
        let letter = document.createElement('h1');
        letter.textContent = letters[i];
        lettersDiv.append(letter);
        if(i % 2 === 0){
            let row = document.createElement('tr');
            for(let j = 0; j < 8; j++){
                if(j % 2 === 0){
                    let cell = document.createElement('td')
                    if(i === 0 || i === 2){
                        let chess = document.createElement('div');
                        chess.classList.add('black-chess');
                        cell.append(chess);
                    }else if(i === 6){
                        let chess = document.createElement('div');
                        chess.classList.add('white-chess');
                        cell.append(chess);
                    }
                    row.append(cell);
                }else{
                    let cell = document.createElement('td')
                    cell.classList.add('black');
                    row.append(cell);
                }
            }  
            chessboard.append(row);
            
        }else{
            let row = document.createElement('tr');
            for(let j = 0; j < 8; j++){
                if(j % 2 === 0){
                    let cell = document.createElement('td')
                    cell.classList.add('black');
                    row.append(cell);
                }else{
                    let cell = document.createElement('td')
                    if(i === 1){
                        let chess = document.createElement('div');
                        chess.classList.add('black-chess');
                        cell.append(chess);
                    }else if(i === 7 || i === 5){
                        let chess = document.createElement('div');
                        chess.classList.add('white-chess');
                        cell.append(chess);
                    }
                    row.append(cell);               
                 }
            }  
            chessboard.append(row);
        }
    }    

}

genChessboard();

const cells = document.querySelectorAll("td");

cells.forEach(element => {
    element.addEventListener('click', () => {
        if(!element.firstChild){
            let chess = document.createElement('div');
            if(whiteInput.checked){
                chess.classList.add('white-chess');
            }else{
                chess.classList.add('black-chess');
            }
            element.append(chess);
        }else{
            element.firstChild.remove();
        }
    });
});


function genTable(){
    const table = document.createElement('table');
    const dataKeys = Object.keys(data[0]);
    const tr = document.createElement('tr');
    dataKeys.forEach(element => {
        const th = document.createElement('th');
        th.textContent = element;
        tr.append(th);
    });
    table.append(tr);

    data.forEach(obj => {
        const tr = document.createElement('tr');
        dataKeys.forEach(el => {
            const td = document.createElement('td');
            td.textContent = obj[el];
            tr.append(td);
        });
        table.append(tr);
    })
    
    document.body.append(table);
}
genTable();


const table = document.querySelector('table');


function getValues(){
    const rows = table.rows;
    let quantity = [];
    let prices = [];
    let managers = [];

    for(let i = 1; i < rows.length; i++){
        quantity.push(rows[i].cells[2].textContent);
        prices.push(rows[i].cells[3].textContent);
        managers.push(rows[i].cells[7].textContent);
    }

    quantity = quantity.map(el => +el);
    prices = prices.map(el => +el);

    return [quantity, prices, managers];
}


function average(arr){
    let sum = arr.reduce((sum, current) => sum + current,0);
    return sum / arr.length;
}


function mostCommonElement(arr){
    let obj = {};
    arr.forEach(el => {
        if(!(el in obj)){
            obj[el] = 1;
        }else{
            obj[el]++;
        }
    });

    const maxValue = Math.max(...Object.values(obj)); 

    for(let key in obj){
        if(obj[key] == maxValue){
            return key;
        }
    }
    return maxValue;
}


function genList(){
    const list = document.createElement('ul');
    const avgQuantity = document.createElement('li');
    avgQuantity.textContent = `Average quantity: ${average(getValues()[0])}`;
    const maxQuantity = document.createElement('li'); 
    maxQuantity.textContent = `Max quantity: ${Math.max(...getValues()[0])}`;
    const minQuantity = document.createElement('li');
    minQuantity.textContent = `Min quantity: ${Math.min(...getValues()[0])}`;
    const avgPrice = document.createElement('li');
    avgPrice.textContent = `Average price: ${average(getValues()[1])}`;
    const maxPrice = document.createElement('li'); 
    maxPrice.textContent = `Max price: ${Math.max(...getValues()[1])}`;
    const minPrice = document.createElement('li');
    minPrice.textContent = `Min price: ${Math.min(...getValues()[1])}`;
    const mostCommonManager = document.createElement('li');
    mostCommonManager.textContent = `Most common manager: ${mostCommonElement(getValues()[2])}`;
    list.append(avgQuantity, maxQuantity, minQuantity, avgPrice, maxPrice, minPrice, mostCommonManager);
    document.body.append(list);
}
genList();

table.addEventListener('mouseover', event => {
    if(event.target.tagName == 'TD'){
        event.target.classList.add('active');
        event.target.parentElement.style.background = 'rgba(61, 51, 146, 0.418)';
    }
});

table.addEventListener('mouseout', event => {
    if(event.target.tagName == 'TD'){
        event.target.classList.remove('active');
        if(event.target.parentElement.rowIndex % 2 == 0){
            event.target.parentElement.style.background = 'white';
        }else{
            event.target.parentElement.style.background = 'rgba(25, 0, 255, 0.178)';
        }
    }
}); 
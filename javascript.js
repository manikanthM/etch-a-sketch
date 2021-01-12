
// select grid where coloring takes place 
const grid = document.querySelector('.grid');

// creating a grid of 4*4 sqaure 
createGrid = () => {
for (let i = 0; i < 16; i++) {
    const div = document.createElement('div');
    div.classList.add('cell');
    div.addEventListener('mouseover', function(event){
        event.target.style.backgroundColor = 'black';
    })
    grid.appendChild(div); 
}
};

// while resizing should remove existing grid 
function removeAllChildNodes(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

// geting a RGB color
function getRandomColor(){
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
}

// claculating slider value 
const slider = document.getElementById('slider');
const screenVal = document.querySelector('span');
console.log(slider);
slider.addEventListener('input', function(){
    let val = document.getElementById('slider').value;
    screenVal.textContent = val;
    removeAllChildNodes(grid);
    grid.setAttribute('style', `grid-template-columns: repeat(${val}, 3fr); grid-template-rows: repeat(${val}, 3fr);`);
    for (let i = 0; i < val*val; i++) {
        const div = document.createElement('div');
        div.classList.add('cell');
        div.addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = 'black';
        })
        grid.appendChild(div); 
    }
});

// implementing reset click
const reset = document.querySelector('#reset');
reset.addEventListener('click', () => { 
    let val = document.getElementById('slider').value;
    let cell = Array.from(grid.children);
    cell.forEach(element => {
        element.style.backgroundColor = "white";
    })
});


// implementing RGB button click and getting random color 
const rgb = document.querySelector('#rgb');
rgb.addEventListener('click', function(){
    let val = document.getElementById('slider').value;
    let cell = Array.from(grid.children);
    cell.forEach(element =>  {
        element.addEventListener('mouseover', (event) => {
            event.target.style.backgroundColor = getRandomColor();
        })
    })
});


// implementing black button and assigning black color
const black = document.querySelector('#black');
black.addEventListener('click', () => {
    let val = document.getElementById('slider').value;
    let cell = Array.from(grid.children);
    cell.forEach(element =>  {
        element.addEventListener('mouseover', (event) => {
            event.target.style.backgroundColor = "black";
        })
    })
});


// erasing button and erases particular color at particular grid
const eraser = document.querySelector('#eraser');
eraser.addEventListener('click', () => {
    let val = document.getElementById('slider').value;
    let cell = Array.from(grid.children);
    cell.forEach(element =>  {
        element.addEventListener('mouseover', (event) => {
            event.target.style.backgroundColor = "white";
        })
    })
});

// implementing a particular color button
const chooseColor = document.querySelector('#color');
chooseColor.addEventListener('input', () => {
    let val = document.getElementById('slider').value;
    let newColor = document.getElementById('color').value;
    // console.log(newColor);
    let cell = Array.from(grid.children);
    cell.forEach(element => {
        console.log(element);
        element.addEventListener('mouseover', (event) => {
            event.target.style.backgroundColor = newColor;
        })
    })
});

//intialsing 16*16 grid 
createGrid();

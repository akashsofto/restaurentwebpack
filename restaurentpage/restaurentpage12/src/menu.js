//import tea1 from "./img/tea1.jpg"
export const appendMenu = () => {
    const gridContainer = document.createElement('div');
    gridContainer.classList = 'grid-container';  
    
    const menu = [
        {img: '../img/tea1.jpg',
        name: 'Green Tea'},
        {img: '../img/tea6.jpg',
        name: 'Normal Tea'},
        {img: '../img/tea3.jpg',
        name: 'Herbal Tea'}
    ];

    menu.forEach(x => render(x));

// Creates the menu elements 

    function render(x) {
        const img = document.createElement('img');
        const name = document.createElement('h3');
        const productCell = document.createElement('div');

        img.setAttribute('src', x.img);
        name.innerHTML = x.name;
        productCell.classList = 'cell';

        appendProduct(img, name, productCell);
    }
    
// Appends the elements

    function appendProduct(img, name, cell) {
        cell.appendChild(img);
        cell.appendChild(name);
        gridContainer.appendChild(cell);
    }

    return gridContainer;

}
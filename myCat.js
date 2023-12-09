

// document.write(cat)

function addItemToDOM(){
    localStorage.setItem('myCat', 'Tom');
    // let cat = localStorage.getItem('myCat');
    localStorage.setItem('myCat', JSON.stringify({name: 'Tommy'}))
let myCat = JSON.parse(localStorage.getItem('myCat'));
    document.write(myCat.name);

addItemToStorage(myCat);

}

function addItemToStorage(item){
    let itemsFromStorage;
    if(localStorage.getItem('myCats') === null){
        itemsFromStorage =[];
    }else{
        itemsFromStorage = JSON.parse(localStorage.getItem('myCats'));
    }
        itemsFromStorage.push(item);
        localStorage.setItem('myCats', JSON.stringify(itemsFromStorage));
}

addItemToDOM();
function addItemToDom(){
    localStorage.setItem('user', JSON.stringify({name: "Sandro De Rios"}))

    addItemToStorage();
}

function addItemToStorage(){
    let myUser = JSON.parse(localStorage.getItem('user'))
    document.write('<br>' + myUser.name)
}

addItemToDom();
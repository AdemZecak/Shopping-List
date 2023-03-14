

let myGroceries = []


const add_item = document.getElementById("add_item")
const remove_item = document.getElementById("remove_item")
const delete_all = document.getElementById("delete_all")
const save = document.getElementById("save")

const input_text = document.getElementById("enter-text")


// input text 

const groceries = document.getElementById("groceries-list")


let groceriesFromLocalStorage = JSON.parse(localStorage.getItem("groceries"))



if (groceriesFromLocalStorage) {
    myGroceries = groceriesFromLocalStorage
    renderGroceries()
}



//add item 
add_item.addEventListener("click",function(){
    
    myGroceries.push(input_text.value)
    input_text.value = ""
    localStorage.setItem("groceries",JSON.stringify(myGroceries))
    renderGroceries()
})

function renderGroceries(){
    let groceriesList = ""
    for (let i =0; i< myGroceries.length; i++){
        groceriesList += "<li>"+ myGroceries[i] +"</li>"
    }

    groceries.innerHTML = groceriesList
}


// remove item 

remove_item.addEventListener("click",function(){
    myGroceries.pop()
    const myData = JSON.parse(localStorage.getItem("groceries"))

    myData.pop();
    localStorage.setItem("groceries", JSON.stringify(myData));
    renderGroceries()
})

// delete all

delete_all.addEventListener("click",function(){
    
    localStorage.clear()
    myGroceries = ""
    location.reload()
    renderGroceries()
})


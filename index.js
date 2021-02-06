let inputText = document.querySelector(".todo-input");
let listtodo = document.querySelector(".todo-list");
let buttonclick = document.querySelector("#butt")
let selectStatus = document.querySelector('.select')




const buttonHandler = (event) => {
    event.preventDefault()
    if(inputText.value!=""){

    //tododiv
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo")
    //create li
    const newtodo = document.createElement("li")
    newtodo.innerText = inputText.value
    newtodo.classList.add("todo-item")
    todoDiv.appendChild(newtodo)
    //check mark button
    const completeButton = document.createElement('button')
    completeButton.innerHTML = '<i class="fas fa-check"></i>'
    completeButton.classList.add('complete-btn')
    todoDiv.appendChild(completeButton)
    //check delete button
    const deleteButton = document.createElement('button')
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>'
    deleteButton.classList.add('trash-btn')
    todoDiv.appendChild(deleteButton)
    //add to list
    listtodo.appendChild(todoDiv)
    inputText.value = ""
    }
    
}

const deleteHanler = (e) => {
    const item = e.target;
    console.log(item.classList[0])
    
    if(item.classList[0]==='trash-btn')
    {
        const todopar = item.parentElement;
        todopar.remove();
    }
    if(item.classList[0]==='complete-btn')
    {
        const todopar = item.parentElement;
        todopar.classList.toggle("completed")
    
    }
    

}

const statusHandler = (e) => {
    
    let childel = listtodo.childNodes;
    childel.forEach(function(todo){
        switch(e.target.value){
            case "All":
                todo.style.display = "flex";
                break;
            case "completed":
               if(todo.classList.contains("completed")){
                todo.style.display = "flex"
               }
                   
               else{
                   todo.style.display = "none";
               }
               break;
            case "uncompleted":
               if(!todo.classList.contains("completed")){
                todo.style.display = "flex"
               }
                   
               else{
                   todo.style.display = "none";
               }
               break;
            
        }
        
    })

}

buttonclick.addEventListener('click', buttonHandler)
listtodo.addEventListener('click', deleteHanler)
selectStatus.addEventListener('change', statusHandler)







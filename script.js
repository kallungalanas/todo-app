//getting all required elements
const inputbox=document.querySelector(".inputfield input");
const addbutton=document.querySelector(".inputfield button");
const todoList=document.querySelector(".todolist");
const deleteallbtn=document.querySelector(".footer button");

    inputbox.onkeyup = ()=>{
        let userdata=inputbox.value;                                    //getting user entered value
        if(userdata.trim() != 0) {                                      //if user value arent only spaces
            addbutton.classList.add("active");                          //active
        }
        else{
            addbutton.classList.remove("active");
        }
    }
    showtasks();//calling show tasks
//if user click on the add button
    addbutton.onclick = ()=>{   //when user clicl on the plus icon button
        let userdata=inputbox.value;//getting user entered value
        let getLocalStorageData = localStorage.getItem("New Todo");//getting storage
        if(getLocalStorageData == null){//if local storage is  null
            listArr = [];                                       // creating blank array
        }
        else{
        listArr=JSON.parse(getLocalStorageData);//tranforming json string to js object
        }
    listArr.push(userdata);                                     // push or adding data
    localStorage.setItem("New Todo",JSON.stringify(listArr));    //transforming js object into a json string}
    showtasks();//calling show tasks function
    }

//function to add task list inside
function showtasks(){
    let getLocalStorageData = localStorage.getItem("New Todo"); //getting storage
    if(getLocalStorageData == null){//if local storage is  null
        listArr = [];                                       // creating blank array
    }
    else{
    listArr=JSON.parse(getLocalStorageData);//tranforming json string to js object
    }
    const pendingtask=document.querySelector(".pendingnumber");
    pendingtask.textContent = listArr.length;//passing the pending task number
    if(listArr.length > 0){
        addbutton.classList.add("active");                          //active button
    }
    else{
        addbutton.classList.remove("active");                       //unactive button
    }
    let newlitag ='';
    listArr.forEach((element, index) =>{
        newlitag += `<li> ${element} <span onclick="deletetask(${index})";><i class="fas fa-trash"></i></span></li>`;
      
    });
    todoList.innerHTML=newlitag;//adding new li tag inside ul tag
    inputbox.value="";// once task is added leave box empty
}
//to delete the tasks one by one
function deletetask(index){
    let getLocalStorageData = localStorage.getItem("New Todo");//getting storage
    listArr=JSON.parse(getLocalStorageData);//tranforming json string to js object
    listArr.splice(index,1);
    //after remove the list again update the local storage
    localStorage.setItem("New Todo",JSON.stringify(listArr));    //transforming js object into a json string}
    showtasks();//calling show tasks function
}
//clearall button 
deleteallbtn.onclick= ()=>{
    listArr=[];//deleting elements in the array
    //after deleting can add other tasks
    localStorage.setItem("New Todo",JSON.stringify(listArr));    //transforming js object into a json string}
    showtasks();//calling show tasks function
    
}
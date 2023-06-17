let arr = [] ;
function zero(){

    if(arr.length==0){
        viewContainer.innerHTML='';
        let message  = document.createElement('p');
        message.className = 'default'
        message.innerText = 'You have 0 Employees'
        viewContainer.append(message);
    
    }
}



const addButton = document.getElementsByClassName("addUser")[0];
addButton.addEventListener("click",addUser);
let id = 0;
let viewContainer = document.getElementsByClassName("viewContainer")[0];
zero();
let SuccessContainer = document.getElementsByClassName('SuccessMessage')[0]
 let errorContainer = document.getElementsByClassName('ErrorMessage')[0]
function addUser(){
      
      let name = (document.getElementById("Name").value).toLowerCase() ;
      let profession = (document.getElementById("Profession").value).toLowerCase();
      let age = (document.getElementById("Age").value).toLowerCase();

      if (!name || !profession || !age) {
        let error = document.createElement('p');
        error.className = 'ErrorMessage'
        error.innerText = 'Error: Please Make sure All the fields are filled before adding in an employee!'
       
        errorContainer.innerHTML = '';
        SuccessContainer.innerHTML = '';
        errorContainer.append(error);
        return; // Exit the function if any input field is empty
      }

      let Success = document.createElement('p');
      Success.className = 'SuccessMessage'
      Success.innerText = 'Success: Employee Added !'
    
      SuccessContainer.innerHTML = '';
      errorContainer.innerHTML = '';
      SuccessContainer.append(Success);
      id = id+1 ;
      let info = document.createElement("div");
      info.className = 'info' ;
      info.innerHTML = ` <div class="id">${id}.</div>
      <div class="name">Name: ${name}</div>
      <div class="profession">Profession: ${profession}</div>
      <div class="age">Age: ${age}</div>`
      arr.push(info);
      show();
      zero();



}


function show(){

  
     viewContainer.innerHTML='';
    
  
    arr.forEach(element => {

        let viewFlex = document.createElement('div')
        viewFlex.className ='viewFlex'
        viewFlex.append(element);
        let deleteContainer  = document.createElement('div');
         let deleteButton = document.createElement('button');
         deleteButton.className = 'deleteButton';
         deleteButton.innerText = 'Delete User'
         deleteButton.addEventListener('click', () => {
            arr = arr.filter(item => item !== element);
            
             zero();
             show();
          });

         
         deleteContainer.append(deleteButton);
         viewFlex.append(deleteContainer)
         viewContainer.append(viewFlex)

        
        
    });
}



//getting each page
const todopage=document.querySelector('.maintodopage');
todopage.classList.toggle('Visible');
const registerpage=document.querySelector('.mainregister');
registerpage.classList.toggle('Visible');
const loginpage=document.querySelector('.mainlogin');
const signin=document.querySelector('#signin');
signin.addEventListener('click',function(){
  registerpage.classList.toggle('Visible');
  loginpage.classList.toggle('Visible');
})

// functionality when craetebutton is clicked
const createButton=document.querySelector('#createAccount');
createButton.addEventListener('click',function(){
    loginpage.classList.toggle('Visible');
    registerpage.classList.toggle('Visible');
})

//redirecting to todo page if user already loged in
if(document.cookie.split('=')[0]==="token"){
  todopage.classList.toggle('Visible');
  loginpage.classList.toggle('Visible');
  todo();
}
// accesing the register page field and functionality

const submitbtn=document.getElementById('sub');
submitbtn.addEventListener('click',addUser);
const userName=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const number=document.getElementById('number');
const genderElements=document.getElementsByName('gender');
const usererror=document.querySelector('.usererror');
const emailerror=document.querySelector('.emailerror');
const numbererror=document.querySelector('.numbererror');
const passworderror=document.querySelector('.passworderror');
const gendererror=document.querySelector('.gendererror');
function addUser(){
  let error={};
  let serverValidation=true;
  if(!userName.value.trim()){
    error={...error,usererror:'username should not be empty',}
    usererror.textContent=error.usererror;
    userName.value="";
  }
  else if(!/^[a-zA-Z_]+$/.test(userName.value)){
    error.usererror='letter and underscore only allowed'
    usererror.textContent=error.usererror;
    userName.value="";
  }
  else if(serverValidation){
    obj1={
      username:userName.value,
      error:"usererror",
    }
    fetch('../controlls/validation.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj1)
    })
    .then(response => response.json())
    .then(data => {
      error.usererror=data.usererror;
      usererror.textContent=error.usererror;
      if(data.usererror){
        userName.value="";
      }
      else{
        usererror.textContent="";
      }
      // document.querySelector('.todocardbody').innerHTML='';
  
  
    })

  }
 

  
  if(!email.value.trim()){
    error={...error,emailerror:"email should not be empty"}
    emailerror.textContent=error.emailerror;
    email.value="";
  }
  else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)){
    error.emailerror="not a valid email";
    emailerror.textContent=error.emailerror;
    email.value="";
  }
  else if(serverValidation){
    obj2={
      email:email.value,
      emailerror:"emailerror",
    }
    fetch('../controlls/validation.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj2)
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      error.emailerror=data.emailerror;
      emailerror.textContent=error.emailerror;
      if(data.emailerror){
        email.value="";
      }
      else{
        emailerror.textContent="";
      }
      // document.querySelector('.todocardbody').innerHTML='';
  
  
    })

  }
  
  if(!number.value.trim()){
    error={...error,numbererror:"number should not be empty"}
    numbererror.textContent=error.numbererror;
    number.value="";
  }
  else if(!/^(\+91|0)?[6789]\d{9}$/.test(number.value)){
    error.numbererror="not a valid number";
    numbererror.textContent=error.numbererror;
    number.value="";
  }
  else if(serverValidation){
    obj3={
      number:number.value,
      numbererror:"numbererror",
    }
    fetch('../controlls/validation.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj3)
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      error.numbererror=data.numbererror;
      numbererror.textContent=error.numbererror;
      if(data.numbererror){
        number.value="";
      }
      else{
        numbererror.textContent="";
      }
      // document.querySelector('.todocardbody').innerHTML='';
  
  
    })

  }
  
  if(!password.value.trim()){
    error={...error,passworderror:"password should not be empty"}
    passworderror.textContent=error.passworderror;
    password.value="";
  }
  else if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password.value)){
    error.passworderror="needs upper and lowercase letters,numbers,special characters,and more than 7 characters";
    passworderror.textContent=error.passworderror;
    password.value="";
  }
  else if(!error.passworderror){
    passworderror.textContent="";
  }

  let check="";
  for(i=0;i<genderElements.length;i++){
    if(genderElements[i].checked){
      check=true;
      break;
    }
  }
  if(!check){
  
    error={...error,gendererror:"choose any option"}
    gendererror.textContent=error.gendererror;
  }
  else if(!error.gendererror){
    gendererror.textContent="";
  }

  if(Object.entries(error).length==0){
    genderElements.forEach((data)=>{
      if(data.checked){
        gendervalue=data.value;
      }
    })
    const obj={
        username : userName.value,
        email:email.value,
        password:password.value,
        number:number.value,
        gender:gendervalue
    }
    fetch('../controlls/register.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
      })
      .then(response => response.json())
      .then(data => {
          const registersuccess=data['message'];
          if(registersuccess==='success'){
            // after successful login 
            registerpage.classList.toggle('Visible');
            loginpage.classList.toggle('Visible');
            userName.value="";
            email.value="";
            password.value="";
            number.value="";
            genderElements.forEach((element)=>{
              element.checked=false;
            })
          }
      })
    }
}



// accessing the loginpage fields and functionality
const user=document.getElementById('user');
const userpassword=document.getElementById('passwordlogin');
const login=document.getElementById('login');
const loginUserError=document.getElementById('loginUserError');
const passwordError=document.querySelector('#PasswordError');


login.addEventListener('click',userExist);
function userExist(){

  let error={};
  let serverValidation=true;
  if(!user.value.trim()){
    error={...error,loginusererror:'username should not be empty',}
    loginUserError.textContent=error.loginusererror;
    user.value="";
  }
  else if(!/^[a-zA-Z_]+$/.test(user.value)){
    error.loginusererror='letter and underscore only allowed'
    loginUserError.textContent=error.loginusererror;
    user.value="";
  }
  else if(serverValidation){
    obj4={
      username:user.value,
      error:"userloginerror",
    }
    fetch('../controlls/uservalidation.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj4)
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      error.loginusererror=data.loginusererror;
      loginUserError.textContent=error.loginusererror;
      if(data.loginusererror){
        user.value="";
      }
      else{
        loginUserError.textContent="";
      }
    })

  }
  if(!userpassword.value.trim()){
    error={...error,passworderror:'password should not be empty',}
    passwordError.textContent=error.passworderror;
    userpassword.value="";
   
  }
  else if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(userpassword.value)){
    error.passworderror="needs upper and lowercase letters,numbers,special characters,and more than 7 characters";
    passwordError.textContent=error.passworderror;
    userpassword.value="";
    
  }
  


  

 if(Object.keys(error).length==0){
  const userobj={
      username:user.value,
      password:userpassword.value,  
  }
  fetch('../controlls/login.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userobj)
    })
    .then(response => response.json())
    .then(data => {
      if(data.token){
        const expirationTime = new Date(Date.now() + 15 * 60 * 1000).toUTCString();
        document.cookie = `token=${data.token}; path=/; expires=${expirationTime}`;
       loginpage.classList.toggle('Visible');
       todopage.classList.toggle('Visible');
       user.value="";
       userpassword.value="";
       passwordError.textContent="";
       todo();
      }
    
    })
    .catch(error=>{
      passwordError.textContent="password dosent fit";
    })
  }
}

const logout=document.getElementById('logout');
logout.addEventListener('click',function(){
  
  document.cookie = 'token' + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  var randomParam = Math.random().toString(36).substring(7);
  todopage.classList.toggle('Visible');
  loginpage.classList.toggle('Visible');

  
  
})

function todo(){
const token=document.cookie.split('=');
document.querySelector('.todocardbody').innerHTML=" ";
fetchtask({item:""});
const task=document.getElementById('task');
const addTask=document.getElementById('addbtn');
const head=document.querySelector('.todocardhead');
const modal=document.querySelector('.modal')
addTask.addEventListener('click',add);
function fetchtask(item){
  let flag=item.message;

   if(flag=='post'){
    toastr.success('task added successfully!', 'Success');
   }
    const parentdiv=document.querySelector('.todocardbody');
    parentdiv.innerHTML=" "; 
    const obj={
      username:token[1]
    }
    document.querySelector('.todocardbody').innerHTML=" ";
    fetch('../controlls/display.php',{
      method:'POST',
      headers: {
        'Authorization': `Bearer ${token[1]}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)
    })
    .then((response) => {
      return response.json()})
    .then(data => {
        data.forEach((item) => { 
            const itemDiv = document.createElement('div');
            const itemtext= document.createElement('span');
            itemtext.classList.add('spanbox');
            const items=document.createElement('div');
            itemtext.textContent = `${item.task}`; 
            itemtext.id=item.id; 
            itemDiv.classList.add('color');
            parentdiv.appendChild(itemDiv);
            itemDiv.appendChild(itemtext);
            itemDiv.appendChild(items);
            const nwItem=document.createElement('button');
            nwItem.textContent='✏️';
            nwItem.classList.add('spanbox');
            nwItem.id=item.id
            items.appendChild(nwItem);
            const nwdlt=document.createElement('button');
            nwdlt.textContent='🗑️'
            nwdlt.classList.add('dltbox');
            nwdlt.id=item.id
            items.appendChild(nwdlt);  
            const cmplt=document.createElement('button');
            cmplt.textContent='✔️'
            cmplt.classList.add('cmpltbox');
            cmplt.id=item.id
            items.appendChild(cmplt);  
          if(item.complete==1){
            itemtext.style.textDecoration='line-through';
            nwItem.parentNode.innerHTML=" ";
            const undo=document.createElement('button');
            undo.id=item.id
            undo.textContent='\u{21BA}';
            items.appendChild(undo);
            undo.addEventListener('click',function(){
              handlecmplt(this.id,"undo")
            })
            const nwdlt=document.createElement('button');
            nwdlt.textContent='🗑️'
            nwdlt.classList.add('dltbox');
            nwdlt.id=item.id
            items.appendChild(nwdlt);  
            
          }
        
          });
        const editbtn=document.querySelectorAll('.spanbox');
        editbtn.forEach((btn)=>{
            btn.addEventListener('click',function(){
                handleedit(this.id);
            });
        })
        const dltbtn=document.querySelectorAll('.dltbox');
        dltbtn.forEach((btn)=>{
            btn.addEventListener('click',function(){
                 modaldlt(this.id);

            });
        })
        const cmpltbtn=document.querySelectorAll('.cmpltbox');
        cmpltbtn.forEach((btn)=>{
            btn.addEventListener('mouseup',function(){
                handlecmplt(this.id,"complete");
            });
        })
    
    })
    .catch(error => {
    
    });

}
function handleedit(idn){
      const inputelement=document.createElement('input');
      inputelement.id='editinput';
      inputelement.value=document.getElementById(idn).textContent;
      const nwbtn=document.createElement('div');
      nwbtn.id="edit";
      nwbtn.textContent='save';
      const parentelmt=document.getElementById(idn).parentNode;
      parentelmt.id=idn;
      parentelmt.innerHTML=" ";
      parentelmt.append(inputelement,nwbtn)
      const updatedData = {
        id: idn
      };
      nwbtn.addEventListener('click',function(){
        update(updatedData,inputelement)
      })
      
      
    }

 function update(updatedData,inputelement){
    
    let taskvalue=inputelement.value;
    const obj={...updatedData,task:taskvalue}
    fetch('../controlls/update.php', {
        method: 'put',
        headers: {
          'Authorization': `Bearer ${token[1]}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
      })
      .then(response => response.json())
      .then(data => {
        toastr.success('task updated successfully!', 'Success');
        let m={meegae:"m",};
        fetchtask(m);
        
      })
        }  

 function handledlt(idn){  
  modal.classList.toggle('modalHidden');
    data={
    id:idn
   }
   fetch('../controlls/delete.php', {
    method:'DELETE',
    headers: {
      'Authorization': `Bearer ${token[1]}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
    document.querySelector('.todocardbody').innerHTML='';
    let m={meegae:"m",};
    fetchtask(m);
    toastr.success('task deleted successfully!', 'Success');
   
    

  })
  .catch(error => {
    console.error('Error:', error);
  });
 }

function add(event){
    event.preventDefault();
    const obj={
        username:token[1],
        task:task.value,
    }
    fetch('../controlls/add.php', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token[1]}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
      })
      .then(response => response.json())
      .then(data => {
        

        // document.querySelector('.todocardbody').innerHTML='';
        fetchtask(data);
    
      })
      task.value=" ";    
    
}


function handlecmplt(idn,status){
  
    const obj={
        id:idn,
        stage:status
    }
    fetch('../controlls/complt.php', {
        method: 'put',
        headers: {
          'Authorization': `Bearer ${token[1]}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
      })
      .then(response => response.json())
      .then(data => {
        
        document.querySelector('.todocardbody').innerHTML='';
        let m={meegae:"m",};
        fetchtask(m);

       
        
      })    
   
}

function modaldlt(idn){
  
  const modalParent=document.querySelector('.buttons');
  modalParent.innerHTML=" ";
  const dltbtn=document.createElement('button');
  dltbtn.id='delete';
  dltbtn.textContent="delete";
  const canclbtn=document.createElement('button');
  canclbtn.id='cancel';
  canclbtn.textContent="cancel";
  modalParent.append(canclbtn,dltbtn)
  modal.classList.toggle('modalHidden');
  dltbtn.addEventListener('click',function(){
      handledlt(idn);
      
  })
  canclbtn.addEventListener('click',function(){
    modal.classList.toggle('modalHidden');
    
})
}

}




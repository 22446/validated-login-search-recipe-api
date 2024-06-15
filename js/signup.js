let NameInput=document.querySelector('.name')
let EmailInput=document.querySelector('.email')
let passInput=document.querySelector('.pass')
let Button=document.getElementById("button")
let validationp=document.getElementById("validation")
let eyeClick=document.getElementById('eyeClick')
let arr=[]
if(JSON.parse(localStorage.getItem("SinUpINFO")!=null))
{
arr=JSON.parse(localStorage.getItem("SinUpINFO"))
}
let Pname=""

function Create()
{
   

    signUp={
        Name:NameInput.value,
        Email:EmailInput.value,
        pass:passInput.value
    }
    for(let i=0;i<arr.length;i++){
           
        if(signUp.Email==arr[i].Email){
                  Pname=""
                  Pname="the email is already exists"
                  validationp.innerHTML=Pname
                  validationp.classList.remove("text-success")
                  validationp.classList.add("text-danger")
                  return false;
              }
             
    }
    if(validationforName()==true
    &&validationforEmail()==true
    &&validationforPass()==true
  
    &&signUp.Name.length>0
    &&signUp.Email.length>0
    &&signUp.pass.length>2)
    { 
        arr.push(signUp);
        localStorage.setItem("SinUpINFO",JSON.stringify(arr));
       
                
     
    }
     else if(signUp.Name.length==0&&signUp.Email.length==0&&signUp.pass.length==0){
        Pname="All inputs are required"
        validationp.innerHTML=Pname
        validationp.classList.add("text-danger")
     }  
    

}
eyeClick.addEventListener('click',function(){
    this.classList.toggle("fa-eye")
    if(passInput.getAttribute("type")=="password"){
        passInput.setAttribute("type","text")
    }else{
        passInput.setAttribute("type","password")
    }
   
   
})
Button.addEventListener('click',function(e){
    e.preventDefault()

    
    Create();
});

function validationforReapetedEmail(){
    
}

function validationforName(){

    Pname=""
    let regex=/^[A-Za-z ]+$/
    if(regex.test(NameInput.value)==true){
         Pname="Sucsess"
         validationp.innerHTML=Pname
        validationp.classList.remove("text-danger")
        validationp.classList.add("text-success")
        return true
    }

    else 
    {
        Pname=""
        Pname="Your Name Is Invalid"
        validationp.innerHTML=Pname
        validationp.classList.remove("text-success")
        validationp.classList.add("text-danger")
        return false
    }
    
}

function validationforPass(){

    Pname=""
    let regex=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    if(regex.test(passInput.value)==true){
         Pname="Sucsess"
         validationp.innerHTML=Pname
        validationp.classList.remove("text-danger")
        validationp.classList.add("text-success")
        return true
    }

    else 
    {
        Pname=""
        Pname="Password should contain minimum eight characters, at least one letter and one number"
        validationp.innerHTML=Pname
        validationp.classList.remove("text-success")
        validationp.classList.add("text-danger")
        return false
    }  
}

function validationforEmail(){

    Pname=""
    let regex=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

    if(regex.test(EmailInput.value)==true){
        Pname="Sucsess"
        validationp.innerHTML=Pname
        validationp.classList.remove("text-danger")
        validationp.classList.add("text-success")
        return true
    }

    else 
    {
        Pname=""

        Pname="Your Email Is Invalid"
        validationp.innerHTML=Pname
        validationp.classList.remove("text-success")
        validationp.classList.add("text-danger")
     
        return false
    }
}
let EmailInput=document.querySelector('.email')
let passInput=document.querySelector('.pass')
let NameInput=document.querySelector('.name')
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
        
        Email:EmailInput.value,
        pass:passInput.value
    }
    for(let i=0;i<arr.length;i++)
        {
            
             if(signUp.Email!=arr[i].Email&&signUp.pass!=arr[i].pass)
                {
                    Pname=""
                    Pname="the Email or Password is not correct"
                    validationp.innerHTML=Pname
                    validationp.classList.remove("text-success")
                    validationp.classList.add("text-danger")
                    return flase
                    
                }
                
               else
                {  
                  window.location="home.html" 
                  return true
                  
                }
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


function validationforPass(){

    Pname=""
    let regex=/^[A-Za-z]{3,}$/
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
        Pname="Your password Is Invalid"
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
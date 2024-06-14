let row=document.getElementById("Row");
let input=document.getElementById("exampleFormControlInput1")
let button=document.getElementById("button")
let logout=document.getElementById("logout")

getData("pizza")

button.addEventListener('click',function(){
    let type=input.value
    getData(type)
})
async function getData(type){
    let Response=await fetch(`https://forkify-api.herokuapp.com/api/search?q=${type}`)
    let data=await Response.json();
    console.log(data);
    display(data.recipes)
}
function display(data){
    let cartona=""
    for(let i=0;i<data.length;i++){
        cartona+=`
       
         <div class="card col-3 p-0" style="width: 18rem;" >
                <img src="${data[i].image_url}" class="card-img-top" style="height: 200px; alt="${data[i].title} ">
                <div class="card-body">
                <p class="card-text "><span class="fw-bolder">publisher : </span>  ${data[i].publisher}</p>
                  <h5 class="card-title">${data[i].title}</h5>
                </div>
            </div>
        `
    }
    row.innerHTML=cartona
}

logout.addEventListener('click',function(e){
    e.preventDefault()
    window.location="index.html"
})

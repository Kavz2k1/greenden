//select side nav and menu icon
let sidenav = document.getElementById("sidenav")
let menuicon = document.getElementById("menuicon")
let closenav = document.getElementById("closenav")

menuicon.addEventListener("click", function()
{
    sidenav.style.right=0
})
closenav.addEventListener("click", function()
{
    sidenav.style.right="-50%"
})

    //product serach functionality
    let productContainer = document.getElementById("product-container")
    let search = document.getElementById("search")
    let prodlist = productContainer.querySelectorAll("div")
    console.log(prodlist)
   

    search.addEventListener("keyup", function()
{
    
    let enteredValue = event.target.value.toUpperCase()
    for(let count=0; count<prodlist.length; count++)
{
    let productname = prodlist[count].querySelector("h1").textContent
 
  
  if(productname.toUpperCase().indexOf(enteredValue)<0)  
  {
    prodlist[count].style.display="none";
  }
  else{
    prodlist[count].style.display="block";
  }
}
   
})
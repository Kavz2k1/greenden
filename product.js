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
   

    search.addEventListener("keyup", function(event)
{
    
    let enteredValue = event.target.value.toUpperCase()

    for(let count=0; count<prodlist.length; count++)
{
    let productnameElement = prodlist[count].querySelector("h1");
        if (!productnameElement) continue;  // Skip if h1 is missing

    let productname = productnameElement.textContent.toUpperCase()
 
  
  if(productname.toUpperCase().indexOf(enteredValue)<0)  
  {
    prodlist[count].style.display="none";
  }
  else{
    prodlist[count].style.display="block";
  }
}
   
})
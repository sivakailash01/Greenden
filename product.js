var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var close_nav =  document.getElementById("close_nav")

menuicon.addEventListener("click", function(){
    sidenav.style.right = 0
})

close_nav.addEventListener("click", function(){
    sidenav.style.right = "-50%"
})

//Product Search functionality

var productcontainer = document.getElementById("product-container")
var search =  document.getElementById("search")
var productlist = productcontainer.querySelectorAll("div")

search.addEventListener("keyup",function(){
    var enteredvalue = event.target.value.toUpperCase()
    //enna value namma enter pannuromoo adha enteredvalue la save pannurom

    for(count=0;count<productlist.length;count++){

        var productname = productlist[count].querySelector("h1").textContent
    //div kulla irukura h1 tag adha text contenta mathi product name la save pannurom

    if(productname.toUpperCase().indexOf(enteredvalue)<0){
        productlist[count].style.display= "none"
    }
    else{
        productList[count].style.display = "block"
    }

    }


})


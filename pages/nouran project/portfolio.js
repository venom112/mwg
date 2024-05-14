document.getElementById("load-more").onclick= function(){
    document.getElementById("sec-pic-2").style=`
    flex-wrap: wrap;
    gap: 30px;
    width:80%;
    margin: auto;
    margin-top:0px;
    display:block;
    display:flex;
    justify-content:center;
    align-items: center;

    `
    this.style.display="none"
    document.getElementById("load-less").style.display="block"
}

document.getElementById("load-less").onclick= function(){
    document.getElementById("sec-pic-2").style.display="none"
    this.style.display="none"
    document.getElementById("load-more").style.display="block"
}







document.querySelectorAll(".photo").forEach(e=>{
    e.onmouseover=function(){
        this.querySelectorAll(".photo-text").forEach(e=>{
            e.style.display="block"
            e.style.color="white"
            e.style.opacity="1"
        })
    }

    e.onmouseout=function(){
        this.querySelectorAll(".photo-text").forEach(e=>{
            e.style.display="none"
        })
    }
})




var all=document.getElementById("all-link")
var dDesign=document.getElementById("d-design-link")
var digital=document.getElementById("digital-link")
var graphics=document.getElementById("graphics-link")
var btl=document.getElementById("btl-link")
var production=document.getElementById("production-link")
var webmobileapps=document.getElementById("web-mobile-apps-link")

var allDiv=document.getElementById("sec-pic-1")
var dDesignDiv=document.getElementById("d-design-div")
var digitalDiv=document.getElementById("digital-div")
var graphicsDiv=document.getElementById("grafics-div")
var btlDiv=document.getElementById("btl-div")
var productionDiv=document.getElementById("production-div")
var webmobileappsDiv=document.getElementById("webmobileapps-div")
var loadmore=document.getElementById("load-more")



all.onclick=function(){
    allDiv.classList.remove("show")
    dDesignDiv.classList.remove("show-d-design")
    digitalDiv.classList.remove("show-digital")
    graphicsDiv.classList.remove("show-grafics")
    btlDiv.classList.remove("show-btl")
    productionDiv.classList.remove("show-production")
    productionDiv.classList.remove("show-webmobileapps")
    loadmore.style.display="block"

}

dDesign.onclick=function(){
    dDesignDiv.classList.add("show-d-design")
    allDiv.classList.add("show")
    digitalDiv.classList.remove("show-digital")
    graphicsDiv.classList.remove("show-grafics")
    btlDiv.classList.remove("show-btl")
    productionDiv.classList.remove("show-production")
    webmobileappsDiv.classList.remove("show-webmobileapps")
    loadmore.style.display="none"
}


digital.onclick=function(){
    digitalDiv.classList.add("show-digital")
    allDiv.classList.add("show")
    dDesignDiv.classList.remove("show-d-design")
    graphicsDiv.classList.remove("show-grafics")
    btlDiv.classList.remove("show-btl")
    productionDiv.classList.remove("show-production")
    webmobileappsDiv.classList.remove("show-webmobileapps")
    loadmore.style.display="none"

}
graphics.onclick=function(){
    graphicsDiv.classList.add("show-grafics")
    digitalDiv.classList.remove("show-digital")
    allDiv.classList.add("show")
    dDesignDiv.classList.remove("show-d-design")
    btlDiv.classList.remove("show-btl")
    productionDiv.classList.remove("show-production")
    webmobileappsDiv.classList.remove("show-webmobileapps")
    loadmore.style.display="none"

}

btl.onclick=function(){
    btlDiv.classList.add("show-btl")
    allDiv.classList.add("show")
    dDesignDiv.classList.remove("show-d-design")
    digitalDiv.classList.remove("show-digital")
    graphicsDiv.classList.remove("show-grafics")
    productionDiv.classList.remove("show-production")
    webmobileappsDiv.classList.remove("show-webmobileapps")
    loadmore.style.display="none"

}


production.onclick=function(){
    productionDiv.classList.add("show-production")
    btlDiv.classList.remove("show-btl")
    allDiv.classList.add("show")
    dDesignDiv.classList.remove("show-d-design")
    digitalDiv.classList.remove("show-digital")
    graphicsDiv.classList.remove("show-grafics")
    webmobileappsDiv.classList.remove("show-webmobileapps")
    loadmore.style.display="none"

}

webmobileapps.onclick=function(){
    webmobileappsDiv.classList.add("show-webmobileapps")
    productionDiv.classList.remove("show-production")
    btlDiv.classList.remove("show-btl")
    allDiv.classList.add("show")
    dDesignDiv.classList.remove("show-d-design")
    digitalDiv.classList.remove("show-digital")
    graphicsDiv.classList.remove("show-grafics")
    loadmore.style.display="none"

}
function accordian_toggle(target){
    // console.log("open");
    // console.log(target);
    ///  content.style.display="block";
    
    var divsToHide= document.getElementsByClassName("accordian-section");
    for(var i=0;i<divsToHide.length;i++){
        
        divsToHide[i].style.display="none";
    }
    var content=document.getElementById(target);





    if(content.style.display==="block"){
        content.style.display="none";
    }
    else{
        content.style.display="block";
    }
    
}

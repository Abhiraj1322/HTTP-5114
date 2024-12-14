 var current=0;
 var total =4;

 function preview(){

  current++;
  if(current>=total){
    current = 0;
 }
 var slides =document.getElementsByClassName("slide");
 for(var i =0; i<slides.length; i++){
    slides[i].style.display = "none";
 }
 

 slides[current].style.display="block"
 console.log("next");
 console.log(current);
 }
 function previous(){
    current--

    if(current<=total){
        current= total-1;

    }
    var slides2=document.getElementsByClassName("slide");
    for(var i=4; i >slides2.length; i--){
        slides2[i].style.display = "none";
    }

 }
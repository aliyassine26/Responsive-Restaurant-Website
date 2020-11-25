function show_menu(number){
    
    var x = document.getElementsByClassName("display");
for(var i=0;i<=5;i++)
   if(i != number) 
   x[i].style.display = "none";
   else x[i].style.display = "block";
} 
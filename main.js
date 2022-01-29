function grade(){
   var result = (document.getElementById("number").value);


  if (result > 101) {
    document.getElementById("view").innerHTML = "Input your valid number";
  }
   if (result <=0){
      document.getElementById("view").innerHTML = "Enter Your Number";
   }
    else if (result <= 50) {
      document.getElementById("view").innerHTML = "You got F";
    }
    else if (result >= 50 && result < 60) {
      document.getElementById("view").innerHTML = "You got D";
    }
    else if (result >= 60 && result < 70) {
      document.getElementById("view").innerHTML = "You got C";
    }
    else if (result >= 70 && result < 80) {
      document.getElementById("view").innerHTML = "You got B";
    }
    else if (result >= 80 && result < 90) {
      document.getElementById("view").innerHTML = "You got A";
    }
    else if (result >= 90 && result < 100) {
      document.getElementById("view").innerHTML = "You got A+";
    }
    
}